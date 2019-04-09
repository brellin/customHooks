import { useState, useEffect } from 'react';
import axios from 'axios';

export const useCDM = (url, setData) => {
    useEffect(() => {
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
        setMounted(true)
    }, [])
}

export const useCDU = (url, setData) => {
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        axios
            .get(url)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
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
