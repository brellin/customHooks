import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCDM = (url, setData) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        mounted &&
            axios
                .get(url)
                .then(res => setData(res.data))
                .catch(err => console.log(err))
        setMounted(true)
    })

    return {
        mounted,
        setMounted
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
