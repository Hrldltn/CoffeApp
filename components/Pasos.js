import {useRouter} from 'next/router'

const pasos =[
    {paso:1, nombre:'Menú',url:'/'},
    {paso:2, nombre:'Resumen',url:'/resumen'},
    {paso:3, nombre:'Datos y Total',url:'/total'},
]

const Pasos = () => {

    const Router = useRouter()

    const calcularProgreso = () =>{
      let valor 
      if ( Router.pathname === "/"){
        valor=20
      }else if ( Router.pathname === "/resumen"){
        valor=50
      }else{
        valor=100
      }
      return valor
      
    }
  return (
    <>
      <div className="flex justify-between mb-10">
        {pasos.map((paso) =>(
            <button onClick={()=>{ Router.push(paso.url)}} className="text-3xl font-bold" key={paso.paso} >
                {paso.nombre}
            </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div className=" rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white" style={{width:`${calcularProgreso()}%`}}>

        </div>
      </div>
    </>
  )
}

export default Pasos
