import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../../actions/productActions';
import { Grid, List } from 'lucide-react';

const FilterShopPage = () => {
    const dispatch = useDispatch();
    const [sort, setSort] = useState('');
    const [filter, setFilter] = useState('');

    const handleFilter = () => {
        dispatch(fetchProducts(null, sort, filter));
    };

    return (
        <div className="p-4 flex flex-col md:flex-row justify-center items-center gap-[24px] md:gap-[200px]">
            <div className="text-center mb-4 md:mb-0">
                <p className="text-lg">Showing all 12 results</p>
            </div>
            <div className="flex justify-center items-center gap-[15px] mb-4 md:mb-0">
                <span className="text-lg">Views:</span>
                <div className="flex gap-[15px]">
                    <div className="w-[46px] h-[46px] flex justify-center items-center bg-gray-200 rounded">
                        <Grid className="w-6 h-6" />
                    </div>
                    <div className="w-[46px] h-[46px] flex justify-center items-center bg-gray-200 rounded">
                        <List className="w-6 h-6" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-[15px]">
                <select
                    className="w-[141px] h-[50px] bg-white border border-gray-300 rounded px-2"
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort By</option>
                    <option value="price:asc">Price: Low to High</option>
                    <option value="price:desc">Price: High to Low</option>
                    <option value="rating:asc">Rating: Low to High</option>
                    <option value="rating:desc">Rating: High to Low</option>
                </select>
                <input
                    type="text"
                    placeholder="Filter"
                    className="w-[141px] h-[50px] bg-white border border-gray-300 rounded px-2"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
                <button
                    className="w-[94px] h-[50px] bg-[#23A6F0] text-white rounded px-4"
                    onClick={handleFilter}
                >
                    Filter
                </button>
            </div>
        </div>
    );
};

export default FilterShopPage;