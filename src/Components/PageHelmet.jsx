import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

const PageHelmet = ({ title, children }) => {
  return (
    <Box>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      {children}
    </Box>
  );
};
export default PageHelmet;
