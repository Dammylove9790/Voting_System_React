import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'

function View_results() {
    return (
        <body class="hold-transition sidebar-mini layout-fixed">
      <div class="wrapper">        

        {<Navbar/>}        
    
        
        {<Sidebar />}
        
        <div class="content-wrapper">
      
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Party list with their Voters Result</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Results</li>
              </ol>
            </div>
          </div>
        </div>
        
      </section>

      
      <section class="content">
        <div class="container-fluid mb-2">
          <h5 class="mb-2">All Party</h5>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Messages</span>
                  <span class="info-box-number">1,410</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Messages</span>
                  <span class="info-box-number">1,410</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Messages</span>
                  <span class="info-box-number">1,410</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-info"><i class="far fa-envelope"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Messages</span>
                  <span class="info-box-number">1,410</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-success"><i class="far fa-flag"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Bookmarks</span>
                  <span class="info-box-number">410</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-warning"><i class="far fa-copy"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Uploads</span>
                  <span class="info-box-number">13,648</span>
                </div>
                
              </div>
              
            </div>
            
            <div class="col-md-3 col-sm-6 col-12">
              <div class="info-box">
                <span class="info-box-icon bg-danger"><i class="far fa-star"></i></span>

                <div class="info-box-content">
                  <span class="info-box-text">Likes</span>
                  <span class="info-box-number">93,139</span>
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <div class="container-fluid">
          <div class="row">
            <div class="col-12">
              <h3 class="mb-2 text-center">Voters Result</h3>
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
                  <table id="example1" class="table table-bordered table-striped">
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

export default View_results;