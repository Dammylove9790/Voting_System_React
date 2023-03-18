import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'

function Admin_dashboard() {
    return (
        <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">
    
        
        <div class="preloader flex-column justify-content-center align-items-center">
          <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60"/>
        </div>
    
        

        {<Navbar/>}        
    
        
        {<Sidebar />}
        
        <div class="content-wrapper">
          
          <div class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0">Admin Dashboard</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          
    
          
          <section class="content">
            <div class="container-fluid">
              
              <div class="row">
                <div class="col-lg-3 col-6">
                  
                  <div class="small-box bg-info">
                    <div class="inner">
                      <h3>150</h3>
    
                      <p>New Orders</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-bag"></i>
                    </div>
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                
                <div class="col-lg-3 col-6">
                  
                  <div class="small-box bg-success">
                    <div class="inner">
                      <h3>53%</h3>
    
                      <p>Bounce Rate</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-stats-bars"></i>
                    </div>
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                
                <div class="col-lg-3 col-6">
                  
                  <div class="small-box bg-warning">
                    <div class="inner">
                      <h3>44</h3>
    
                      <p>User Registrations</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-person-add"></i>
                    </div>
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
                
                <div class="col-lg-3 col-6">
                  
                  <div class="small-box bg-danger">
                    <div class="inner">
                      <h3>65</h3>
    
                      <p>Unique Visitors</p>
                    </div>
                    <div class="icon">
                      <i class="ion ion-pie-graph"></i>
                    </div>
                    <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
    
          
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>List of Registered Party Agents</h1>
                </div>
              </div>
            </div>
          </section>
    
          
          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title text-danger">
                        <span class="text-lg">
                          <i class="nav-icon fas fa-users"></i>
                          <b class="mr-2">JAG</b>
                        </span>
                        Party Agents DataTable
                      </h3>
                    </div>
                    
                    <div class="card-body">
                      <table id="example1" class="table table-sm table-bordered table-striped">
                        <thead>
                          <tr>
                            <th>Agent ID</th>
                            <th>Name</th>
                            <th>Ward</th>
                            <th>Unit</th>
                            <th>Result</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Zakariyah Muniru
                            </td>
                            <td>Ward 3</td>
                            <td> 4 </td>
                            <td>Yes</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">View</a>
                              <a href="#" class="btn btn-primary btn-sm">Edit</a>
                              <a href="#" class="btn btn-danger btn-sm">Remove</a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Zakariyah Muniru
                            </td>
                            <td>Ward 1</td>
                            <td> 4 </td>
                            <td>Yes</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">View</a>
                              <a href="#" class="btn btn-primary btn-sm">Edit</a>
                              <a href="#" class="btn btn-danger btn-sm">Remove</a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Titilope kamil
                            </td>
                            <td>Ward 3</td>
                            <td> 4 </td>
                            <td>Yes</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">View</a>
                              <a href="#" class="btn btn-primary btn-sm">Edit</a>
                              <a href="#" class="btn btn-danger btn-sm">Remove</a>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Zakariyah Muniru
                            </td>
                            <td>Ward 3</td>
                            <td> 4 </td>
                            <td>Yes</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">View</a>
                              <a href="#" class="btn btn-primary btn-sm">Edit</a>
                              <a href="#" class="btn btn-danger btn-sm">Remove</a>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Zakariyah Muniru
                            </td>
                            <td>Ward 3</td>
                            <td> 4 </td>
                            <td>Yes</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">View</a>
                              <a href="#" class="btn btn-primary btn-sm">Edit</a>
                              <a href="#" class="btn btn-danger btn-sm">Remove</a>
                            </td>
                          </tr>
    
                        </tbody>
                      </table>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </section>
          
    
    
          <hr class="bg-warning mx-3" />
    
    
          
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1>Voters Result</h1>
                </div>
              </div>
            </div>
            
          </section>
    
          
          <section class="content">
            <div class="container-fluid">
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title text-danger">
                        <span class="text-lg">
                          <i class="nav-icon fas fa-users"></i>
                          <b class="mr-2">JAG</b>
                        </span>
                        Updated Voters Result DataTable
                      </h3>
                    </div>
                    
                    <div class="card-body">
                      <table id="example11" class="table table-sm table-bordered table-striped">
                        <thead class="thead thead-dark">
                          <tr>
                            <th>Accr</th>
                            <th>APC</th>
                            <th>PDP</th>
                            <th>LP</th>
                            <th>PRP</th>
                            <th>NNPP</th>
                            <th>AAC</th>
                            <th>ADP</th>
                            <th>ADP</th>
                            <th>Void</th>
                            <th>Total</th>
                            <th>Overvote</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>1200</td>
                            <td>
                              <a href="#" class="btn btn-success btn-sm">
                                <i class="fas fa-eye-slash"></i>
                              </a>
                              <a href="#" class="btn btn-danger btn-sm"><i class="fas fa-trash-alt"></i></a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </section>
          
    
        </div>
        
    
    
        <Footer />
        
        <aside class="control-sidebar control-sidebar-dark">
          
        </aside>
        
      </div>
    </body>
    
      )
    }

export default Admin_dashboard