// import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import {server_calls } from "../api/server"
import {useDispatch, useStore} from "react-redux"
import { chooseBrand, chooseName, chooseRegion, chooseType, chooseABV, choosePrice } from "../redux/slices/RootSlice"

interface FormProps {
    id?: string[];
    onClose: () => void;
}

const EntryForm = ( props:FormProps) => {
    const { register, handleSubmit } = useForm({})
    const dispatch = useDispatch();
    const store = useStore();

    const onSubmit = (data: any, event: any) => {
        console.log(`ID: ${typeof props.id}`);
        console.log(props.id)
        console.log(data)
        // setTimeout(() => {window.location.reload()}, 500);
        if (props.id && props.id.length > 0) {
            server_calls.update(props.id[0], data)
            console.log(`Updated: ${ data.name } ${ props.id }`)
            setTimeout(() => {window.location.reload()}, 500);
            props.onClose()
            event.target.reset()
        } else {
            dispatch(chooseBrand(data.brand));
            dispatch(chooseName(data.name));
            dispatch(chooseRegion(data.region));
            dispatch(chooseType(data.type));
            dispatch(chooseABV(data.abv));
            dispatch(choosePrice(data.price));

            server_calls.create(store.getState())
            setTimeout(() => {window.location.reload()}, 500);
            event.target.reset()

            props.onClose();
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-row px-3">
            <div className="px-1">
                <label htmlFor="brand" className= "flex flex-start">Brand</label>
                <Input {...register('brand')} name='brand' placeholder="Brand"/>
            </div>
            <div className="px-1">
                <label htmlFor="name" className= "flex flex-start">Name</label>
                <Input {...register('name')} name='name' placeholder="Name" />
            </div>
            </div>
            <div className="flex flex-row px-3">
            <div className="px-1">
                <label htmlFor="region" className= "flex flex-start">Region</label>
                <Input {...register('region')} name='region' placeholder="Region" />
            </div>
            <div className="px-1">
                <label htmlFor="type" className= "flex flex-start">Type</label>
                <Input {...register('type')} name='type' placeholder="Type" />
            </div>
            </div>
            <div className="flex flex-row px-3">
            <div className="px-1">
                <label htmlFor="abv" className= "flex flex-start">ABV</label>
                <Input {...register('abv')} name='abv' placeholder="ABV" />
            </div>
            <div className="px-1">
                <label htmlFor="price" className= "flex flex-start">Price</label>
                <Input {...register('price')} name='price' placeholder="Price" />
            </div>
            </div>
            <div className="flex justify-center">
                <button className="flex justify-center mt-1 mb-2 bg-amber-600 p-2 px-6 rounded hover:bg-slate-900 text-white"
                >
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default EntryForm
