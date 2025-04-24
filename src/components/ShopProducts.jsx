import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { fetchProducts } from '../actions/productActions';

const ShopProducts = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-32">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-600 text-center mt-4">
                Hata: {error}
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-2 font-montserrat">Ürünlerimiz</h1>
            <p className="text-gray-600 mb-8">En yeni koleksiyonumuzu keşfedin</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = ({ product }) => {
    const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
    const [isHovered, setIsHovered] = useState(false);

    const formatPrice = (price) => {
        return new Intl.NumberFormat("tr-TR", {
            style: "currency",
            currency: "TRY"
        }).format(price);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden border-none shadow-sm transition-all duration-200 hover:shadow-md">
            <div
                className="relative h-[350px] overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Link to={`/product/${product.id}`}>
                    <img
                        src={product.image || "/placeholder.jpg"}
                        alt={product.name}
                        className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'
                            }`}
                    />
                </Link>

                {product.isNew && (
                    <span className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm rounded">
                        Yeni
                    </span>
                )}

                <button className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm hover:bg-white p-2 rounded-full">
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Favorilere Ekle</span>
                </button>
            </div>

            <div className="p-4">
                <h3 className="font-medium text-lg mb-1 font-montserrat">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

                <div className="flex justify-between items-center mb-3">
                    <div className="flex gap-1">
                        {product.colors && product.colors.map((color) => (
                            <button
                                key={color}
                                className={`w-5 h-5 rounded-full border ${selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setSelectedColor(color)}
                                aria-label={`Renk seçeneği: ${color}`}
                            />
                        ))}
                    </div>
                    <span className="font-semibold font-montserrat">
                        {formatPrice(product.price)}
                    </span>
                </div>

                <Link
                    to={`/product/${product.id}`}
                    className="block w-full"
                >
                    <button className="w-full py-2 border border-black text-black hover:bg-black/5 rounded-md transition-colors font-montserrat">
                        Ürün Detayları
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ShopProducts; 