import React from 'react';

const ImageCard = ({ src, alt, buttonText, sizeClass }) => (
    <div className="relative">
        <img
            src={src}
            alt={alt}
            className={`${sizeClass} object-cover`}
        />
        <button className="absolute bottom-4 left-4 bg-white text-black p-2">
            {buttonText}
        </button>
    </div>
);

const EditorsPicks = () => {
    const images = [
        { src: 'https://picsum.photos/id/237/325/500', alt: 'Editors Pick 1', buttonText: 'Buton', sizeClass: 'w-[325px] h-[500px]' },
        { src: 'https://picsum.photos/id/238/325/500', alt: 'Editors Pick 2', buttonText: 'Buton', sizeClass: 'w-[325px] h-[500px]' },
        { src: 'https://picsum.photos/id/239/325/242', alt: 'Editors Pick 3', buttonText: 'Buton', sizeClass: 'w-[325px] h-[242px]' },
        { src: 'https://picsum.photos/id/240/325/242', alt: 'Editors Pick 4', buttonText: 'Buton', sizeClass: 'w-[325px] h-[242px]' }
    ];

    return (
        <div className="p-4 flex flex-col items-center mt-15 gap-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">EDITOR'S PICK</h1>
                <p className="mt-2 text-lg">Seçkin ürünlerimizi inceleyin.</p>
            </div>
            {images.map((img, index) => (
                <ImageCard
                    key={index}
                    src={img.src}
                    alt={img.alt}
                    buttonText={img.buttonText}
                    sizeClass={img.sizeClass}
                />
            ))}
        </div>
    );
};

export default EditorsPicks;