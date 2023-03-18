import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'

function Agent_dashboard() {
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
                            <h1 class="m-0">Agent Dashboard</h1>
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
                <div class="container-fluid mb-2">
                    <h5 class="mb-2">Add New Result</h5>
                    <div class="row">
                        
                        <div class="col-md-12">
                            
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        Type correctly the post in the space provided below...
                                    </h3>
                                </div>
                                
                                
                                <form id="quickForm">
                                    <div class="row justify-content-center">
                                        <div class="card-body col-sm-11 col-md-10 d-flex flex-wrap">
                                            <div class="form-group col-md-6">
                                                <label for="ward">Ward:</label>
                                                <input type="text" value="" name="ward" class="form-control" id="ward"
                                                    placeholder="Select your ward..." disabled />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="unit">Unit:</label>
                                                <input type="text" value="" name="unit" class="form-control" id="unit"
                                                    placeholder="Select your unit..." disabled />
                                            </div>
                                            <div class="form-group col-12">
                                                <label for="unit_name">Unit Name:</label>
                                                <input type="text" value="" name="unit_name" class="form-control"
                                                    id="unit_name" placeholder="Enter Eletion Post..." disabled />
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="party">Party:</label>
                                                <select id="party" class="form-control" name="party">
                                                    <option selected disabled></option>
                                                    <option>Text</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="result">Result</label>
                                                <input type="text" value="" name="result" class="form-control"
                                                    id="result" placeholder="Enter Eletion Result..." />
                                            </div>
                                            <div class="form-group col-12 d-flex justify-content-center">
                                                <button type="submit" class="btn btn-primary w-25">
                                                    Submit Result
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </form>
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
                                                    <a href="#" class="btn btn-danger btn-sm"><i
                                                            class="fas fa-trash-alt"></i></a>
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

export default Agent_dashboard