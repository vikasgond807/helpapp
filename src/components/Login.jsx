import React from 'react'
import register1 from '../images/register1.png';
import register2 from '../images/register2.png';
import register3 from '../images/register3.png';
import register4 from '../images/register4.png';
import login from '../images/login.png';



const Login = () => {
  return (
    <>
      <div className="login">
        

            <div className="row mb-2">
              <div className="col-md-10">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                  <strong className="d-inline-block mb-2 text-success">
                     Login
                    </strong>
                    <h5>
                      <li> Press Enter to Capture Image</li>

                      <li>If Existing user and not detected! Please Try Again</li>

                      <li>If New User ,Enter name of minimum 4 characters</li>

                      <li>Press Enter To Capture</li>
                    </h5>
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={login} className="img-responsive" style={{ width: '300px', height: '250px' }} />
                  </div>
                </div>
              </div>
              <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Register
                    </strong>

                    <h5 className="mb-0">
                      <li>If You are New User a Register Notification Pops up</li>
                     
                    </h5>
                    
                    
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={register1} className="img-responsive" style={{ width: '300px', height: '250px' }} />

                  </div>
                </div>
              </div>

              <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Register
                    </strong>
                    
                    <h5 className="mb-0">
                    
                      <li>Click on Yes if you want to Register</li>
                      
                    </h5>
                    
                    
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={register2} className="img-responsive" style={{ width: '300px', height: '250px' }} />

                  </div>
                </div>
              </div>
              <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Register
                    </strong>
                    
                    <h5 className="mb-0">
                      
                      <li>Add Your Image to DataBase</li>
                      
                    </h5>
                    
                    
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={register3} className="img-responsive" style={{ width: '300px', height: '250px' }} />

                  </div>
                </div>
              </div>
              <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Register
                    </strong>
                    
                    <h5 className="mb-0">
                    
                      <li> You will be Redirected To Login for Authentication</li>
                    </h5>
                    
                    
                  </div>
                  <div className="col-auto d-none d-lg-block">
                    <img src={register4} className="img-responsive" style={{ width: '300px', height: '250px' }} />

                  </div>
                </div>
              </div>

            </div>
          
      </div>
    </>
  )
}

export default Login