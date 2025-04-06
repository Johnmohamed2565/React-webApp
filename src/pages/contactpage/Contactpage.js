import React from 'react'

const Contactpage = () => {
  return (
    <div>
        <div className="container mt-4">
        
        <h2 className="text-center mb-4">Contact Us</h2>
        
        <form>
          
            <div className="row mb-3">
              <div className="col-md-6">
                <label for="firstName" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
            <div className="col-md-6">
              <label for="lastName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastName" required />
            </div>
          </div>

         
          <div className="mb-3">
            <label for="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>

          
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div className="d-flex gap-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked
                />
                <label className="form-check-label" for="male">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label className="form-check-label" for="female">Female</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="transgender"
                  value="transgender"
                />
                <label className="form-check-label" for="transgender"
                  >Transgender</label
                >
              </div>
            </div>
          </div>

                  <div className="mb-3">
            <label for="feedback" className="form-label">Feedback</label>
            <textarea
              className="form-control"
              id="feedback"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
    </div>
    </div>
  )
}

export default Contactpage