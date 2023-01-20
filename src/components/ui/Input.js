import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const types = [
    'text', 'email', 'tel'
]

export default function Input(
    {
        type = 'text',
        placeholder,
        name,
        isInvalid = false,
        isValid = false,
        errorMess = "Please fill this out",
        appendClass
    }
) {
    if (!types.includes(type)) {
        return <p className="text-red-700">Invalid input type: {type}</p>
    }

    if (isInvalid && isValid) {
        return <p className="text-red-700">Both isInvalid and isValid cannot be true simultaneously!</p>
    }

    let className = "p-4 border-2 rounded-md focus-within:shadow-lg relative flex w-full";

    let borderColor = 'secondary-100';
    if (isInvalid) borderColor = 'red-400';
    if (isValid) borderColor = 'green-400';
    className += ' border-' + borderColor;



    return (
        <div className="">
            <div className={className}>
                <input
                    className="focus:outline-none text-slate-600 w-full"
                    type={type}
                    name={name}
                    placeholder={placeholder}
                />
                {
                    isValid
                        ?
                        <FaCheck className={`text-green-600 absolute right-3 top-5`} />
                        :
                        <></>
                }
                {
                    isInvalid
                        ?
                        <FaTimes className={`text-red-600 absolute right-3 top-5`} />
                        :
                        <></>
                }
            </div>
            {
                isInvalid
                    ?
                    <span className={`text-sm ml-1 text-red-500`}>{errorMess}</span>
                    :
                    <></>
            }
        </div>
    )
}
