import React from 'react';
import {Button, Paper, Rating} from "@mui/material";
import s from './Main.module.css'

export const Main = () => {
    return <Paper className={s.wrapper}>
        <img className={s.photo}
             src="https://demo.wpthemego.com/themes/sw_hitheme/wp-content/uploads/2016/10/1.jpg"
             alt="product item"/>
        <div className={s.product}>
            <div>
                <h2 className={s.product_name}>Solo Studio Heaphone</h2>
                <div className={s.rating}>
                    <Rating aria-label={'dasdsadasd'} emptyLabelText={'sadsadsad'}/>
                    <span> 1 Review(s)</span>
                </div>

            </div>
            <div>
                    <p className={s.desc}>Lorem ipsum dolor sit amet, ut ius graece tritani,
                        ea solum repudiandae cum. Ne graeco oblique signiferumque has,
                        iudicabit voluptatum vituperatoribus</p>
            </div>
            <div>
                <Button sx={{fontSize: '25px'}}
                        variant={'contained'}
                        color={'secondary'}>Add to cart</Button>
            </div>
        </div>
    </Paper>

};

