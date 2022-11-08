
import React from 'react'
import ReactApexChart from 'react-apexcharts';
import Chart from "react-apexcharts";
import { Link } from 'react-router-dom'

import { RingProgress } from '@ant-design/plots';

export default function Chart4(props) {
  const per = props.disk/100
  
  const config = {
    height: 500,
    width: 500,
    autoFit: false,
    percent: per,
    color: ['#5B8FF9', '#E8EDF3'],
    innerRadius: 0.85,
    radius: 0.98,
    statistic: {
      title: {
        style: { 
          color: '#363636',
          fontSize: '50px',
          lineHeight: '50px',
        },
        formatter: () => 'SSD',
      },
    },
  };
    return (
         <div className="card-body">
            <div className="d-flex align-items-center">
              <h6 className="mb-0">CPU Device 1</h6>
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
             {/* <div id="chart6" className=""></div> */}
             {/* <Chart options= {options.chart}/> */}
             <RingProgress {...config} style= {{margin : "auto"}}/>
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
