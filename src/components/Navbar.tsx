import logo from "../assets/Group.svg";

// Importações de componentes MUI
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

// Importações de ícones MUI

const Navbar = () => {
  return (
    <AppBar sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={logo}
            alt="logo da ECOFY"
            sx={{ height: 73, width: 73 }}
            variant="square"
          />
          <Typography
            variant="h5"
            component="h1"
            fontWeight="bold"
            color="black"
          >
            ECOFY
          </Typography>
        </Stack>

        <Stack direction="row" spacing={2} alignItems="center"></Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
