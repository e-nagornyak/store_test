import React from 'react';
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {Paper} from "@mui/material";
import s from './Profile.module.css'

export const Profile = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const name = useSelector(state => state.profile.name)
    const email = useSelector(state => state.profile.email)
    const photoUrl = useSelector(state => state.profile.photoUrl)

    if (!isLogged) {
        return <Navigate to={'/sign-in'}/>
    }

    return <Paper className={s.wrapper} elevation={3}>
        <img className={s.avatar} src={photoUrl} alt="avatar"/>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>Information about me</p>
        <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et iure recusandae repellendus soluta voluptates. Cumque odio quo suscipit vel velit. Blanditiis dolores facere illo in velit veritatis vero voluptate.
        </span>
    </Paper>
};

