const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('./config/yargs').argv;

// lugar.getLugarLatLng( argv.direccion )
//     .then( console.log );

// clima.getClima( -36.91667, -73.01667 )
//     .then( console.log )
//     .catch( console.log );

const getInfo = async( direccion ) => {

    try {
        const obtenerUbicacion = await lugar.getLugarLatLng( direccion );
        const obtenerClima = await clima.getClima( obtenerUbicacion.lat, obtenerUbicacion.lng );
        return `El clima de ${ obtenerUbicacion.lugar} es de ${ obtenerClima } grados.`;
    } catch( err ) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }
}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );