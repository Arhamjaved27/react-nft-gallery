import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card(nft) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/nft/${nft.data.id}`);
    };

  return (
    <div className='card-wrapper'>
        <div className="nft-card" onClick={handleClick}>
        <div className="nft-card-image-container">
            <img src={nft.data.image} alt={nft.data.name} className="nft-card-image" />
            <div className="nft-card-overlay">
            <span className="nft-card-view-details">View Details</span>
            </div>
        </div>
        <div className="nft-card-content">
            <h3 className="nft-card-name">{nft.data.name}</h3>
            <p className="nft-card-description">{nft.data.discription}</p>
            <p className="nft-card-artist">by {nft.data.artist}</p>
            <div className="nft-card-footer">
            <span className="nft-card-category">{nft.data.category}</span>
            <span className="nft-card-price">{nft.data.price} $</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card