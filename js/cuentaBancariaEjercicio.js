class Cuenta {
    constructor() {
        this._cuentas = new Array(3); //Array para almacenar cuentas de ususarios
        this._saldos = new Array(3); //Array para almacenar saldos  de las cuentas
    }

    getCuenta(index) {
        return this._cuentas[index];
    }

    setCuenta(index, cuenta) {
        this._cuentas[index] = cuenta;
    }

    getSaldo(index) {
        return this._saldos[index];
    }

    setSaldo(index,saldo) {
        this._saldos[index] = saldo;
    }


    creaCuenta() {

        for (let i = 0; i < this._cuentas.length; i++) {
            let cuenta = prompt(`ingrese el nuevo Numero de cuenta ${i+1}`);
            let saldo = parseFloat(prompt(`Ingrese el saldo pata la nueva cuenta ${cuenta}`));

            this.setCuenta(i, cuenta);
            this.setSaldo(i, saldo);
        }
    }

    consultarSaldo() {

        let cuenta = prompt(`Ingrese el nuevo Numero de cuenta a consultar saldo`);
        let index = this._cuentas.indexOf(cuenta); // Busca el indice del valor como argumento

        if (index !== -1) {
            alert(`El saldo de la cuenta : ${cuenta} es de ${this.getSaldo(index)} `)
        } else {
            alert(`Esa cuenta no existe`)
        }
    }
}

const cuenta = new Cuenta();
let opcion;

do {
    opcion = parseInt(prompt(`*****Menu Cajero Mi Banc*******
        1. Crear Cuentas
        2. Consultar saldos cuenta
        3. salir `))

    switch (opcion) {
        case 1:
            cuenta.creaCuenta();
            break;
        case 2:
            cuenta.consultarSaldo();
            break;
        case 3:

            break;

        default:
            alert("Opcion no valida. Intente nuevamente.")
            break;
    }
} while (opcion !== 3);