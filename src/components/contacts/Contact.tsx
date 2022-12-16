import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [selects, setSelects] = useState();
  return (
    <div className="contact">
      <div className="container">
        <div className="top">
          <h1>Contact</h1>
        </div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div>
            <label>Subject</label>
            <select>
              <option>Become A Gold Member</option>
              <option>Add My Outlet</option>
              <option>General Enquiry</option>
            </select>
          </div>
          <div>
            <label>Message</label>
            <textarea
              cols={28}
              rows={3}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div className="botton">
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
