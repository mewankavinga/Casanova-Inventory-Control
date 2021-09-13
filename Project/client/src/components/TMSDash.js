import React, { Component } from 'react'

export default class TMSDash extends Component {
    render() {
        return (
            <div id="wrapper" className="toggled">
            <div id="page-content-wrapper">
              <div className="container-fluid"></div>
    
              <div class="row">
               
    
              
             
    
             
    
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="%PUBLIC_URL%../../bluelogo.png"
                      width="200"
                      height="200"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Driver List</h5>
                      <p class="card-text">
                       
                      </p>
                      <a href="/DriHome" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-truck-monster"></i> List</a>
                    </div>
                  </div>
                </div>
    
    
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="%PUBLIC_URL%../../bluelogo.png"
                      width="200"
                      height="200"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Ready-Made Management</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/RMDashbord" class="btn btn-primary">
                        Go Testing
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="%PUBLIC_URL%../../bluelogo.png"
                      width="200"
                      height="200"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Transport Management</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/TMSDash" class="btn btn-primary">
                        Go Monitoring
                      </a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                    <img
                      src="%PUBLIC_URL%../../bluelogo.png"
                      width="200"
                      height="200"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title">Account Management</h5>
                      <p class="card-text">
                        With supporting text below as a natural lead-in to
                        additional content.
                      </p>
                      <a href="/Accountdashboard" class="btn btn-primary">
                        Go Reporting
                      </a>
                    </div>
                  </div>
                </div>
                
                <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>
              </div>
            </div>
          </div>
            
        )
    }
}
