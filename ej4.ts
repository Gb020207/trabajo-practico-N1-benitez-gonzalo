export class Empleado {
  protected nombre: string;
  protected antiguedad: number;

  constructor(nombre: string, antiguedad: number) {
    this.nombre = nombre;
    this.antiguedad = antiguedad;
  }

  calcularSueldo(): number {
    return 0;
  }
}

export class EmpleadoFijo extends Empleado {
  private sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bono = 0.02 * this.antiguedad;
    return this.sueldoBase * (1 + bono);
  }
}

export class EmpleadoPorHoras extends Empleado {
  private horasTrabajadas: number;
  private valorHora: number;

  constructor(nombre: string, antiguedad: number, horasTrabajadas: number, valorHora: number) {
    super(nombre, antiguedad);
    this.horasTrabajadas = horasTrabajadas;
    this.valorHora = valorHora;
  }

  calcularSueldo(): number {
    return this.horasTrabajadas * this.valorHora;
  }
}

export class EmpleadoPorComision extends Empleado {
  private ventasDelMes: number;
  private porcentajeComision: number;

  constructor(nombre: string, antiguedad: number, ventasDelMes: number, porcentajeComision: number) {
    super(nombre, antiguedad);
    this.ventasDelMes = ventasDelMes;
    this.porcentajeComision = porcentajeComision;
  }

  calcularSueldo(): number {
    return this.ventasDelMes * this.porcentajeComision;
  }
}

export function calcularNomina(empleados: Empleado[]): number {
  return empleados.reduce((total, empleado) => total + empleado.calcularSueldo(), 0);
}

export default {
  Empleado,
  EmpleadoFijo,
  EmpleadoPorHoras,
  EmpleadoPorComision,
  calcularNomina,
};

console.log("Ejercicio 4: Sueldos");
const empleado1 = new EmpleadoFijo("Carlos", 4, 60000);
const empleado2 = new EmpleadoPorHoras("Sofía", 1, 120, 3000);
const empleado3 = new EmpleadoPorComision("Daniel", 2, 15000, 0.1);
console.log("Sueldo fijo:", empleado1.calcularSueldo());
console.log("Sueldo por horas:", empleado2.calcularSueldo());
console.log("Sueldo por comisión:", empleado3.calcularSueldo());
console.log("Nomina total:", calcularNomina([empleado1, empleado2, empleado3]));