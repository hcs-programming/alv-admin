import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import GetATodoBox from "./components/Box"
import Todo from "./components/Todo"
import { Segment, Container, Header, Icon } from "semantic-ui-react"

class App extends React.Component {
  state = {
    todos: []
  }

  componentDidMount() {
    const storedTodos = JSON.parse(localStorage.getItem("blah"))

    if (storedTodos != null) {
      this.setState({ todos: storedTodos })
    }
  }

  handleButtonPress = todo => {
    this.state.todos.push([todo, false])
    this.setState({ todos: this.state.todos })
    localStorage.setItem("blah", JSON.stringify(this.state.todos))
  }

  handleDelete = (todo, event) => {
    event.preventDefault()

    this.state.todos.splice(todo, 1)
    this.setState({ todos: this.state.todos })
  }

  ChangeTodoStatus = todo => {
    this.state.todos[todo][1] = !this.state.todos[todo][1]
    this.setState({ todos: this.state.todos })
    localStorage.setItem("blah", JSON.stringify(this.state.todos))
  }

  render() {
    return (
      <Container className="App">
        <p className="header">todos</p>
        <Segment.Group raised>
          <GetATodoBox addATodo={this.handleButtonPress} />
          {this.state.todos.map((todo, i) => (
            <Todo
              key={i}
              name={todo[0]}
              isComplete={todo[1]}
              toggle={() => this.ChangeTodoStatus(i)}
              deleteThis={e => this.handleDelete(i, e)}
            />
          ))}
        </Segment.Group>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
