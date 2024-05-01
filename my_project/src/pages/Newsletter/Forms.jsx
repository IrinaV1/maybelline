import React from 'react'
import '../../styles/global.css'

function Forms() {
  return (
    <div className="content-form">
<div className="content-form__wrapper">
    <form className="form__newsletter" action="/">
      <div className="form__wrapper">
        <div className="content-name">
        <div className="content-form__name">
            <p className="content-form-p__name">First Name *</p>
            <input className="input-form__name" type="text" placeholder="First Name" required />
        </div>
        <div className="content-form__lastname">
            <p className="content-form-p__lastname">Last Name *</p>
            <input className="input-form__lastname" type="text" placeholder="Last Name" required />
        </div>
      </div>
        <div className="content-form__email">
            <p className="content-form-email">EMAIL *</p>
            <input className="input-form__email" type="email" placeholder="Email" required />
            </div>
<div className="date">
            <div className="label-month">
              <label for="month">
                <p className="label-month__m">Birth Month *</p>
              </label>
              <select name="month" id="month">
                <option value="Month">Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august"> August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
         
           
       
          </div>
                                                                                                                                    
       
            <div className="label-day">
              <label for="day">
                <p className="label-day__d">Birth Day *</p>
              </label>
              <select name="day" id="day">
                <option value="Day">Day</option>
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
                <option value="1">10</option>
                <option value="1">11</option>
                <option value="1">12</option>
                <option value="1">13</option>
                <option value="1">14</option>
                <option value="1">15</option>
                <option value="1">16</option>
                <option value="1">17</option>
                <option value="1">18</option>
                <option value="1">19</option>
                <option value="1">20</option>
                <option value="1">21</option>
                <option value="1">22</option>
                <option value="1">23</option>
                <option value="1">24</option>
                <option value="1">25</option>
                <option value="1">26</option>
                <option value="1">27</option>
                <option value="1">28</option>
                <option value="1">29</option>
                <option value="1">30</option>
                <option value="1">31</option>
              </select>
         
           
       
          </div>
        
        
        </div>

<div className="label-retailer">
     
          <label for="retailer">
            <p className="label-retailer__p">PREFERRED RETAILER</p>
          </label>
  
      <select name="retailer" id="retailer">
      <option value="amazon">Amazon</option>
      <option value="amazon">Target</option>
      <option value="amazon">CVS</option>
      <option value="amazon">Ulta</option>
      </select>
    </div>
<div className="form-text">
  <p className="form-text__f">*Indicates mandatory field</p>
<br />
 

  <p className="form-text__t">  By submitting this form, I confirm I am a US resident, 16+, and (1) agree to Maybelline's Terms of Use  andto receive marketing and promotional communications from Maybelline's and other L'Oréal brands, and (2) have read and acknowledge the Maybelline's Privacy Notice and Notice of Financial Incentives. Maybelline uses personal information it collects and processes to provide you tailored and personalized content, advertisements, offers, and other marketing and promotional communications (including promotional emails) from Maybelline and other
     L'Oréal brands, including based on your beauty profile, and for other purposes listed in Maybelline's Privacy Policy.</p>
</div>
   
<div className="submit-btn">
    <button type="submit" className="input-submit_btn">SUBMIT</button>
  </div>
</div>

  </form>

      

    </div>
</div>
  )
}

export default Forms
