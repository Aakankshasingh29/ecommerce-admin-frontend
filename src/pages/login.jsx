import React, { useState } from 'react';
import { userStore } from "../stores/userStore.js";
// import {login, loading} from "lucide-react";
import {motion} from "framer-motion";


const Login = () =>{ 
  const [email, setEmail] =useState("");
  const [password, setPassword ]= useState("");

  const {login,loading}= userStore();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    login(email, password)
  };
  
// // const Login = () => {
// //     const handleFormSubmit = (e) => {
// //         e.preventDefault();

// //         let email = e.target.elements.email?.value;
// //         let password = e.target.elements.password?.value;


// //         const {Login,loading} =userStore();
      


// //         console.log(email, password);
//     };
    return (
        <div className='h-screen flex bg-gray-bg1'>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleSubmit} method="POST">
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input
                            type='email'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='email'
                            name="email"
                            placeholder='Your Email' onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            name="password"
                            placeholder='Your Password' onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className={`bg-green py-2 px-4 text-sm text-white rounded border border-green focus:outline-none focus:border-green-dark`}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;



