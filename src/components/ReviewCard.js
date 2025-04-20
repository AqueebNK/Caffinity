const ReviewCard = ({ profileImg, reviewText }) => {
    return (
      <div className="review-card">
        <img src={profileImg} alt="Profile" className="profile-pic" />
        <p className="review-text">{reviewText}</p>
      </div>
    );
  };
  
  export default ReviewCard;
  