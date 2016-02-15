import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

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
                            <a href="index.html"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></a>
                        </li>
                        <li>
                            <a href="setup.html"><i className="fa fa-cog"></i> <span className="nav-label">Setup</span> </a>
                        </li>
                            <li>
                                <a href="#"><i className="fa fa-sitemap"></i> <span className="nav-label">Manage </span><span className="fa arrow"></span></a>
                                <ul className="nav nav-second-level">
                                    <li><a href="apikeys.html"><i className="fa fa-key"></i>API Keys & SDK</a></li>
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

            <div id="page-wrapper" className="gray-bg">
                <div className="row border-bottom">
                    <nav className="navbar navbar-static-top white-bg" role="navigation" >
                        <div className="navbar-header">
                            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                            <form role="search" className="navbar-form-custom" method="post" action="search_results.html">
                                <div className="form-group">
                                    <input type="text" placeholder="Dashboard" className="form-control" name="top-search" id="top-search"/>
                                </div>
                            </form>
                        </div>
                        <ul className="nav navbar-top-links navbar-right">
                            <li>
                                <a href="login.html">
                                    <i className="fa fa-sign-out"></i> Log out
                                </a>
                            </li>
                        </ul>

                    </nav>
                </div>
                <div className="wrapper wrapper-content">
                    <div className="row">
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-success pull-right">Monthly</span>
                                        <h5>Registrations</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">886,200</h1>
                                        <div className="stat-percent font-bold text-success">50% <i className="fa fa-bolt"></i></div>
                                        <small>Total Registrations</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-info pull-right">Monthly</span>
                                        <h5>SignIns</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">275,800</h1>
                                        <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                        <small>Successful Signins</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-primary pull-right">Monthly</span>
                                        <h5>Failed Registrations</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">106,120</h1>
                                        <div className="stat-percent font-bold text-navy">44% <i className="fa fa-level-up"></i></div>
                                        <small>Failed Registrations</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <span className="label label-danger pull-right">Monthly</span>
                                        <h5>Failed Signins</h5>
                                    </div>
                                    <div className="ibox-content">
                                        <h1 className="no-margins">80,600</h1>
                                        <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                                        <small>Failed Signins</small>
                                    </div>
                                </div>
                    </div>
                        </div>
                    <div className="row">
                            <div className="col-lg-12">
                                <div className="ibox float-e-margins">
                                    <div className="ibox-title">
                                        <h5>Signin and Registration Trend</h5>
                                        <div className="pull-right">
                                            <div className="btn-group">
                                                <button type="button" className="btn btn-xs btn-white active">Today</button>
                                                <button type="button" className="btn btn-xs btn-white">Monthly</button>
                                                <button type="button" className="btn btn-xs btn-white">Annual</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ibox-content">
                                        <div className="row">
                                        <div className="col-lg-9">
                                            <div className="flot-chart">
                                                <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                                            </div>
                                        </div>
                                        <div className="col-lg-3">
                                            <ul className="stat-list">
                                                <li>
                                                    <h2 className="no-margins">2,346</h2>
                                                    <small>TouchID</small>
                                                    <div className="stat-percent">48% <i className="fa fa-level-up text-navy"></i></div>
                                                    <div className="progress progress-mini">
                                                        <div  className="progress-bar"></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2 className="no-margins ">4,422</h2>
                                                    <small>IrisScan</small>
                                                    <div className="stat-percent text-danger">60% <i className="fa fa-level-down"></i></div>
                                                    <div className="progress progress-mini">
                                                        <div  className="progress-bar"></div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <h2 className="no-margins ">9,180</h2>
                                                    <small>SpeechRec</small>
                                                    <div className="stat-percent">22% <i className="fa fa-bolt text-navy"></i></div>
                                                    <div className="progress progress-mini">
                                                        <div  className="progress-bar"></div>
                                                    </div>
                                                </li>
                                                </ul>
                                            </div>
                                        </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                    <div className="row">
                                    <div className="col-lg-12">
                                        <div className="ibox float-e-margins">
                                            <div className="ibox-title">
                                                <h5>Worldwide View</h5>
                                                <div className="ibox-tools">
                                                    <a className="collapse-link">
                                                        <i className="fa fa-chevron-up"></i>
                                                    </a>
                                                    <a className="close-link">
                                                        <i className="fa fa-times"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ibox-content">

                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <table className="table table-hover margin bottom">
                                                            <thead>
                                                            <tr>
                                                                <th  className="text-center">No.</th>
                                                                <th>Country</th>
                                                                <th className="text-center">Registrations</th>
                                                                <th className="text-center">SignINs</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td className="text-center">1</td>
                                                                <td> United States
                                                                    </td>
                                                                <td className="text-center small">200,000</td>
                                                                <td className="text-center"><span className="label label-primary">400,100</span></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">2</td>
                                                                <td> Europe
                                                                </td>
                                                                <td className="text-center small">30,000</td>
                                                                <td className="text-center"><span className="label label-primary">50,0000</span></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">3</td>
                                                                <td> Asia
                                                                </td>
                                                                <td className="text-center small">25,000</td>
                                                                <td className="text-center"><span className="label label-warning">50,0000</span></td>

                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">4</td>
                                                                <td> Australia</td>
                                                                <td className="text-center small">15,102</td>
                                                                <td className="text-center"><span className="label label-primary">29,234</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">5</td>
                                                                <td>South America</td>
                                                                <td className="text-center small">12,013</td>
                                                                <td className="text-center"><span className="label label-primary">16,293</span></td>
                                                            </tr>
                                                            <tr>
                                                                <td className="text-center">6</td>
                                                                <td>Africa</td>
                                                                <td className="text-center small">456</td>
                                                                <td className="text-center"><span className="label label-primary">897</span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div id="world-map" ></div>
                                                    </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                <div className="wrapper wrapper-content animated fadeInRight">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="text-center m-t-lg">
                                <h1>
                                    Welcome to maximID Console
                                </h1>
                                <small>
                                </small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    <div className="pull-right">
                        Contact  <strong>support@maximID.com</strong> for support.
                    </div>
                    <div>
                        <strong>Copyright</strong> maximID Inc &copy; 2014-2015
                    </div>
                </div>

            </div>
          </div>
      </div>
      </div>
)
  }
}

export default AppController;