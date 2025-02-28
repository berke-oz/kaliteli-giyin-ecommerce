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

// Adres işlemleri için API fonksiyonları
export const getUserAddresses = () => {
    return api.get('/user/address');
};

export const addAddress = (addressData) => {
    return api.post('/user/address', addressData);
};

export const updateAddress = (addressData) => {
    return api.put('/user/address', addressData);
};

export const deleteAddress = (addressId) => {
    return api.delete(`/user/address/${addressId}`);
};

export default api; 