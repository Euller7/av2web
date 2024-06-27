import React from 'react'
import '../Styles/Home.css'  

const Home = ( { totalEntradas, totalSaidas, total } ) => {
  return (
    <div>
        <h1 className='main-title'>Home</h1>
        <div className='conteudo-info'>
            <p className='info-home'><span>Total Entradas:</span> {totalEntradas}</p>
            <p className='info-home'><span>Total Saidas:</span> {totalSaidas}</p>
            <p className='info-home'><span>Saldo Atual:</span> {total} </p>
        </div>

    </div>
  )
}

export default Home