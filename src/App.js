import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import MainCard from './Components/MainCard';
import PreviewCard from './Components/PreviewCard';

function App() {

  const nftData = [
  {
    id: 1,
    name: "Cosmic Dreams",
    discription: "A mesmerizing abstract piece exploring the depths of cosmic imagination and digital artistry.",
    artist: "ArtistOne",
    price: 2.5,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
    description: "A mesmerizing abstract piece exploring the depths of cosmic imagination and digital artistry.",
    createdDate: "2024-01-15",
    owner: "0x742d...89ab"
  },
  {
    id: 2,
    name: "Neon Nights",
    discription: "Vibrant neon colors illuminate the digital landscape in this stunning cyberpunk-inspired artwork.",
    artist: "CryptoArtist",
    price: 1.8,
    category: "Digital",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    description: "Vibrant neon colors illuminate the digital landscape in this stunning cyberpunk-inspired artwork.",
    createdDate: "2024-01-20",
    owner: "0x123a...45cd"
  },
  {
    id: 3,
    name: "Abstract Harmony",
    discription: "A harmonious blend of colors and shapes creating a perfect balance of abstract expression.",
    artist: "DigitalMaster",
    price: 3.2,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
    description: "A harmonious blend of colors and shapes creating a perfect balance of abstract expression.",
    createdDate: "2024-02-01",
    owner: "0x456b...78ef"
  },
  {
    id: 4,
    name: "Digital Waves",
    discription: "Flowing digital waves capture the essence of nature in a modern digital format.",
    artist: "ArtistOne",
    price: 2.0,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&q=80",
    description: "Flowing digital waves capture the essence of nature in a modern digital format.",
    createdDate: "2024-02-10",
    owner: "0x789c...01gh"
  },
  {
    id: 5,
    name: "Pixel Paradise",
    discription: "A pixelated paradise showcasing the beauty of retro-modern digital art.",
    artist: "CryptoArtist",
    price: 4.5,
    category: "Digital",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    description: "A pixelated paradise showcasing the beauty of retro-modern digital art.",
    createdDate: "2024-02-15",
    owner: "0x234d...56ij"
  },
  {
    id: 6,
    name: "Ethereal Essence",
    discription: "An ethereal exploration of light, color, and digital essence.",
    artist: "DigitalMaster",
    price: 3.8,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80",
    description: "An ethereal exploration of light, color, and digital essence.",
    createdDate: "2024-02-20",
    owner: "0x567e...89kl"
  },
  {
    id: 7,
    name: "Futuristic Vision",
    discription: "A glimpse into the future through cutting-edge digital artistry.",
    artist: "ArtistOne",
    price: 5.0,
    category: "Futuristic",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=800&q=80",
    description: "A glimpse into the future through cutting-edge digital artistry.",
    createdDate: "2024-03-01",
    owner: "0x890f...12mn"
  },
  {
    id: 8,
    name: "Color Burst",
    discription: "An explosive burst of colors creating a dynamic visual experience.",
    artist: "CryptoArtist",
    price: 2.7,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&q=80",
    description: "An explosive burst of colors creating a dynamic visual experience.",
    createdDate: "2024-03-05",
    owner: "0x123g...34op"
  },
  {
    id: 9,
    name: "Geometric Dreams",
    discription: "Perfect geometric patterns merge with dreamlike qualities in this unique piece.",
    artist: "DigitalMaster",
    price: 3.5,
    category: "Geometric",
    image: "https://images.unsplash.com/photo-1620121478247-ec786b9be2fa?w=800&q=80",
    description: "Perfect geometric patterns merge with dreamlike qualities in this unique piece.",
    createdDate: "2024-03-10",
    owner: "0x456h...67qr"
  },
  {
    id: 10,
    name: "Digital Sunset",
    discription: "A digital interpretation of nature's most beautiful moment - the sunset.",
    artist: "ArtistOne",
    price: 2.3,
    category: "Nature",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    description: "A digital interpretation of nature's most beautiful moment - the sunset.",
    createdDate: "2024-03-15",
    owner: "0x789i...90st"
  },
  {
    id: 11,
    name: "Cyber Punk City",
    discription: "A dystopian cityscape rendered in stunning cyberpunk aesthetics.",
    artist: "CryptoArtist",
    price: 4.2,
    category: "Futuristic",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&q=80",
    description: "A dystopian cityscape rendered in stunning cyberpunk aesthetics.",
    createdDate: "2024-03-20",
    owner: "0x234j...23uv"
  },
  {
    id: 12,
    name: "Abstract Flow",
    discription: "Flowing abstract forms create a sense of movement and energy.",
    artist: "DigitalMaster",
    price: 3.0,
    category: "Abstract",
    image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca?w=800&q=80",
    description: "Flowing abstract forms create a sense of movement and energy.",
    createdDate: "2024-03-25",
    owner: "0x567k...45wx"
  }
];

  const [selectedAuthor, setSelectedAuthor] = useState('All');
  const [sortConfig, setSortConfig] = useState({
    field: 'artist',
    order: 'asc',
  });

  const authorOptions = ['All', ...Array.from(new Set(nftData.map((nft) => nft.artist)))];

  const sortedNfts = (() => {
    const filtered = selectedAuthor === 'All'
      ? nftData
      : nftData.filter((nft) => nft.artist === selectedAuthor);

    return [...filtered].sort((a, b) => {
      let comparison = 0;

      if (sortConfig.field === 'name') {
        comparison = a.name.localeCompare(b.name);
      } 
      else if (sortConfig.field === 'price') {
        comparison = a.price - b.price;
      } 
      else if (sortConfig.field === 'category') {
        comparison = a.category.localeCompare(b.category);
      }

      return sortConfig.order === 'asc' ? comparison : -comparison;
    });
  })();

  const handleAuthorChange = (event) => {
    setSelectedAuthor(event.target.value);
  };

  const handleSortChange = (field, order) => {
    setSortConfig({ field, order });
  };

  // Get featured NFT (highest priced one)
  const featuredNft = nftData.reduce((prev, current) => 
    (prev.price > current.price) ? prev : current
  );

  return ( 
    <Routes>
      <Route path="/nft/:id" element={
        <>
          <Header/>
          <PreviewCard nftData={nftData} />
        </>
      } />
      <Route path="/" element={
        <>
          <Header/>
          <div className='main' >
          <MainCard featuredNft={featuredNft} />

            <div className='controls-bar'>
              <div className='control-group'>
                <label className='control-label' htmlFor='author-filter'>Filter by author</label>
                <select
                  id='author-filter'
                  className='author-select'
                  value={selectedAuthor}
                  onChange={handleAuthorChange}
                >
                  {authorOptions.map((author) => (
                    <option key={author} value={author}>
                      {author}
                    </option>
                  ))}
                </select>
              </div>
              <div className='control-group'>
                <span className='control-label'>Sort by product name</span>
                <div className='sort-buttons'>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'name' && sortConfig.order === 'asc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('name', 'asc')}
                  >
                    A to Z
                  </button>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'name' && sortConfig.order === 'desc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('name', 'desc')}
                  >
                    Z to A
                  </button>
                </div>
              </div>
              <div className='control-group'>
                <span className='control-label'>Sort by price</span>
                <div className='sort-buttons'>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'price' && sortConfig.order === 'asc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('price', 'asc')}
                  >
                    Low to High
                  </button>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'price' && sortConfig.order === 'desc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('price', 'desc')}
                  >
                    High to Low
                  </button>
                </div>
              </div>
              <div className='control-group'>
                <span className='control-label'>Sort by category</span>
                <div className='sort-buttons'>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'category' && sortConfig.order === 'asc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('category', 'asc')}
                  >
                    A to Z
                  </button>
                  <button
                    type='button'
                    className={`sort-button ${sortConfig.field === 'category' && sortConfig.order === 'desc' ? 'active' : ''}`}
                    onClick={() => handleSortChange('category', 'desc')}
                  >
                    Z to A
                  </button>
                </div>
              </div>
            </div>
            
            <div className="nft-grid-container">
              {sortedNfts.map(nft =>
                <Card key={nft.id} data={nft} />
              )}
            </div>
          </div>
        </>
      } />
    </Routes>
      );

}

export default App;
