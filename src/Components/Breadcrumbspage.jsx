import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Typography, styled } from "@mui/material";

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
        <Link underline="hover" color="#029e9d" href="/">
          Home
        </Link>
        <Typography variant="body1" color="#fff">{title}</Typography>
      </Breadcrumbs>
    </BreadcrumbsWrapper>
  );
}
