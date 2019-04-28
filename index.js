import { useState, useEffect } from 'react';

export const useCDM = (func) => {
    useEffect(() => {
        func
    }, [])
}

export const useCDU = (func) => {
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        func
        setUpdated(true)
    }, [updated])

    return {
        updated,
        setUpdated
    }
}

export const useForm = cb => {
    const [fields, setFields] = useState({});

    const submit = e => {
        e && e.preventDefault();
        cb();
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
