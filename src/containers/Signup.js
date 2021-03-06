import React, { Component } from "react";
import SignupForm from "../component/SignupForm";
import validator from "../validations/signup";
import * as auth from "../apis/auth";
import { saveObject } from "../utils";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import actions from "../actions";
import { connect } from "react-redux";

toast.configure();

class Signup extends Component {
  state = {
    user: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    },
    errors: {},
    isValidated: false
  };

  onChange = ({ target: { value, name } }) => {
    this.setState({
      user: {
        ...this.state.user,
        [name]: value
      },

      errors: {
        ...this.state.errors,
        [name]: ""
      }
    });
  };

  onChangeAddress = () => {};

  isValid = user => {
    const { errors, isValid } = validator(user);
    this.setState({ errors });
    return isValid;
  };

  notify = () => toast("Your Account has been Created!!");

  onSubmit = e => {
    e.preventDefault();
    const { user } = this.state;
    //const { addres } = this.state;
    if (this.isValid(user)) {
      actions
        .onSignupPress(user)
        .then(res => {
          console.log(res, "res");
          this.notify();
        })
        .catch(error => {
          console.log(error, "the signup error response");
        });
    } else {
      this.setState({ isValidated: true });
    }
  };

  goto = path => {
    this.props.history.push(path);
  };

  render() {
    const { user, isValidated, errors, address } = this.state;

    console.log(user, errors, "user");
    return (
      <SignupForm
        user={user}
        errors={errors}
        address={address}
        isValidated={isValidated}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        goto={this.goto}
      />
    );
  }
}

export default connect(state => state)(Signup);
