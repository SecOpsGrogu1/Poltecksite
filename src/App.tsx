import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import DocumentationPage from './pages/DocumentationPage'
import CareersPage from './pages/CareersPage'
import CompanyPage from './pages/CompanyPage'
import NewsPage from './pages/NewsPage';
import NewsArticlePage from './pages/NewsArticlePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:id" element={<NewsArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
