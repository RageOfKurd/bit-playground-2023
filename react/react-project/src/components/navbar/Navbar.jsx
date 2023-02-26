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
            <Button text="Login" isLoggedIn={true} />
          </li>
          {/* <li>
            <Button text="Register" {...user} isLoggedIn={false} />
          </li> */}
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
