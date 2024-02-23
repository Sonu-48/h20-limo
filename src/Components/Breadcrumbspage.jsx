import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Typography, styled } from "@mui/material";
import { Link, NavLink } from "react-router-dom";

const BreadcrumbsWrapper = styled("div")({
  background: "#17233e",
  padding: "50px 30px",
  textAlign: "center",
});

export default function Breadcrumbspage({ title, heading }) {
  return (
    <BreadcrumbsWrapper>
      <Typography variant="h2" color="#fff" pb={2}>
        {heading}
      </Typography>
      <Breadcrumbs aria-label="breadcrumb" style={{justifyContent:'center'}}>
        <NavLink underline="hover" color="#029e9d" to="/">
          Home
        </NavLink>
        <Typography variant="body1" color="#fff">{title}</Typography>
      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
}
