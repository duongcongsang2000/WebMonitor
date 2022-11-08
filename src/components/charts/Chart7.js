import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots'; 
import { render } from '@testing-library/react';
import SubChart7 from './SubChart7';

export default function Chart7() {
    return (
        <div className="card-body">
        <div className="d-flex align-items-center">
        <h6 className="mb-0">Traffic Source</h6>
        <div className="fs-5 ms-auto dropdown">
            <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></div>
            <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider"/></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
        </div>
        </div>
        <div id="chart7" className="">
            <SubChart7 data= {0.80}/>
        </div>
        <div className="traffic-widget">
        <div className="progress-wrapper mb-3">
            <p className="mb-1">Social <span className="float-end">8,475</span></p>
            <div className="progress rounded-0" style={{height: "8px"}}>
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "80%"}}></div>
            </div>
        </div>
        <div className="progress-wrapper mb-3">
            <p className="mb-1">Direct <span className="float-end">7,989</span></p>
            <div className="progress rounded-0" style={{height: "8px"}}>
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "65%"}}></div>
            </div>
        </div>
        <div className="progress-wrapper mb-0">
            <p className="mb-1">Search <span className="float-end">6,359</span></p>
            <div className="progress rounded-0" style={{height: "8px"}}>
            <div className="progress-bar bg-primary" role="progressbar" style={{width: "50a%"}}></div>
            </div>
        </div>
        </div>
    </div>
    )
}
