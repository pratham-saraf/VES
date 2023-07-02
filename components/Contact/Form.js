import React, { useState } from 'react';
import Modal from "../Modal/modal.js"
import Preloader from '../Preloader/Preloader.js';

export default function CallToAction() {
    const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
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
		name: name,
		phone: phone,
		message: message,
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
		  <form onSubmit={handleSubmit} className="contact-form row">
            <div className="col-12">
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required/>
            </div>
            <div className="col-12">
                <input type="text" placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div className="col-12">
                <textarea placeholder="Write your message" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
            </div>
            <div className="col-12">
                <button className="theme-btn" type="submit">
                    Message Submit
                </button>
            </div>
       	 </form>
		  
          {modalOpen && (
              <Modal isOpen={true} onClose={() => setModalOpen(false)}>
                {isLoading && !modalReady ? (
                  <Preloader duration={10000}/>
                ) : (
                  <p>{modalMessage}</p>
                )}
              </Modal>
            )}
		</section>
	  )
}
