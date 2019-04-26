import React, { Component } from "react";
import * as auth from "../apis/auth";
import actions from "../actions";
import * as userAction from "../apis/getUser";
import { saveObject, getObject } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loading";
import { connect } from "react-redux";
import {
  Container,
  Col,
  Row,
  Form,
  Button,
  FormControl,
  InputGroup
} from "react-bootstrap";

toast.configure();
class Login extends Component {
  state = {
    email: "",
    password: "",
    loading: false
  };

  componentDidMount() {
    console.log(this.props, "the props");
  }
  _onChange = ({ target }) => {
    console.log(target.name);
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  notify = () => toast("Your Account has been Created!!");

  login = () => {
    const { email, password } = this.state;
    console.log(email, password, "the email and password vallue");
    this.setState({ loading: true });

    actions
      .onLoginPress({ email, password })
      .then(res => {
        console.log(res.xyz, "the reus");
        console.log(res, "teh result is sucess");
        saveObject("user", res.data);
        this.notify();
        this.setState({ loading: false });
        // this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
        console.log(error, "the; error response");
      })
      .finally(() => {
        // this.setState({ loading: false });
      });
    console.log(email, password);
  };

  getAllUsers = () => {
    console.log("getuserfun");
    // const data = JSON.parse(window.localStorage.getItem("user"));

    const user = getObject("user");

    userAction
      .getUserApi({ Authorization: `Bearer ${user.token}` })
      .then(res => {
        console.log(res, "the response of get users");
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    console.log(this.props, "props");
    const { loading } = this.state;

    if (loading) {
      return (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Loader />
        </div>
      );
    }

    return (
      <Container>
        <Col>
          <p className="align">
            Don't have an account? &nbsp; &nbsp;
            <button
              onClick={() => this.props.history.push("/signup")}
              className="button"
            >
              CREATE ACCOUNT
            </button>
          </p>
        </Col>
        <Col className="colbody" style={{ marginTop: "60px" }}>
          <h1 className="formtext">Log into LocusVMS</h1>
          <p style={{ fontSize: "10px" }}>Enter your Login details below</p>
        </Col>
        <Col>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label style={{ fontSize: "9px" }}>EMAIL ADDRESS</Form.Label>
              <InputGroup className="mb-3" style={{ width: "50%" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    style={{ background: "transparent" }}
                    id="basic-addon1"
                  >
                    <i className="fas fa-envelope" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="form-control"
                  name="email"
                  style={{ borderLeft: "transparent" }}
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this._onChange}
                />
              </InputGroup>
            </Form.Group>
            <a
              href="https://www.google.com"
              style={{
                color: "black",
                fontSize: "9px",
                paddingLeft: "215px"
              }}
            >
              Forgot Password?
            </a>
            <Form.Group
              style={{ marginTop: "-22px" }}
              controlId="formBasicPassword"
            >
              <Form.Label style={{ fontSize: "10px" }}>PASSWORD</Form.Label>
              <InputGroup className="mb-3" style={{ width: "50%" }}>
                <InputGroup.Prepend>
                  <InputGroup.Text
                    style={{ background: "transparent" }}
                    id="basic-addon1"
                  >
                    <i className="fas fa-key" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  className="form-control"
                  style={{ borderLeft: "transparent" }}
                  placeholder="Password"
                  aria-label="password"
                  name="password"
                  aria-describedby="basic-addon1"
                  onChange={this._onChange}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              controlId="formBasicChecbox"
              style={{ fontSize: "10px" }}
            >
              <Form.Check
                style={{ fontSize: "10px", paddingTop: "4px" }}
                type="checkbox"
                label="Remember Me!"
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "#3a4350",
                width: "25%",
                fontSize: "12px",
                border: "none"
              }}
              variant="primary"
              onClick={this.login}
            >
              SIGN IN
            </Button>
          </Form>
        </Col>
      </Container>
    );
  }
}

export default connect(state => state)(Login);
