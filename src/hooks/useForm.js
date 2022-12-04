import { useState } from "react";

export default function useForm (inicialState) {
    const [form , setForm] =useState(inicialState)

    const onChangeForm = (e)=>{
        const {name, value} =e.target
        setForm({...form, [name]:value})
    }



    return [form, onChangeForm]


}