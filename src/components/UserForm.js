import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from 'react-bootstrap';


class UserForm extends Component {

  render() {

    return (
      <div>
        <h1>Em qualquer lugar deste component</h1>
        <Formik
          initialValues={{ email: "", password: "" }}

          validate={
            (values) => {
                // limpando o objeto errors
                let errors = {};
                // validaçoes do campo email
                if (!values.email)
                    {errors.email = "Required";}
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                    {errors.email = "Invalid email address";}
                else if (values.email.length < 3)
                    { errors.email = "Email address too short";}
                // validações do campo password
                if (!values.password)
                    {errors.password = 'Required';}
                else if(values.password.length < 4)
                    {errors.password = 'Password too short';}                
                
                // retornando o objeto errors
                return errors;
              }
          }

          onSubmit={
            (values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
                  // <GitHubAPP />
            }
          }
        >
          {({ isSubmitting }) => (
            <Form>
              <Field type="email" name="email" autoComplete='true' />
              <span style={{color:"red",fontWeight:"bold",} }>
                  <ErrorMessage name="email" component="div" />
              </span>
              <Field type="password" name="password" autoComplete='false'/>
              <span style={{color:"red", fontWeight:"bold",}}>
                  <ErrorMessage name="password" component="div" />
              </span>
              <Button type="submit" className="btn btn-warning" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    )}
}

export default UserForm;
