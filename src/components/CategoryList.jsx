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


    const womenCategories = categories.filter(category => category.gender === "k");
    const menCategories = categories.filter(category => category.gender === "e");

    return (
        <div className="flex gap-8 min-w-[400px] p-2">
            {/* Kadın Kategorileri */}
            <div className="flex-1">
                <h3 className="font-medium text-sm mb-2 text-black">KADIN</h3>
                <div className="flex flex-col space-y-1">
                    {womenCategories.map(category => (
                        <Link
                            key={category.id}
                            to={`/shop?category=${category.id}`}
                            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Erkek Kategorileri */}
            <div className="flex-1">
                <h3 className="font-medium text-sm mb-2 text-black">ERKEK</h3>
                <div className="flex flex-col space-y-1">
                    {menCategories.map(category => (
                        <Link
                            key={category.id}
                            to={`/shop?category=${category.id}`}
                            className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
                        >
                            {category.title}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryList;