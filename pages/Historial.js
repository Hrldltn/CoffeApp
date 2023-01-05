import useSWR from 'swr'
import axios from 'axios'
import React from 'react'
import AdminLayout from "../layout/AdminLayout"
import VentasRealizadas from '../components/VentasRealizadas'

const Historial = () => {
  const fetcher = () => axios('/api/ventas').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ventas',fetcher, {refreshInterval: 100})
  
  return (
    <AdminLayout  pagina={'Historial'}>
       <h1 className="text-4xl font-black">Historial de Ventas</h1>
        <p className="text-2xl my-10">Total de Ventas Realizadas</p>

        {data && data.length ? data.map(orden => 
          <VentasRealizadas key={orden.id} orden={orden}/>
        ) : <p>No tenemos ordenes Pendientes</p>}
    </AdminLayout>
  )
}

export default Historial
