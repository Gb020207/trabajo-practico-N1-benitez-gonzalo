export class Producto {
    nombre: string;
    precio: number;
    categoria: string;
    stock: number;

constructor(nombre: string,precio: number,categoria: string,stock: number){

    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.stock = stock;
}
 describir():string{
    return "nombre:" + this.nombre + "precio:" + this.precio + "categoria:" + this.categoria + "stock:" + this.stock;
 }
 hayStock(cantidad: number):boolean{
    return this.stock >= cantidad && cantidad <= this.stock;}
 venderUnidades(cantidad: number): void{
    if(this.stock >= cantidad && cantidad <= this.stock){
        this.stock -= cantidad;

    }
 }
 aplicarDescuento(porcentaje: number): number { 
   const descuento = Math.max(0, Math.min(porcentaje,100));
   return this.precio * (1 -descuento / 100);
 }


}

export default Producto;
