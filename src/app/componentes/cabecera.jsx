"use client";
import Link from 'next/link';
import React  from 'react';
import {useUser} from '@auth0/nextjs-auth0/client';
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon} from '@heroicons/react/24/outline'
export default function Cabecera(){
const {user,isLoading}=useUser();
return (
<div className="bg-white ">          
  <header className="fixed bg-white w-screen">
    <nav aria-label="Top" className="mx-auto  max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="border-b border-gray-200">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-row items-center">
            <Link href='/dashboard'>
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 "                
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />                    
              </button>
            </Link>                  
              <h1 className="text-sm font-medium text-gray-700 hover:text-gray-800">MENU</h1>                  
          </div>
                  {/* Logo */}
          <div className="ml-4 flex lg:ml-36 justify-self-center">
            <Link href="../">
              <span className="sr-only">Logo</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
                  {/* Flyout menus */}
          <div className=" flex items-center justify-self-end">
            {!user && !isLoading ? (
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                
              <a href="/api/auth/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                Registrarse
              </a>                                                              
            </div>) :
            (null)
            }
            {user && !isLoading ? (                      
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                
                  <a   href="/api/auth/logout" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Salir
                  </a>
                                            <h1 className="text-sm font-medium text-gray-700 hover:text-gray-800">{user.given_name}        </h1>            
                </div>) :
                (null)
            }                    

                    {/* Search */}
            <div className="flex lg:ml-6">
              <Link href="/filtro" className="p-2 text-gray-400 hover:text-gray-500">
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </Link>
            </div>

                    {/* Cart */}
            <div className="ml-4 flow-root lg:ml-6">
              <Link href="/carrito" className="group -m-2 flex items-center p-2">
                <ShoppingBagIcon
                  className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                  aria-hidden="true"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>                       
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</div>)
}