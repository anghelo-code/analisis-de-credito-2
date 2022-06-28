import React from 'react';

export const Tabla = ({resultado}) => {

    
    
    return (
    <div className="row table-div">
      <div className="col-md-12">
          <table className="table table-bordered">
              <thead className="table-dark table-thead">
                <tr>
                  <th scope="col">Periodo</th>
                  <th scope="col">Amortizacion</th>
                  <th scope="col">Pago de Interes</th>
                  <th scope="col">Pago Mensual</th>
                  <th scope="col">Saldo Capital</th>
                </tr>
              </thead> 
              <tbody>

              {
                resultado.map(item => (

                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.amortizacion}</td>
                  <td>{item.paInteres}</td>
                  <td>{item.paMensual}</td>
                  <td>{item.saldo}</td>
                </tr>

              ))}
              </tbody>
          </table>

      </div>
    </div>
  )
}
