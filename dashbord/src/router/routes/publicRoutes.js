import {lazy} from 'react'
const AdminLogin = lazy(()=>import("../../viwes/auth/AdminLogin"))
const Login = lazy(()=> import("../../viwes/auth/Login"))
const Register =lazy(()=> import('../../viwes/auth/Register'))


const PublicRoutes = [
    {
        path:"/login",
        element:<Login/>
    },
    {
       path:"/register",
       element:<Register/>
    },
    {
        path:"/admin/login",
        element:<AdminLogin/>
    }

]

export default PublicRoutes