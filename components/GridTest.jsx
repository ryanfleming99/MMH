import React from 'react'

const GridTest = () => {
    return (
        <div class="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-4">
            <div class="col-span-1">
                <h2>image</h2>
            </div>
            <div class="col-span-1">
                <p>Text 1</p>
            </div>
            <div class="col-span-1">
                <h2>image</h2>
            </div>
            <div class="col-span-1">
                <p>Text 2</p>
            </div>
            <div class="col-span-1">
                <h2>Image</h2>
            </div>
            <div class="col-span-1">
                <p>Text 3</p>
            </div>
            <div class="col-span-1">
                <h2>image</h2>
            </div>
            <div class="col-span-1">
                <p>Text 4</p>
            </div>
        </div>





    )
}

export default GridTest