import React from 'react';

const CartTableHeader = () => (
    <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 text-sm font-medium text-gray-600">
        <div className="col-span-1">Seç</div>
        <div className="col-span-2">Ürün</div>
        <div className="col-span-3">İsim</div>
        <div className="col-span-2">Fiyat</div>
        <div className="col-span-2">Adet</div>
        <div className="col-span-1">Toplam</div>
        <div className="col-span-1">İşlem</div>
    </div>
);

export default CartTableHeader; 