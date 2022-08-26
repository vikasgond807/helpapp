import React from 'react'
import settings from '../images/settings.png'

const Default = () => {
  return (
    <div>
      <div class="col-md-10 d-flex justify-content-center">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">
              Detection & Performance of Gestures 
            </strong>
            <h5 class="mb-0">

              <ul>

                <li>Here is the List of Default gestures</li>

                

                
              </ul>
            </h5>

            
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src={settings} class="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Default