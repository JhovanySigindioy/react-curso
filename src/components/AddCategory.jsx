import { useState } from 'react';

const AddCategory = ({onAddCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        const inputValueTrim = inputValue.trim();
        if(inputValue.length <=0){
            return;
        }
        onAddCategory(inputValueTrim);
        setInputValue('');
    };

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type="text"
                id="inputAddCategory"
                onChange={onInputChange}
                value={inputValue}
                placeholder="Ingrese nueva categoria"
            />
        </form>
    )
};

export {
    AddCategory,
};