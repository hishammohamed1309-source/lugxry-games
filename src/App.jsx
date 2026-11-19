import { useState } from 'react';
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import Features from "./Components/Features";
import TrendingGames from "./Components/TrendingGames";
import MostPlayed from "./Components/MostPlayed";
import Categories from "./Components/Categories";
import CtaBanner from "./Components/CtaBanner";
import Footer from "./Components/Footer";
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