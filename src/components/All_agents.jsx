import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'

function All_agents() {
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
              <h1>List of Registered Party Agents</h1>
            </div>
            <div class="col-sm-6">
              <ol class="breadcrumb float-sm-right">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active">Agents</li>
              </ol>
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
                  <table id="example1" class="table table-bordered table-striped">
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
      
    </div>
    
    
        <Footer />
        
        <aside class="control-sidebar control-sidebar-dark">
          
        </aside>
        
      </div>
    </body>
    
      )
    }

export default All_agents;