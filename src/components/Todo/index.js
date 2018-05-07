import React from "react"
import "./style.css"
import { Segment, Icon } from "semantic-ui-react"

function Todo({ name, isComplete, toggle, deleteThis }) {
  if (isComplete == true) {
    return (
      <Segment padded onClick={toggle} inverted color="teal">
        <p>
          <Icon circular name="checkmark" />
          {name}
          <Icon link name="delete" onClick={deleteThis} />
        </p>
      </Segment>
    )
  } else {
    return (
      <Segment padded onClick={toggle}>
        <p>
          <Icon circular name="" />
          {name}
          <Icon link name="delete" onClick={deleteThis} />
        </p>
      </Segment>
    )
  }
}

export default Todo
