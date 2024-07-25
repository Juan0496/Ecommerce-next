"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import React  from 'react'
import {UserProvider} from '@auth0/nextjs-auth0/client'
import Cabecera from "./componentes/cabecera";
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({ children }) {
return (
<html lang="en">
  <UserProvider>
    <body className={inter.className}> 
      <Cabecera></Cabecera>
      {children}
      <footer className="bg-white dark:bg-gray-800 lg:p-4 md:p-4 h-screen"  >
        <div className="grid  mx-auto max-w-screen-xl text-center h-[87vh]">
          <div className="self-end sm:pt-6 h-[45vh]">
            <p className="lg:self-center self-end text-gray-500 dark:text-gray-400">Ejercicio de E-commerce, desarrollado con Next.js y Tailwind.</p>
          </div>         
          <div className="h-[5vh] place-self-center flex mt-4 justify-center items-end sm:mt-0" >            
            <a href="https://www.linkedin.com/in/juan-moreno-palomino-1394512b9/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target='-blank'>
              <img src="/linkedin-original.svg" className="w-4 h-4">
              </img>              
                <span className="sr-only">Linkedin</span>
            </a>
            <a href="https://github.com/Juan0496/Ecommerce-next" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5" target='-blank'>
              <img src="/github-square.svg" className="w-4 h-4">
              </img>              
                <span className="sr-only">GitHub account</span>
            </a>
          </div>
          <div className="flex mt-4 justify-center items-end sm:mt-0 ">
            <span className="text-sm text-gray-500 sm:text-end dark:text-gray-400">© 2024 <a href="" className="hover:underline">Juan Moreno</a>
            </span>
          </div>
        </div>       
      </footer>
    </body> 
  </UserProvider>
</html>
)
}





