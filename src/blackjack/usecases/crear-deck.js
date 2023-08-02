import _ from "underscore";

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'] 
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if(!tiposDeCarta || tiposDeCarta === 0) throw new Error('TiposDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales === 0) throw new Error('TiposEspeciales es obligatorio como un arreglo de string');

    let deck = [];

    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    deck = _.shuffle(deck);
    return deck;
}

// export default crearDeck;



// Notas varias
/* (() => {
    console.log(Boolean(''))
    console.log(Boolean(-0))
    console.log(Boolean(-82))
    console.log(Boolean(100));
    console.log(Boolean(1));


    let price;
    console.log(Boolean(price));

    function stri(a, n) {
        return console.log(a.charAt(n))
    }
    stri('Hello', 2)


    let strh = ['Hello', 2, 8];
    strh.forEach((element, index) => {
        console.log(element, index)
    });

    let a = 'Hello';
    let b = [...a];

    function arr(a, n) {
        return console.log(a[n - 1]);
    }
    arr('Diego', 1);

    function myFunction(a) {
        return a.slice(3);
    }


    function myFunction(str) {
        return str.slice(-3);
    }
}) */