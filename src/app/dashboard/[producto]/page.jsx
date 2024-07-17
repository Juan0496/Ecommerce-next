import InfoProcuts from "./infoProduct"

export default async function ProductoDet({params}) {
const {producto} = params;
const data = await fetch('https://fakestoreapi.com/products/')
  .then(res => res.json());
const datos = data.filter((v)=>v.id==producto);
const src= datos[0].image
const categoria = datos[0].category;
const nombre= datos[0].title
  return (
    <div className="bg-white">
      <div className="pt-24">
        <nav >
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">           
            <li >
              <div className="flex items-center">
                <a href='/dashboard' className="mr-2 text-sm font-medium text-gray-900">
                  {categoria}
                </a>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
         
            <li className="text-sm">
              <a  aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {nombre}
              </a>
            </li>
          </ol>
        </nav>
        {/* Image gallery */}
        <div className="mx-4 mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:gap-x-8 lg:px-8 grid-cols-3" >
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={src}              
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={src}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                src={src}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg">
            <img
              src={src}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        {/* Product info */}
        <InfoProcuts categoria={categoria} nombre={nombre}></InfoProcuts>
      </div>
    </div>
  )
}