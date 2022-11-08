import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Area } from '@ant-design/plots';
import axios from 'axios';




export default function Chart5(props) {
    // const [data, setData] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
      asyncFetch();
    }, []);
  
    const asyncFetch = () => {
      fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          console.log('fetch data failed', error);
        });
    };
    
const config = {
    data :props.listRam,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
  return (
    <div className="card-body">
    <div className="d-flex align-items-center">
      <div className="fs-5 ms-auto dropdown">
         <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots"></i></div>
           <ul className="dropdown-menu">
             <li><Link className="dropdown-item" to="#">Action</Link></li>
             <li><Link className="dropdown-item" to="#">Another action</Link></li>
             <li><hr className="dropdown-divider"/></li>
             <li><Link className="dropdown-item" to="#">Something else here</Link></li>
           </ul>
       </div>
       <Area {...config} />
     </div>
    
  </div>
  )
}
