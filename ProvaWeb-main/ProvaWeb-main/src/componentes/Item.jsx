import React from 'react'

const Item = ({item}) => {
  return (
    <tr key={item.codigo}>
        <td>{item.descricao}</td>
        <td>{item.saida}</td>
        <td>{item.entrada}</td>
        <td>{item.total}</td>
        <td>{item.codigo}</td>
    </tr>
  )
}

export default Item