
function Registerpage() {
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
                <a href="#" class="nav-link">Agent Registerpage</a>
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

        <section class="row justify-content-center py-3">
            <div class="col-10 col-sm-10 col-md-8 col-lg-6 mt-4">
            <div class="register-logo text-center text-dark">
                <span class="h1"><b>Register</b></span>
            </div>
            <div class="card card-outline card-success">
                <div class="card-body">
                <p class="login-box-msg">Register as a new Agent</p>

                <form action="index.html" method="post">
                    <div class="row">
                    <div class="input-group mb-3 col-12">
                        <input
                        type="text"
                        class="form-control"
                        placeholder="Full name"
                        />
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-user"></span>
                        </div>
                        </div>
                    </div>
                    <div class="input-group mb-3 col-12">
                        <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        />
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-envelope"></span>
                        </div>
                        </div>
                    </div>
                    <div class="input-group mb-3 col-12 col-md-6">
                        <select type="text" class="form-control">
                        <option value="" selected disabled>Select Ward</option>
                        <option value="">Ward 1</option>
                        <option value="">Ward 2</option>
                        <option value="">Ward 3</option>
                        <option value="">Ward 4</option>
                        <option value="">Ward 5</option>
                        <option value="">Ward 6</option>
                        </select>
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-plus-circle"></span>
                        </div>
                        </div>
                    </div>
                    <div class="input-group mb-3 col-12 col-md-6">
                        <select type="text" class="form-control" placeholder="Unit">
                        <option value="" disabled>Select Unit</option>
                        <option value="">Unit 1</option>
                        <option value="">Unit 2</option>
                        <option value="">Unit 3</option>
                        <option value="">Unit 4</option>
                        <option value="">Unit 5</option>
                        <option value="">Unit 6</option>
                        </select>
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-plus-circle"></span>
                        </div>
                        </div>
                    </div>
                    <div class="input-group mb-3 col-12">
                        <input
                        type="password"
                        class="form-control"
                        placeholder="Password"
                        />
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                        </div>
                    </div>
                    <div class="input-group mb-4 col-12">
                        <input
                        type="password"
                        class="form-control"
                        placeholder="Retype password"
                        />
                        <div class="input-group-append">
                        <div class="input-group-text">
                            <span class="fas fa-lock"></span>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="row">
                    <div class="col-8">
                        <div class="icheck-success">
                        <input
                            type="checkbox"
                            id="agreeTerms"
                            name="terms"
                            value="agree"
                        />
                        <label for="agreeTerms">
                            I agree to the
                            <a href="#" class="text-primary">terms</a>
                        </label>
                        </div>
                    </div>
                    <div class="col-4">
                        <button type="submit" class="btn btn-success btn-block">
                        Register
                        </button>
                    </div>
                    </div>
                </form>

                <p class="m-2 text-center">OR</p>

                <div class="social-auth-links text-center">
                    <a href="#" class="btn btn-block btn-danger">
                    <i class="fab fa-google-plus mr-2"></i>
                    Sign up using Google+
                    </a>
                </div>

                <p class="text-primary">
                    <a href="login.html"
                    ><b>Already have an account?. Click here to login.</b></a
                    >
                </p>
                </div>
            </div>
            </div>
        </section>

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

export default Registerpage;