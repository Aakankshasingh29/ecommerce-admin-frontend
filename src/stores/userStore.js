import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";



export const userStore = create((set,get)=>({
    user: null,
    loading: false,
    checkingAuth: true,

    login: async ({email,password})=>{
        console.log(password,"jcsdjk")
        set ({loading:true});
        
        try {
            const res = await axios.post("/api/auth/login",{email,password});
            console.log("user is here", res.data);
            toast.success(error.response.data.message || "an error occurred");
            set({user: res.data.user,loading: false});
        } catch (error) {
            console.log(error)
            set({loading:false});
            toast.error(error.response.data.message || "an error occurred");
        }
    },
}));

