import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
        <div id="wrapper">

    <div id="page-wrapper" className="gray-bg">
        <div className="row border-bottom">
            <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: "0"}}>
                <div className="navbar-header">
                    <a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="fa fa-bars"></i> </a>
                    <form role="search" className="navbar-form-custom" method="post" action="search_results.html">
                        <div className="form-group">
                            <input type="text" placeholder="Policy Management" className="form-control" name="top-search" id="top-search"/>
                        </div>
                    </form>
                </div>
                <ul className="nav navbar-top-links navbar-right">
                    <li>
                        <Link to="/login.html">
                            <i className="fa fa-sign-out"></i> Log out
                        </Link>
                    </li>
                </ul>

            </nav>
        </div>

        <div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">

                            <div className="ibox-content">
                                <div className="row">
                                <div className="col-lg-12">
                                    <div style={{height:"600px"}}>
<iframe height="100%" width="100%" frameBorder="0" src="https://pacific-springs-1062.herokuapp.com/console/consolenohead.jsp?ttype=auth"></iframe>
                                    </div>
                                </div>

                                </div>
                                </div>

                            </div>
                        </div>
                    </div>
        <div className="footer">
            <div className="pull-right">
                Contact  <strong>support@maximid.com</strong> for support.
            </div>
            <div>
                <strong>Copyright</strong> maximID Inc &copy; 2014-2015
            </div>
        </div>

    </div>
</div>


      )
  }
})