import React from 'react';

const BlogCard = ({ image, tags, title, description, date, comments }) => (
    <div className="w-[329px] h-[606px] border rounded overflow-hidden shadow-sm">
        <div className="relative">
            <img
                src={image}
                alt={title}
                className="w-[329px] h-[300px] object-cover"
            />
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                NEW
            </div>
        </div>
        <div className="p-4">
            <div className="flex gap-2 mb-2">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="text-black text-xs px-2 py-1 rounded hover:text-blue-500"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <h4 className="text-lg font-bold text-black">{title}</h4>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <div className="flex items-center mt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                    <span role="img" aria-label="calendar">
                        📅
                    </span>
                    {date}
                </span>
                <span className="mx-2">|</span>
                <span className="flex items-center gap-1">
                    <span role="img" aria-label="comments">
                        💬
                    </span>
                    {comments}
                </span>
            </div>
            <a href="#" className="mt-4 inline-block text-blue-500 font-semibold">
                Learn More
            </a>
        </div>
    </div>
);

export default BlogCard;