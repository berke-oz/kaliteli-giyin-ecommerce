import React from 'react';
import BlogCard from './BlogCard';


const BlogHighlights = () => {
    const posts = [
        {
            id: 1,
            image: 'https://picsum.photos/329/300?random=1',
            tags: ['Google', 'Trending', 'New'],
            title: 'Blog Post 1',
            description: 'Yazı içeriği: Üst düzey kalitede içerik.',
            date: 'Feb 12, 2025',
            comments: 12
        },
        {
            id: 2,
            image: 'https://picsum.photos/329/300?random=2',
            tags: ['Google', 'Trending', 'New'],
            title: 'Blog Post 2',
            description: 'Yazı içeriği: Farklı tasarımlı içerik örneği.',
            date: 'Feb 10, 2025',
            comments: 8
        },
        {
            id: 3,
            image: 'https://picsum.photos/329/300?random=3',
            tags: ['Google', 'Trending', 'New'],
            title: 'Blog Post 3',
            description: 'Yazı içeriği: Yeni sezon trendleri.',
            date: 'Feb 8, 2025',
            comments: 5
        }
    ];

    return (
        <div className="p-25 flex flex-col items-center gap-8">
            {/* Üst Başlık */}
            <div className="text-center">
                <h1 className="mt-2 text-3xl font-bold">BLOG HIGHLIGHTS</h1>
                <p className="mt-2 text-lg">
                    En beğenilen ve öne çıkan blog yazılarımızı keşfedin.
                </p>
            </div>
            {/* Blog Card'lar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map(post => (
                    <BlogCard
                        key={post.id}
                        image={post.image}
                        tags={post.tags}
                        title={post.title}
                        description={post.description}
                        date={post.date}
                        comments={post.comments}
                    />
                ))}
            </div>
        </div>
    );
};

export default BlogHighlights;