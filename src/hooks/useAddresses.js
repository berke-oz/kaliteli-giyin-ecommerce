import { useState, useCallback, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-toastify';

export const useAddresses = () => {
    const [addresses, setAddresses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAddresses = useCallback(async () => {
        try {
            setLoading(true);
            const response = await api.get('/user/address');
            setAddresses(response.data);
            setError(null);
        } catch (err) {
            setError('Adresler yüklenirken bir hata oluştu');
            toast.error('Adresler yüklenemedi');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAddresses();
    }, [fetchAddresses]);

    const saveAddress = async (formData, editingId = null) => {
        try {
            if (editingId) {
                await api.put('/user/address', { ...formData, id: editingId });
                toast.success('Adres başarıyla güncellendi');
            } else {
                await api.post('/user/address', formData);
                toast.success('Adres başarıyla eklendi');
            }
            await fetchAddresses();
            return true;
        } catch (err) {
            toast.error('Adres kaydedilemedi');
            return false;
        }
    };

    const removeAddress = async (addressId) => {
        try {
            await api.delete(`/user/address/${addressId}`);
            toast.success('Adres başarıyla silindi');
            await fetchAddresses();
            return true;
        } catch (err) {
            toast.error('Adres silinemedi');
            return false;
        }
    };

    return {
        addresses,
        loading,
        error,
        fetchAddresses,
        saveAddress,
        removeAddress
    };
}; 