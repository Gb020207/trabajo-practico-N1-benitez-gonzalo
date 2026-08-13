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

  describir(): string {
    return `${this.nombre} (${this.antiguedad} años) — sueldo: $${this.calcularSueldo().toFixed(2)}`;
  }
}

export class EmpleadoFijo extends Empleado {
  private sueldoBase: number;

  constructor(nombre: string, antiguedad: number, sueldoBase: number) {
    super(nombre, antiguedad);
    this.sueldoBase = sueldoBase;
  }

  calcularSueldo(): number {
    const bonoPorAntiguedad = 0.02 * this.antiguedad;
    return this.sueldoBase * (1 + bonoPorAntiguedad);
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

console.log("Ejercicio 3: Empleado");
const empleadoFijo = new EmpleadoFijo("Lucía", 5, 50000);
const empleadoPorHoras = new EmpleadoPorHoras("Pedro", 2, 160, 2500);
const empleadoPorComision = new EmpleadoPorComision("María", 3, 20000, 0.08);
console.log("Empleado fijo:", empleadoFijo.describir());
console.log("Empleado por horas:", empleadoPorHoras.describir());
console.log("Empleado por comisión:", empleadoPorComision.describir());
console.log("Nómina total:", calcularNomina([empleadoFijo, empleadoPorHoras, empleadoPorComision]));