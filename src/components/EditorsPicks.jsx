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
        { src: 'https://picsum.photos/id/237/510/500', alt: 'Editors Pick 1', buttonText: 'Men', sizeClass: 'w-[510px] h-[500px]' },
        { src: 'https://picsum.photos/id/238/240/500', alt: 'Editors Pick 2', buttonText: 'Women', sizeClass: 'w-[240px] h-[500px]' },
        { src: 'https://picsum.photos/id/239/240/242', alt: 'Editors Pick 3', buttonText: 'Accessories', sizeClass: 'w-[240px] h-[242px]' },
        { src: 'https://picsum.photos/id/240/240/242', alt: 'Editors Pick 4', buttonText: 'Kids', sizeClass: 'w-[240px] h-[242px]' }
    ];

    return (
        <div className="p-4 flex flex-col items-center mt-15 gap-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">EDITOR'S PICK</h1>
                <p className="mt-2 text-lg">Seçkin ürünlerimizi inceleyin.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                <ImageCard
                    src={images[0].src}
                    alt={images[0].alt}
                    buttonText={images[0].buttonText}
                    sizeClass={images[0].sizeClass}
                />
                <ImageCard
                    src={images[1].src}
                    alt={images[1].alt}
                    buttonText={images[1].buttonText}
                    sizeClass={images[1].sizeClass}
                />
                <div className="flex flex-col justify-between gap-2">
                    <ImageCard
                        src={images[2].src}
                        alt={images[2].alt}
                        buttonText={images[2].buttonText}
                        sizeClass="w-[240px] h-[242px] md:h-[250px]"
                    />
                    <ImageCard
                        src={images[3].src}
                        alt={images[3].alt}
                        buttonText={images[3].buttonText}
                        sizeClass="w-[240px] h-[242px] md:h-[250px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default EditorsPicks;