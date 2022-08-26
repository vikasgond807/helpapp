import React from 'react'
import add1 from '../images/add1.png'
import add2 from '../images/add2.png'
import add3 from '../images/add3.png'
import add4 from '../images/add4.png'

const AddGesture = () => {
    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">
                            Add Gestures
                        </strong>
                        <h5 className="mb-0">

                            <ul>
                                <li> 1. Click on settings tab on menu bar & click on Add Gesture button</li>

                               
                            </ul>
                        </h5>

                        
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={add2} className="img-responsive" style={{ width: '250px', height: '250px' }} />

                    </div>
                </div>
            </div>

            <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">
                            Add Gestures
                        </strong>
                        <h5 className="mb-0">

                            <ul>
                                

                                <li>2. Enter the unique Gesture name & Command </li>

                            </ul>
                        </h5>

                        
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={add1} className="img-responsive" style={{ width: '250px', height: '250px' }} />

                    </div>
                </div>
            </div>

            <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">
                            Add Gestures
                        </strong>
                        <h5 className="mb-0">

                            <ul>


                                <li>3. Perform Gesture in the frame and wait for the confirmation</li>

                            </ul>
                        </h5>

                        
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={add3} className="img-responsive" style={{ width: '250px', height: '250px' }} />

                    </div>
                </div>
            </div>

            <div className="col-md-10 pd-2">
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-success">
                            Add Gestures
                        </strong>
                        <h5 className="mb-0">

                            <ul>
                                

                                <li>4. You are ready to perform the New Gesture </li>
                            </ul>
                        </h5>

                        
                    </div>
                    <div className="col-auto d-none d-lg-block">
                        <img src={add4} className="img-responsive" style={{ width: '250px', height: '250px' }} />

                    </div>
                </div>
            </div>
        </div>
    )

}

export default AddGesture