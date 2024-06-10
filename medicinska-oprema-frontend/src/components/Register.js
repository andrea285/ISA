import React, { useState } from "react";
import axios from 'axios';
import "./styles.css";

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        city: '',
        country: '',
        phoneNumber: '',
        occupation: '',
        company: ''
    });

    const  [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/users/register', formData)
            .then(response => {
                alert('Registration successful!');
            })
            .catch(error => {
                alert('Error registering user.');
            });
    };

    return (
        <div className="container">
            <h1>Register Component</h1>
            {error && <div className="alert">{error}</div>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
                <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" />
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
                <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
