import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'reactstrap'
import { Decrement, Increment } from './ReduxComponnet/versionSixSlice'
import { Outlet } from 'react-router-dom'
const VersionSix = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    const data = useSelector(state => state.vSix.value)

    return (
        <div>


            <Button onClick={(e) => dispatch(Increment(data >= 0 && data + 1))} >InCrement</Button> {data} <Button onClick={(e) => dispatch(Decrement(data > 0 ? data - 1 : 0))}>DeCrement</Button>

            <Outlet />
        </div>
    )
}

export default VersionSix
