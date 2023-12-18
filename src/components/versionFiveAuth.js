import { Navigate, Outlet } from "react-router-dom";


export default function ProtectRoute() {
    // const userSignin = useSelector((state: RootStateOrAny) => state.userSignin);
    const userInfo = false;

    return userInfo ? <Outlet /> : <Navigate to='/register' replace />;
}