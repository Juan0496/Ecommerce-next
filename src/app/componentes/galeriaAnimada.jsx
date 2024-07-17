"use client"
import {motion} from 'framer-motion';
import React from 'react';
export default function Animacion(props){
    let {img1, img2, img3}=props;    
return(
<div className="principal" >
    <div className='container'>
        <motion.img src={img1}   className="content"  transition={{duration:15,times:[0,0.99,0.99,1],repeat:Infinity,repeatType:"loop"}} animate={{height:["100%","100%","0%","100%"]}}>
        </motion.img >
        <motion.img src={img2} className="content"  transition={{duration:15,times:[0,0.6,0.66,0.99,1],repeat:Infinity,repeatType:"loop"  }} animate={{height:["100%","100%","0%","0%","100%"]}}>
        </motion.img >
        <motion.img  src={img3} className="content"  transition={{duration:15,times:[0,0.27,0.33,0.91,1],repeat:Infinity,repeatType:"loop"}} animate={{height:["100%","100%","0%","0%","100%"]}}>
        </motion.img > 
    </div>
</div>)
}