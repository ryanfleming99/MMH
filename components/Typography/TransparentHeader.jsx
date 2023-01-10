import React from 'react'

const TransparentHeader = ({ text }) => {
    return (
        <p className=" text-4xl font-bold text-gray-400 text-opacity-40 mx-auto my-auto ">
            {text}
        </p>
    )
}

export default TransparentHeader