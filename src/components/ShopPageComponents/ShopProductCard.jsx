import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';

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
                <span className="text-lg font-bold text-[#23856D]">${price}</span>
            </div>
        </div>
    </div>
);

// ...existing code...

const ShopProductCards = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.product);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct) || [];
    const totalPages = Math.ceil((products?.length || 0) / productsPerPage);

    const handleFirstPage = () => setCurrentPage(1);
    const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    // ...existing loading and error handling...

    return (
        <>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[48px] mt-8">
                    {currentProducts.map(product => (
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
            {products?.length > productsPerPage && (
                <div className="flex justify-center items-center pt-15">
                    <button
                        onClick={handleFirstPage}
                        className="w-[83px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white"
                        disabled={currentPage === 1}
                    >
                        First
                    </button>
                    {[1, 2, 3].map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => handlePageClick(pageNum)}
                            className={`w-[49px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white ${currentPage === pageNum ? 'bg-[#23A6F0] text-white' : ''
                                }`}
                        >
                            {pageNum}
                        </button>
                    ))}
                    <button
                        onClick={handleNextPage}
                        className="w-[85px] h-[74px] border border-gray-300 rounded hover:bg-[#23A6F0] hover:text-white"
                        disabled={currentPage >= totalPages}
                    >
                        Next
                    </button>
                </div>
            )}
        </>
    );
};

export default ShopProductCards;