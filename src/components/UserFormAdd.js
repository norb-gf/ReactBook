// import React, { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import UserService from "../services/UserService";
// import "bootstrap/dist/css/bootstrap.min.css";

// class UserFormAdd extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.title}</h1>
//         <Formik
//           initialuser={{
//             firstName: "",
//             lasttName: "",
//             emailId: "",
//             login: "",
//             password: "",
//             repeatPassword: "",
//             dataUltAlt: "",
//           }}
//           validate={(user) => {
//             let errors = {};
//             if (!user.emailId) {
//               errors.emailId = "Required";
//             } else if (
//               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(user.emailId)
//             ) {
//               errors.emailId = "Invalid email address";
//             } else if (user.emailId.length < 10) {
//               errors.emailId = "Email address too short";
//             }

//             if (!user.firstName) {
//               errors.firstName = "Required";
//             }
//             if (!user.lastName) {
//               errors.lastName = "Required";
//             }
//             if (!user.login) {
//               errors.login = "Required";
//             }
//             if (!user.password) {
//               errors.password = "Required";
//             }
//             if (!user.repeatPassword) {
//               errors.repeatPassword = "Required";
//             }
//             if (user.password !== user.repeatPassword) {
//               errors.password = "Both passwords are not equal";
//             }

//             return errors;
//           }}
         
//           onSubmit={(user, { setSubmitting }) => {
//             let userAdd = {
//               id: "",
//               firstName: user.firstName,
//               lastName: user.lastName,
//               emailId: user.emailId,
//               login: user.login,
//               password: user.password,
//               dataUltAlt: "",
//             };
//             console.log("tudo certo para incluir o registro", userAdd);
//             // UserService.addUser(user).then((res) => {
//             //   this.props.history.push("/users/table");
//             // });
//           }}
//         >
//           {({ isSubmitting }) => (
//             <Form>
//               <Form.Group controlId="formBasicEmail">
//                 <Form.Label>Email Address:</Form.Label>
//                 <Form.Control
//                   type="email"
//                   placeholder="type a valid email address"
//                 />
//                 <Form.Text className="text-muted">text muted</Form.Text>
//                 <span style={{ color: "red", fontWeight: "bold" }}>
//                   <ErrorMessage name="email" component="div" />
//                 </span>
//               </Form.Group>
//               <Field type="text" name="firstName" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="firstName" component="div" />
//               </span>
//               <Field type="text" name="lastName" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="lastName" component="div" />
//               </span>
//               <Field type="text" name="login" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="login" component="div" />
//               </span>
//               <Field type="password" name="password" autoComplete="false" />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="password" component="div" />
//               </span>
//               <Field
//                 type="password"
//                 name="repeatPassword"
//                 autoComplete="false"
//               />
//               <span style={{ color: "red", fontWeight: "bold" }}>
//                 <ErrorMessage name="repeatPassword" component="div" />
//               </span>
//               <button type="submit" disabled={isSubmitting}>
//                 Submit
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     );
//   }
// }
// export default UserFormAdd;
