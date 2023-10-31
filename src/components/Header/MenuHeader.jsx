import React from "react";
import SITE_LOGO from "../../assets/toplearnLogo.svg";
import { Container, Nav, NavLink, Navbar, NavbarBrand } from "react-bootstrap";
import { FaBars, FaSearch, FaRegUser, FaUser } from "react-icons/fa";

const MenuHeader = () => {
  return (
    <div>
      <Navbar className="d-flex p-0 m-0 menu-header w-100 flex-wrap justify-content-start justify-content-lg-around align-items-baseline ">
        <Container className="p-0 m-0 justify-content-start ">
          <NavbarBrand>
            <img src={SITE_LOGO} alt="Logo" className="title-homepage" />
          </NavbarBrand>
          <NavLink className="navbar d-lg-none text-white">
            <i>
              <FaBars />
            </i>
            <small className="custom"></small>
            <i>
              <FaSearch />
            </i>
            <small className="custom"></small>
            <div className="user-area d-flex">
              <i>
                {" "}
                <FaUser />
              </i>
              <NavLink> ورود </NavLink>
              {"  "}
              <sapn className="user-area-span"> / </sapn>
              <NavLink> ثبت نام </NavLink>{" "}
            </div>
          </NavLink>
          <Nav className="d-none d-lg-flex  " id="nav-header">
            <Nav.Item>
              <Nav.Link href="/home">آخرین دوره ها</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">تخفیفات روزانه</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">بلاگ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">فرصت های شغلی</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">همکاری با تاپ لرن</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">مشاوره و رفع اشکال آنلاین</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">لینک های مفید</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">تماس با ما</Nav.Link>
            </Nav.Item>
          </Nav>
          <NavLink
            id="user-rejester"
            className="d-none navbar d-lg-flex pe-lg-4 me-lg-5 me-xl-0 pe-xl-0  ps-lg-5 text-white ms-auto fs-14"
          >
            <div className="user-area d-flex fs-14">
              <i>
                <FaRegUser />
              </i>
              <Nav.Item> ورود </Nav.Item>
              {"  "}
              <sapn className="user-area-span"> / </sapn>
              <Nav.Item> ثبت نام </Nav.Item>{" "}
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </div>
  );
};

export default MenuHeader;
