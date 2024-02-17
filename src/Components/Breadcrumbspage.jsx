import React, { useState, useEffect } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbspage = () => {
  const location = useLocation(); // Use the useLocation hook

  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter((segment) => segment !== '');

    const updatedBreadcrumbs = pathSegments.map((segment, index) => ({
      text: segment,
      link: `/${pathSegments.slice(0, index + 1).join('/')}`,
    }));

    setBreadcrumbs(updatedBreadcrumbs);
  }, [location.pathname]);

  return (
    <Breadcrumbs>
      {breadcrumbs.map((breadcrumb, index) => (
        <Typography key={index} color="textPrimary">
          {breadcrumb.link ? (
            <Link to={breadcrumb.link}>{breadcrumb.text}</Link>
          ) : (
            breadcrumb.text
          )}
        </Typography>
      ))}
    </Breadcrumbs>
  );
};

export default Breadcrumbspage;
