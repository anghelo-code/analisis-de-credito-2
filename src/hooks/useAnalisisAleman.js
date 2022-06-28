import { useEffect } from 'react';

const useAnalisisAleman = (prestamo, interes, periodos, setResultado) => {
    
    interes = interes / 100;

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

    const amortizacion = Amortizacion(prestamo, periodos);
    

    

    for (let i = 1; i <= periodos; i++) {
        let paInteres = PagoInteres(saldo,interes);
        let paMensual = PagoMensual(amortizacion, paInteres);
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


const PagoMensual = (amortizacion, paInteres) => {
    let oper = parseInt(amortizacion) + parseInt(paInteres);
    console.log('pago de mensual: ', oper);
    return oper.toFixed(2);
}


const Amortizacion = (saldo, periodos) => {
    let oper = saldo/periodos;
    return oper.toFixed(3);
}

const Saldo = (amortizacion, saldo) => {
    let oper = parseInt(saldo) - parseInt(amortizacion);
    return oper.toFixed(2);
}

export default useAnalisisAleman