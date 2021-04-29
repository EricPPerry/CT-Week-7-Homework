import React from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseColor } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

import { useGetData } from '../../custom-hooks';

interface CarFormProps {
    id?:string;
    data?:{}
}
///UNDO UNTIL THIS//
///NAOINOIANSD////
interface CarState {
    car_color: string;
    car_make: string;
}

export const CarForm = (props: CarFormProps) => {

    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const car_color = useSelector<CarState>(state => state.car_color)
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)

        if(props.id!){
            server_calls.update(props.id!, data)
            console.log(`Updated:${data} ${props.id}`)
            //window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseColor(data.car_color))
            server_calls.create(store.getState())
            setTimeout(function(){window.location.reload()}, 1000);
        }
        //window.location.reload()
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="car_color">Car Color</label>
                    <Input {...register('car_color')} name="car_color" placeholder='Car Color' />
                </div>
                <div>
                    <label htmlFor="car_make">Car Make</label>
                    <Input {...register('car_make')} name="car_make" placeholder="Car Make"/>
                </div>
                <div>
                    <label htmlFor="car_model">Car Model</label>
                    <Input {...register('car_model')} name="car_model" placeholder="Car Model"/>
                </div>
                <div>
                    <label htmlFor="car_year">Car Year</label>
                    <Input {...register('car_year')} name="car_year" placeholder="Car Year"/>
                </div>
                
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}