import React,{useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import constant from '../util/constant'
import { useHistory} from 'react-router-dom';
import { useDataLayerValue } from '../reducer/DataLayer';
import './Login.css';

function Login({ setIsLoginPage }) {
    const [userInfo, setuserInfo] = useState({ email: "", password: "" });
    const [{ }, dispatch] = useDataLayerValue();
    const history = useHistory();
    const handelChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuserInfo({ ...userInfo, [name]: value })
    }

    const handelLogin = async (e) => {
        try {
            e.preventDefault();
            let response = await axios.post(`${constant.API_URL}/user`, userInfo);
            console.log(response);
            dispatch({ type: 'SET_USER', user: response.data.userData });
            dispatch({ type: 'SET_LOGIN', isLoggedIn: true });
            toast.success('userLogin successfully');
            setTimeout(() => {
                history.push('/Home');      
            }, 1000);
        } catch (error) {
            let err = '';
            if (error && error.response) {
                err = error.response.data;
            } else if (error && error.message) {
                err = error.message;
            } else {
                err = 'Something went wrong'
            }
            toast.error(err);
        }
    };
    return (
        <section className="loginContainer">
          <Toaster />
            <div className="loginHeading">
                <h2>Login</h2>
                <span className="loginUnderline"></span>
            </div>
            <form className="loginForm" onSubmit={handelLogin}>
                <div className="innerloginform">
                    <label htmlFor="email">EMAIL:</label>
                    <input type="email" name="email" id="email" value = {userInfo.email}  onChange={handelChange} required/>
                    <label htmlFor="password">PASSWORD:</label>
                    <input type="password" name="password" id="password" value={userInfo.password} onChange={handelChange} required/>
                </div>
                <div className="loginBtn">
                    <input type="submit" value="login" />
                </div>
            </form>
            <div className="registerPage">
                <p>Create new account?</p><p className="swapP" onClick={() => setIsLoginPage(false)}>register</p>
            </div>
        </section>
    )
}

export default Login
