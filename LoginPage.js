// import React from 'react'

// const Login = () => {
//   return (
//     <div>
//       <form>
//   {/* Email input */}
//   <div className="form-outline mb-4">
//     <input type="email" id="form2Example1" className="form-control" />
//     <label className="form-label" htmlFor="form2Example1">
//       Email address
//     </label>
//   </div>
//   {/* Password input */}
//   <div className="form-outline mb-4">
//     <input type="password" id="form2Example2" className="form-control" />
//     <label className="form-label" htmlFor="form2Example2">
//       Password
//     </label>
//   </div>
//   {/* 2 column grid layout for inline styling */}
//   <div className="row mb-4">
//     <div className="col d-flex justify-content-center">
//       {/* Checkbox */}
//       <div className="form-check">
//         <input
//           className="form-check-input"
//           type="checkbox"
//           defaultValue=""
//           id="form2Example31"
//           defaultChecked=""
//         />
//         <label className="form-check-label" htmlFor="form2Example31">
//           {" "}
//           Remember me{" "}
//         </label>
//       </div>
//     </div>
//     <div className="col">
//       {/* Simple link */}
//       <a href="#!">Forgot password?</a>
//     </div>
//   </div>
//   {/* Submit button */}
//   <button type="button" className="btn btn-primary btn-block mb-4">
//     Sign in
//   </button>
//   {/* Register buttons */}
//   <div className="text-center">
//     <p>
//       Not a member? <a href="#!">Register</a>
//     </p>
//     <p>or sign up with:</p>
//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-facebook-f" />
//     </button>
//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-google" />
//     </button>
//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-twitter" />
//     </button>
//     <button type="button" className="btn btn-link btn-floating mx-1">
//       <i className="fab fa-github" />
//     </button>
//   </div>
// </form>

//     </div>
//   )
// }

// export default Login

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import "./Style.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return(
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/log2.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text> 
      </TouchableOpacity> 
    </View>
  )
}

