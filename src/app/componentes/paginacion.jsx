"use client"
import React from "react";
import _ from "lodash";
import Link from 'next/link';
import {useSearchParams, usePathname} from 'next/navigation'
export default function Paginacion(props){
const {paginaActual,conteoItems,tamanoPagina} = props
const pathname= usePathname();  
const searchParams= useSearchParams();   
const par= new URLSearchParams(searchParams); 
const createPage = (p)=>{
    par.set('pag',p.toString()); 
    return (
    `${pathname}?${par.toString()}`
    )}    
const conteoPagina = Math.ceil(conteoItems/tamanoPagina)
if(conteoPagina===1)return null;
const pages = _.range(1, conteoPagina + 1); 
return (
    <nav className="Page navigation example ">
        <ul className="inline-flex -space-x-px text-sm">
            {pages.map(page =>(
            <li key={page} className={page==paginaActual ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" :
            "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            }>
                <Link  href={createPage(page)} className="page-link" >
                    {page}</Link>
            </li>
            ))}
        </ul>
    </nav>)
}
