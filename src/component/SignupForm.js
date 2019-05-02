import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";

const SignupForm = props => {
  const {
    user = {},
    errors = {},
    address = {},
    onChange,
    onSubmit,
    onCancel,
    isValidated,
    goto
  } = props;

  return (
    <Container fluid>
      <Col
        style={{
          background: "white",
          marginTop: "10px",
          borderRadius: "6px",
          paddingTop: "10px"
        }}
        xs={12}
        sm={4}
        md={{ span: 4, offset: 4 }}
      >
        <Form onSubmit={onSubmit}>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                className={errors && errors.firstName ? "error" : ""}
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={onChange}
              />
              {errors && errors.firstName && (
                <p className="error">{errors.firstName}</p>
              )}
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                className={errors && errors.lastName ? "error" : ""}
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={onChange}
              />
              {errors && errors.lastName && (
                <p className="error">{errors.lastName}</p>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={errors && errors.email ? "error" : ""}
                type="text"
                name="email"
                value={user.email}
                onChange={onChange}
              />
              {errors && errors.email && (
                <p className="error">{errors.email}</p>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                className={errors && errors.phone ? "error" : ""}
                type="text"
                name="phone"
                value={user.phone}
                onChange={onChange}
              />
              {errors && errors.phone && (
                <p className="error">{errors.phone}</p>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={errors && errors.password ? "error" : ""}
                type="password"
                name="password"
                value={user.password}
                onChange={onChange}
              />
              {errors && errors.password && (
                <p className="error">{errors.password}</p>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                className={errors && errors.confirmPassword ? "error" : ""}
                type="password"
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={onChange}
              />
              {errors && errors.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address</Form.Label>
            <Form.Control value={address.address} />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>City</Form.Label>
              <Form.Control value={address.city} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>State</Form.Label>
              <Form.Control value={address.state} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>Pin</Form.Label>
              <Form.Control value={address.zipcode} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Country</Form.Label>
              <Form.Control as="select">
                <option>Choose...</option>
                <option value="India">India</option>
                <option value="Canada">Canada</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Japan">Japan</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row style={{ marginTop: 25 }}>
            <Form.Group as={Col}>
              <Button variant="success" type="submit" block>
                Submit
              </Button>
            </Form.Group>
            <Form.Group as={Col}>
              <Button
                variant="secondary"
                type="submit"
                block
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Form.Group>
          </Form.Row>

          <Form.Row style={{ marginTop: 15 }}>
            <Form.Group as={Col} style={{ textAlign: "right" }}>
              <p>
                Already have an Id?{" "}
                <Button
                  variant="success"
                  type="submit"
                  onClick={() => goto("/login")}
                >
                  Login
                </Button>
              </p>
            </Form.Group>
          </Form.Row>
        </Form>
      </Col>
    </Container>
  );
};

export default SignupForm;
