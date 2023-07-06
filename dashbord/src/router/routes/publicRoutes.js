import {lazy} from 'react'
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
    }
]

export default PublicRoutes