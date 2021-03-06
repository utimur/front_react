import React,{useEffect,useState} from "react";
import {useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import "./profile.css"
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostLenta from "./postLenta/PostLenta";

export default function Profile(props) {

    const currentUser = useSelector(state => state.user)


    if (currentUser.isLoggedIn == false) {
        return <Redirect to={"/login"}></Redirect>
    }

    return (
        <div className={"profile"}>
            <ProfileInfo history={props.history} id={props.match.params.id}/>
            <PostLenta id={props.match.params.id}/>
        </div>
    )
}

