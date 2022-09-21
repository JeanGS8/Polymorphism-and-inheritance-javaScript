import { Animal } from "./Animal";
import { ICorrer } from "./iCorrer";
import { IEmitirSom } from "./iEmitirSom";

class Cachorro extends Animal implements IEmitirSom, ICorrer {
   public corre: boolean;

   constructor(nome: string, idade: number, corre: boolean){
      super(nome, idade);
      this.corre = corre;
   }

   public emitirSom(): void {
       console.log(`${this.nome} late`);
   }

   public correr(): void {
       console.log(`${this.nome} começou a correr`);
   }
}
export {Cachorro};