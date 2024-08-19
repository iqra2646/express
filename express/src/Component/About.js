import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const About = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/images/image1.png" className="card-img-top" alt="Seat Booking" />
            <div className="card-body">
              <h5 className="card-title">Get a Seat Ahead of Time</h5>
              <p className="card-text">Book from anywhere and get a seat reserved.</p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/images/image2.png" className="card-img-top" alt="Customer Service" />
            <div className="card-body">
              <h5 className="card-title">Excellent Customer Service</h5>
              <p className="card-text">Get more than you expect - in unexpected and helpful ways.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src="" className="card-img-top" alt="Smile More" />
            <div className="card-body">
              <h5 className="card-title">Lighten Up, Smile More</h5>
              <p className="card-text">Get every aspect of your experience a little bit better.</p>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4 d-flex justify-content-center align-items-center">
          <div className="card" style={{ width: '18rem' }}>
            <img src="/images/image copy2.png" className="card-img-top" alt="Magnificent Views" />
            <div className="card-body">
              <h5 className="card-title">Magnificent Views</h5>
              <p className="card-text">Enjoy breathtaking views - Have an adventurous journey all the way.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
