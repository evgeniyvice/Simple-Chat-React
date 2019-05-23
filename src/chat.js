import React from 'react'
import Card from 'react-bootstrap/Card'
import MessageList from './message-list'
import AuthForm from './auth-form'
import SendMessage from './send-message'
import './chat.css'

class Chat extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: [],
      newMessage: '',
      auth: false
    }
    this.output = this.output.bind(this)
    this.setNewMessage = this.setNewMessage.bind(this)
    this.deleteNewMessage = this.deleteNewMessage.bind(this)
    this.auth = this.auth.bind(this)
  }

  output() {
    if (this.state.newMessage === '') {
      return
    }
    this.setState({ messages: [...this.state.messages, this.state.newMessage] })
    this.deleteNewMessage()
  }

  setNewMessage(evt) {
    this.setState({ newMessage: evt })
  }

  deleteNewMessage() {
    this.setState({ newMessage: '' })
  }
  auth() {
    this.setState({ auth: true })
  }
  render() {
    let component = null
    if (!this.state.auth) {
      component = <AuthForm auth={() => this.auth()}/>
    } else {
      component = <SendMessage setNewMessage={event => this.setNewMessage(event.target.value)} newMessage={this.state.newMessage} func={this.output} />
    }
    return (
      <div className="Chat">
        <Card>
          <Card.Header as="h5">
            <span>Чат с поддержкой</span>
          </Card.Header>
          <Card.Body>
            <MessageList messages={this.state.messages} />
          </Card.Body>
          <Card.Footer>
            {component}
          </Card.Footer>
        </Card>
      </div>
    )
  }
}

export default Chat