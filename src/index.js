import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import { Container, Accordion, Header, Icon, Segment } from "semantic-ui-react"

class App extends React.Component {
  state = { activeIndex: 0, grades: [] }

  componentDidMount() {
    fetch(`http://app.apache.ga/api/today`)
      .then(response => response.json())
      .then(data => {
        this.setState({ grades: data })
      })
  }

  changeActiveIndex = index => {
    this.setState({ activeIndex: index })
  }

  render() {
    const { activeIndex, grades } = this.state
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
              {grades.map(
                (grade, i) =>
                  grade.people === null ? (
                    ""
                  ) : (
                    <div key={i}>
                      <Header as="h2" attached="top">
                        {grade.name}
                      </Header>
                      <Segment attached>
                        {grade.people.map((person, j) => {
                          if (person.attendance === null) return ""
                          else
                            return (
                              <p key={j}>
                                {person.name} - {person.attendance}
                              </p>
                            )
                        })}
                      </Segment>
                    </div>
                  )
              )}
            </Segment.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 1}
            onClick={() => this.changeActiveIndex(1)}
          >
            <Icon name="dropdown" />Lunch
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 1}>
            <Segment.Group>
              {grades.map(
                (grade, i) =>
                  grade.people === null ? (
                    ""
                  ) : (
                    <div key={i}>
                      <Header as="h2" attached="top">
                        {grade.name}
                      </Header>
                      <Segment attached>
                        {grade.people.map((person, j) => {
                          if (person.lunch === null) return ""
                          else return <p key={j}>{person.name}</p>
                        })}
                      </Segment>
                    </div>
                  )
              )}
            </Segment.Group>
          </Accordion.Content>
          <Accordion.Title
            active={activeIndex === 2}
            onClick={() => this.changeActiveIndex(2)}
          >
            <Icon name="dropdown" />Violations
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            <Segment.Group>
              {grades.map(
                (grade, i) =>
                  grade.people === null ? (
                    ""
                  ) : (
                    <div key={i}>
                      <Header as="h2" attached="top">
                        {grade.name}
                      </Header>
                      <Segment attached>
                        {grade.people.map((person, j) => {
                          if (
                            person.beard === null &&
                            person.belt === null &&
                            person.shoes === null &&
                            person.uniform === null
                          )
                            return ""
                          else return <p key={j}>{person.name}</p>
                        })}
                      </Segment>
                    </div>
                  )
              )}
            </Segment.Group>
          </Accordion.Content>
        </Accordion>
      </Container>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
