import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { Decrement, Increment } from './ReduxComponnet/versionSixSlice'

const VersionSix = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const data = useSelector(state => state.vSix.value)
    console.log(data);

    return (
        <div>
            version 6.0.0

            <Button onClick={(e) => dispatch(Increment(data >= 0 && data + 1))} >InCrement</Button> {data} <Button onClick={(e) => dispatch(Decrement(data > 0 ? data - 1 : 0))}>DeCrement</Button>

        </div>
    )
}

export default VersionSix
