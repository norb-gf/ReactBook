export default function userFormConsist(values) {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length < 3) {
    errors.firstName = "firstName too short";
  } else {
    errors.firstName = "";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length < 3) {
    errors.lastName = "lastName too short";
  } else {
    errors.lastName = "";
  }

  if (!values.login) {
    errors.login = "Required";
  } else if (values.login.length < 6) {
    errors.login = "login too short. Minimun 6 caracters";
  } else{
    errors.login = "";
  }

  if (!values.emailId) {
    errors.emailId = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.emailId)) {
    errors.emailId = "Invalid emailId address";
  } else if (values.emailId.length < 5) {
    errors.emailId = "Email address too short";
  } else{
    errors.emailId = "";
  }

  if (!values.senha) {
    errors.senha = "Required";
  } else if (values.senha.length < 8) {
    errors.senha = "senha too short. Minimun 8 caracters";
  } else{
    errors.senha = "";
  }

  if (!values.repeatSenha) {
    errors.repeatSenha = "Required";
  } else if (values.senha !== values.repeatSenha) {
    errors.repeatSenha = "Senhas are not equal...";
  } else{
    errors.repeatSenha = "";
  }

  return errors;
}
