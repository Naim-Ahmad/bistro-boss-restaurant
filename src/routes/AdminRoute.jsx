import { Navigate, useLocation } from "react-router-dom"
import MySpinner from "../components/MySpinner"
import useAuth from "../hooks/useAuth"
import useIsAdmin from "../hooks/useIsAdmin"

export default function AdminRoute({children}) {
    const {isAdmin, isPending} = useIsAdmin()
    const {user, loading} = useAuth()
    const {pathname} = useLocation()

    if(loading || isPending){
        return <MySpinner/>
    }

    if(user && isAdmin) return children

    return <Navigate to='/login' state={pathname} />
}