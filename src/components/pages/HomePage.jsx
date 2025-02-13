import BlogHighlights from "../BlogHighlights";
import Carousel from "../Carousel";
import EditorsPicks from "../EditorsPicks";
import FeaturedProducts from "../FeaturedProducts";
import InfoContainer from "../InfoContainer";
import Layout from "../layout/Layout";

const HomePage = () => {
    return (
        <Layout>
            <EditorsPicks />
            <FeaturedProducts />
            <Carousel />
            <InfoContainer />
            <BlogHighlights />
        </Layout>
    );
};

export default HomePage;