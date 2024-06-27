import React from 'react'
import '../Styles/Transacoes.css'
import Item from '../componentes/Item'

const Transacoes = ({ list }) => {
  return (
    <div className='transacoes-section'>
      <h1 className='titulo'>Transações</h1>
      <table>
        <thead>
          <tr>
            <th>Código</th>
            <th>Descrição</th>
            <th>Entrada</th>
            <th>Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {list.map(item => (
            <Item item={item} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transacoes