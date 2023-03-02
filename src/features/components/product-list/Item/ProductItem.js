import React, {memo} from 'react';
import {Button, Modal, Paper, Rating} from "@mui/material";
import s from './ProductItem.module.css'
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addCart} from "../../cart-list/reducer/actions";

export const ProductItem = memo(({item, isLogged}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {name, rating, price, photoURL, description} = item

    const onClickHandler = () => {
        if (isLogged) {
            dispatch(addCart(item))
        } else {
            // <Modal >
            //
            // </Modal>
        }
    }


    return (
        <Paper className={s.wrapper}>
            <img className={s.image} src={photoURL} alt=""/>
            <h4>{name}</h4>
            <Rating readOnly value={rating}/>
            <p>${price}</p>
            <p className={s.description}>{description}</p>
            <Button onClick={onClickHandler} variant={'contained'} color={'secondary'}>Add
                to cart</Button>
        </Paper>
    );
})

