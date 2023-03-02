import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ProductItem} from "./Item/ProductItem";
import {collection} from "firebase/firestore";
import {db} from "../../../config/firebase";
import {getProductList} from "./reducer/thunks";
import s from './ProductList.module.css'

export const ProductList = () => {
    const dispatch = useDispatch()
    const isLogged = useSelector(state => state.auth.isLogged)
    const productList = useSelector(state => state.products.productList)
    const productsRef = collection(db, "products")

    useEffect(() => {
        dispatch(getProductList(productsRef))
    }, [dispatch])

    return <div className={s.wrapper}>
        <h1>Product list</h1>
        <div className={s.list_wrapper}>
            {productList.map(p => <ProductItem key={p.id} item={p} isLogged={isLogged}/>)}
        </div>
    </div>
};

