import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"

import "./emailListForm.scss"

const EmailListForm = () => {
  return (
    <div className="email-list-form">
      <Form>
        <Form.Row>
          <Col>
            <Form.Group controlId="formGridCity">
              <Form.Label>I'm</Form.Label>
              <Form.Control size="sm" placeholder="name" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formGridState">
              <Form.Label>Send me updates here</Form.Label>
              <Form.Control size="sm" placeholder="email" />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button
              variant="primary"
              style={{ marginTop: "2rem" }}
              type="submit"
              size="sm"
            >
              Submit
            </Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  )
}

export default EmailListForm
