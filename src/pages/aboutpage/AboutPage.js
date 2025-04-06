import React from 'react'

const AboutPage = () => {
  return (
    <div>
        <section className="container py-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <h1>About us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
              corporis animi reprehenderit soluta eos quasi ratione, commodi
              ipsa non laborum eaque fuga ex dolore quaerat, nulla voluptas ab!
              Dolor, totam!
            </p>
            <button type="button" className="btn btn-primary">Know more</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12">
            <img
              src="./assests/images/CAR (3).jpg"
              alt="About Img"
              className="img-fluid"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage