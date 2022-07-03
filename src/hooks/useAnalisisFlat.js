import { useEffect } from 'react';

const useAnalisisFlat = (prestamo, interes, periodos, setResultado) => {
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

    const paInteres = PagoInteres(saldo,interes);
    const amortizacion = Amortizacion(prestamo, periodos);
    const paMensual = PagoMensual(paInteres, amortizacion) 
    

    for (let i = 1; i <= periodos; i++) {
        
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


const PagoMensual = (paInteres, amortizacion) => {
    let variable = parseFloat(paInteres) + parseFloat(amortizacion);
    return variable.toFixed(3);
}


const Amortizacion = (periodos, prestamo) => {
    let variable = prestamo / periodos;
    return variable.toFixed(3);
}


const Saldo = (amortizacion, saldo) => {
    let variable = parseFloat(saldo) - parseFloat(amortizacion);
    return variable.toFixed(3);
}


export default useAnalisisFlat