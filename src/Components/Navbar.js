import { NavItem, Nav } from "reactstrap";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <Nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100px",
          width: "100%",
          backgroundColor: "lightgreen",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            width: "200px",
          }}
        >
          <NavItem>
            <CalendarViewDayIcon color="primary" style={{ fontSize: "40px" }} />
          </NavItem>
          <NavItem>
            <NavLink to="/products">Products</NavLink>
          </NavItem>
        </div>
        <div style={{ width: "100px" }}>
          <NavLink to="cart">
            <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart.length} color="primary" aria-setsize={4}>
                <ShoppingCartIcon color="secondary" />
              </StyledBadge>
            </IconButton>
          </NavLink>
        </div>
      </Nav>
    </>
  );
}

export default Navbar;
