import { useState, useEffect } from 'react';

export function useHandleChanges(field) {
    const [field, setField] = useState('');

    useEffect((e) => {
        setField({ [e.target.name]: e.target.value })
    })

    return field;
}
