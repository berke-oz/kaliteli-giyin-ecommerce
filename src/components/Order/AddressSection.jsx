import React, { useState } from 'react';
import { useAddresses } from '../../hooks/useAddresses';
import AddressForm from './AddressForm';
import AddressCard from './AddressCard';
import { MapPin, Plus, Truck, Receipt, X } from 'lucide-react';

const AddressSection = () => {
    const [showForm, setShowForm] = useState(false);
    const [editingAddress, setEditingAddress] = useState(null);
    const [selectedShippingId, setSelectedShippingId] = useState(null);
    const [selectedBillingId, setSelectedBillingId] = useState(null);
    const [addressType, setAddressType] = useState(null);

    const { addresses, loading, error, saveAddress, removeAddress } = useAddresses();

    const handleSubmit = async (formData) => {
        const success = await saveAddress(formData, editingAddress?.id);
        if (success) {
            setShowForm(false);
            setEditingAddress(null);
            setAddressType(null);
        }
    };

    const handleDelete = async (addressId) => {
        if (window.confirm('Bu adresi silmek istediğinizden emin misiniz?')) {
            const success = await removeAddress(addressId);
            if (success) {
                if (selectedShippingId === addressId) setSelectedShippingId(null);
                if (selectedBillingId === addressId) setSelectedBillingId(null);
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-[400px] flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
                {/* Teslimat Adresi Bölümü */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <Truck className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                        <h2 className="text-xl font-semibold text-gray-800 font-poppins">Teslimat Adresi</h2>
                    </div>

                    {addresses.length === 0 ? (
                        <div className="text-center py-10 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                            <MapPin className="mx-auto h-10 w-10 text-gray-400" strokeWidth={1.5} />
                            <h3 className="mt-2 text-sm font-medium text-gray-900 font-inter">Kayıtlı adres bulunamadı</h3>
                            <p className="mt-1 text-sm text-gray-500 font-inter">Yeni bir teslimat adresi ekleyerek başlayın.</p>
                            <div className="mt-4">
                                <button
                                    onClick={() => {
                                        setEditingAddress(null);
                                        setShowForm(true);
                                        setAddressType('shipping');
                                    }}
                                    className="inline-flex items-center px-4 py-2 border border-transparent 
                                             shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 
                                             hover:bg-blue-700 focus:outline-none focus:ring-2 
                                             focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 font-inter"
                                >
                                    <Plus className="-ml-1 mr-2 h-5 w-5" strokeWidth={1.5} />
                                    Yeni Adres Ekle
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-end mb-4">
                                <button
                                    onClick={() => {
                                        setEditingAddress(null);
                                        setShowForm(true);
                                        setAddressType('shipping');
                                    }}
                                    className="inline-flex items-center px-4 py-2 border border-transparent 
                                             text-sm font-medium rounded-md shadow-sm text-white 
                                             bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                                             focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 font-inter"
                                >
                                    <Plus className="-ml-1 mr-2 h-5 w-5" strokeWidth={1.5} />
                                    Yeni Adres Ekle
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addresses.map(address => (
                                    <AddressCard
                                        key={address.id}
                                        address={address}
                                        isSelected={selectedShippingId === address.id}
                                        onSelect={() => setSelectedShippingId(address.id)}
                                        onEdit={() => {
                                            setEditingAddress(address);
                                            setShowForm(true);
                                            setAddressType('shipping');
                                        }}
                                        onDelete={() => handleDelete(address.id)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                {/* Fatura Adresi Bölümü */}
                <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <Receipt className="h-6 w-6 text-blue-600" strokeWidth={1.5} />
                            <h2 className="text-xl font-semibold text-gray-800 font-poppins">Fatura Adresi</h2>
                        </div>
                        <button
                            onClick={() => {
                                setEditingAddress(null);
                                setShowForm(true);
                                setAddressType('billing');
                            }}
                            className="inline-flex items-center px-4 py-2 border border-transparent 
                                     text-sm font-medium rounded-md shadow-sm text-white 
                                     bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 
                                     focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 font-inter"
                        >
                            <Plus className="-ml-1 mr-2 h-5 w-5" strokeWidth={1.5} />
                            Yeni Fatura Adresi
                        </button>
                    </div>

                    <div className="mb-6 bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                checked={selectedBillingId === selectedShippingId}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSelectedBillingId(selectedShippingId);
                                    } else {
                                        setSelectedBillingId(null);
                                    }
                                }}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 
                                         border-gray-300 rounded transition-colors duration-200"
                            />
                            <span className="ml-2 text-sm text-blue-800 font-inter">
                                Teslimat adresi ile aynı
                            </span>
                        </label>
                    </div>

                    {!selectedBillingId || selectedBillingId !== selectedShippingId ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {addresses.map(address => (
                                <AddressCard
                                    key={address.id}
                                    address={address}
                                    isSelected={selectedBillingId === address.id}
                                    onSelect={() => setSelectedBillingId(address.id)}
                                    onEdit={() => {
                                        setEditingAddress(address);
                                        setShowForm(true);
                                        setAddressType('billing');
                                    }}
                                    onDelete={() => handleDelete(address.id)}
                                />
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>

            {/* Form Modal */}
            {showForm && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center 
                               justify-center p-4 z-50">
                    <div className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 font-poppins">
                                {editingAddress ? 'Adresi Düzenle' : `Yeni ${addressType === 'shipping' ? 'Teslimat' : 'Fatura'} Adresi Ekle`}
                            </h3>
                            <button
                                onClick={() => {
                                    setShowForm(false);
                                    setEditingAddress(null);
                                    setAddressType(null);
                                }}
                                className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
                            >
                                <span className="sr-only">Kapat</span>
                                <X className="h-6 w-6" strokeWidth={1.5} />
                            </button>
                        </div>
                        <AddressForm
                            initialData={editingAddress}
                            onSubmit={handleSubmit}
                            onCancel={() => {
                                setShowForm(false);
                                setEditingAddress(null);
                                setAddressType(null);
                            }}
                            addressType={addressType}
                        />
                    </div>
                </div>
            )}

            {error && (
                <div className="mt-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg font-inter">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <X className="h-5 w-5 text-red-400" strokeWidth={1.5} />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm">{error}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddressSection; 