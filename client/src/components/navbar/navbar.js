export const NavBar =()=>{
    return(
        <>
        <div className="header_bottom">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container ">
            <a className="navbar-brand " href="index.html"> Finter </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className> </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html"> About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="service.html">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="team.html"> Team </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user" aria-hidden="true" />
                    <span>
                      Login
                    </span>
                  </a>
                </li>
                <form className="form-inline justify-content-center">
                  <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i className="fa fa-search" aria-hidden="true" />
                  </button>
                </form>
              </ul>
            </div>
          </nav>
        </div>
      </div>
        </>
    );
}