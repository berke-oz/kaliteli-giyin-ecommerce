import React from 'react';

const ShopProductCard = ({ image, title, description, oldPrice, newPrice, colors }) => (
    <div className="w-[238px] h-[484px] p-4 flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-[239px] h-[300px] object-cover"
        />
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2 flex items-center gap-2">
                <span className="text-lg line-through text-[#BDBDBD]">{oldPrice}</span>
                <span className="text-lg font-bold text-[#23856D]">{newPrice}</span>
            </div>
            <div className="mt-auto flex gap-2 justify-center">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        </div>
    </div>
);

const ShopProductCards = () => {
    const products = [
        {
            id: 1,
            image: 'https://picsum.photos/239/300?random=1',
            title: 'Product 1',
            description: 'Description for product 1',
            oldPrice: '$100',
            newPrice: '$80',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 2,
            image: 'https://picsum.photos/239/300?random=2',
            title: 'Product 2',
            description: 'Description for product 2',
            oldPrice: '$120',
            newPrice: '$90',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 3,
            image: 'https://picsum.photos/239/300?random=3',
            title: 'Product 3',
            description: 'Description for product 3',
            oldPrice: '$130',
            newPrice: '$100',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 4,
            image: 'https://picsum.photos/239/300?random=4',
            title: 'Product 4',
            description: 'Description for product 4',
            oldPrice: '$140',
            newPrice: '$110',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 5,
            image: 'https://picsum.photos/239/300?random=5',
            title: 'Product 5',
            description: 'Description for product 5',
            oldPrice: '$150',
            newPrice: '$120',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 6,
            image: 'https://picsum.photos/239/300?random=6',
            title: 'Product 6',
            description: 'Description for product 6',
            oldPrice: '$160',
            newPrice: '$130',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 7,
            image: 'https://picsum.photos/239/300?random=7',
            title: 'Product 7',
            description: 'Description for product 7',
            oldPrice: '$170',
            newPrice: '$140',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 8,
            image: 'https://picsum.photos/239/300?random=8',
            title: 'Product 8',
            description: 'Description for product 8',
            oldPrice: '$180',
            newPrice: '$150',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 9,
            image: 'https://picsum.photos/239/300?random=9',
            title: 'Product 9',
            description: 'Description for product 9',
            oldPrice: '$190',
            newPrice: '$160',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 10,
            image: 'https://picsum.photos/239/300?random=10',
            title: 'Product 10',
            description: 'Description for product 10',
            oldPrice: '$200',
            newPrice: '$170',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 11,
            image: 'https://picsum.photos/239/300?random=11',
            title: 'Product 11',
            description: 'Description for product 11',
            oldPrice: '$210',
            newPrice: '$180',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
        {
            id: 12,
            image: 'https://picsum.photos/239/300?random=12',
            title: 'Product 12',
            description: 'Description for product 12',
            oldPrice: '$220',
            newPrice: '$190',
            colors: ['#FF0000', '#00FF00', '#0000FF'],
        },
    ];

    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mt-8">
                    {products.slice(0, 4).map(product => (
                        <ShopProductCard
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
            </div>
            <div className="hidden md:flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mt-8">
                    {products.slice(4, 12).map(product => (
                        <ShopProductCard
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
            </div>
            <div className="flex justify-center items-center pt-15">
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
        </>
    );
};

export default ShopProductCards;