import React from 'react'
import "./Submit.css"
function SubmitEmail(contact,Yourfullname,Email,Message,submit) {
  return (
    <div>
          <div className="contact-container ">
            <div className="contact-box">
              <h2 className="contact-heading">{contact} </h2>
              <div className="box-field">
                <i className="ri-user-line"></i>
                <input type="text" placeholder={Yourfullname} />
              </div>
              <div className="box-field">
                <i className="ri-mail-line"></i>
                <input placeholder={Email} type="text" />
              </div>
              <textarea className="text-area" placeholder={Message}></textarea>
              <button className="custom-btn submit-btn" style={{fontFamily:"Cairo"}}>{submit}</button>
            </div>
          </div>
        </div>
  )
}

export default SubmitEmail
