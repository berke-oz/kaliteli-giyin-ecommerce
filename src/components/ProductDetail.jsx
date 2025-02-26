import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../actions/productActions';
import { Heart, Eye, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { product, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

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
                Hata: {error} - Ürün detayları yüklenirken bir sorun oluştu.
            </div>
        );
    }

    if (!product) {
        return (
            <div className="text-center py-10">
                Ürün bulunamadı.
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Resim Bölümü */}
            <div>
                {/* Ana Resim */}
                <div className="relative bg-gray-100 rounded-lg">
                    {product.images && product.images.length > 0 ? (
                        <img
                            src={product.images[0].url}
                            alt={product.name}
                            className="w-full aspect-square object-cover rounded-lg"
                        />
                    ) : (
                        <div className="w-full aspect-square bg-gray-200 rounded-lg flex justify-center items-center">
                            Resim Yok
                        </div>
                    )}
                    {/* Resim Kaydırma Butonları */}
                    <button className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
                        <ChevronLeft className="h-6 w-6 text-gray-700" />
                    </button>
                    <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md">
                        <ChevronRight className="h-6 w-6 text-gray-700" />
                    </button>
                </div>

                {/* Küçük Resimler */}
                {product.images && product.images.length > 0 && (
                    <div className="flex gap-4 mt-4">
                        {product.images.map((img, index) => (
                            <img
                                key={index}
                                src={img.url}
                                alt={`Thumbnail ${index + 1}`}
                                className="w-24 h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-gray-300"
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Ürün Bilgileri Bölümü */}
            <div className="flex flex-col">
                <h1 className="text-[20px] font-medium text-gray-900 font-montserrat">
                    {product.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <div className="flex text-yellow-400">
                        {"★★★★☆"}
                    </div>
                    <span className="text-gray-600">{product.reviews || 10} Reviews</span>
                </div>
                <div className="mt-6">
                    <span className="text-[24px] font-bold font-montserrat">${product.price}</span>
                </div>
                <div className="mt-2">
                    <span className="text-gray-600 font-montserrat">Availability : </span>
                    <span className="text-blue-500 font-medium font-montserrat">In Stock</span>
                </div>
                <p className="text-gray-600 mt-6 font-montserrat">{product.description}</p>

                {/* Renk Seçenekleri */}
                <div className="flex gap-3 mt-8">
                    {['#00BCD4', '#4CAF50', '#FF5722', '#2B3241'].map((color, index) => (
                        <button
                            key={index}
                            className="w-8 h-8 rounded-full border-2 border-white ring-2 ring-gray-200 hover:ring-gray-300 focus:outline-none"
                            style={{ backgroundColor: color }}
                        ></button>
                    ))}
                </div>

                {/* Aksiyon Butonları */}
                <div className="flex items-center gap-4 mt-10">
                    <button className="px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 font-medium">
                        Select Options
                    </button>
                    <div className="flex gap-2">
                        <button className="p-3 rounded-md border border-gray-200 hover:bg-gray-50">
                            <Heart className="h-6 w-6 text-gray-600" />
                        </button>
                        <button className="p-3 rounded-md border border-gray-200 hover:bg-gray-50">
                            <ShoppingCart className="h-6 w-6 text-gray-600" />
                        </button>
                        <button className="p-3 rounded-md border border-gray-200 hover:bg-gray-50">
                            <Eye className="h-6 w-6 text-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;   