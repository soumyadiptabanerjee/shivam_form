import React from 'react'
import './Form.css'

const Form = () =>{
    return (
         <>
         <div className='container align my-5'>
             <div className='form_contents'>
                 <div className='row align'>
                     <div className='col-12 align py-4'>
                         <h2>Contact Us</h2>
                     </div>
                     <div className='col-8 input_dummy mb-3'>
                         <span><i className="fa-solid fa-envelope"></i>Email Us: mitazahelp@gmail.com</span></div>
                     <div className='col-8 input_dummy'>
                         <span><i class="fa-solid fa-phone"></i> Call us: +91 567572816899</span>
                     </div>
                     </div>
             </div>
         </div>
         </>
    );
}

export default Form;