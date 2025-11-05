import React, { useState } from 'react';
import { createBuyOrder } from '../../services/firebase';
import { useNavigate } from 'react-router-dom';
import InputForm from './InputForm';
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';

function UserForm({ cart, getTotalPrice }) {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  function onInputChange(evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    let newUserData = { ...userData };
    newUserData[name] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();

    const orderData = {
      buyerData: userData,
      cart: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    createBuyOrder(orderData).then((response) => {
      Swal.fire({
        title: 'Thank you! Your order number is...',
        text: response,
        icon: 'success',
        confirmButtonText: 'Home',
      }).then((result) => {
        navigate('/');
      });
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <InputForm
        value={userData.name}
        title="Name"
        name="name"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.email}
        title="Email"
        name="email"
        required={true}
        onChange={onInputChange}
      />
      <InputForm
        value={userData.phone}
        title="Phone"
        name="phone"
        onChange={onInputChange}
      />
      <button type="submit">Checkout</button>
    </form>
  );
}

export default UserForm;
