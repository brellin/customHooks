import { useState } from 'react';

export const useForm = cb => {
    const [fields, setFields] = useState({});

    const submit = e => {
        e && e.preventDefault();
        cb();
    }

    const handleChanges = e => {
        e.preventDefault();
        setFields({ ...fields, [e.target.name]: e.target.value });
    }

    return {
        handleChanges,
        submit,
        fields
    }
}
