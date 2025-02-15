
import BlogHighlights from "../HomePageComponents/BlogHighlights";
import Carousel from "../HomePageComponents/Carousel";
import EditorsPicks from "../HomePageComponents/EditorsPicks";
import FeaturedProducts from "../HomePageComponents/FeaturedProducts";
import HomeBanner from "../HomePageComponents/HomeBanner";
import InfoContainer from "../HomePageComponents/InfoContainer";
import Layout from "../layout/Layout";

const HomePage = () => {
    return (
        <Layout>
            <HomeBanner />
            <EditorsPicks />
            <FeaturedProducts />
            <Carousel />
            <InfoContainer />
            <BlogHighlights />
        </Layout>
    );
};

export default HomePage;