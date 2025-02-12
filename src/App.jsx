import './App.css'
import BlogHighlights from './components/BlogHighlights';
import Carousel from './components/Carousel';
import EditorsPicks from './components/EditorsPicks';
import FeaturedProducts from './components/FeaturedProducts';
import InfoContainer from './components/InfoContainer';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import './index.css'

function App() {
  return (
    <>
      <Header />
      <EditorsPicks />
      <FeaturedProducts />
      <Carousel />
      <InfoContainer />
      <BlogHighlights />
      <Footer />
    </>
  );
}

export default App;
