import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../actions/productActions';

// Product Card Component
const ShopProductCard = ({ image, title, description, price }) => (
    <div className="w-[238px] h-[484px] p-4 flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-[239px] h-[300px] object-cover"
        />
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2">
                <span className="text-lg font-bold text-[#23856D]">{price} TL</span>
            </div>
        </div>
    </div>
);

// Main Component
const ShopProductCards = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const { gender, categoryName, categoryId } = useParams();

    const { products, total, loading, error } = useSelector(state => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 25;

    // URL'den mevcut parametreleri al
    const queryParams = new URLSearchParams(location.search);
    const [sort, setSort] = useState(queryParams.get('sort') || '');
    const [filter, setFilter] = useState(queryParams.get('filter') || '');

    // Sayfa değiştirme işleyicisi
    const handlePageChange = (newPage) => {
        if (!gender || !categoryName || !categoryId) {
            console.error('Route parameters missing:', { gender, categoryName, categoryId });
            return;
        }

        setCurrentPage(newPage);
        const offset = (newPage - 1) * productsPerPage;

        // URL parametrelerini güncelle
        const params = new URLSearchParams();
        if (sort) params.set('sort', sort);
        if (filter) params.set('filter', filter);
        params.set('page', newPage.toString());

        // URL'yi güncelle
        const basePath = `/shop/${gender}/${categoryName}/${categoryId}`;
        const newUrl = `${basePath}?${params.toString()}`;

        navigate(newUrl, { replace: true });

        // Yeni sayfanın ürünlerini getir
        dispatch(fetchProducts(categoryId, sort, filter, productsPerPage, offset));
    };

    // İlk yükleme ve URL değişiklikleri için
    useEffect(() => {
        if (!gender || !categoryName || !categoryId) {
            console.error('Route parameters missing on load');
            return;
        }

        const page = parseInt(queryParams.get('page')) || 1;
        setCurrentPage(page);

        const offset = (page - 1) * productsPerPage;
        dispatch(fetchProducts(categoryId, sort, filter, productsPerPage, offset));
    }, [location.search, categoryId, gender, categoryName, dispatch]);

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

    const totalPages = Math.ceil(total / productsPerPage);

    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mt-8">
                    {products?.map(product => (
                        <ShopProductCard
                            key={product.id}
                            image={product.images[0].url}
                            title={product.name}
                            description={product.description}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>

            {total > productsPerPage && (
                <div className="flex justify-center items-center pt-15 gap-2">
                    <button
                        onClick={() => handlePageChange(1)}
                        className="w-[83px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage === 1 || loading}
                    >
                        İlk
                    </button>

                    {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => handlePageChange(i + 1)}
                            className={`w-[49px] h-[74px] border border-gray-300 rounded 
                                hover:bg-[#23A6F0] hover:text-white disabled:opacity-50 
                                ${currentPage === i + 1 ? 'bg-[#23A6F0] text-white' : ''}`}
                            disabled={loading}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="w-[85px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage >= totalPages || loading}
                    >
                        İleri
                    </button>
                </div>
            )}
        </>
    );
};

export default ShopProductCards;