import React from 'react';
// @ts-ignore
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from './ProfileInfo/ProfileInfo';




export const Profile = () => {
    return (
        <div >
            <ProfileInfo/>
            <MyPosts/>

        </div>

    )
}