import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaPhone } from "react-icons/fa";

const Contact = () => {
    const companyInfo = {
        phoneNumber: "01-2345678",
        linkedin: "BeFit_my",
        instagram: "BeFit_my",
        facebook: "BeFit_my",
    };

    return (
        <React.Fragment>
            <section className="content-container">
                <div className="textArea">
                    <h1 className="header-topic">Contact Us</h1>
                    <br/>
                    <p>
                        We would love to hear from you !<br/>
                        For any enquiries, feel free to drop us an email ! 
                    </p>
                    <br/>
                    <p>
                        How can we assist you?
                    </p>
                </div>
                
                <div className="block">
                    <div className="row">
                        <div className="col-left">
                            <form id="contact" action="">
                                <br/>
                                <h4 className="secondary-heading">Leave A Message</h4>
                                <br/>
                                <fieldset>
                                    <input
                                        placeholder="Your Name"
                                        type="text"
                                        tabIndex="1" 
                                        required autoFocus
                                    />
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="Your Email Address"
                                        type="email"
                                        tabIndex="2" 
                                        required
                                    />
                                </fieldset>
                                <fieldset>
                                    <input
                                        placeholder="Your Phone Number"
                                        type="tel"
                                        tabIndex="3" 
                                        required
                                    />
                                </fieldset>
                                <fieldset>
                                    <textarea 
                                        placeholder="Type your Message Here...." 
                                        tabIndex="4" 
                                        required
                                    ></textarea>
                                </fieldset>
                                <fieldset>
                                    <button className="secondary-button" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                                </fieldset>
                            </form>
                        </div>
                        <div className="col-right">
                            <div id="details">
                                <br/>
                                <h4 className="secondary-heading">Reach Out To Us</h4>
                                <br/>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><FaPhone /></td>
                                            <td>
                                                {companyInfo.phoneNumber}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><FaLinkedin /></td>
                                            <td>
                                                {companyInfo.linkedin}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><FaInstagram /></td>
                                            <td>
                                                {companyInfo.instagram}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><FaFacebook /></td>
                                            <td>
                                                {companyInfo.facebook}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;