import React, { useState } from 'react'
import './SignUp.css';
import axios from 'axios';
import constant from '../util/constant'
import toast, { Toaster } from 'react-hot-toast';

function SignUp({ setIsLoginPage }) {
    const [userInfo, setUserInfo] = useState({ userName: "", name: "", email: "", password: "", address: "", contactNo: "" });

    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({ ...userInfo, [name]: value });
    }

    const handelRegister = async (e) => {
        var passw=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        
        try{
            e.preventDefault();
            // if (userInfo.password.length <8) {
            //     return toast.error("Please provide proper password")
            // }
            // else{
            if(!userInfo.password.match(passw)) { 
                return toast.error("Please provide proper password")
            }
            // }

            await axios.post(`${constant.API_URL}/user/add`, userInfo);
            toast.success('user added successfully');
            setUserInfo({ userName: "", name: "", email: "", password: "", address: "", contactNo: "" });
        }catch(error){
            let err = '';
            if (error && error.response) {
                err = error.response.data;
            } 
            else if (error && error.message) {
                err = error.message;
            }
            else {
                err = 'Something went wrong'
            }
            toast.error(err);
        }
    }
    return (
        <section className="registerContainer">
            <div className="registerHeading">
                <h2>Register</h2>
                <span className="registerUnderline"></span>
            </div>
            <form className="registerForm" onSubmit={handelRegister}>
              <Toaster />
                <div className="innerregisterform">
                    <label htmlFor="userName">USERNAME:</label>
                    <input type="text" name="userName" value={userInfo.userName} onChange={handelChange} required/>

                    <label htmlFor="name">NAME:</label>
                    <input type="text" name="name" value={userInfo.name} onChange={handelChange} required/>

                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" name="email" value={userInfo.email} onChange={handelChange} required/>

                    <label htmlFor="password">PASSWORD:</label  >
                    <input type="password" name="password" value={userInfo.password} onChange={handelChange} required/>

                    <label htmlFor="address">ADDRESS:</label>
                    <input type="text" name="address" value={userInfo.address} onChange={handelChange} required/>

                    <label htmlFor="contactNo">CONTACT NO:</label>
                    <input type="number" name="contactNo" value={userInfo.contactNo} onChange={handelChange} required/>
                </div>
                <div className="registerBtn">
                    <input type="submit" value="register" />
                </div>
            </form>
            <div className="registerPage">
                <p>Already have account?</p><p className="swapP" onClick={() => setIsLoginPage(true)}>Login</p>
            </div>
        </section>
    )
}

export default SignUp
