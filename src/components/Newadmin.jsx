import React from 'react'

function Newadmin() {
  return (
    <div class="hold-transition sidebar-mini layout-fixed">
  <div class="wrapper">

    
    <div class="preloader flex-column justify-content-center align-items-center">
      <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60"/>
    </div>

    
    <nav class="main-header navbar navbar-expand navbar-white navbar-light">
      
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="login.html" class="nav-link">Login</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="register.html" class="nav-link">Register</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="admin_dashboard.html" class="nav-link">Admin</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
          <a href="agent_dashboard.html" class="nav-link">Agent</a>
        </li>
      </ul>

      
      <ul class="navbar-nav ml-auto">
        
        <li class="nav-item">
          <a class="nav-link" data-widget="navbar-search" href="#" role="button">
            <i class="fas fa-search"></i>
          </a>
          <div class="navbar-search-block">
            <form class="form-inline">
              <div class="input-group input-group-sm">
                <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
                <div class="input-group-append">
                  <button class="btn btn-navbar" type="submit">
                    <i class="fas fa-search"></i>
                  </button>
                  <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-comments"></i>
            <span class="badge badge-danger navbar-badge">3</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <a href="#" class="dropdown-item">
              
              <div class="media">
                <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle"/>
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Brad Diesel
                    <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">Call me whenever you can...</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              
              <div class="media">
                <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    John Pierce
                    <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">I got your message bro</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              
              <div class="media">
                <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
              
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
          </div>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">15 Notifications</span>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-envelope mr-2"></i> 4 new messages
              <span class="float-right text-muted text-sm">3 mins</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-users mr-2"></i> 8 friend requests
              <span class="float-right text-muted text-sm">12 hours</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <i class="fas fa-file mr-2"></i> 3 new reports
              <span class="float-right text-muted text-sm">2 days</span>
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
    

    
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      
      <a href="index3.html" class="brand-link">
        <span class="brand-text font-weight-light">JAG</span>
        <span class="brand-text font-weight-light">Voting System</span>
      </a>

      
      <div class="sidebar">
        
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"/>
          </div>
          <div class="info">
            <a href="#" class="d-block">Alexander Pierce</a>
          </div>
        </div>

        
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
            <li class="nav-item">
              <a href="admin_dashboard.html" class="nav-link active">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </a>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-users"></i>
                <p>
                  Party Agents
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="register.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Add Agents
                      <span class="right badge badge-danger"><i class="fas fa-user m-0 mr-1"></i>New</span>
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="all_agents.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      View Agents
                      <span class="right"><i class="nav-icon fas fa-users"></i></span>
                    </p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon far fa-flag"></i>
                <p>
                  Election Post
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="election_post.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Add Post
                      <span class="right badge badge-danger"><i class="fas fa-user m-0 mr-1"></i>New</span>
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="election_post.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      View Candidates
                      <span class="right"><i class="nav-icon fas fa-eye"></i></span>
                    </p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-copy"></i>
                <p>
                  Voters Result
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="view_results.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      Upload Results
                      <span class="right"><i class="nav-icon fas fa-upload"></i></span>
                    </p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="view_results.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>
                      View Results
                      <span class="right"><i class="nav-icon fas fa-eye"></i></span>
                    </p>
                  </a>
                </li>
              </ul>
            </li>







            
            <li class="nav-item">
              <a href="pages/gallery.html" class="nav-link">
                <i class="nav-icon far fa-image"></i>
                <p>
                  Gallery
                </p>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <i class="nav-icon far fa-envelope"></i>
                <p>
                  Mailbox
                  <i class="fas fa-angle-left right"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <a href="pages/mailbox/mailbox.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Inbox</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/mailbox/compose.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Compose</p>
                  </a>
                </li>
                <li class="nav-item">
                  <a href="pages/mailbox/read-mail.html" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Read</p>
                  </a>
                </li>
              </ul>
            </li>

            <li class="nav-header mt-3">
              <hr class="dropdown-divider" />
            </li>
            <li class="nav-item ">
              <a href="#" class="nav-link">
                <i class="nav-icon fas fa-sign-out-alt"></i>
                <p>
                  Logout
                </p>
              </a>
            </li>
          </ul>
        </nav>
        
      </div>
      
    </aside>

    
    <div class="content-wrapper">
      
      {/* <div class="content-header">
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
                  <h3>53<sup style="font-size: 20px">%</sup></h3>

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
       */}

      
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
    


    <footer class="main-footer">
      <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>

    
    <aside class="control-sidebar control-sidebar-dark">
      
    </aside>
    
  </div>
</div>

  )
}

export default Newadmin