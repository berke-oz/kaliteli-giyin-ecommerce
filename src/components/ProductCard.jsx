import React from 'react';

const ProductCard = ({ image, title, description, price, colors }) => (
    <div className="w-[328px] h-[615px] p-4 flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-[348px] h-[427px] object-cover"
        />
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2 font-bold text-lg">{price}</div>
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

export default ProductCard;