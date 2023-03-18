import React from 'react'
import "./contact.css"

function Contact() {
  return (
    <section className="contact section" id="contact">
         <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i> 

                        <h3 className="contact__card-title">Email</h3>  
                        <span className="contact__card-data">deybiorrego@gmail.com</span>

                        <a href="deybiorrego@gmail.com" className="contact__button">Write me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i> 

                        <h3 className="contact__card-title">Whatssap</h3>  
                        <span className="contact__card-data">(+51) 939416975</span>

                        <a href="https://api.whatsapp.com/send?phone=51939416975&text=Hola , deseo más información" target= "_blank"className="contact__button">Write me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i> 

                        <h3 className="contact__card-title">Messenger</h3>  
                        <span className="contact__card-data">Deybi Orrego</span>

                        <a href="https://www.linkedin.com/in/deybi-orrego-a3b1b2237/" target="_blank" className="contact__button">Write me 
                            <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write me your project</h3>

                <form  className="contact__form">
                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Name</label>
                        <input type="text" name="name" className='contact__form-input' placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Mail</label>
                        <input type="email" name="email" className='contact__form-input' placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div">
                        <label  className="contact__form-tag">Project</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write your project' ></textarea>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact