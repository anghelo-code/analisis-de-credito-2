import { useEffect } from 'react';

const useAnalisisIngles = (prestamo, interes, periodos, setResultado) => {
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

    for (let i = 1; i <= periodos; i++) {

        if (i != periodos){
            datos['id'] = i;
            datos['amortizacion'] = 0;
            datos['paInteres'] = paInteres;
            datos['paMensual'] = paInteres;
            datos['saldo'] = saldo;

        } else {
            datos['id'] = periodos;
            datos['amortizacion'] = saldo;
            datos['paInteres'] = paInteres;
            datos['paMensual'] = parseInt(paInteres) + parseInt(saldo);
            datos['saldo'] = '0';
        }

        resultado.push(datos);
        datos = {};
    }

    return resultado;
}


const PagoInteres = (saldo, interes) => {
    let variable = saldo * interes;
    return variable.toFixed(3);
}


export default useAnalisisIngles