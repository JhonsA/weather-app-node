const axios = require('axios');

const getClima = async( lat, lng ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=9dd43b11928282abde62d9553b575c76&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}