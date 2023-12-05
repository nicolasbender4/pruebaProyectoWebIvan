import { useState } from "react"

const Articulo = ({ articulo, pedido, setPedido }) => {
  const { descripcion, stock, precio } = articulo

  let [cantidad, setCantidad] = useState(0)

  // const handleAgregar = (e) => {
  //     if (articulo.stock === true) {
  //         setPedido([...pedido, {

  //             id: articulo.id,
  //             descripcion: articulo.descripcion,
  //             cantidad,
  //             precio: articulo.precio

  //         }])
  //     }
  //     else {
  //         window.alert("No se pueden agregar Articulos sin Stock");
  //         setCantidad(0)
  //     }
  // }

  const handleAgregar = (e) => {
    let tiene = false
    const newObj = Object.values(pedido)

    newObj.map((e) => {
      if (e.id === articulo.id) {
        e.cantidad = Number(e.cantidad)
        cantidad = Number(cantidad)

        e.cantidad += cantidad
      }
    })

    if (!tiene) {
      console.log("NO Existe")
      setPedido([
        ...pedido,
        {
          id: articulo.id,
          descripcion: articulo.descripcion,
          cantidad,
          precio: articulo.precio,
        },
      ])
      setCantidad(0)
      tiene = false
    } else {
      window.alert("No se pueden agregar Articulos sin Stock")
      setCantidad(0)
    }
  }

  const handleEliminar = (e) => { }

  const handleCantidad = (e) => {
    setCantidad(e.target.value)
  }

  return (
    <>
      <tr className='border-b'>
        <td className=' p-2 bg-gray-400 2/5'>
          <p className='truncate max-w-xs text-white'>{descripcion}</p>
        </td>
        <td className='p-2 1/5'>
          <p className='text-center text-gray-800'>{`${stock === true ? "SI" : "NO"
            }`}</p>
        </td>
        <td className='p-2 1/5'>
          <p className='text-center text-gray-800'>{precio}</p>
        </td>
        <td>
          <input
            className='text-center w-20'
            type='number'
            min='0'
            step='1'
            value={cantidad}
            onChange={handleCantidad}
          />
        </td>
        <td className='p-2 flex gap-5 justify-center 1/5'>
          <button
            onClick={handleEliminar}
            type='button'
            className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
          >
            Eliminar
          </button>
          <button
            onClick={handleAgregar}
            type='button'
            className='text-blue-600 hover:text-blue-700 uppercase font-bold text-xs'
          >
            Agregar
          </button>
        </td>
      </tr>
    </>
  )
}

export default Articulo
