import s from './users.module.css';
import React from 'react';
// @ts-ignore
import defaultPhoto from './../../assets/img/img.png'
import {UsersArrType} from '../redux/users-reducer';

type PropsType = {
    users:UsersArrType[]
    onPageChanged:(p:number)=>void
    unFollowHandler:(u:number)=>void
    followHandler:(u:number)=>void
    totalUsersCount:number
    pageSize:number
    currentPage:number
}

export const Users = (props: PropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p =>
                <span key={p} className={props.currentPage === p ? s.selectedPage : ''}
                      onClick={() => props.onPageChanged(p)}>
                        {p}
                    </span>)}
        </div>
        {props.users.map(u => (
            <div key={u.id}>
                <img
                    alt={'profile'}
                    src={
                        u.photos.small !== null
                            ? u.photos.small
                            : defaultPhoto
                    }
                    className={s.avatar}
                />
                {u.followed ? (
                    <button onClick={() => props.followHandler(u.id)}>
                        follow
                    </button>
                ) : (
                    <button onClick={() => props.unFollowHandler(u.id)}>
                        unfollow
                    </button>
                )}
                <div>{u.name}</div>
                <div>{u.city}</div>
            </div>
        ))}
    </div>
}