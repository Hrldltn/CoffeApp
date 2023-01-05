import Head from "next/head";
import {useState , useEffect} from 'react'
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useRouter} from 'next/router'

export default function AdminLayout({ children, pagina }) {

  const Router = useRouter()
  const [activo,setActivo] = useState(false)

  useEffect(()=>{
    if(Router.pathname === "/Historial"){
      setActivo(true)
    }
    if(Router.pathname === "/admin"){
      setActivo(false)
    }
  },[])


  return (
    <>
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>

      <div className="md:flex">
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                <Image
                    width={300}
                    height={100}
                    src="/assets/img/logo.svg"
                    alt="imagen logotipo"
                />
                <div className="mt-10">
                  <button type="button" onClick={ () => Router.push('/Historial')} className={`${activo ? 'hidden' : 'block' } bg-indigo-600 hover:bg-indigo-800 text-white ml-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg`}>
                    Ver Historial de Ventas
                  </button>
                  <button type="button" onClick={ () => Router.push('/admin')} className={`${activo ? 'block' : 'hidden' } bg-indigo-600 hover:bg-indigo-800 text-white ml-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-lg`}>
                    Ver Panel Administrador
                  </button>
                </div>
            </aside>
            

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                <div className="p-10">
                    {children}
                </div>
            </main>
      </div>
      <ToastContainer />
    </>
  );
}