import React, { useRef, useState } from 'react'
import { Button } from 'reactstrap'

const VersionSix = () => {
    const ref = useRef(0)

    const dataCounte = () => {
        ref.current = ref.current + 1
    }

    return (
        <div>
            <Button onClick={() => { dataCounte }} >useRef increment</Button>
            {ref.current}
        </div>
    )
}

export default VersionSix
