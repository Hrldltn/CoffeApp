import Image from "next/image"
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {

    const {categoriaActual , handleClickCategoria} = useQuiosco()
    const {nombre,icono,id} = categoria

  return (
    <div className={`${categoriaActual?.id === id ? 'bg-amber-900' : ''} flex items-center gap-4 w-full border p-5 hover:bg-amber-900 hover:cursor-pointer`} onClick={()=>handleClickCategoria(id)}>
      
      <Image
        width={0}
        height={0}
        style={{ width: '20%', height: 'auto' }}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
      ></Image>
      <button type="button" className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </button>

    </div>
  )
}

export default Categoria
