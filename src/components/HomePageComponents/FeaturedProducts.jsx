import React from 'react';
import ProductCard from '../ProductCard';

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            image: 'https://picsum.photos/348/427?random=1',
            title: 'Product 1',
            description: 'Üst düzey kalitede ürünümüz.',
            oldPrice: '$120',
            newPrice: '$100',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 2,
            image: 'https://picsum.photos/348/427?random=2',
            title: 'Product 2',
            description: 'Farklı tasarımlı ürünümüz.',
            oldPrice: '$140',
            newPrice: '$120',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 3,
            image: 'https://picsum.photos/348/427?random=3',
            title: 'Product 3',
            description: 'Yeni sezon ürünümüz.',
            oldPrice: '$110',
            newPrice: '$90',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 4,
            image: 'https://picsum.photos/348/427?random=4',
            title: 'Product 4',
            description: 'Sınırlı adet ürünümüz.',
            oldPrice: '$170',
            newPrice: '$150',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 5,
            image: 'https://picsum.photos/348/427?random=5',
            title: 'Product 5',
            description: 'En beğenilen ürünümüz.',
            oldPrice: '$130',
            newPrice: '$110',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 6,
            image: 'https://picsum.photos/348/427?random=6',
            title: 'Product 6',
            description: 'Yüksek kaliteli ve şık.',
            oldPrice: '$150',
            newPrice: '$130',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 7,
            image: 'https://picsum.photos/348/427?random=7',
            title: 'Product 7',
            description: 'Modern tasarım örneği.',
            oldPrice: '$115',
            newPrice: '$95',
            colors: ['blue', 'green', 'orange', 'black']
        },
        {
            id: 8,
            image: 'https://picsum.photos/348/427?random=8',
            title: 'Product 8',
            description: 'Stil sahibi ürünümüz.',
            oldPrice: '$125',
            newPrice: '$105',
            colors: ['blue', 'green', 'orange', 'black']
        }
    ];

    return (
        <div className="p-30 flex flex-col items-center gap-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold">FEATURED PRODUCTS</h1>
                <p className="mt-2 text-lg">
                    En beğenilen ve öne çıkan ürünlerimizi keşfedin.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                        colors={product.colors}
                    />
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;    