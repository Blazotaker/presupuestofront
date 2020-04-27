import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 4000),
    new Ingreso('Venta de carro', 500)
  ]

  eliminar(ingreso: Ingreso) {
    const indice = this.ingresos.indexOf(ingreso);
    console.log(indice);
    this.ingresos.splice(indice, 1);
  }

}
