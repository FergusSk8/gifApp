import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({addCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const onChange = (e) => {
        const {value} = e.target;
        setInputValue(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            addCategory(inputValue);
            setInputValue('');
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={onChange}
                
            />
        </form>
    )
}

AddCategory.propTypes = {
    addCategory: PropTypes.func.isRequired
}

export default AddCategory;
