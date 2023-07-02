import React, { useState } from 'react';
import Modal from "../Modal/modal.js"
import Preloader from '../Preloader/Preloader.js';

export default function CallToAction() {
    const [email, setEmail] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modalReady, setModalReady] = useState(false);
  
    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      const data = {
        email: email,
      };
  
      const JSONdata = JSON.stringify(data);
  
      console.log(JSONdata);
      const endpoint = '/api/email';
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSONdata,
      };
  
      setModalOpen(true); // Open the modal right away
      setIsLoading(true);
      setModalReady(false);
    
      const response = await fetch(endpoint, options);
      const result = await response.json();
    
      setModalMessage(`Thank you, We will be in touch shortly.`);
      setIsLoading(false);
      setModalReady(true);
    };
  return (
     <section className="cta-banner-wrapper section-padding pt-0">
        <div className="container">
            <div className="cta-banner newsletter-box text-white">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 text-center col-xl-8 offset-xl-2">
                        <div className="cta-contents">
                            <h2 className="wow fadeInUp">Are you interested in doing your project with us?</h2>
                            <div className="newsletter-form wow fadeInUp">
                                <form onSubmit={handleSubmit}>
                                    <input type="email" placeholder="Enter your email" value={email} onChange={handleChange} /> 
                                    <button type="submit" className="submit-btn">Contact Now</button>
                                </form>
                            </div>

                            <div className="arrow-shape">
                                <img src="/img/arrow-shape.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
              <Modal isOpen={true} onClose={() => setModalOpen(false)}>
                {isLoading && !modalReady ? (
                  <Preloader duration={10000}/>
                ) : (
                  <p>{modalMessage}</p>
                )}
              </Modal>
            )}
        </div>
    </section>
  )
}
