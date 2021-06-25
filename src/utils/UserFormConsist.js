export default function userFormConsist(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "FirstName Required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "FirstName too short";
  } else {
    errors.firstName = "";
  }

  if (!values.lastName) {
    errors.lastName = "LastName Required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "LastName too short";
  } else {
    errors.lastName = "";
  }

  if (!values.login) {
    errors.login = "Login Required";
  } else if (values.login.length < 6) {
    errors.login = "Login too short. Minimun 6 caracters";
  } else{
    errors.login = "";
  }

  if (!values.emailId) {
    errors.emailId = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)) {
    errors.emailId = "Invalid EmailId address";
  } else if (values.emailId.length < 5) {
    errors.emailId = "Email address too short";
  } else{
    errors.emailId = "";
  }

  if (!values.senha) {
    errors.senha = "Password Required";
  } else if (values.senha.length < 8) {
    errors.senha = "Password too short. Minimun 8 caracters";
  } else{
    errors.senha = "";
  }

  if (!values.repeatSenha) {
    errors.repeatSenha = "Repeat Password Required";
  } else if (values.senha !== values.repeatSenha) {
    errors.repeatSenha = "Passwords are not equal...";
  } else{
    errors.repeatSenha = "";
  }

  return errors;
}
