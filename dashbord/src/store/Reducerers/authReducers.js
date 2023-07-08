import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import api from "../../api/Api";

export const admin_login= createAsyncThunk("auth/admin_login",
    async(info)=>{
        console.log(info)
        try {
            // const {data}=await api.post("/admin/login",info ,{withCredentials:true })
            // console.log(data)
            
        }
        catch (e) {

        }
    }
)


export const authReducers = createSlice({
    name:'auth',
    initialState:{
        successMassge:"",
        errorMassage:"",
        loader:false,
        userInfo:""
    },
    reducers:{},
    extraReducers:{}
})

export default authReducers.reducer