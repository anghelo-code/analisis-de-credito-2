import React, { useEffect, useState } from "react";

const useAnalisis = (prestamo, interes, periodos, setResultado) =>{

    interes = interes / 100

    useEffect(() => {
        const resultado = Datos(prestamo, interes, periodos);
        setResultado(resultado);
        console.log(resultado)
    },[prestamo, interes, periodos])
}

const Datos = (prestamo, interes, periodos) => {
    let resultado = [];
    let datos = {
        'id': 0, 
        'amortizacion': '', 
        'paInteres': '', 
        'paMensual': '', 
        'saldo': prestamo
    };

    
    let saldo = prestamo;
    resultado.push(datos);
    datos = {};

    const paMensual = PagoMensual(prestamo, interes, periodos);

    

    for (let i = 1; i <= periodos; i++) {
        let paInteres = PagoInteres(saldo,interes);
        let amortizacion = Amortizacion(paInteres, paMensual);
        saldo = Saldo(amortizacion, saldo);

        datos['id'] = i;
        datos['amortizacion'] = amortizacion;
        datos['paInteres'] = paInteres;
        datos['paMensual'] = paMensual;
        datos['saldo'] = saldo;

        resultado.push(datos);
        datos = {};
    }

    return resultado;

}




const PagoInteres = (saldo, interes) => {
    let variable = saldo * interes;
    return variable.toFixed(3);
}


const PagoMensual = (prestamo, interes, periodos) => {
    let oper = (1 + interes)**periodos;
    let oper2 = ((interes * oper)/(oper - 1))*prestamo;
    return oper2.toFixed(2);
}


const Amortizacion = (paInteres, paMensual) => {
    let oper = paMensual - paInteres;
    return oper.toFixed(3);
}

const Saldo = (amortizacion, saldo) => {
    let oper = saldo - amortizacion;
    return oper.toFixed(2);
}


export default useAnalisis;