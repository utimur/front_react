import React, {useRef} from "react";
import './login.css';
import {useDispatch,useSelector} from "react-redux";
import axios from 'axios'
import {signIn} from "../../actions/user";
import {loginEffect} from "../../effect/user";

export default function Login(props) {
    const dispatch = useDispatch()
    const username = useRef()
    const password = useRef()


    function loginButClick(){
        loginEffect(username,password,props,dispatch)
    }


    return(
        <div className="login-flex">
            <p className="header">Login</p>
            <form>
                <input placeholder="Enter username..." ref={username} className="form-control"/>
                <input type="password" placeholder="Enter password..."  ref={password} className="form-control"/>
            </form>
            <div className={"btns"}>
                <button className="forgot-btn"> Forgot password? </button>
                <button className="login-btn" onClick={()=>loginButClick()} >Log in</button>
            </div>
        </div>
    )
}