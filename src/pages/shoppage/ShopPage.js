import React from 'react'

const ShopPage = () => {
  return (
    <div>
        <h1 className="text-center pt-2" >Our products</h1>

<section className="container py-5">
  <div className="row">
  
    <div className="col-lg-3 col-md-6 col-sm-12 col-12 mb-4">
      <div className="card h-100 shadow-sm content-div">
        <img
          src="./assests/images/fr.jpeg"
          alt="Product"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">About Product</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sit aliquid distinctio.
          </p>
          <p><del>Rs.1000</del>  Rs.599</p>
        </div>
      </div>
    </div>

  
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm content-div">
        <img
          src=".//assests/images/spray2.jpeg"alt="Product"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">About Product</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sit aliquid distinctio.
          </p>
          <p><del>Rs.1000</del>  Rs.599</p>
        </div>
      </div>
    </div>

    
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm content-div">
        <img
          src="./assests/images/tv2.jpeg"
          alt="Product"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">About Product</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sit aliquid distinctio.
          </p>
          <p><del>Rs.1000</del>  Rs.599</p>
        </div>
      </div>
    </div>

    
    <div className="col-lg-3 col-md-6 mb-4">
      <div className="card h-100 shadow-sm content-div">
        <img
          src="./assests/images/wm.jpeg"
          alt="Product"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">About Product</h5>
          <p className="card-text text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            sit aliquid distinctio.
          </p>
          <p><del>Rs.1000</del>  Rs.599</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default ShopPage