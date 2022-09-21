import { Animal } from "./Animal";
import { Cavalo } from "./cavalo";
import { Cachorro } from "./cachorro";
import { Preguica } from "./preguica";
import { ICorrer } from "./iCorrer";
import { IEmitirSom } from "./iEmitirSom";
import { ISubirArvores } from "./iSubirArvores";

const cavalo: Cavalo = new Cavalo('Ronaldo', 5, true);
const cachorro: Cachorro = new Cachorro('Robson', 5, true);
const preguica: Preguica = new Preguica('ligeirinho', 5, true);

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
correr(cavalo);
console.log();

emitirsom(cachorro);
correr(cachorro);
console.log();

emitirsom(preguica);
subirArvore(preguica);