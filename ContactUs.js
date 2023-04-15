import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
    return (
        <div>
            {/* Contact Form */}
            <div className="container contact-form">
                <h1>Contact Us</h1>
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="inputName">Name *</label>
                                <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputEmail">Email *</label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputPhone">Phone</label>
                                <input type="text" className="form-control" id="inputPhone" placeholder="Enter your phone number" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label htmlFor="inputMessage">Message *</label>
                                <textarea className="form-control" id="inputMessage" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}