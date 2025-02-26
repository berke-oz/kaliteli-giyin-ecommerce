import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { fetchProducts } from '../../actions/productActions';
import { Grid, List } from 'lucide-react';

const FilterShopPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categoryId } = useParams();
    const { total } = useSelector(state => state.product || { total: 0 });

    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const initialSort = queryParams.get('sort') || '';
    const initialFilter = queryParams.get('filter') || '';

    const [sort, setSort] = useState(initialSort);
    const [filter, setFilter] = useState(initialFilter);
    const [viewType, setViewType] = useState('grid');

    // Parametreler değiştiğinde ürünleri yeniden yükle
    useEffect(() => {
        dispatch(fetchProducts(categoryId, sort, filter));
    }, [dispatch, categoryId, sort, filter]);

    // URL'yi güncelle
    const updateURL = (newSort, newFilter, page = 1) => {
        const searchParams = new URLSearchParams();
        if (categoryId) searchParams.set('category', categoryId);
        if (newFilter) searchParams.set('filter', newFilter);
        if (newSort) searchParams.set('sort', newSort);
        searchParams.set('page', page);  // Sayfa parametresini ekle

        navigate(`?${searchParams.toString()}`, { replace: true }); // URL'yi günceller
    };

    // Sıralama değiştiğinde
    const handleSortChange = (e) => {
        const newSort = e.target.value;
        setSort(newSort);
        updateURL(newSort, filter);  // URL'yi sıralama değiştiğinde güncelle
    };

    // Filtre metni değiştiğinde
    const handleFilterChange = (e) => {
        const newFilter = e.target.value;
        setFilter(newFilter);
        updateURL(sort, newFilter);  // URL'yi filtre değiştiğinde güncelle
    };

    // Görünüm değiştiğinde
    const handleViewTypeChange = (type) => {
        setViewType(type);
    };

    return (
        <div className="p-4 flex flex-col md:flex-row justify-center items-center gap-[24px] md:gap-[200px]">
            <div className="text-center mb-4 md:mb-0">
                <p className="text-lg">Toplam {total} ürün gösteriliyor</p>
            </div>

            {/* View type switches */}
            <div className="flex justify-center items-center gap-[15px] mb-4 md:mb-0">
                <span className="text-lg">Görünüm:</span>
                <div className="flex gap-[15px]">
                    <div
                        className={`w-[46px] h-[46px] flex justify-center items-center rounded cursor-pointer ${viewType === 'grid' ? 'bg-[#23A6F0]' : 'bg-gray-200'
                            }`}
                        onClick={() => handleViewTypeChange('grid')}
                    >
                        <Grid className={`w-6 h-6 ${viewType === 'grid' ? 'text-white' : ''}`} />
                    </div>
                    <div
                        className={`w-[46px] h-[46px] flex justify-center items-center rounded cursor-pointer ${viewType === 'list' ? 'bg-[#23A6F0]' : 'bg-gray-200'
                            }`}
                        onClick={() => handleViewTypeChange('list')}
                    >
                        <List className={`w-6 h-6 ${viewType === 'list' ? 'text-white' : ''}`} />
                    </div>
                </div>
            </div>

            {/* Filter controls */}
            <div className="flex justify-center items-center gap-[15px]">
                <select
                    className="w-[141px] h-[50px] bg-white border border-gray-300 rounded px-2"
                    value={sort}
                    onChange={handleSortChange}
                >
                    <option value="">Sıralama</option>
                    <option value="price:asc">Fiyat: Düşükten Yükseğe</option>
                    <option value="price:desc">Fiyat: Yüksekten Düşüğe</option>
                    <option value="rating:asc">Puan: Düşükten Yükseğe</option>
                    <option value="rating:desc">Puan: Yüksekten Düşüğe</option>
                </select>

                <input
                    type="text"
                    placeholder="Ürünlerde ara..."
                    className="w-[141px] h-[50px] bg-white border border-gray-300 rounded px-2"
                    value={filter}
                    onChange={handleFilterChange}
                />
            </div>
        </div>
    );
};

export default FilterShopPage;
