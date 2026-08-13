export class CuentaBancaria {
  readonly titular: string;
  private saldo: number;
  private historial: string[];

  constructor(titular: string, montoInicial: number) {
    if (montoInicial < 0) {
      throw new Error("El monto inicial no puede ser negativo");
    }

    this.titular = titular;
    this.saldo = montoInicial;
    this.historial = [`saldo inicial: +${montoInicial}`];
  }

  depositar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto de depósito debe ser mayor a 0");
    }

    this.saldo += monto;
    this.historial.push(`depósito: +${monto}`);
  }

  retirar(monto: number): void {
    if (monto <= 0) {
      throw new Error("El monto de retiro debe ser mayor a 0");
    }

    if (monto > this.saldo) {
      throw new Error("Saldo insuficiente para el retiro solicitado");
    }

    this.saldo -= monto;
    this.historial.push(`retiro: -${monto}`);
  }

  consultarSaldo(): number {
    return this.saldo;
  }

  obtenerHistorial(): string[] {
    return [...this.historial];
  }
}

export default CuentaBancaria;