import { useLoaderData } from "react-router-dom"
import Articulo from "../components/Articulo"
import articulos from "../data/DATA.json"
import { useEffect, useState } from "react"
import Swal from "sweetalert2"

export function loader() {
  const datos = articulos
  return datos
}

const Pedidos = () => {
  const data = useLoaderData()
  const [pedido, setPedido] = useState([])
  const [total, setTotal] = useState(0)
  const [articulos, setArticulos] = useState(data)

  function handleLimpiarCarrito() {
    if (pedido.length > 0) {
      Swal.fire({
        title: "¿seguro quiere eliminar los articulos?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Limpiar!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Carrito Vacío.",
            icon: "success",
          })
          setPedido([])
          setTotal(0)
        }
      })
    }
  }
  useEffect(() => {
    let subTotal = 0
    if (pedido.length > 0) {
      pedido.map((art) => {
        subTotal += art.precio * art.cantidad

        setTotal(subTotal)
      })
    }
  }, [pedido])

  const handleEnviarPedido = () => {
    if (pedido.length > 0) {
      Swal.fire({
        title: "Pedido Enviado!",
        icon: "success",
      }).then((res) => {
        if (res.isConfirmed) {
          setPedido([])
          setTotal(0)
        }
      })
    }
  }

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Pedidos</h1>
      <p className='mt-3'>Administra Tus Pedidos</p>
      {articulos.length ? (
        // <div className='flex flex-wrap gap-5 justify-evenly lg:whitespace-nowrap'>
        <div className='grid grid-cols-1 xl:grid-cols-2 '>
          <div className='w-10/12'>
            <h2 className='g- font-black mt-3 text-2xl text-blue-900'>
              Articulos
            </h2>
            <table className='w-full  bg-white shadow mt-2 table-auto)'>
              <thead className='bg-blue-800 text-white'>
                <tr>
                  <th className='p-2 w-2/6'>Descripcion</th>
                  <th className='p-2 w-1/6'>Stock</th>
                  <th className='p-2 w-1/6'>Precio</th>
                  <th className='p-2 w-1/6'>Cantidad</th>
                  <th className='p-2 w-1/6'>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {articulos.map((articulo) => (
                  <Articulo
                    articulo={articulo}
                    key={articulo.id}
                    pedido={pedido}
                    setPedido={setPedido}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <div div className='w-10/12 xl:ml-auto'>
            <h2 className='font-black mt-3 text-2xl text-blue-900'>
              Articulos
            </h2>
            <table className='w-full  bg-white shadow mt-2 table-auto)'>
              <thead className='bg-blue-800 text-white'>
                <tr>
                  <th className='p-2 w-2/6'>Descripcion</th>
                  <th className='p-2 w-1/6'>Precio</th>
                  <th className='p-2 w-1/6'>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {pedido.length > 0 ? (
                  pedido.map((ped) => (
                    <tr key={ped.id} className='border-b'>
                      <th className='p-2 w-2/6'>
                        <p>{ped.descripcion}</p>
                      </th>
                      <th className='p-2 w-1/6'>
                        <p>{ped.precio}</p>
                      </th>
                      <th className='p-2 flex justify-evenly items-center'>
                        <button
                          // onClick={ }
                          type='button'
                          className='text-red-600 hover:text-red-700 uppercase font-bold text-xl'
                        >
                          -
                        </button>
                        <p>{ped.cantidad}</p>
                        <button
                          // onClick={ }
                          type='button'
                          className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xl'
                        >
                          +
                        </button>
                      </th>
                    </tr>
                  ))
                ) : (
                  <p>No hay articulos</p>
                )}
              </tbody>
            </table>
            {total > 0 && (
              <p className='w-full text-xl bg-white shadow-md text-right font-bold border pr-10 py-3'>{`TOTAL = ${total}`}</p>
            )}
            <button
              onClick={handleLimpiarCarrito}
              class='my-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full xl:ml-auto '
            >
              Limpiar Carrito
            </button>
            <button
              onClick={() => handleEnviarPedido()}
              class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full xl:ml-auto '
            >
              Enviar Pedido
            </button>
          </div>
        </div>
      ) : (
        <p className='text-center mt-10'>No hay articulos aún</p>
      )}
    </>
  )
}

export default Pedidos
