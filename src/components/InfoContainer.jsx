import React from 'react';

const InfoContainer = () => {
    return (
        <div
            className="w-[414px] h-[999px] flex flex-col justify-center items-center p-8 bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/414/999?random=9')" }}
        >
            <p className="text-sm text-gray-600">Küçük Yazı</p>
            <h2 className="mt-2 text-3xl font-bold text-gray-800">Büyük Başlık</h2>
            <p className="mt-2 text-base text-gray-700 text-center">
                Açıklama buraya gelecek. Detaylı açıklamayı buraya ekleyebilirsiniz.
            </p>
            <div className="mt-6 flex flex-col gap-4 w-full">
                <button className="w-full bg-blue-500 text-white py-2 rounded">
                    Buton 1
                </button>
                <button className="w-full bg-white text-blue-500 border border-blue-500 py-2 rounded">
                    Buton 2
                </button>
            </div>
        </div>
    );
};

export default InfoContainer;