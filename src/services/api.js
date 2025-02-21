import axios from 'axios';

const api = axios.create({
    baseURL: 'https://workintech-fe-ecommerce.onrender.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Token'ı axios instance'ına ekleniyor
const token = localStorage.getItem('token');
if (token) {
    api.defaults.headers.common['Authorization'] = token;
}

export default api; 