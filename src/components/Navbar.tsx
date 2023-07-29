import { Badge, Button, Menu, MenuItem } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";
import shoppingCart from "/shoppingCart.svg";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useState } from "react";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { openCart, cartQuantity } = useShoppingCart();
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
            <span
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Store
            </span>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}><Link to='/store/allProducts'>All Products</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/store/streamingService'>Streaming Services</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/store/playstation'>PlayStation</Link></MenuItem>
              <MenuItem onClick={handleClose}><Link to='/store/xbox'>Xbox</Link></MenuItem>
            </Menu>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        {cartQuantity > 0 && (
          <Badge badgeContent={cartQuantity} color="error">
            <Button
              color="primary"
              variant="outlined"
              className="rounded-full"
              onClick={openCart}
            >
              <BsFillCartFill />
            </Button>
          </Badge>
        )}
      </div>
    </div>
  );
};
