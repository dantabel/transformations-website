import { FormEvent, useState } from "react"
import { Button, FloatingLabel, Form } from "react-bootstrap"

const Contact = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [message, setMessage] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const url = `mailto:info@transformationsltd.com?subject=Website+enquiry&body=${encodeURIComponent(message)}`
    window.open(url, '_blank')?.focus();
    // window.location.href = url
  }

  return <div className="Contact container" id="Contact">
    <h1>Contact</h1>

    <Form onSubmit={(event) => handleSubmit(event)}>
      <FloatingLabel
        controlId="formBasicName"
        label="Your name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Your name" value={name} onChange={event => setName(event.currentTarget.value)}/>
      </FloatingLabel>

      {/* <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group> */}

      <FloatingLabel
        controlId="formBasicEmail"
        label="Your email address"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="Your email" value={email} onChange={event => setEmail(event.currentTarget.value)} />
      </FloatingLabel>
      
      {/* <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" />
      </Form.Group> */}

      <FloatingLabel controlId="formBasicMessage" label="Your message" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Your message"
          style={{ height: '150px' }}
          value={message} onChange={event => setMessage(event.currentTarget.value)}
        />
      </FloatingLabel>

      {/* <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
        <textarea className="form-control" placeholder="Enter your message" id="formBasicMessage" rows={5}></textarea>
      </Form.Group> */}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  </div>
}

export default Contact