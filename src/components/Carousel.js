const Carousel = () => {
    return (
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/coffee1.jpg" className="d-block w-100" alt="Coffee 1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Brew Coffee</h5>
              <p>One of the best thing to start your day.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/coffee2.jpg" className="d-block w-100" alt="Coffee 2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Premium Beans</h5>
              <p>Carefully selected from around the world.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="/images/coffee3.jpg" className="d-block w-100" alt="Coffee 3" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Expert Craftsmanship</h5>
              <p>Brewed to perfection by our skilled baristas.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  };
  
  export default Carousel;