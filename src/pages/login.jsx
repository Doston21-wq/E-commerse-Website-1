import React, { useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../index.css';

const LoginPage = () => {

  const emailRef = useRef('');
  const passwordRef = useRef('');

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) =>
    /^[A-Za-z0-9]{6,}$/.test(password);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!validateEmail(email) || !validatePassword(password)) {
      return toast.error("Email yoki parol xato");
    }

    const form = {
      email,
      password,
    };

    toast.success(`${form.email} qo'shildi! `);

    localStorage.setItem("Form", JSON.stringify(form));

    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <section className="container">
      <div className="login-container">
        <div className="circle circle-one"></div>

        <div className="form-container">
          <img
            src="https://raw.githubusercontent.com/hicodersofficial/glassmorphism-login-form/master/assets/illustration.png"
            alt="illustration"
            className="illustration"
          />
          <h1 className="opacity">LOGIN</h1>

          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="EMAIL" ref={emailRef} />
            <input type="password" placeholder="PASSWORD" ref={passwordRef} />
            <button type="submit" className="opacity">SUBMIT</button>
          </form>

          <div className="register-forget opacity">
            <a href="#">REGISTER</a>
            <a href="#">FORGOT PASSWORD</a>
          </div>
        </div>

        <div className="circle circle-two"></div>
      </div>

      <ToastContainer position="top-center" />
    </section>
  );
};

export default LoginPage;
