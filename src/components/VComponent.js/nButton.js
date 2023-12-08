
import React from 'react'
import { Button } from 'reactstrap'

const NButton = ({ id, name, bgColor, handler }) => {

    return (
        <div>
            <Button id={id} style={{background:bgColor}} onClick={() => handler(id)} >{name}</Button>
        </div>
    )
}

export default NButton
