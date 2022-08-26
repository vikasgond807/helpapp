import React from 'react';

import deleted from '../images/deleted.png'
import delete1 from '../images/delete1.png'



const Delete = () => {
  return (
    <div className='d-flex flex-column justify-content-center'>
      <div className="col-md-10 pd-2">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              Delete Gestures
            </strong>
            <h5 className="mb-0">
              
              <ul>
                <li>Click on delete button to delete the particular gesture & wait for the confirmation</li>

              </ul>
            </h5>
            
            
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={delete1} className="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>

      <div className="col-md-10 pd-2">
        <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-success">
              Delete Gestures
            </strong>
            <h5 className="mb-0">
              
              <ul>

                <li>You can restore the default gestures by clicking on reset button mentioned in setting page</li>
              </ul>
            </h5>
            
            
          </div>
          <div className="col-auto d-none d-lg-block">
            <img src={deleted} className="img-responsive" style={{ width: '300px', height: '250px' }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Delete
