import React from 'react'

export default React.createClass({
  render() {
    return (
      <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
                    <nav className="navbar navbar-static-top white-bg" role="navigation" >
                        <div className="navbar-header">
                            <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                            <form role="search" className="navbar-form-custom" method="post" action="search_results.html">
                                <div className="form-group">
                                    <input type="text" placeholder="Setup" className="form-control" name="top-search" id="top-search"/>
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
        <div className="wrapper wrapper-content animated fadeInRight">

            <div className="row">
                <div className="col-lg-12">
                    <div className="ibox float-e-margins">
                        <div className="ibox-title">
                            <h5>Setup maximID <small>Last Modified Feb 2, 2015, Last Modified By jsmith</small></h5>
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
                                <div className="form-group"><label className="col-sm-2 control-label">Server URL</label>

                                    <div className="col-sm-10"><input type="text" className="form-control" value="https://wf.maximID.com/fido" /></div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Console Admin User Repository</label>
                                    <div className="col-sm-10"><input type="text" className="form-control" value="CorpLDAP" /> <span className="help-block m-b-none">Specify where to authenticate top-level admins from.</span>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Default Alert Emailid/Alias</label>

                                    <div className="col-sm-10"><input type="text" placeholder="email@example.com" className="form-control" /></div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Maximum users per Customer</label>

                                    <div className="col-sm-10"><input type="text" placeholder="100000" className="form-control" /></div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Enable Context data <br/>
                                    </label>

                                    <div className="col-sm-10">
                                        <div className="checkbox"><label> <input type="checkbox" value="" /></label></div>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Enable Alerts/Notifications<br/>
                                    </label>

                                    <div className="col-sm-10">
                                        <div className="checkbox"><label> <input type="checkbox" value="" /></label></div>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group"><label className="col-sm-2 control-label">Override Legacy Authentication<br/>
                                    </label>

                                    <div className="col-sm-10">
                                        <div className="checkbox"><label> <input type="checkbox" value="" /></label></div>
                                    </div>
                                </div>
                                <div className="hr-line-dashed"></div>
                                <div className="form-group">
                                    <div className="col-sm-4 col-sm-offset-2">
                                        <button className="btn btn-white" type="submit">Cancel</button>
                                        <button className="btn btn-primary" type="submit">Save changes</button>
                                    </div>
                                </div>
                            </form>
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