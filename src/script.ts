import { Animal } from "./Animal";
import { Cavalo } from "./cavalo";
import { Cachorro } from "./cachorro";
import { Preguica } from "./preguica";
import { ICorrer } from "./iCorrer";
import { IEmitirSom } from "./iEmitirSom";
import { ISubirArvores } from "./iSubirArvores";

const cavalo: Cavalo = new Cavalo('Ronaldo', 5, true);

function emitirsom(Animal: IEmitirSom){
   Animal.emitirSom();
}
function correr(Animal: ICorrer){
   Animal.correr();
}
function subirArvore(Animal: ISubirArvores){
   Animal.subirArvores();
}

emitirsom(cavalo);
emitirsom(Cachorro);
emitirsom(Preguica);