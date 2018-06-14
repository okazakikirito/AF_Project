const Validator = require("validator");
//v import isEmpty from "./is_empty";
const isEmpty = require("./is_empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
  data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 30 })) {
    errors.firstName = "First Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.firstName)) {
    errors.firstName = "First Name Is Required";
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 30 })) {
    errors.lastName = "Last Name must be between 2 and 30 characters";
  }
  if (Validator.isEmpty(data.lastName)) {
    errors.lastName = "Last Name Is Required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email Is Invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password Is Required";
  }
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm Password Is Required";
  }
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords Must Match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
