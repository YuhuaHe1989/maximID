import React from "react"

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
                            <input type="text" placeholder="Provider Management" className="form-control" name="top-search" id="top-search"/>
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
                        <div className="ibox ">
                            <div className="ibox-title">
                                <h5>Authentication and Context Providers</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                                        <i className="fa fa-wrench"></i>
                                    </a>
                                    <ul className="dropdown-menu dropdown-user">
                                        <li><a href="#">Import Providers...</a>
                                        </li>
                                        <li><a href="#">Export Providers...</a>
                                        </li>
                                    </ul>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                            <div className="ibox-content">
                                <p>
                                    Manage <strong>Authentication</strong> and <strong>Context</strong> Providers
                                </p>

                                <p>

                                </p>

                                <div className="jqGrid_wrapper">
                                    <table id="table_list_2"></table>
                                    <div id="pager_list_2"></div>
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