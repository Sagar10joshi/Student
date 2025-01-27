// import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './LoginPage.css'; 

// const LoginPage = ({ onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const navigate = useNavigate(); // Correctly defined here

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onLogin(email, password);
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2 className="login-title">Login</h2>
//         <div className="input-group">
//           <label className="input-label">Email</label>
//           <input
//             type="email"
//             className="input-field"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="input-group">
//           <label className="input-label">Password</label>
//           <input
//             type="password"
//             className="input-field"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="submit-button">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="container">
      <div className="form-container" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <p>
          Don’t have an account? <a href="#">Get started</a>
        </p> <br />
        <form>
          <div className="form-group">
            <label>Email address</label>
            <input type="email" 
            placeholder="hello@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="password-container">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot password?</a>
          </div>
          <button type="submit" className="sign-in-btn">Sign in</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <div className="social-buttons">
          <button className="social-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
          </button>
          <button className="social-btn">
            <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" />
          </button>
          <button className="social-btn">
            <img src="https://img.freepik.com/free-vector/twitter-new-logo-x-icon-design_1017-45424.jpg" alt="X" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
