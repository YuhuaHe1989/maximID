import React from "react";

export default React.createClass({
  render() {
    return (
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: "0"}}>
                <div className="navbar-header">
                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                    <form role="search" className="navbar-form-custom" method="post" action="search_results.html">
                        <div className="form-group">
                            <input type="text" placeholder="API Keys & SDK" className="form-control" name="top-search" id="top-search"/>
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


            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>API Keys <small>Select down arrow to reveal the keys. Please store the the keys safely!</small></h5>
                            <div className="ibox-tools">
                                <a className="collapse-link">
                                    <i className="fa fa-chevron-up"></i>
                                </a>
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                    <i className="fa fa-wrench"></i>
                                </a>
                                <ul className="dropdown-menu dropdown-user">
                                    <li><a href="#">Config option 1</a>
                                    </li>
                                    <li><a href="#">Config option 2</a>
                                    </li>
                                </ul>
                                <a className="close-link">
                                    <i className="fa fa-times"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ibox-content">
                            <form method="get" className="form-horizontal">
                                <div className="form-group">
                                   <label className="col-sm-2 control-label">Developer API Key : </label>

                                    <div className="col-sm-10">
                                        <div className="input-group"><input type="text" className="form-control" disabled="" placeholder="v01~~09adefa1874645adcfeffadcb199bbcd46109aa"/> <span className="input-group-btn"> <button type="button" className="btn btn-primary">Request New Dev Keys
                                        </button> </span></div>
                                    </div>
                                   <label className="col-sm-2 control-label">Production API Key : </label>
                                    <div className="col-sm-10">
                                        <div className="input-group"><input type="text" className="form-control" disabled="" placeholder="Not available for this account."/> <span className="input-group-btn"> <button type="button" className="btn btn-primary">Upgrade Your Account
                                        </button> </span></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox">
                        <div className="ibox-title">
                    <h5>Choose a Platform to Customize your SDK <small>All providers are not available on all platforms..</small></h5>
                    </div>
                        <div className="ibox-content">

                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                    <div className="text-center m-t-sm">
                                        <img src="img/ios.png" alt="iOS" style={{height: "75px"}}/>
                                    </div>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>iOS 8.0 or higher, XCode 4.3 or higher</p>
                                            <p>Latest SDK : 1.0</p>
<div className="text-center m-t-sm">
                        <p><a role="button" className="btn btn-primary btn-sm" href="apikeys1.html">Configure SDK</a></p>
</div>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                    <div className="text-center m-t-sm">
                                        <img src="img/android.png" alt="Android" style={{height: "75px"}}/>
                                    </div>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Android 5.0 (Lollipop) or higher., Android 6.0 SDK</p>
                                            <p>Latest SDK : 1.0</p>
                      <div className="text-center m-t-sm">
                        <p><a role="button" className="btn btn-primary btn-sm" href="apikeys1.html">Configure SDK</a></p>
                      </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                    <div className="text-center m-t-sm">
                                        <img src="img/html_logo.png" alt="HTML" style={{height: "75px"}}/>
                                    </div>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Any browser with HTML5 and Javascript 1.5+ support.</p>
                                            <p>Latest SDK : 1.0</p>
<div className="text-center m-t-sm">
                        <p><a role="button" className="btn btn-primary btn-sm" href="apikeys1.html">Configure SDK</a></p>
</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                    <div className="text-center m-t-sm">
                                        <img src="img/windows10.png" alt="Windows10" style={{height: "75px"}}/>
                                    </div>
                                        </div>
                                        <div className="panel-body text-center">
                                            <p>Windows 10 or higher, Visual Studio 2015</p>
                                            <p>Latest SDK : 1.0</p>
<div className="text-center m-t-sm">
                        <p><a role="button" className="btn btn-primary btn-sm" href="apikeys1.html">Configure SDK</a></p>
</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            

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

      )
  }
})