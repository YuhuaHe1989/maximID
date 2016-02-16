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
                                    <li><a href="providers.html"><i className="fa fa-lock"></i>Providers</a></li>
                                    <li><a href="userrepositories.html"><i className="fa fa-users"></i>User Repositories</a></li>
                                    <li><a href="#"><i className="fa fa-institution"></i>Customers</a></li>
                                    <li>
                                        <a href="#"><i className="fa fa-sitemap"></i>Policies<span className="fa arrow"></span></a>
                                        <ul className="nav nav-third-level">
                                            <li>
                                                <a href="policies.jsp?ttype=auth"><i className="fa fa-users"></i>User Eligibility</a>
                                            </li>
                                            <li>
                                                <a href="policies.jsp?ttype=register"><i className="fa fa-key"></i>Provider Policies</a>
                                            </li>
                                            <li>
                                                <a href="policies.jsp?ttype=Application"><i className="fa fa-thumbs-up"></i>Application Policies</a>
                                            </li>
                                            <li>
                                                <a href="policies.jsp?ttype=all"><i className="fa fa-shield"></i>Assurance Levels</a>
                                            </li>

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        <li>
                            <a href="billing.html"><i className="fa fa-dollar"></i> <span className="nav-label">Billing and Usage</span> </a>
                        </li>
                        <li>
                            <a href="insights.html"><i className="fa fa-bar-chart-o"></i> <span className="nav-label">Insights & Analytics</span> </a>
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