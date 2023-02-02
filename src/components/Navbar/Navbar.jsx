import Link from "next/link";
import { NavbarWrapper } from "./Navbar.styled";
const Routes=[
  {
    "route": "/",
    "index": "Home"
  },
  {
    "route": "/contact",
    "index": "Contact"
  }
]

const Navbar = () => {
  return (
    <NavbarWrapper>
      {Routes.map((array) => (
        
        <Link href={array.route} >{array.index}</Link>
      ))
        }
    </NavbarWrapper>
  );
};

export default Navbar;
