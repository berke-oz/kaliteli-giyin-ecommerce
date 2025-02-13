import React from 'react';

const InfoContainer = () => {
    return (
        <div
            className="w-full h-[999px] md:w-full md:h-[682px] flex flex-col md:flex-row justify-center items-center p-8 bg-cover bg-center"
            style={{ backgroundImage: "url('https://picsum.photos/1440/682?random=9')" }}
        >
            <div className="md:w-1/2 flex flex-col justify-center items-center md:items-end text-center md:text-right">
                <p className="text-sm text-gray-600">Küçük Yazı</p>
                <h2 className="mt-2 text-3xl font-bold text-gray-800">Büyük Başlık</h2>
                <p className="mt-2 text-base text-gray-700">
                    Açıklama buraya gelecek. Detaylı açıklamayı buraya ekleyebilirsiniz.
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <button className="w-full md:w-auto bg-blue-500 text-white py-2 px-4 rounded">
                        Buton 1
                    </button>
                    <button className="w-full md:w-auto bg-white text-blue-500 border border-blue-500 py-2 px-4 rounded">
                        Buton 2
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InfoContainer;