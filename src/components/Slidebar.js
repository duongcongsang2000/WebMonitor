import React from 'react'
import { Link } from 'react-router-dom'

export default function Slidebar() {
  return (
    <aside className="sidebar-wrapper" data-simplebar="true">
    <div className="sidebar-header">
      <div>
        <img src="assets/images/logo-icon.png" className="logo-icon" alt="logo icon"/>
      </div>
      <div>
        <h4 className="logo-text">Onedash</h4>
      </div>
      <div className="toggle-icon ms-auto"> <i className="bi bi-list"></i>
      </div>
    </div>
    <ul className="metismenu" id="menu">
      <li>
        <Link to={()=>{javascript:;}} className="has-arrow">
          <div className="parent-icon"><i className="bi bi-house-fill"></i>
          </div>
          <div className="menu-title">Dashboard</div>
      </Link>
        <ul>
          <li> <Link to="index.html"><i className="bi bi-circle"></i>Blue Dashboard </Link>
          </li>
          <li> <Link to="index2.html"><i className="bi bi-circle"></i>Blue Dashboard </Link>
          </li>
          <li> <Link to="index3.html"><i className="bi bi-circle"></i>Color Dashboard </Link>
          </li>
          <li> <Link to="index4.html"><i className="bi bi-circle"></i>Color Dashboard </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to={()=>{javascript:;}} className="has-arrow">
          <div className="parent-icon"><i className="bi bi-grid-fill"></i>
          </div>
          <div className="menu-title">Application</div>
      </Link>
        <ul>
          <li> <Link to="app-emailbox.html"><i className="bi bi-circle"></i>Emai</Link>
          </li>
          <li> <Link to="app-chat-box.html"><i className="bi bi-circle"></i>Chat Bo</Link>
          </li>
          <li> <Link to="app-file-manager.html"><i className="bi bi-circle"></i>File Manage</Link>
          </li>
          <li> <Link to="app-to-do.html"><i className="bi bi-circle"></i>Todo Lis</Link>
          </li>
          <li> <Link to="app-invoice.html"><i className="bi bi-circle"></i>Invoic</Link>
          </li>
          <li> <Link to="app-fullcalender.html"><i className="bi bi-circle"></i>Calenda</Link>
          </li>
        </ul>
      </li>
      <li className="menu-label">UI Elements</li>
      <li>
        <Link to={()=>{javascript:;}} className="has-arrow">
          <div className="parent-icon"><i className="bi bi-droplet-fill"></i>
          </div>
          <div className="menu-title">Widgets</div>
      </Link>
        <ul>
          <li> <Link to="widgets-static-widgets.html"><i className="bi bi-circle"></i>Static Widget</Link>
          </li>
          <li> <Link to="widgets-data-widgets.html"><i className="bi bi-circle"></i>Data Widget</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to={()=>{javascript:;}} className="has-arrow">
          <div className="parent-icon"><i className="bi bi-basket2-fill"></i>
          </div>
          <div className="menu-title">eCommerce</div>
      </Link>
        <ul>
          <li> <Link to="ecommerce-products-list.html"><i className="bi bi-circle"></i>Products Lis</Link>
          </li>
          <li> <Link to="ecommerce-products-grid.html"><i className="bi bi-circle"></i>Products Gri</Link>
          </li>
          <li> <Link to="ecommerce-products-categories.html"><i className="bi bi-circle"></i>Categorie</Link>
          </li>
          <li> <Link to="ecommerce-orders.html"><i className="bi bi-circle"></i>Order</Link>
          </li>
          <li> <Link to="ecommerce-orders-detail.html"><i className="bi bi-circle"></i>Order detail</Link>
          </li>
          <li> <Link to="ecommerce-add-new-product.html"><i className="bi bi-circle"></i>Add New Produc</Link>
          </li>
          <li> <Link to="ecommerce-add-new-product-2.html"><i className="bi bi-circle"></i>Add New Product </Link>
          </li>
          <li> <Link to="ecommerce-transactions.html"><i className="bi bi-circle"></i>Transaction</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-award-fill"></i>
          </div>
          <div className="menu-title">Components</div>
      </Link>
        <ul>
          <li> <Link to="component-alerts.html"><i className="bi bi-circle"></i>Alert</Link>
          </li>
          <li> <Link to="component-accordions.html"><i className="bi bi-circle"></i>Accordion</Link>
          </li>
          <li> <Link to="component-badges.html"><i className="bi bi-circle"></i>Badge</Link>
          </li>
          <li> <Link to="component-buttons.html"><i className="bi bi-circle"></i>Button</Link>
          </li>
          <li> <Link to="component-cards.html"><i className="bi bi-circle"></i>Card</Link>
          </li>
          <li> <Link to="component-carousels.html"><i className="bi bi-circle"></i>Carousel</Link>
          </li>
          <li> <Link to="component-list-groups.html"><i className="bi bi-circle"></i>List Group</Link>
          </li>
          <li> <Link to="component-media-object.html"><i className="bi bi-circle"></i>Media Object</Link>
          </li>
          <li> <Link to="component-modals.html"><i className="bi bi-circle"></i>Modal</Link>
          </li>
          <li> <Link to="component-navs-tabs.html"><i className="bi bi-circle"></i>Navs & Tab</Link>
          </li>
          <li> <Link to="component-navbar.html"><i className="bi bi-circle"></i>Navba</Link>
          </li>
          <li> <Link to="component-paginations.html"><i className="bi bi-circle"></i>Paginatio</Link>
          </li>
          <li> <Link to="component-popovers-tooltips.html"><i className="bi bi-circle"></i>Popovers & Tooltip</Link>
          </li>
          <li> <Link to="component-progress-bars.html"><i className="bi bi-circle"></i>Progres</Link>
          </li>
          <li> <Link to="component-spinners.html"><i className="bi bi-circle"></i>Spinner</Link>
          </li>
          <li> <Link to="component-notifications.html"><i className="bi bi-circle"></i>Notification</Link>
          </li>
          <li> <Link to="component-avtars-chips.html"><i className="bi bi-circle"></i>Avatrs & Chip</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-cloud-arrow-down-fill"></i>
          </div>
          <div className="menu-title">Icons</div>
      </Link>
        <ul>
          <li> <Link to="icons-line-icons.html"><i className="bi bi-circle"></i>Line Icon</Link>
          </li>
          <li> <Link to="icons-boxicons.html"><i className="bi bi-circle"></i>Boxicon</Link>
          </li>
          <li> <Link to="icons-feather-icons.html"><i className="bi bi-circle"></i>Feather Icon</Link>
          </li>
        </ul>
      </li>
      <li className="menu-label">Forms & Tables</li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-file-earmark-break-fill"></i>
          </div>
          <div className="menu-title">Forms</div>
      </Link>
        <ul>
          <li> <Link to="form-elements.html"><i className="bi bi-circle"></i>Form Element</Link>
          </li>
          <li> <Link to="form-input-group.html"><i className="bi bi-circle"></i>Input Group</Link>
          </li>
          <li> <Link to="form-layouts.html"><i className="bi bi-circle"></i>Forms Layout</Link>
          </li>
          <li> <Link to="form-validations.html"><i className="bi bi-circle"></i>Form Validatio</Link>
          </li>
          <li> <Link to="form-date-time-pickes.html"><i className="bi bi-circle"></i>Date Picker</Link>
          </li>
          <li> <Link to="form-select2.html"><i className="bi bi-circle"></i>Select</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-file-earmark-spreadsheet-fill"></i>
          </div>
          <div className="menu-title">Tables</div>
      </Link>
        <ul>
          <li> <Link to="table-basic-table.html"><i className="bi bi-circle"></i>Basic Tabl</Link>
          </li>
          <li> <Link to="table-advance-tables.html"><i className="bi bi-circle"></i>Advance Table</Link>
          </li>
          <li> <Link to="table-datatable.html"><i className="bi bi-circle"></i>Data Tabl</Link>
          </li>
        </ul>
      </li>
      <li className="menu-label">Pages</li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-lock-fill"></i>
          </div>
          <div className="menu-title">Authentication</div>
      </Link>
        <ul>
          <li> <Link to="authentication-signin.html" target="_blank"><i className="bi bi-circle"></i>Sign I</Link>
          </li>
          <li> <Link to="authentication-signup.html" target="_blank"><i className="bi bi-circle"></i>Sign U</Link>
          </li>
          <li> <Link to="authentication-signin-with-header-footer.html" target="_blank"><i className="bi bi-circle"></i>Sign In with Header & Foote</Link>
          </li>
          <li> <Link to="authentication-signup-with-header-footer.html" target="_blank"><i className="bi bi-circle"></i>Sign Up with Header & Foote</Link>
          </li>
          <li> <Link to="authentication-forgot-password.html" target="_blank"><i className="bi bi-circle"></i>Forgot Passwor</Link>
          </li>
          <li> <Link to="authentication-reset-password.html" target="_blank"><i className="bi bi-circle"></i>Reset Passwor</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="pages-user-profile.html">
          <div className="parent-icon"><i className="bi bi-person-lines-fill"></i>
          </div>
          <div className="menu-title">User Profile</div>
      </Link>
      </li>
      <li>
        <Link to="pages-timeline.html">
          <div className="parent-icon"><i className="bi bi-collection-play-fill"></i>
          </div>
          <div className="menu-title">Timeline</div>
      </Link>
      </li>
      <li>
        <Link className="has-arrow" to={()=>{;}}>
          <div className="parent-icon"><i className="bi bi-exclamation-triangle-fill"></i>
          </div>
          <div className="menu-title">Errors</div>
      </Link>
        <ul>
          <li> <Link to="pages-errors-404-error.html" target="_blank"><i className="bi bi-circle"></i>404 Erro</Link>
          </li>
          <li> <Link to="pages-errors-500-error.html" target="_blank"><i className="bi bi-circle"></i>500 Erro</Link>
          </li>
          <li> <Link to="pages-errors-coming-soon.html" target="_blank"><i className="bi bi-circle"></i>Coming Soo</Link>
          </li>
          <li> <Link to="pages-blank-page.html" target="_blank"><i className="bi bi-circle"></i>Blank Pag</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link to="pages-faq.html">
          <div className="parent-icon"><i className="bi bi-question-lg"></i>
          </div>
          <div className="menu-title">FAQ</div>
      </Link>
      </li>
      <li>
        <Link to="pages-pricing-tables.html">
          <div className="parent-icon"><i className="bi bi-tags-fill"></i>
          </div>
          <div className="menu-title">Pricing Tables</div>
      </Link>
      </li>
      <li className="menu-label">Charts & Maps</li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-bar-chart-line-fill"></i>
          </div>
          <div className="menu-title">Charts</div>
      </Link>
        <ul>
          <li> <Link to="charts-apex-chart.html"><i className="bi bi-circle"></i>Ape</Link>
          </li>
          <li> <Link to="charts-chartjs.html"><i className="bi bi-circle"></i>Chartj</Link>
          </li>
          <li> <Link to="charts-highcharts.html"><i className="bi bi-circle"></i>Highchart</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-pin-map-fill"></i>
          </div>
          <div className="menu-title">Maps</div>
      </Link>
        <ul>
          <li> <Link to="map-google-maps.html"><i className="bi bi-circle"></i>Google Map</Link>
          </li>
          <li> <Link to="map-vector-maps.html"><i className="bi bi-circle"></i>Vector Map</Link>
          </li>
        </ul>
      </li>
      <li className="menu-label">Others</li>
      <li>
        <Link className="has-arrow" to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-music-note-list"></i>
          </div>
          <div className="menu-title">Menu Levels</div>
      </Link>
        <ul>
          <li> <Link className="has-arrow" to={()=>{javascript:;}}><i className="bi bi-circle"></i>Level On</Link>
            <ul>
              <li> <Link className="has-arrow" to={()=>{javascript:;}}><i className="bi bi-circle"></i>Level Tw</Link>
                <ul>
                  <li> <Link to={()=>{javascript:;}}><i className="bi bi-circle"></i>Level Thre</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Link to={()=>{javascript:;}}>
          <div className="parent-icon"><i className="bi bi-file-code-fill"></i>
          </div>
          <div className="menu-title">Documentation</div>
      </Link>
      </li>
      <li>
        <Link to="https://themeforest.net/user/codervent" target="_blank">
          <div className="parent-icon"><i className="bi bi-telephone-fill"></i>
          </div>
          <div className="menu-title">Support</div>
      </Link>
      </li>
    </ul>

 </aside>
  )
}
