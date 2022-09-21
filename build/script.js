"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cavalo_1 = require("./cavalo");
var cachorro_1 = require("./cachorro");
var preguica_1 = require("./preguica");
var cavalo = new cavalo_1.Cavalo('Ronaldo', 5, true);
var cachorro = new cachorro_1.Cachorro('Robson', 5, true);
var preguica = new preguica_1.Preguica('ligeirinho', 5, true);
function emitirsom(Animal) {
    Animal.emitirSom();
}
function correr(Animal) {
    Animal.correr();
}
function subirArvore(Animal) {
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
