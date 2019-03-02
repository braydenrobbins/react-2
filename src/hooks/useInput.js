import { useState } from 'react';

function useInput() {
    const [value, setValue] = useState('');

    function handleChange(e) {
        setValue(e.target.value)
    }

    function cancel() {
        setValue('');
    }

    return {
        value,
        handleChange,
        cancel
    }
}

export default useInput;