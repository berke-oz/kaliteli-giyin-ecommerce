import BlogHighlights from "../BlogHighlights";
import Carousel from "../Carousel";
import EditorsPicks from "../EditorsPicks";
import FeaturedProducts from "../FeaturedProducts";
import HomeBanner from "../HomeBanner";
import InfoContainer from "../InfoContainer";
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