import {Animal} from './Animal';
import {IEmitirSom} from './iEmitirSom';
import {ICorrer} from './iCorrer';

class Cavalo extends Animal implements IEmitirSom, ICorrer {
   public corre: boolean;

   constructor(nome: string, idade: number, corre: boolean){
      super(nome, idade);
      this.corre = corre;
   }

   public emitirSom(): void {
       console.log(`${this.nome} relinchando`);
   }

   public correr(): void{
      console.log(`${this.nome} começou a correr`);
   }
}
export{Cavalo};