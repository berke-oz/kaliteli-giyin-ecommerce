import React from 'react';
import { Grid, List } from 'lucide-react';
import ProductCard from './ProductCard';

const ShopCards = () => {
    const cards = [
        { id: 1, title: 'CLOTHS', items: 5 },
        { id: 2, title: 'CLOTHS', items: 5 },
        { id: 3, title: 'CLOTHS', items: 5 },
        { id: 4, title: 'CLOTHS', items: 5 },
        { id: 5, title: 'CLOTHS', items: 5 },
    ];

    const products = [
        {
            id: 1,
            image: 'https://picsum.photos/240/427?random=1',
            title: 'Product 1',
            description: 'Description for product 1',
            oldPrice: '$100',
            newPrice: '$80',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 2,
            image: 'https://picsum.photos/240/427?random=2',
            title: 'Product 2',
            description: 'Description for product 2',
            oldPrice: '$120',
            newPrice: '$90',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 3,
            image: 'https://picsum.photos/240/427?random=3',
            title: 'Product 2',
            description: 'Description for product 2',
            oldPrice: '$120',
            newPrice: '$90',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 4,
            image: 'https://picsum.photos/240/427?random=4',
            title: 'Product 2',
            description: 'Description for product 2',
            oldPrice: '$120',
            newPrice: '$90',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
    ];

    return (
        <div className="p-4">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-bold">Shop</h1>
            </div>
            <div className="text-sm text-gray-600 mb-4">
                <span>Home</span> &gt; <span>Shop</span>
            </div>
            <div className="flex flex-col items-center gap-5 mb-8">
                {cards.map(card => (
                    <div key={card.id} className="w-[332px] h-[300px] flex flex-col justify-center items-center bg-gray-200 shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold">{card.title}</h2>
                        <p className="text-lg text-gray-600">{card.items} items</p>
                    </div>
                ))}
            </div>
            <div className="text-center mb-4">
                <p className="text-lg">Showing all 12 results</p>
            </div>
            <div className="flex justify-center items-center gap-4 mb-4">
                <span className="text-lg">Views:</span>
                <div className="flex gap-4">
                    <div className="w-[46px] h-[46px] flex justify-center items-center bg-gray-200 rounded">
                        <Grid className="w-6 h-6" />
                    </div>
                    <div className="w-[46px] h-[46px] flex justify-center items-center bg-gray-200 rounded">
                        <List className="w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mb-8">
                <select className="w-[141px] h-[50px] bg-white border border-gray-300 rounded px-2">
                    <option>Popularity</option>
                </select>
                <button className="w-[94px] h-[50px] bg-[#23A6F0] text-white rounded px-4">
                    Apply
                </button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        colors={product.colors}
                    />
                ))}
            </div>
            <div className="flex justify-center items-center gap-0">
                <button className="w-[83px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white">
                    First
                </button>
                <button className="w-[49px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white">
                    1
                </button>
                <button className="w-[49px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white">
                    2
                </button>
                <button className="w-[49px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white">
                    3
                </button>
                <button className="w-[85px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white">
                    Next
                </button>
            </div>
        </div>
    );
};

export default ShopCards;