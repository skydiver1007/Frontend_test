import { Grid, Box, styled, CardHeader, Typography, Card } from "@mui/material";
import React from "react";

import HeaderStyle from "../components/HeaderStyle";
import Logo from "../components/Logo";
import RegisterForm from "../components/section/@dashboard/register/RegisterForm";
const width = 450;

const RootStyle = styled(Box)(() => ({
  position: "relative",
  width: `calc(100%-${width}px)`,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const LoginFormStyle = styled(Box)(({ theme }) => ({
  width: "98%",
  [theme.breakpoints.up("sm")]: {
    width: "500px",
  },
  padding: theme.spacing(2),
}));
const Register = () => {
  return (
    <Grid container>
      <Grid item sm={5} md={5}>
        <Logo logoIllustration="/mock-images/logo.svg" />
        <Card
          sx={{
            width: width,
            height: "550px",
            display: { xs: "none", md: "block" },
            px: 2,
            py: 5,
            mt: 4,
          }}
        >
          <Typography variant="h4">Register to Dalibor Dashboard</Typography>
          <Box
            component="img"
            src="/illustrations/illustration_register.png"
            alt="logo png"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={7}>
        <RootStyle>
          <HeaderStyle
            title="Already have an account?"
            link="Login"
            to="/login"
          />
          <LoginFormStyle>
            <CardHeader
              title="Get started with Dalibor"
              subheader="Dalibor awaits!"
              sx={{ pl: 0 }}
            />
            <RegisterForm />
          </LoginFormStyle>
        </RootStyle>
      </Grid>
    </Grid>
  );
};

export default Register;
