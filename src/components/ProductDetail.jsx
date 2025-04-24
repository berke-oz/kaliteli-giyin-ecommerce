import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { Heart, Eye, ShoppingCart, ChevronLeft, ChevronRight, Check, ArrowLeft, Star } from 'lucide-react';

const ProductDetail = () => {
    const { productId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showAddedEffect, setShowAddedEffect] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const { product, loading, error } = useSelector(state => state.product);

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, [dispatch, productId]);

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart(product));
            setShowAddedEffect(true);
            setTimeout(() => setShowAddedEffect(false), 2000);
        }
    };

    const handleLike = () => {
        setIsLiked(!isLiked);
    };

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <div className="text-2xl font-semibold text-red-600">Bir hata oluştu</div>
                <p className="text-gray-600">{error}</p>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
                >
                    Geri Dön
                </button>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <div className="text-2xl font-semibold">Ürün bulunamadı</div>
                <button
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 bg-black text-white rounded-full hover:bg-black/90 transition-colors"
                >
                    Geri Dön
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium">Geri Dön</span>
                </button>
            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">

                    <div className="w-full lg:w-1/2 space-y-6">

                        <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-50">
                            <img
                                src={product.images[selectedImage].url}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />

                            {product.images.length > 1 && (
                                <>
                                    <button
                                        onClick={() => setSelectedImage(prev => (prev === 0 ? product.images.length - 1 : prev - 1))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                                    >
                                        <ChevronLeft className="w-6 h-6" />
                                    </button>
                                    <button
                                        onClick={() => setSelectedImage(prev => (prev === product.images.length - 1 ? 0 : prev + 1))}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
                                    >
                                        <ChevronRight className="w-6 h-6" />
                                    </button>
                                </>
                            )}
                        </div>


                        {product.images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                                {product.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden ${selectedImage === index ? 'ring-2 ring-black' : 'hover:ring-2 hover:ring-gray-300'
                                            }`}
                                    >
                                        <img
                                            src={img.url}
                                            alt={`${product.name} - ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>


                    <div className="w-full lg:w-1/2 space-y-8">

                        <div className="space-y-4">
                            <h1 className="text-3xl font-semibold text-gray-900">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            className={`w-5 h-5 ${star <= (product.rating || 4) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-500">
                                    {product.reviews || 10} değerlendirme
                                </span>
                            </div>
                        </div>


                        <div className="space-y-2">
                            <div className="text-3xl font-bold">
                                {product.price?.toLocaleString('tr-TR')} ₺
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-green-600 font-medium">Stokta Mevcut</span>
                            </div>
                        </div>

                        <div className="prose prose-gray max-w-none">
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>


                        <div className="space-y-4">
                            <label className="block font-medium text-gray-700">Renk Seçin</label>
                            <div className="flex gap-3">
                                {['#000000', '#FFFFFF', '#23A6F0', '#2DC071', '#E77C40', '#252B42'].map((color, index) => (
                                    <button
                                        key={index}
                                        className={`w-12 h-12 rounded-2xl transition-transform hover:scale-110 ${color === '#FFFFFF' ? 'border border-gray-200' : ''
                                            }`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleAddToCart}
                                    disabled={showAddedEffect}
                                    className="flex-1 bg-[#1a8ed0] text-white h-14 rounded-2xl font-medium transition-colors flex items-center justify-center gap-2 relative overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-green-500 flex items-center justify-center transition-transform duration-300 ${showAddedEffect ? 'translate-y-0' : 'translate-y-full'
                                        }`}>
                                        <Check className="w-6 h-6" />
                                    </div>
                                    <span className={`transition-opacity duration-300 ${showAddedEffect ? 'opacity-0' : 'opacity-100'}`}>
                                        Sepete Ekle
                                    </span>
                                    <ShoppingCart className={`w-5 h-5 transition-opacity duration-300 ${showAddedEffect ? 'opacity-0' : 'opacity-100'}`} />
                                </button>
                                <button
                                    onClick={handleLike}
                                    className={`h-14 w-14 rounded-2xl flex items-center justify-center transition-all ${isLiked
                                        ? 'bg-red-50 text-red-500'
                                        : 'bg-gray-50 text-gray-500 hover:bg-gray-100'
                                        }`}
                                >
                                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-red-500' : ''}`} />
                                </button>
                            </div>
                        </div>


                        <div className="pt-8 border-t border-gray-100 space-y-4">
                            <div className="flex items-center gap-2 text-gray-500">
                                <ShoppingCart className="w-5 h-5" />
                                <span>100+ kişi şu anda bu ürüne bakıyor</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <Eye className="w-5 h-5" />
                                <span>Son 24 saatte 50+ kişi satın aldı</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;   