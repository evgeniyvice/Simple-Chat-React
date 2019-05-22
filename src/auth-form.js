import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './auth-form.css'

class AuthForm extends React.Component {
  render() {
    return (
      <div className="auth-form">
        <div className="auth-title">
          <span>Чтобы начать общение, введите свой номер телефона и имя</span>
        </div>
        <div className="auth-block">
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Номер телефона" />
              </Col>
              <Col>
                <Form.Control placeholder="Ваше имя" />
              </Col>
            </Form.Row>
          </Form>
          <Button variant="success">Success</Button>
        </div>
      </div>
    )
  }
}

export default AuthForm