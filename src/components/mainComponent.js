import React from 'react'
import VersionFive from './versionFive'
import VersionSix from './versionSix'

const MainComponent = () => {
    return (
        <div className='row'>
            <div className='col-6 border'>

                <p>Version 5.0.0</p>
                <VersionFive ></VersionFive>
            </div>

            <div className='col-6 border'>

                <p>Version 6.0.0</p>
                <VersionSix ></VersionSix>
            </div>

        </div>
    )
}

export default MainComponent
