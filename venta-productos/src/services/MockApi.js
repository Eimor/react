import axios from 'axios';

let mockData = {};

mockData.getClient = (clientId) => {
    return axios.get('http://127.0.0.1:3004/clientes', {params:{nro:clientId}});
};

mockData.getProducts = () => {
    return axios.get('http://127.0.0.1:3004/productos');
};

export {mockData}