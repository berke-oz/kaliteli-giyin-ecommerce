import React from 'react';

const ProductCard = ({ image, title, description, oldPrice, newPrice, colors }) => (
    <div className="w-[240px] h-[615px] p-4 flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-[240px] h-[427px] object-cover"
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

export default ProductCard;