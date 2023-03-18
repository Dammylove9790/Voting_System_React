import React from 'react'
import Footer from './common/Footer'
import Navbar from './common/Navbar'
import Sidebar from './common/Sidebar'

function Election_post() {
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
                            <h1>Add and Edit Election Posts</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Add-Post</li>
                            </ol>
                        </div>
                    </div>
                </div>
                
            </section>

            
            <section class="content">
                <div class="container-fluid mb-2">
                    <h5 class="mb-2">Add New Post</h5>
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
                                        <div class="card-body col-sm-12 col-md-8">
                                            <div class="form-group">
                                                <label for="exampleInputEmail1">Post</label>
                                                <input type="text" name="add_post" class="form-control"
                                                    id="exampleInputEmail1" placeholder="Enter Eletion Post..." />
                                            </div>
                                            <div class="form-group d-flex justify-content-center">
                                                <button type="submit" class="btn btn-primary w-25">
                                                    Add Post
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                    
                                </form>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                

                <hr class="bg-warning mx-3 mb-5" />


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
                                        Election Type DataTable
                                    </h3>
                                </div>
                                
                                <div class="card-body">
                                    <table id="example1" class="table table-bordered table-striped">
                                        <thead class="thead thead-dark">
                                            <tr>
                                                <th>S/N</th>
                                                <th>Post</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>House of Assembly</td>
                                                <td>
                                                    <a href="#" class="btn btn-success btn-sm">View</a>
                                                    <a href="#" class="btn btn-primary btn-sm">Edit</a>
                                                    <a href="#" class="btn btn-danger btn-sm">Remove</a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>House of Assembly</td>
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

export default Election_post;