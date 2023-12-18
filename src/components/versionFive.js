import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import NButton from './VComponent.js/nButton'
import Notfound from './components/routeNotFind'
import { Route, Routes, useNavigate } from "react-router-dom"
import { routesJson } from '../route'
import { Nav, NavItem, NavLink } from 'reactstrap'
import Home from './components/home'
import Posts from './components/post/posts'
import Post from './components/post/post'
import NewPost from './components/post/newPost'
import ProtectRoute from './versionFiveAuth'
import UnAuth from './components/post/unAuth'
const VersionFive = () => {
    const [nButtonDetails, setNButtonDetails] = useState([{ id: 1, name: "About", colorData: "" }, { id: 2, name: "Contact", colorData: "" }])
    const currentURL = window.location.pathname;

    const routePath = useNavigate()
    const colorData = null
    const [activeRoute, setActiveRoute] = useState("")

    const activeHandler = (id) => {
        console.log(id);
        setNButtonDetails((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, colorData: "blue" } : { ...item, colorData: "" }
            )
        );
    }

    const vFiveRoute = (allRoute) => {
        return allRoute?.map((ele, index) => (
            ele?.key !== "notfound" && <Route path={ele?.path} element={ele?.component} key={index} />
        ))
    }

    useEffect(() => {
        setActiveRoute(currentURL);
    }, [currentURL]);

    return (
        <>
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

            <div className='row' >
                <div className='col-2'>
                    <div className='text-align-left'>
                        <Nav vertical fill pills tabs >
                            {routesJson?.map((ele) => (
                                ele?.key !== "notfound" && <NavItem tabs>

                                    <NavLink onClick={(e) => { routePath(ele?.path) }}
                                        active={activeRoute == ele?.path}

                                    >
                                        {ele.name}
                                    </NavLink>
                                </NavItem>
                            ))}


                            <NavItem tabs>
                                <NavLink onClick={(e) => { routePath("/posts"); }}

                                    active={activeRoute == "/posts"}
                                >
                                    Post
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </div>



                <div className='col-10'>
                    <Routes>
                        {routesJson?.length > 0 && vFiveRoute(routesJson)}
                        <Route path="/" element={<Home />} />
                        <Route path="*" element={<Notfound />} />

                        <Route element={<ProtectRoute />}>
                            <Route path='/posts' element={<Posts />}>
                                <Route path='new' element={<NewPost />} />
                                <Route path=':postId' element={<Post />} />
                            </Route>
                        </Route>
                        <Route path='/register' element={<UnAuth></UnAuth>}></Route>

                    </Routes>
                </div>

            </div>

        </>
    )
}

export default VersionFive
