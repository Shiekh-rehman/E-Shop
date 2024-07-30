import React from 'react'
import HorizontalScrollCards from './HorizontalScrollCards'

function Main() {
  return (
    <>

      <HorizontalScrollCards/>

      <div className="carousel-wrapper">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/public/Screenshot (7).png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.darimooch.com/cdn/shop/files/Build_your_own_bundle_Box_Banner_1460x402_150a8b31-3a71-4355-9d0c-34640ec2ee41.jpg?v=1720779636" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://www.darimooch.com/cdn/shop/files/Build_your_own_bundle_Box_Banner_1460x402_150a8b31-3a71-4355-9d0c-34640ec2ee41.jpg?v=1720779636" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



    </>
  )
}

export default Main
