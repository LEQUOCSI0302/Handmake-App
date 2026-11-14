import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage.tsx";
import LoginPage from "./pages/LoginPage";
import ProductListPage from "./pages/ProductListPage";
import PolicyPage from "./pages/PolicyPage";
import ContactPage from "./pages/contact/ContactPage.tsx";
import BlogPage from "./pages/Blog/BlogPage.tsx";

function App() {
    return (
        <div className="app">
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/gioi-thieu" element={<AboutPage />} />
                <Route path="/tai-khoan" element={<LoginPage />} />
                <Route path="/san-pham" element={<ProductListPage />} />
                <Route path="/san-pham/:id" element={<ProductDetailPage />} />
                <Route path="/lien-he" element={<ContactPage />} />
                <Route path="/chinh-sach" element={<PolicyPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/chinh-sach/:policyId" element={<PolicyPage/>} />
            </Routes>

            <Footer />
        </div>
    );
}

export default App;