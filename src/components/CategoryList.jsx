import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../actions/categoryActions';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    // Kadın ve Erkek kategorilerini ayırma
    const womenCategories = categories.filter(category => category.gender === "k");
    const menCategories = categories.filter(category => category.gender === "e");

    return (
        <div className="p-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
                <div className="pl-6">
                    <h3 className="font-bold text-[#252B42] text-base mb-3">Kadın</h3>
                    <ul className="space-y-3">
                        {womenCategories.map(category => (
                            <li key={category.id} className="pl-2">
                                <Link
                                    to={`/shop/k/${category.title}/${category.id}`}
                                    className="text-[#737373] hover:text-[#252B42] text-sm"
                                >
                                    {category.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="pl-6">
                    <h3 className="font-bold text-[#252B42] text-base mb-3">Erkek</h3>
                    <ul className="space-y-3">
                        {menCategories.map(category => (
                            <li key={category.id} className="pl-2">
                                <Link
                                    to={`/shop/e/${category.title}/${category.id}`}
                                    className="text-[#737373] hover:text-[#252B42] text-sm"
                                >
                                    {category.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;