import React from "react"
import "./style.css"
import { Input, Segment } from "semantic-ui-react"

class GetATodoBox extends React.Component {
  state = {
    inputText: ""
  }

  checkIfItsEnter = event => {
    if (event.key === "Enter") {
      this.props.addATodo(event.target.value)
      event.target.value = ""
    }
  }

  render() {
    return (
      <div>
        <p>
          <Segment>
            <Input
              fluid
              type="text"
              onKeyPress={this.checkIfItsEnter}
              placeholder="Type in a todo"
            />
          </Segment>
        </p>
      </div>
    )
  }
}

export default GetATodoBox
