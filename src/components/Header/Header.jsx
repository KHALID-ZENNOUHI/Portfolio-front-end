import NavItem from "../NavItem/NavItem";

const Header = () => {
  return(
    <header id="fixed">
        <div className="hamburger hamburger--elastic">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </div>
        <nav>
          <ul>
            <NavItem><a className="active" href="#">Home</a></NavItem>
            <NavItem><a href="resume.html">Resume</a></NavItem>
            <NavItem><a href="portfolio.html">Portfolio</a></NavItem>
            <NavItem><a href="blog.html">Blog</a></NavItem>
            <NavItem><a href="contact.html">Contact</a></NavItem>
          </ul>
        </nav>
    </header>
  );
};

export default Header;
