import React from 'react';
import s from './Friend.module.css';
import {FriendsPageType} from '../../redux/friends-reducer';

// type FriendsPropsType = {
//     store: RootStore
// }


export const Friends = (Friends:FriendsPageType) => {
    return (
        <div>
            <ul>
                {Friends.Friends.map(item => {
                    return (<li className={s.items} key={item.id}>
                            <img className={s.img} src={item.avatar} alt="avatars"/>
                            <li className={s.items}>
                                {item.name}
                            </li>
                        </li>
                    )
                })}
            </ul>
        </div>
    );

}
;

