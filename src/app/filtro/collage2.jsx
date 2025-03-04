"use client";
import {useSearchParams, usePathname, useRouter} from 'next/navigation'
export default function Search() {  
  const pathname= usePathname();
  const {replace} = useRouter();
  const searchParams= useSearchParams();  
  const handleSearch=(term)=>{   
    const params= new URLSearchParams(searchParams);     
    if(term)  {                
      params.set('search',term);  
      params.set('pag','1');      
    }     
    else{                 
      params.delete('search');      
      params.delete('pag');   
    }          
    replace(`${pathname}?${params.toString()}`)
  }   
  return (
    
    <div className="pt-16 bg-white h-max gap-4 w-full">
        <form className="w-full px-4 py-4 ">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" onChange={(e)=>handleSearch(e.target.value)} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search electronics, jewelery..." required />
                
            </div>
        </form>        
    </div>
                            
  )
}
