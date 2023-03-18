


function Sidebar(){
    return (
        <>
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

        </>
    )
}

export default Sidebar;