import React from 'react'

const TheProcessStep = ({ id, name, description, bgColour, fillColour }) => {

    const display = true


    return (
        <div className="mt-12 hover:scale-110 transition-all ease-in-out">
            <div className="mx-auto items-center">

                <div className="mx-auto mb-6 z-10 relative">
                    <p className={`mx-auto text-center rounded-xl ${bgColour} font-bold w-[100px]`}>STEP {id}</p>
                </div>
                <div className="z-1 mb-4 grid items-center mx-auto bg-gray-200 h-[150px] w-[150px] rounded-full border-[8px] outline outline-4 outline-gray-400/70 border-gray-400/70   outline-offset-[10px] ">
                    <p className="text-center text-black font-bold text-2xl tracking-wide">{name}</p>
                </div>

                <div className={`mx-auto grid items-center bg-gray-400/80  w-[200px] h-20 rounded-lg shadow-lg shadow-black`}>
                    <p className="text-center text-md text-black font-bold ">{description}</p>
                </div>
                {/* <div className={`mx-auto grid items-center bg-gray-400/80 w-[250px] h-8 rounded-t-md  shadow-md shadow-gray-400/80`}>
                </div> */}
            </div>


        </div>
    )
}

export default TheProcessStep