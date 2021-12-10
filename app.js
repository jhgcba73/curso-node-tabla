/*5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35 
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50*/

const yargs = require('yargs');
//const { demandOption } = require('yargs');
const { crearArchivo} = require('./helpers/multiplicar');
const colors = require ('colors');
const argv = require( 'yargs')
                    .option('b', {
                        alias: 'base',
                        type: 'number',
                        demandOption: 'true',
                        describe: 'es la base de la tabla de multiplicar'
                    })
                    .option('h', {
                        alias: 'hasta',
                        type: 'number',
                        default: 10,
                        describe: 'Este es el numero hasta donde quieres que llegue la tabla'
                    })
                    .option('l', {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: 'true',
                        default: false,
                        describe:   'muestra la tabla en la consola'
                    })
                    .check( ( argv, options ) =>{
                        if (isNaN( argv.b ) ){
                            throw 'La base tiene que ser un numero'
                        }
                        return true;
                    })
                    .argv;




//console.clear();

//const base = 5;

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base=5 ] = arg3.split('=');

//console.log (process.argv);
//console.log ('base = yargs', argv.b);
console.log ( argv );


crearArchivo( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));
