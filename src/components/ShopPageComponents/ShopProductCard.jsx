import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchProducts } from '../../actions/productActions';
import { Link } from 'react-router-dom';


const ShopProductCard = ({ id, image, title, description, price }) => (
    <Link to={`/product/${id}`} className="w-[238px] h-[484px] p-4 flex flex-col">
        <img
            src={image}
            alt={title}
            className="w-[239px] h-[300px] object-cover"
        />
        <div className="mt-4 flex flex-col flex-1 items-center text-center">
            <h2 className="font-bold text-xl">{title}</h2>
            <p className="mt-2 text-sm">{description}</p>
            <div className="mt-2">
                <span className="text-lg font-bold text-[#23856D]">{price} $</span>
            </div>
        </div>
    </Link>
);


const ShopProductCards = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { products, total, loading, error } = useSelector(state => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 25;
    const totalPages = Math.ceil(total / productsPerPage);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const page = parseInt(queryParams.get('page')) || 1;
        const filter = queryParams.get('filter') || '';
        const sort = queryParams.get('sort') || '';

        setCurrentPage(page);

        dispatch(fetchProducts(null, sort, filter, productsPerPage, (page - 1) * productsPerPage));
    }, [location.search, dispatch]);


    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const queryParams = new URLSearchParams(location.search);
        queryParams.set('page', newPage);

        // URL'yi güncelle
        navigate({
            pathname: location.pathname,
            search: `?${queryParams.toString()}`
        });

        dispatch(fetchProducts(null, null, null, productsPerPage, (newPage - 1) * productsPerPage));
    };

    const getPageButtons = () => {
        const pageNumbers = [];
        const maxButtons = 3;

        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        if (currentPage === 1 || currentPage === 2) {
            endPage = Math.min(totalPages, maxButtons);
        }

        if (currentPage === totalPages || currentPage === totalPages - 1) {
            startPage = Math.max(1, totalPages - maxButtons + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    };

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
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mt-8">
                    {products?.map(product => (
                        <ShopProductCard
                            key={product.id}
                            id={product.id}
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

                    {getPageButtons().map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-[49px] h-[74px] border border-gray-300 rounded 
                                hover:bg-[#23A6F0] hover:text-white disabled:opacity-50 
                                ${currentPage === page ? 'bg-[#23A6F0] text-white' : ''}`}
                            disabled={loading}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className="w-[85px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white 
                            disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={currentPage >= totalPages || loading}
                    >
                        Sonraki
                    </button>
                </div>
            )}
        </>
    );
};

export default ShopProductCards;