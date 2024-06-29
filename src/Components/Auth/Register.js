import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import RegisterHook from '../../hook/Auth/register-hook'
import { ToastContainer } from 'react-toastify';

 const Register = () => {

  const [name,email,phone,password,confirmPassword,onChangeName,onChangeEmail,onChangePhone,onChangePassword,onChangeConfirmPassword,onSubmit]= RegisterHook()
    return (
        <Container style={{ minHeight: "680px" }}>
        <Row className="py-5 d-flex justify-content-center hieght-search">
          <Col sm="12" className="d-flex flex-column ">
            <label className="mx-auto title-login"> Register New Account  </label>
            <input
              value={name}
              onChange={onChangeName}
              placeholder="User Name"
              type="text"
              className="user-input mt-3 text-center mx-auto"
            />
            <input
            onChange={onChangeEmail}
            value={email}
              placeholder="Email Address"
              type="email"
              className="user-input mt-3 text-center mx-auto"
            />
            
            <input
            onChange={onChangePhone}
            value={phone}
              placeholder=" Password"
              type="password"
              className="user-input text-center mt-3 mx-auto"
            />
            
            <input
            onChange={onChangePassword}
            value={password}
              placeholder="Confirm Password"
              type="password"
              className="user-input text-center mt-3 mx-auto"
            />
            
            <input
            onChange={onChangeConfirmPassword}
            value={confirmPassword}
              placeholder=" Phone Nomber"
              type="phone"
              className="user-input text-center mt-3 mx-auto"
            />
            <button onClick={onSubmit} className="btn-login mx-auto mt-4"> Register Now</button>
            <label className="mx-auto my-4">
                Do you have an account ?{" "}
              <Link to="/login" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  Click here
                </span>
              </Link>
            </label>
          </Col>
        </Row>
        <ToastContainer/>
      </Container>
    )
}
export default Register