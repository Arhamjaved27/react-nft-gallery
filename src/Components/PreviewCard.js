import { useParams, useNavigate } from 'react-router-dom';
import './PreviewCard.css';

function PreviewCard({ nftData }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const nft = nftData.find(item => item.id === parseInt(id));

  if (!nft) {
    return (
      <div className="preview-error">
        <h2>NFT not found</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="preview-container">
      <button className="preview-back-button" onClick={() => navigate('/')}>
        ← Back to Gallery
      </button>
      
      <div className="preview-content">
        <div className="preview-image-section">
          <img 
            src={nft.image} 
            alt={nft.name} 
            className="preview-image"
          />
        </div>
        
        <div className="preview-info-section">
          <div className="preview-category">{nft.category}</div>
          <h1 className="preview-name">{nft.name}</h1>
          <p className="preview-description">{nft.description || nft.discription}</p>
          
          <div className="preview-details">
            <div className="preview-detail-item">
              <span className="detail-label">Artist</span>
              <span className="detail-value">{nft.artist}</span>
            </div>
            <div className="preview-detail-item">
              <span className="detail-label">Category</span>
              <span className="detail-value">{nft.category}</span>
            </div>
            <div className="preview-detail-item">
              <span className="detail-label">Created Date</span>
              <span className="detail-value">{nft.createdDate}</span>
            </div>
            <div className="preview-detail-item">
              <span className="detail-label">Owner</span>
              <span className="detail-value">{nft.owner}</span>
            </div>
          </div>
          
          <div className="preview-price-section">
            <span className="price-label">Price</span>
            <span className="price-value">{nft.price} $</span>
          </div>
          
          <div className="preview-actions">
            <button className="preview-buy-button">Buy Now</button>
            <button className="preview-offer-button">Make Offer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreviewCard;

