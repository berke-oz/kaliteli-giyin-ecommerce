import React from 'react';
import erkekKategori from '../../images/Erkek-kategori.jpg';
import kadınKategori from '../../images/Kadın-Kategori.jpg';
import çocukKategori from '../../images/cocuk-kategori.jpg';
import aksesuarKategori from '../../images/Aksesuar-kategori.jpg';

const ImageCard = ({ src, alt, buttonText, sizeClass }) => (
    <div className="relative overflow-hidden rounded-xl shadow-lg h-[400px] bg-white group">
        <img
            src={src}
            alt={alt}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{buttonText}</h3>
            <p className="text-sm text-gray-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {alt}
            </p>
            <div className="flex items-center text-sm font-medium">
                <span>Keşfet</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="ml-2 h-4 w-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3" />
                </svg>
            </div>
        </div>
    </div>
);

const EditorsPicks = () => {
    const images = [
        { src: erkekKategori, alt: 'Şık ve rahat erkek giyim koleksiyonu', buttonText: 'Erkek', sizeClass: 'w-[510px] h-[500px]' },
        { src: kadınKategori, alt: 'Trend ve zarif kadın giyim koleksiyonu', buttonText: 'Kadın', sizeClass: 'w-[240px] h-[500px]' },
        { src: çocukKategori, alt: 'Sevimli ve dayanıklı çocuk giyim koleksiyonu', buttonText: 'Çocuk', sizeClass: 'w-[240px] h-[242px]' },
        { src: aksesuarKategori, alt: 'Stilinizi tamamlayacak aksesuarlar', buttonText: 'Aksesuarlar', sizeClass: 'w-[240px] h-[242px]' }
    ];

    return (
        <section className="py-16 px-4 md:px-6 bg-gray-50">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Editörün Seçimleri</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        En yeni koleksiyonlarımızı keşfedin ve tarzınızı yansıtan parçaları bulun
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <ImageCard
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            buttonText={image.buttonText}
                            sizeClass={image.sizeClass}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EditorsPicks;