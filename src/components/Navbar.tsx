import logo from "../assets/Group.svg";
import photo from "../assets/Profile.png";

// Importações de componentes MUI
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

// Importações de ícones MUI
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "white", boxShadow: "none" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            src={logo}
            alt="logo da ECOFY"
            sx={{ height: 33, width: 33 }}
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

        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={3}>
            <IconButton color="inherit" aria-label="Pesquisar">
              <SearchIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton color="inherit" aria-label="Mensagens">
              <MailIcon sx={{ color: "black" }} />
            </IconButton>
            <IconButton color="inherit" aria-label="Notificações">
              <NotificationsIcon sx={{ color: "black" }} />
            </IconButton>
          </Stack>
          <Stack
            direction="row"
            spacing={1.5}
            alignItems="center"
            sx={{
              paddingLeft: 2,
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Avatar src={photo} alt="foto de perfil de marcus orlando" />
            <Box>
              <Typography variant="body1" color="black" fontWeight="medium">
                Marcus Orlando
              </Typography>
              <Typography variant="caption" color="#545454">
                marcusorlando@gmail.com
              </Typography>
            </Box>
            <IconButton color="inherit" aria-label="Abrir menu de perfil">
              <ArrowDropDownIcon sx={{ color: "black" }} />
              {/* <img src={seta} alt="" role="presentation" /> */}
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
