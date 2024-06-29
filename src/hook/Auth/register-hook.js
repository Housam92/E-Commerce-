import React, { useEffect } from 'react';
import { useState } from 'react';
import notify from '../useNotification';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUSER } from '../../redux/actions/auth';

const RegisterHook = () => {
    const dispatch = useDispatch() // by useDispatch we turn on the action we have created
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validationValues = () => {
    if (name === "") {
      notify("Please insert a user name", "error");
      return;
    }

    if (phone.length <= 10) {
      notify("Please insert a correct phone number", "error");
      return;
    }

    if (password.search(/[A-Z]/i) < 0) {
      notify("Your password needs a lowercase letter", "error");
      return;
    }

    if (confirmPassword !== password) {
      notify("The password does not match the first password you entered", "error");
      return;
    }
  };

  const res = useSelector(state => state.authReducer.createUser)
// to save data 
  const onSubmit = async () => {
    validationValues();
    setLoading(true)
     await dispatch(createNewUSER({   
    name: name,
    email:email,
    password:password,
    passwordConfirm:confirmPassword,
    phone:phone}))

    setLoading(false) // the request finished loading
  };
useEffect(() => {
if (loading===false){
if (res)
console.log(res)
}
}, [loading])
  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    onSubmit,
  ];
};

export default RegisterHook;
