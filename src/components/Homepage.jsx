
function Homepage() {
    return (
<body class="hold-transition layout-top-nav layout-navbar-fixed bg-light">
  <div class="wrapper">
    <nav class="navbar navbar-expand-md navbar-dark navbar-dark">
      <div class="container-fluid px-5">
        <a href="index3.html" class="navbar-brand">
          <span class="brand-text font-weight-light">JAG Voting System</span>
        </a>

        <button class="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse order-3" id="navbarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="index3.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">Agent Login</a>
            </li>
          </ul>

          <form class="form-inline ml-0 ml-md-3">
            <div class="input-group input-group-sm">
              <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div class="input-group-append">
                <button class="btn btn-navbar" type="submit">
                  <i class="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>

        <ul class="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="fas fa-comments"></i>
              <span class="badge badge-danger navbar-badge">3</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <div class="media">
                  <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
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
              <span class="dropdown-header">15 Notifications</span>
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
            <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
              <i class="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="px-3">
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Party list with their Voters Results</h1>
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
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/pdp.png" alt="PDP" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">PDP</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/apc.png" alt="APC" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">APC</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/lp.png" alt="LP" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">LABOUR</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/pdp.png" alt="PDP" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">LABOUR</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/pdp.png" alt="PDP" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">LABOUR</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12 mb-5">
              <div class="info-box">
                <span class="info-box-icon">
                  <img src="images/pdp.png" alt="PDP" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-title h4">LABOUR</span>
                  <span class="info-box-text">Total Votes:</span>
                  <span class="info-box-number h3">1,410</span>
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
                        <th>Accredited</th>
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
    <footer class="container-fluid p-3 bg-white">
      <strong>Copyright &copy; 2014-2021
        <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
      All rights reserved.
      <div class="float-right d-none d-sm-inline-block">
        <b>Version</b> 3.2.0
      </div>
    </footer>
  </div>
</body>
    
      )
    }

export default Homepage;