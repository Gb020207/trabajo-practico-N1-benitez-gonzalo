export class Persona {
  private readonly dni: string;
  public nombre: string;
  private _edad: number = 0;
  private _email: string = "";

  constructor(dni: string, nombre: string, edad: number, email: string) {
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.email = email;
  }

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor < 0 || valor > 120) {
      throw new Error("La edad debe estar entre 0 y 120");
    }

    this._edad = valor;
  }

  get email(): string {
    return this._email;
  }

  set email(valor: string) {
    if (!valor.includes("@")) {
      throw new Error("Email inválido: debe contener @");
    }

    this._email = valor;
  }

  get esMayorDeEdad(): boolean {
    return this._edad >= 18;
  }

  get datosPublicos(): string {
    return `${this.nombre} — mayor de edad: ${this.esMayorDeEdad}`;
  }
}

export default Persona;

console.log("Ejercicio 5: Persona");
const persona = new Persona("40123456", "Gonzalo", 24, "gonzalo@email.com");
console.log("Datos públicos:", persona.datosPublicos);
console.log("¿Es mayor de edad?", persona.esMayorDeEdad);
persona.edad = 30;
persona.email = "nuevo@email.com";
console.log("Edad actual:", persona.edad);
console.log("Email actual:", persona.email);