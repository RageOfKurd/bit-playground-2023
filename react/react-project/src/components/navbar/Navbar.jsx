import { useState } from "react";

import logo from "../../assets/images/logo.svg";
import Button from "../button/Button";
import Container from "../container/Container";

function Navbar() {
  const img = "/userprofile.img";
  const user = {
    firstName: "Hama",
    lastName: "Saadwn",
    profile: `http://localhost3000${img}`,
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      <Container>
        <a className="logo" href="/">
          <img src={logo} alt="Potan Logo" />
        </a>
        <ul>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Button
              text={isLoggedIn ? "Logout" : "Login"}
              handleClick={handleClick}
            />
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
