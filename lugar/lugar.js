const axios = require('axios');

const getLugarLatLng = async( direccion ) => {

    const encodedUrl = encodeURI( direccion );
    
    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUrl }.json?`,
        params: {'access_token': 'pk.eyJ1IjoibjB6eiIsImEiOiJja2syejVrcmoweXZwMnJwamE2cTg4cndqIn0.O5fFcaStUo0gX2dWLIv85w'}
      });
    
    const resp = await instance.get();

    if ( resp.data.features.length === 0 ) {
        throw new Error(`No hay resultados para ${ direccion }`);
    }

    const data = resp.data.features[0];
    const lugar = data.place_name;
    const lat = data.center[1];
    const lng = data.center[0];
    
    return {
        lugar,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}