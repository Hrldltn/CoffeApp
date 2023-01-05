import Image from 'next/image'
import {useEffect , useState} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import {formatearDinero} from '../helpers/index'
const orden = ({orden}) => {
    const {id , nombre ,total,pedido} = orden
    const [valor , setValor] = useState('')
    const Total=[]
    
    useEffect(() => {
        Total.push(total)
    }, []);

    // useEffect(() => {
    //     Total.reduce(function(a, b){ return a + b; });
    // }, []);

  
    
    return (
        <>
            <div className="border p-10 space-y-5">
                <h3 className="text-2xl font-bold">Orden: {id}</h3>
                <p className="text-lg font-bold">Cliente: {nombre}</p>
                <div className="flex justify-between ">
                    <div>
                        {pedido.map(platillo =>(
                            <div key={platillo.id} className="py-3 flex border-b last-of-type:border-0 items-center">
                                <div className="space-y-2">
                                    <h4 className="text-xl  font-bold text-indigo-600">{platillo.nombre}</h4>
                                    <p className="text-lg font-bold">Precio Unitario: {formatearDinero(platillo.precio)}</p>   
                                    <p className="text-lg font-bold">Cantidad: {platillo.cantidad}</p>   
                                </div>
                                
                            </div>
                        ))}
                    </div>
                    <div className="md:flex md:items-center md:justify-between my-10">
                        <p className="mt-5 font-black text-3xl text-gray-900">
                            Total Pagado: {formatearDinero(total)}
                        </p>
                    </div>
                </div>          
            </div>            
        </>
    )
}

export default orden

