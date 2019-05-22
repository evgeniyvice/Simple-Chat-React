import React from 'react'
import Card from 'react-bootstrap/Card'
import MessageList from './message-list'
import AuthForm from './auth-form'

class Chat extends React.Component {
  render() {
    return (
      <div className="Chat">
        <Card>
          <Card.Header as="h5">
            <span>Чат с поддержкой</span>
          </Card.Header>
          <Card.Body>
            <MessageList />
          </Card.Body>
          <AuthForm />
        </Card>
      </div>
    )
  }
}

export default Chat