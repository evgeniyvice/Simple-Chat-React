import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './send-message.css'

class SendMessage extends React.Component {
  render() {
    return (
      <div className="message-form">
        <div className="title">
          <span>Задайте Ваш вопрос техподдержке</span>
        </div>
        <div className="message-block">
          <Form className="message-control">
            <Form.Row>
              <Col>
                <Form.Control onChange={this.props.setNewMessage}
                  value={this.props.newMessage} placeholder="Введите сообщение" />
              </Col>
            </Form.Row>
          </Form>
          <Button variant="success" onClick={this.props.func}>Отправить</Button>
        </div>
      </div>
    )
  }
}

export default SendMessage