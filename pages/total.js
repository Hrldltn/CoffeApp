import { useEffect , useState,useCallback } from 'react';
import {toast} from 'react-toastify'
import Layout from '../layout/Layout';
import useQuiosco from '../hooks/useQuiosco';
import {formatearDinero} from '../helpers/index'
import {PayPalScriptProvider,PayPalButtons} from '@paypal/react-paypal-js'
import axios from 'axios';

export default function Total(){

    const {pedido,nombre,setNombre,colocarOrden,total} = useQuiosco()
    const [compra , setCompra]=useState(false)

    
    const verCompra = () =>{
        setCompra(true)
    }
    
    
    useEffect(() =>{
        verCompra()
    },[compra])

    const comprobarPedido = useCallback( () =>{
        return pedido.length === 0 || nombre === '' || nombre.length < 4 
    },[pedido,nombre])
    
    

    useEffect(() =>{
        comprobarPedido()
    },[pedido,comprobarPedido])

    console.log(compra)
    return (
        <Layout pagina='Resumen'>
            <h1 className="text-4xl font-black">Confirmación de Pedido</h1>
            <p className="text-2xl my-10">Revisa el Total de tu Pedido</p>

            <form onSubmit={colocarOrden}>
                <div>
                    <label htmlFor="nombre" className="block uppercase text-slate-800 font-bold text-xl">
                        Nombre
                    </label>
                    <input id="nombre" type="text" className="bg-gray-200 w-full mt-3 lg:w-1/3 p-2 rounded-md" value={nombre} onChange={(e) => setNombre(e.target.value) }>

                    </input>
                </div>
                <div className="my-10">
                    <p className="text-2xl font-bold">Total a pagar: {' '} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>
                <PayPalScriptProvider options={{"client-id": "Aaqy098vDK_m-J36WpLtHQnpeRKBiFGUtkMGcyNsVBnp6QOjjZZbNNBoruTwTUsFqSVWA1jf9iotA3ji"}}>
                    <PayPalButtons createOrder={async () =>{
                    
                        try {
                            const res = await axios({
                                url:"http://localhost:3000/api/payment",
                                method:"POST",
                                headers:{
                                    "Content-Type": "application/json"
                                }
                            })
                            return res.data.id
                        } catch (error) {
                            console.log(error)
                        }
                    }} onCancel={(data) => toast.error('Compra Cancelada')}
                                    
                    onApprove={(data , actions) =>{
                        console.log(data)
                        verCompra()
                        actions.order.capture()
                        toast.success('Pagado correctamente')
                    }}
                    style={{layout:"vertical"}}/>
                </PayPalScriptProvider>
                <div className="mt-5">
                    <input type="submit" disabled={comprobarPedido()} className={`${comprobarPedido() ? 'bg-gray-100 text-black hover:cursor-default' : 'bg-indigo-600 text-white hover:bg-indigo-800'} text-center lg:w-1/2 px-5 py-2 rounded uppercase font-bold  hover:cursor-pointer`} value="Confirmar Pedido">
                    
                    </input>
                </div>
            </form>
        </Layout>
    )
}


