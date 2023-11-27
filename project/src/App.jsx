
import './App.css'
import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import HomePages from './components/page/homePages';
import AboutPages from './components/page/aboutPages';
import GalleryPages from './components/page/galleryPages';
import LanguagePages from './components/page/languagePages';
import ShortcodesPages from './components/page/shortcodesPages';
import MarkupPages from './components/page/markupPages';
import ContactPages from './components/page/contatcPages';
import ImagePages from './components/page/imagePages';
import ClearingPages from './components/page/clearingPages';
import CommentDisabledPage from './components/page/commentDisabledPages';
import CommentAblePage from './components/page/commentAblePAge';
import Navbar from './components/layout/Navbar/index';

function App() {


  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePages/>} /> 
        <Route path="/about" element={<AboutPages/>} /> 
        <Route path="/gallery" element={<GalleryPages/>} /> 
        <Route path="/language" element={<LanguagePages/>} /> 
        <Route path="/shortcodes" element={<ShortcodesPages/>} /> 
        <Route path="/markup" element={<MarkupPages/>} /> 
        <Route path="/contact" element={<ContactPages/>} /> 
        <Route path="/image" element={<ImagePages/>} /> 
        <Route path="/clearing" element={<ClearingPages/>} /> 
        <Route path="/commentDisable" element={<CommentDisabledPage/>} /> 
        <Route path="/commentAble" element={<CommentAblePage/>} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
