import { Animal } from "./Animal";
import { IEmitirSom } from "./iEmitirSom";
import { ISubirArvores } from "./iSubirArvores";

class Preguica extends Animal implements IEmitirSom, ISubirArvores{
   public sobeArvore: boolean;

   constructor(nome: string, idade: number, sobeArvore: boolean){
      super(nome, idade);
      this.sobeArvore = this.sobeArvore;
   }
   public emitirSom(): void {
      console.log(`${this.nome} zZz`);
  }
  public subirArvores(): void {
      console.log(`${this.nome} começou a subir na arvore`);
  }
}
export{Preguica};