import React from 'react'
import './contact.scss'
import SearchBtn from '../../serchBtn'

function ContactPages() {
  return (
    <div className='language'>
    <div className="container">
      <div className='conatinerLeft'>
        <div className='galleryUp'>
          <h1>Contact Form</h1>
        </div>
        <div className='languageDown'>
        <div className='below'>
              <p>This contact form is for demo purpose only and messages will not reach Colorlib team. Technically we are going to receive them but we will ignore them unless you are looking to pay us for something. 🙂 For support related questions, please use our support forum.</p>
        </div>
        <div className='inputsBox'>
        <form action="">
          <label htmlFor="">Your Name (required)</label>
          <input type="text" className='input1' />
          <label htmlFor="">Your Email (required)</label>
          <input type="text" className='input1' />
          <label htmlFor="">Subject</label>
          <input type="email" className='input1' />
          <label htmlFor="">Your Message</label>
          <input type="text" className='input2' />
          <button>Send</button>
        </form>
        </div>
        </div>
        
      </div>
      <SearchBtn/>
      
    </div>
  </div>
  )
}

export default ContactPages