import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'
import Categoria from './Categoria'

const Sidebar = () => {
  const {categorias} = useQuiosco()

  return (
    <>
    <div className="container 2xl:ml-6 mt-3">
      <Image width={0} 
             height={0}
             style={{ width: '80%', height: 'auto' }}
             src="/assets/img/logo.svg"
             alt="image logotipo"
             priority={true}
        /> 
        <nav className="mt-10 mx-10 xl:mx-0">
          {categorias.map(categoria => (
            <Categoria
              key={categoria.id}
              categoria={categoria}
            />
          ))}
        </nav>
      </div>     
    </>
  )
}

export default Sidebar
