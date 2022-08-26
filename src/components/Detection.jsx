import React from 'react'
import main1 from '../images/main1.png'
import main2 from '../images/main2.png'

const Detection = () => {
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

                <li>Once User is Authenticated he/she will be directed to HOme Window</li>

                <li>In on Home Window  click on start button</li>

                
              </ul>
            </h5>

            
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src={main1} class="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>

      <div class="col-md-10 pd-2">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">
              Detection & Performance of Gestures 
            </strong>
            <h5 class="mb-0">

              <ul>
                

                <li>Perform Gesture  & Command will be executed </li>

                <li>User can pause the camera by clicking on Pause button </li>

                <li>Loggout button to exist out of the application </li>
              </ul>
            </h5>

            
          </div>
          <div class="col-auto d-none d-lg-block">
            <img src={main2} class="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Detection