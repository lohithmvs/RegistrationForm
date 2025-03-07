import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyForm.css';

const MyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different pages

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleDob = (e) => setDob(e.target.value);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, email, address, phone, password, gender, dob };

    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
      navigate("/login");
    });
    setName('');
    setAddress('');
    setDob('');
    setEmail('');
    setGender('');
    setPhone('');
    setPassword('');
  };

  return (
    <div className="form-container">
      <h2>Application Form</h2>
      <form className="my-form">
        <div className="form-group">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
            placeholder="Enter your name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmail}
            placeholder="Enter your email"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleAddress}
            placeholder="Enter your address"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={handlePhone}
            placeholder="Enter your phone number"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter your password"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <label htmlFor="male" className="gender-label">
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={handleGender}
            />
            Male
          </label>
          <label htmlFor="female" className="gender-label">
            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={handleGender}
            />
            Female
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={handleDob}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn" onClick={handleClick}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MyForm;
