import sendRequest from './send-request';
const BASE_URL = '/api/products';

export function getById(id) {
    return sendRequest(`${BASE_URL}/${id}`);
}
