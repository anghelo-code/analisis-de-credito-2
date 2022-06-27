import json


def General(prestamo, interes, periodos):
    resultado = {}
    resultado['datos'] = []
    datos = {'id': 0, 'amortizacion': '', 'paInteres': '', 'paMensual': '', 'saldo': prestamo}
    saldo = prestamo

    # ingresando la primera iteracion 
    resultado['datos'].append(datos)
    datos = {}

    paMensual = PagoMensual(prestamo, interes, periodos)
    for i in range(1, periodos + 1):
        paInteres = PagoInteres(saldo,interes)
        amortizacion = Amortizacion(paInteres, paMensual)
        saldo = Saldo(amortizacion, saldo)

        datos['id'] = i
        datos['amortizacion'] = amortizacion
        datos['paInteres'] = paInteres
        datos['paMensual'] = paMensual
        datos['saldo'] = saldo

        resultado['datos'].append(datos)

        datos = {}

    with open('./datos.json', 'w') as f:
        json.dump(resultado, f)

    return resultado


def Prueba(prestamo, interes, periodos):
    resultado = General(prestamo, interes, periodos)

    for i in resultado:
        print(i)



def PagoInteres(saldo, interes):
    return round(saldo * interes, 3)


def PagoMensual(prestamo, interes, periodos):
    var = (1 + interes)**periodos
    var2 = (interes * var)/(var - 1)
    return round(var2 * prestamo,3) 


def Amortizacion(paInteres, paMensual):
    return round(paMensual - paInteres,3)

def Saldo(amortizacion, saldo):
    return round(saldo - amortizacion, 2)


resultado = General(20000, 0.05, 12)

# prestamo = int(input("Coloque el prestamo que desea (entre 1000 a 100000 soles): "))
# while prestamo > 100000 or prestamo < 1000:
#     prestamo = int(input("Cantidad invalida, poner un valor entre 1000 a 100000 soles: "))

# tiempo_amotizacion=int(input("Ingrese tiempo de amotización (entre 3 a 36 meses): "))
# while tiempo_amotizacion > 36 or tiempo_amotizacion < 3:
#     tiempo_amotizacion = int(input("Tiempo invalido, poner un valor entre 3 a 36 meses: "))

# taza_de_interes = int(input("Ingrese la taza de interes mensual que desea (entre 0% a 20%): "))
# while taza_de_interes > 20 or taza_de_interes < 0:
#     print("Interes invalido, se tomara un interes del 5% para la simulación")
#     taza_de_interes = 5
# taza_de_interes = round(taza_de_interes / 100, 2)


# resultado = General(prestamo, taza_de_interes, tiempo_amotizacion)


print(resultado)