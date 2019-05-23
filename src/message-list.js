import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import './message-list.css'

class MessageList extends React.Component {
  render() {
    return (
      <ListGroup className="message-list">
        {this.props.messages.map((message, id) => {
          return (
            <ListGroup.Item className="message-item" variant="dark" key={id}>
              <div>{message}</div>
            </ListGroup.Item>
          )
        })}
      </ListGroup>
    )
  }
}

export default MessageList