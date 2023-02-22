import Menu from './Menu';

function Header()
{
    return (
        <>
            {/* <div id="global-loader">
                <img src="assets/images/loader.svg" className="loader-img" alt="" />
            </div> */}
            
            <div className="header-main">

                {/* Top Bar */}
                <div className="top-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-7 col-sm-4 col-7">
                                <div className="top-bar-left d-flex">
                                    <div className="clearfix">
                                        <ul className="socials">
                                            <li>
                                                <a className="social-icon" href="/#"><i className="fa fa-facebook"></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="/#"><i className="fa fa-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="/#"><i className="fa fa-linkedin"></i></a>
                                            </li>
                                            <li>
                                                <a className="social-icon" href="/#"><i className="fa fa-google-plus"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="clearfix">
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 col-sm-8 col-5">
                                <div className="top-bar-right">
                                    <ul className="custom">
                                        <li>
                                            <a href="/dashboard-login" className=""><i className="fa fa-user me-1"></i>
                                                <span>Register</span></a>
                                        </li>
                                        <li>
                                            <a href="/dashboard-login" className=""><i className="fa fa-sign-in me-1"></i>
                                                <span>Login</span></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="/#" className="" data-bs-toggle="dropdown"><i className="fa fa-home me-1"></i><span>
                                                    My Dashboard</span></a>
                                            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                                <a href="mydash.html" className="dropdown-item">
                                                    <i className="dropdown-icon icon icon-user"></i> My Profile
                                                </a>
                                                <a className="dropdown-item" href="ad-posts.html">
                                                    <i className="dropdown-icon icon icon-plus"></i> Add Post
                                                </a>
                                                <a className="dropdown-item" href="my-jobs.html">
                                                    <i className="dropdown-icon icon icon-briefcase"></i> My Jobs
                                                </a>
                                                <a href="mydash.html" className="dropdown-item">
                                                    <i className="dropdown-icon  icon icon-settings"></i> Account Settings
                                                </a>
                                                <a className="dropdown-item" href="login.html">
                                                    <i className="dropdown-icon icon icon-power"></i> Log out
                                                </a>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Top Bar */}
			
                {/*Mobile Header */}
                <div className="sticky" style={{marginBottom: '0px'}}>
                    <div className="horizontal-header clearfix ">
                        <div className="container">
                            <a id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
                            <span className="smllogo">
                                <img src="/assets/images/brand/taxgatha.jpeg" className="header-brand-img desktop-logo" alt="logo" />
                                <img src="/assets/images/brand/taxgatha.jpeg" className="header-brand-img dark-logo" alt="Jobslist logo" />
                            </span>
                            <a href="/#" className="callusbtn"><i className="fa fa-bell text-body" aria-hidden="true"></i></a>
                        </div>
                    </div>
			    </div>
                <div className="jumps-prevent" style={{paddingTop: '0px'}}></div>
                {/*End Mobile Header */}

                {/* Horizontal-main */}

                <div id="sticky-wrapper" className="sticky-wrapper" style={{height: '90px'}}>
                    <div className="horizontal-main clearfix">
                        <div className="horizontal-mainwrapper container clearfix">

                        <a className="desktoplogo" href="/#">
                            <img src="/assets/images/brand/Logo_Leaves.png" className="header-brand-img desktop-logo" alt="logo"/>
                            <img src="../assets/images/brand/white-logo.png" className="header-brand-img dark-logo" alt="Jobslist logo"/>
                        </a>
                        {/* Nav */}
                        <Menu/>
                        {/*/ Nav */}
                        </div>
                    </div>
                </div>

                {/* End Horizontal-main */}

            </div>
        </>
    );
}
  
export default Header;
  