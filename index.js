import { useState } from 'react';

export const useForm = (cb) => {
    const [fields, setFields] = useState({});

    const submit = e => {
        e && cb(e);
    }

    const handleChanges = (e) => {
        e.persist();
        setFields({ ...fields, [e.target.name]: e.target.value });
        localStorage.setItem(`${e.target.name}`, e.target.value);
    }

    return {
        handleChanges,
        submit,
        fields
    }
}
