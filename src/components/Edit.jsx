import React from 'react'
import edit from '../images/edit command.png'

const Edit = () => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className="col-md-10 ">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              Edit Gestures
            </strong>
            <h5 className="mb-0">

              <ul>
                <li>Click on settings tab on menu bar & click on Edit Gesture button to change command of the respective gesture</li>

                <li>Press key o keyboard for command selection Command </li>

                <li>Press Ok to confirm the new command</li>

                <li>You are ready to perform the Gesture mapped with different commands</li>
              </ul>
            </h5>

          
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={edit} className="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Edit