import React from 'react'
import { Link } from 'react-router-dom'
import $, { contains, data } from 'jquery'
import Render from '../charts/RenderChart'
import { useState, useEffect } from "react"
import axios from "axios"
import detachData from '../helper'
import Chart6 from './charts/Chart6'
import Chart7 from './charts/Chart7'
import Chart4 from './charts/Chart4'
import DropdownButton from './DropdownButton'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Content() {
  const [value, setValue] =  useState(0)
  const [listData, setListData] = useState([])
  const [listRAM, setListRAM] = useState (JSON.parse(localStorage.getItem("listRam"))|| []); 
  const [listDATE, setListDATE]= useState(JSON.parse(localStorage.getItem("listDate")) ||[])
  const [SSD, setSSD] = useState (localStorage.getItem("SSD")||0); 
  const [CPU, setCPU] = useState(localStorage.getItem("CPU") ||0); 

  // Render(listRam, SSD, CPU, listDate)

  useEffect(()=>{
    const getData = async () =>{
     await axios.get("http://localhost:5000/data/readAll")
      .then(res=>{
        let dataList = []
        res.data.map(data=> {
          dataList.push(data.output)
        })
        setListData(dataList)
        
        // let dataList= []
        // res.data.map(data=> {
        //   dataList.push(data.output)
        // } )
        // setListData(dataList)
        const [listRam, CPU, SSD, listDate] =detachData(dataList)

        
        setListRAM([...listRam])
        setCPU(CPU)
        setSSD(SSD)
        setListDATE(listDate)

        localStorage.setItem("listRam",JSON.stringify(listRam))
        localStorage.setItem("CPU",CPU)
        localStorage.setItem("SSD",SSD)
        localStorage.setItem("listDate",JSON.stringify(listDate))
      }).catch(err=>{
        // console.log(err.message())
      })
      
    }
    
    // setInterval(()=>{
    //   getData()
    // },10000)
  } ,[value])
  return (
    <main className="page-content">
              
    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-4">
    <Dropdown>
    <select value={value} onChange = {e=>setValue(e.target.value)}>
      <option value="1">Device 1</option>
      <option value="2">Device 2</option>
    </select>
    </Dropdown>
      {/* <Dropdown >
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu  >
        <Dropdown.Item onSelect={console.log("envt" + 1)} >Action</Dropdown.Item>
        <Dropdown.Item  onSelect={console.log("envt" + 2)}>Another action</Dropdown.Item>
        <Dropdown.Item>Something else</Dropdown.Item>
      </Dropdown.Menu>
      </Dropdown>  */}
      {/* <div className="col">
        <div className="card overflow-hidden radius-10">
            <div className="card-body">
             <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
              <div className="w-50">
                <p>Total Orders</p>
                <h4 className="">8,542</h4>
              </div>
              <div className="w-50">
                 <p className="mb-3 float-end text-success">+ 16% <i className="bi bi-arrow-up"></i></p>
                 <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div>
       </div> */}
       {/* <div className="col">
        <div className="card overflow-hidden radius-10">
            <div className="card-body">
             <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
              <div className="w-50">
                <p>Total Views</p>
                <h4 className="">12.5M</h4>
              </div>
              <div className="w-50">
                 <p className="mb-3 float-end text-danger">- 3.4% <i className="bi bi-arrow-down"></i></p>
                 <div id="chart2"></div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="col">
        <div className="card overflow-hidden radius-10">
            <div className="card-body">
             <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
              <div className="w-50">
                <p>Revenue</p>
                <h4 className="">$64.5K</h4>
              </div>
              <div className="w-50">
                 <p className="mb-3 float-end text-success">+ 24% <i className="bi bi-arrow-up"></i></p>
                 <div id="chart3"></div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div className="col">
        <div className="card overflow-hidden radius-10">
            <div className="card-body">
             <div className="d-flex align-items-stretch justify-content-between overflow-hidden">
              <div className="w-50">
                <p>Customers</p>
                <h4 className="">25.8K</h4>
              </div>
              <div className="w-50">
                 <p className="mb-3 float-end text-success">+ 8.2% <i className="bi bi-arrow-up"></i></p>
                 <div id="chart4"></div>
              </div>
            </div>
          </div>
        </div>
       </div> */}
    </div>

    <div className="row">
      {/* <div className="col-12 col-lg-6 d-flex">
        <div className="card radius-10 w-100">
        <Chart5 listRam= {[...listRAM]} listDate ={[...listDATE]}/>
        </div>
      </div> */}
      

      <div className="col-12 col-lg-6 d-flex">
        <div className="card radius-10 w-100">
        <Chart4 disk={SSD}/>
        </div>
      </div> 
    
      <div className="col-12 col-lg-6 d-flex">
        <div className="card radius-10 w-100">
          {/* <div className="card-body">
            <div className="d-flex align-items-center">
               <h6 className="mb-0">By Device</h6>
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
            <div className="row row-cols-1 row-cols-md-2 g-3 mt-2 align-items-center">
              <div className="col-lg-7 col-xl-7 col-xxl-8">
                <div className="by-device-container">
                   <div className="piechart-legend">
                      <h2 className="mb-1">85%</h2>
                      <h6 className="mb-0">Total Visitors</h6>
                   </div>
                  <canvas id="chart6"></canvas>
                </div>
              </div>
              <div className="col-lg-5 col-xl-5 col-xxl-4">
                <div className="">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center justify-content-between border-0">
                      <i className="bi bi-tablet-landscape-fill me-2 text-primary"></i> <span>Tablet - </span> <span>22.5%</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between border-0">
                      <i className="bi bi-phone-fill me-2 text-primary-2"></i> <span>Mobile - </span> <span>62.3%</span>
                    </li>
                    <li className="list-group-item d-flex align-items-center justify-content-between border-0">
                      <i className="bi bi-display-fill me-2 text-primary-3"></i> <span>Desktop - </span> <span>15.2%</span>
                    </li>
                  </ul>
                 </div>
              </div>
            </div>
          </div> */}
          {/* <div className="card-body">
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
             <div id="chart6" className=""></div>
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
           </div> */}
           <Chart6 disk={SSD}/>
        </div>
      </div>
    </div>


    <div className="row">
      <div className="col-12 col-lg-6 col-xl-4 d-flex">
         <div className="card radius-10 w-100">
           {/* <div className="card-body">
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
             <div id="chart7" className=""></div>
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
           </div> */}
           <Chart7/>
         </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-4 d-flex">
        <div className="card radius-10 w-100">
          {/* <div className="card-body">
            <div className="card radius-10 border shadow-none mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Messages</p>
                    <h4 className="mb-0 text-primary">289</h4>
                  </div>
                  <div className="dropdown ms-auto">
                    <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots fs-4"></i>
                    </div>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="javascript:;">Action</Link>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Another action</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Something else here</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="chart8"></div>
              </div>
            </div>
            <div className="card radius-10 border shadow-none mb-3">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">Total Posts</p>
                    <h4 className="mb-0 text-primary">489</h4>
                  </div>
                  <div className="dropdown ms-auto">
                    <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots fs-4"></i>
                    </div>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="javascript:;">Action</Link>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Another action</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Something else here</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="chart9"></div>
              </div>
            </div>
            <div className="card radius-10 border shadow-none mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="">
                    <p className="mb-1">New Tasks</p>
                    <h4 className="mb-0 text-primary">149</h4>
                  </div>
                  <div className="dropdown ms-auto">
                    <div className="dropdown-toggle dropdown-toggle-nocaret cursor-pointer" data-bs-toggle="dropdown"><i className="bi bi-three-dots fs-4"></i>
                    </div>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="javascript:;">Action</Link>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Another action</Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider"/>
                      </li>
                      <li><Link className="dropdown-item" to="javascript:;">Something else here</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="chart10"></div>
              </div>
            </div>
          </div> */}
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
             <div id="chart8" className=""></div>
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
        </div>
     </div>
     <div className="col-12 col-lg-12 col-xl-4 d-flex">
      <div className="card radius-10 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h6 className="mb-0">Visitors</h6>
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
          <div id="chart11" className=""></div>
          <div className="d-flex align-items-center gap-5 justify-content-center mt-3 p-2 radius-10 border"> 
            <div className="text-center">
              <h3 className="mb-2 text-primary">8,546</h3>
              <p className="mb-0">New  Visitors</p>
            </div>
            <div className="border-end sepration"></div>
            <div className="text-center">
             <h3 className="mb-2 text-primary-2">3,723</h3>
             <p className="mb-0">Old  Visitors</p>
           </div>
         </div>
        </div>
      </div>
   </div>
 </div>

 <div className="row">
    <div className="col-12 col-lg-12 col-xl-8 d-flex">
      <div className="card radius-10 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h6 className="mb-0">Recent Orders</h6>
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
           <div className="table-responsive mt-2">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#ID</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#89742</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/11.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Smart Mobile Phone</h6>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$214</td>
                  <td>Apr 8, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#68570</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/07.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Sports Time Watch</h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$185</td>
                  <td>Apr 9, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#38567</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/17.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Women Red Heals</h6>
                      </div>
                    </div>
                  </td>
                  <td>3</td>
                  <td>$356</td>
                  <td>Apr 10, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#48572</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/04.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Yellow Winter Jacket</h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$149</td>
                  <td>Apr 11, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#96857</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/10.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Orange Micro Headphone</h6>
                      </div>
                    </div>
                  </td>
                  <td>2</td>
                  <td>$199</td>
                  <td>Apr 15, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>#96857</td>
                  <td>
                    <div className="d-flex align-items-center gap-3">
                      <div className="product-box border">
                         <img src="assets/images/products/12.png" alt=""/>
                      </div>
                      <div className="product-info">
                        <h6 className="product-name mb-1">Pro Samsung Laptop</h6>
                      </div>
                    </div>
                  </td>
                  <td>1</td>
                  <td>$699</td>
                  <td>Apr 18, 2021</td>
                  <td>
                    <div className="d-flex align-items-center gap-3 fs-6">
                      <Link to="javascript:;" className="text-primary" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="View detail" aria-label="Views"><i className="bi bi-eye-fill"></i></Link>
                      <Link to="javascript:;" className="text-warning" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Edit info" aria-label="Edit"><i className="bi bi-pencil-fill"></i></Link>
                      <Link to="javascript:;" className="text-danger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Delete" aria-label="Delete"><i className="bi bi-trash-fill"></i></Link>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div className="col-12 col-lg-12 col-xl-4 d-flex">
      <div className="card radius-10 w-100">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h6 className="mb-0">Sales By Country</h6>
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
           <div id="geographic-map" className="mt-2"></div>
           <div className="traffic-widget">
            <div className="progress-wrapper mb-3">
              <p className="mb-1">United States <span className="float-end">$2.5K</span></p>
              <div className="progress rounded-0" style={{height : "6px"}}>
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "75%"}}></div>
              </div>
            </div>
            <div className="progress-wrapper mb-3">
              <p className="mb-1">Russia <span className="float-end">$4.5K</span></p>
              <div className="progress rounded-0" style={{height : "6px"}}>
                <div className="progress-bar bg-primary" role="progressbar" style={{width: "55%"}}></div>
              </div>
            </div>
            <div className="progress-wrapper mb-0">
              <p className="mb-1">Australia <span className="float-end">$8.5K</span></p>
              <div className="progress rounded-0" style={{height : "6px"}}>
                <div className="progress-bar bg-primary" role="progressbar" style={{width : "88%"}}> </div>
              </div>
            </div>
           </div>
             
        </div>
      </div>
    </div>
 </div>



  </main>
  )
}
