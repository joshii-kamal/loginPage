import React,{useState} from 'react'
import Login from "./Login";
import SignUp from "./SignUp";

function BasePage() {
    const [isLoginPage, setIsLoginPage] = useState(true);
    return (
    <section className="basePage">
      <div className="leftComp"></div>
      <div className="rightComp">
        {
          isLoginPage ?
            <Login setIsLoginPage={setIsLoginPage} /> :
            <SignUp setIsLoginPage={setIsLoginPage} />
        }
      </div>
    </section>
    )
}

export default BasePage
