import { Badge, Button } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";
import shoppingCart from "/shoppingCart.svg";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src={shoppingCart} alt="Shopping Cart" />
        SubStore
      </Link>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/store">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Badge badgeContent={5} color="error">
          <Button color="primary" variant="outlined" className="rounded-full">
            <BsFillCartFill />
          </Button>
        </Badge>
      </div>
    </div>
  );
};
