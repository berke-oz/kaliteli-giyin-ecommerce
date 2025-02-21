import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { Link } from 'react-router-dom';

const TopCategories = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Kadın ve Erkek kategorilerini ayırma ve en iyi 5 kategoriyi seçme
    const topWomenCategories = categories
        .filter(category => category.gender === "k")
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const topMenCategories = categories
        .filter(category => category.gender === "e")
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    return (
        <div className="p-2 flex">
            <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-700">Kadın</h3>
                <ul className="py-2">
                    {topWomenCategories.map(category => (
                        <li key={category.id} className="px-4 py-2 hover:bg-gray-100">
                            <Link to={`/shop/k/${category.title}/${category.id}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-1/2">
                <h3 className="text-lg font-bold text-gray-700">Erkek</h3>
                <ul className="py-2">
                    {topMenCategories.map(category => (
                        <li key={category.id} className="px-4 py-2 hover:bg-gray-100">
                            <Link to={`/shop/e/${category.title}/${category.id}`}>
                                {category.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default TopCategories;