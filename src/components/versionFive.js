import React, { useState } from 'react'
import NButton from './VComponent.js/nButton'

const VersionFive = () => {
    const [nButtonDetails, setNButtonDetails] = useState([{ id: 1, name: "About", colorData: "" }, { id: 2, name: "Contact", colorData: "" }])

    const colorData = null

    const activeHandler = (id) => {
        console.log(id);
        setNButtonDetails((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, colorData: "blue" } : { ...item, colorData: "" }
            )
        );
    }

    return (
        <div className='row'>

            {nButtonDetails?.map((item, key) => (
                <div className='col-2' key={key}>
                    <NButton
                        id={item?.id}
                        name={item?.name}
                        bgColor={item?.colorData}
                        handler={activeHandler}
                    ></NButton>
                </div>
            ))}


        </div>
    )
}

export default VersionFive
