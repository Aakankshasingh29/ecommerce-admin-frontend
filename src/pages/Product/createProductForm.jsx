import { useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Upload, Loader } from "lucide-react";

const categories = ["jeans","t-shirt","shoes", "bags"];

const createProductForm =() => {
    const [newProduct, setNewProduct]= useState({
        name: "",
        description: "",
        price: "",
        category:"",
        image: "",
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(newProduct);
    };
     return(
        <motion.div
        className="bg-gray-800 shadow-lg p-8 mb-8 max-w-xl mx-auto"
        initial= {{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration:0.8}}
        >
        <h2 className="text-2xl font-semibold mb-6 text-emerald-300">create new product</h2>
        <form onSubmit={handleSubmit}>
            <div>
             <label 
             htmlFor="image"
             className="cursor-pointer bg-gray-700 py-2 px-3 border-gray-600 rounded-md shadow-sm"
             >
                
                </label>
            </div>


        </form>
        </motion.div>
     )
}