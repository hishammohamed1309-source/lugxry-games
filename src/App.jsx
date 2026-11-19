import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import TrendingGames from './components/TrendingGames';
import MostPlayed from './components/MostPlayed';
import Categories from './components/Categories';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import {
  featuresData,
  trendingGames,
  mostPlayedGames,
  categoriesData,
} from './data/gamesData';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const filteredTrending = trendingGames.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToCart = (game) => {
    const nextCount = cartCount + 1;
    setCartCount(nextCount);
    alert(`تمت إضافة "${game.title}" (${nextCount} عناصر في السلة)`);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-lugx-dark">
      <Navbar cartCount={cartCount} />
      <HeroSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Features features={featuresData} />
      <TrendingGames games={filteredTrending} onAddToCart={handleAddToCart} />
      <MostPlayed games={mostPlayedGames} />
      <Categories categories={categoriesData} />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;