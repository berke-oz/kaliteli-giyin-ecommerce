
import EditorsPicks from "../HomePageComponents/EditorsPicks";
import HomeBanner from "../HomePageComponents/HomeBanner";
import TrustBadges from "../HomePageComponents/TrustBadges";
import Layout from "../layout/Layout";

const HomePage = () => {
    return (
        <Layout>
            <HomeBanner />
            <EditorsPicks />
            <TrustBadges />
        </Layout>
    );
};

export default HomePage;