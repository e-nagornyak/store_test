import React from 'react';
import {useSelector} from "react-redux";
import s from './CartList.module.css'

export const CartList = () => {
    const cartItem = useSelector(state => state.cartList.cartList)

    return <div className={s.wrapper}>
        {cartItem.map(c => <div>{c}</div>)}
    </div>
};

