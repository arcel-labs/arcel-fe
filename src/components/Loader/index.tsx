
import { ColorRing } from 'react-loader-spinner'

import React from 'react'

const Loader = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center'>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
        </div>
    )
}

export default Loader

