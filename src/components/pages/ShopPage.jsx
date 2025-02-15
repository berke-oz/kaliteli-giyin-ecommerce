import React from 'react';
import Layout from '../layout/Layout';
import ShopCards from '../ShopPageComponents/ShopCards';
import Clients from '../ShopPageComponents/Clients';
import FilterShopPage from '../ShopPageComponents/FilterShopPage';
import ShopProductCard from '../ShopPageComponents/ShopProductCard';

const ShopPage = () => {
    return (
        <Layout>
            <ShopCards />
            <FilterShopPage />
            <ShopProductCard />
            <Clients />

        </Layout>
    );
};

export default ShopPage;