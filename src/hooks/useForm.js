// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initFormValue) => {
    const [ form, setForm ] = useState(initFormValue);

    const clearForm = () => {
        setForm(initFormValue);
    }

    const handleFormChanges = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    return [ form, handleFormChanges, clearForm ];
};
