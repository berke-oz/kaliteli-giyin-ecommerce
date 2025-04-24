import React from "react";

const FeaturedProduct = () => {
    return (
        <div className="relative w-full h-[80vh] overflow-hidden">

            <img
                src="src\images\creative-headline-APNnyM36puU-unsplash.jpg" // Resim yolunu buraya ekleyin
                alt="Featured clothing item"
                className="absolute inset-0 w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-black/30" />


            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif tracking-tight">
                        Yaz Koleksiyonu 2025
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto">
                        Yazın enerjisini yansıtan renkler, hafif kumaşlar ve özgür tasarımlarla dolu yepyeni koleksiyonumuz sizlerle.
                    </p>
                    <a
                        href="/shop"
                        className="inline-block px-8 py-4 bg-white text-black font-medium text-lg transition-transform hover:scale-105 hover:shadow-lg"
                    >
                        Hemen Keşfet !                    </a>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProduct;