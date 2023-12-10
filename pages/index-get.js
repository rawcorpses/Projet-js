'use strict';

const { readFile } = require('fs');
const { promisify } = require('util');
const readFileAsync = promisify(readFile);

const cheminDuFichier = 'C:\\Users\\lauri\\OneDrive\\Bureau\\Projett js\\structure\\index.html';
const creationA = 'C:\Users\lauri\OneDrive\Bureau\Projett js\structure\creationA.html';
const creationB = 'C:\Users\lauri\OneDrive\Bureau\Projett js\structure\creationB.html';


module.exports = async() => {
    const contenu = await readFileAsync(cheminDuFichier, { encoding: 'UTF-8' });

    return contenu;
};