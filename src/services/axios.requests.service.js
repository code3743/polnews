const axios = require('axios');
const { BASE_URL } = require('../config/constants');


/**
 * 
 * @param {string} path 
 * @returns {Promise<string>}
 */
const fetchData = async (path) => {
    try {
        const response = await axios.get(`${BASE_URL}${path}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    fetchData
}