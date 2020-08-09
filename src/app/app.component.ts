import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { IngresoServicio } from './ingreso/ingreso.service';
import { EgresoServicio } from './egreso/egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';

  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(private ingresoServicio: IngresoServicio, private egresoServicio: EgresoServicio) {
    this.ingresos = this.ingresoServicio.ingresos;
    this.egresos = this.egresoServicio.egresos;
  }

  getIngresoTotal(): number {
    let ingresoTotal = 0;
    this.ingresos.forEach(ingreso => {
      ingresoTotal += ingreso.valor;
    });

    return ingresoTotal;
  }

  getEgresoTotal(): number {
    let egresoTotal = 0;
    this.egresos.forEach(egreso => {
      egresoTotal += egreso.valor;
    });

    return egresoTotal;
  }

  getPorcentajeTotal(): number {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal(): number {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
