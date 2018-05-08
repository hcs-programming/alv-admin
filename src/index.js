import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Container, Accordion, Icon } from "semantic-ui-react"

class App extends React.Component {
  state = { activeIndex: 0 }
  render() {
    const { activeIndex } = this.state
    return (
      <Container className="App">
        <Accordion styled>
          <Accordion.Title active={activeIndex === 0}>
            <Icon name="dropdown" />Attendance
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            LeBron James, Kobe Bryant
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 1}>
            <Icon name="dropdown" />Lunch
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            LeBron James, Kobe Bryant
          </Accordion.Content>
          <Accordion.Title active={activeIndex === 2}>
            <Icon name="dropdown" />Violations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            LeBron James, Kobe Bryant
          </Accordion.Content>
        </Accordion>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
