import React from 'react';
import { Grid, List } from 'lucide-react';

const ShopCards = () => {
    const cards = [
        { id: 1, title: 'CLOTHS', items: 5 },
        { id: 2, title: 'CLOTHS', items: 5 },
        { id: 3, title: 'CLOTHS', items: 5 },
        { id: 4, title: 'CLOTHS', items: 5 },
        { id: 5, title: 'CLOTHS', items: 5 },
    ];



    return (
        <div className="p-8">
            <div className="flex justify-center items-center mb-[24px] gap-[930px]">
                <h1 className="text-[24px] font-bold">Shop</h1>
                <div className="text-[14px] text-gray-600">
                    <span>Home</span> &gt; <span>Shop</span>
                </div>
            </div>
            <div className="flex flex-wrap justify-center pt-8 gap-5 mb-8">
                {cards.map(card => (
                    <div key={card.id} className="w-[205px] h-[223px] flex flex-col justify-center items-center bg-gray-200 shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold">{card.title}</h2>
                        <p className="text-lg text-gray-600">{card.items} items</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopCards;