import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

// require('bootstrap');
// require('bootstrap.css');

class AppController extends React.Component {
  render() {
    return (
      <div className="skin-3">

        <div id="wrapper">

            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="side-menu">
                        <li className="nav-header">
                          <div className="dropdown profile-element"> 
                          <span>
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">John A. Smith</strong>
                             </span> <span className="text-muted text-xs block">Administrator <b className="caret"></b></span> </span> </a>
                            <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                <li><Link to="/login.html">Logout</Link></li>
                            </ul>
                            </span>
                          </div>

                            <div className="logo-element">
                               MX 
                            </div>
                        </li>
                        <li className="active">
                            <Link to="/dashboard.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li>
                            <Link to="/setup.html"><i className="fa fa-cog"></i> <span className="nav-label">Setup</span> </Link>
                        </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap"></i> <span className="nav-label">Manage </span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level">
                                    <li><Link to="/apikeys.html"><i className="fa fa-key"></i>API Keys & SDK</Link></li>
                                    <li><Link to="/providers.html"><i className="fa fa-lock"></i>Providers</Link></li>
                                    <li><Link to="/userrepositories.html"><i className="fa fa-users"></i>User Repositories</Link></li>
                                    <li><Link to="/customers.html"><i className="fa fa-institution"></i>Customers</Link></li>
                                    <li>
                                        <a href="#"><i className="fa fa-sitemap"></i>Policies<span className="fa arrow"></span></a>
                                        <ul className="nav nav-third-level">
                                            <li>
                                                <Link to="/policiesAuth.html"><i className="fa fa-users"></i>User Eligibility</Link>
                                            </li>
                                            <li>
                                                <Link to="/policiesRegister.html"><i className="fa fa-key"></i>Provider Policies</Link>
                                            </li>
                                            <li>
                                                <Link to="/policiesApplication.html"><i className="fa fa-thumbs-up"></i>Application Policies</Link>
                                            </li>
                                            <li>
                                                <Link to="/policiesRisk.html"><i className="fa fa-shield"></i>Assurance Levels</Link>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        <li>
                            <Link to="/billing.html"><i className="fa fa-dollar"></i> <span className="nav-label">Billing and Usage</span> </Link>
                        </li>
                        <li>
                            <Link to="/insights.html"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Insights & Analytics</span> </Link>
                        </li>
                    </ul>

                </div>
            </nav>

           {this.props.children}
      </div>
    </div>
)
  }
}

export default AppController;