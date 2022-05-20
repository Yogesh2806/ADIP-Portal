import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="white" pt={2}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        National Disability Service
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function StickyFooter() {
  return (
    <Box
      className="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "10vh",
        width: "100%",
      }}
      pt={3}
    >
      <Container maxWidth="sm">
        <Typography variant="body1">
          Need more Information please contact to :1800-599-0019 :011 24369027
          :011 24365053 :011 24369054
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}
export default StickyFooter;
