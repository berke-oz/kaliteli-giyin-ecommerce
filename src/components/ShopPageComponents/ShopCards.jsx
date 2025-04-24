import React from 'react';
import { Grid, List } from 'lucide-react';
import cardCover1 from '../../images/card-cover-5.jpg';
import cardCover2 from '../../images/card-cover-6.jpg';
import cardCover3 from '../../images/card-cover-7.jpg';
import cardCover4 from '../../images/card-cover-8.jpg';
import cardCover5 from '../../images/card-cover-9.jpg';

const ShopCards = () => {
    const cardCovers = [cardCover1, cardCover2, cardCover3, cardCover4, cardCover5];

    return (
        <div className="p-8">
            <div className="flex justify-center items-center mb-[24px] gap-[930px]">
                <h1 className="text-[24px] font-bold">Shop</h1>
                <div className="text-[14px] text-gray-600">
                    <span>Home</span> &gt; <span>Shop</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-8 gap-5 mb-8">
                {cardCovers.map((cover, index) => (
                    <div
                        key={index}
                        className="w-[205px] h-[223px] flex flex-col justify-center items-center rounded-lg relative overflow-hidden"
                    >
                        <img
                            src={cover}
                            alt={`Category ${index + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                        <div className="relative z-10 text-center text-white">
                            <h2 className="text-2xl font-bold">CLOTHS</h2>
                            <p className="text-lg">5 items</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopCards;