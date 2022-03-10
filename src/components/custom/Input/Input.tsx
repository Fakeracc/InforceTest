import React from 'react';
import "./Input.scss"


interface CustomInputInterface {
    placeholder?: string;
    [key: string]: any;
}

const Input: React.FC<CustomInputInterface> = ({
                                                   placeholder,
                                                   ...props
}) => {
    return (
            <label className="custom-field one">
                <input {...props} type="text" placeholder={placeholder ? placeholder : ''}/>
            </label>
    );
};

export default Input;