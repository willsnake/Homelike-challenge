import React, { Component } from 'react';
import Container from 'react-bootstrap/lib/Container';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import Button from 'react-bootstrap/lib/Button';

// Connect
import Connect from '../../utils/connect';

// Styles
import { HomeContainer } from './HomeStyles';

class Home extends Component {
  constructor(...props) {
    super(...props);
    this.state = { validated: false };
  }

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const {
      rdx: {
        action: { loginStarted },
      },
    } = this.props;

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return false;
    }

    loginStarted(form[0].value);
    return true;
  };

  render = () => {
    const { validated } = this.state;
    return (
      <HomeContainer>
        <Container>
          <Row className="flex-column">
            <Col>
              <Form noValidate validated={validated} onSubmit={e => this.handleSubmit(e)}>
                <Form.Row>
                  <Form.Group
                    as={Col}
                    md={{ offset: 4, span: 4 }}
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Please enter a Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please choose a username.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Button type="submit">Login</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </HomeContainer>
    );
  };
}

const home = Connect(Home);
export default home;
