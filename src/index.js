import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Container, Accordion, Icon, Segment } from "semantic-ui-react"

class App extends React.Component {
  state = { activeIndex: 1 }
  changeActiveIndex = index => {
    this.setState({ activeIndex: index })
  }
  render() {
    const { activeIndex } = this.state
    return (
      <Container className="App">
        <Accordion styled fluid>
          <Accordion.Title
            active={activeIndex === 0}
            onClick={() => this.changeActiveIndex(0)}
          >
            <Icon name="dropdown" />Attendance
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <Segment.Group>
              <Segment>muss brown</Segment>
              <Segment>nathan</Segment>
              <Segment>niwe</Segment>
            </Segment.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            onClick={() => this.changeActiveIndex(1)}
          >
            <Icon name="dropdown" />Lunch
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            , Kobe Bryant
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            onClick={() => this.changeActiveIndex(2)}
          >
            <Icon name="dropdown" />Violations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            , Kobe Bryant
          </Accordion.Content>
        </Accordion>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
