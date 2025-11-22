import logo from "../assets/Group.svg";
import photo from "../assets/Profile.png";
import seta from "../assets/elements.svg";
import Box from "@mui/material/Box";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white ">
      <Box
        component="section"
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Box component="div" sx={{ marginLeft: 2 }}>
          <img src={logo} alt="logo" className="h-[33px] w-[33px]" />
        </Box>
        <Box component="div" sx={{ fontWeight: "bold" }}>
          <h1 className="text-2xl">ECOFY</h1>
        </Box>
      </Box>

      <Box
        component="section"
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          paddingTop: 2,
          paddingBottom: 2,
        }}
      >
        <Box component="div" sx={{ marginLeft: 2, display: "flex", gap: 3 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-search-icon lucide-search"
          >
            <path d="m21 21-4.34-4.34" />
            <circle cx="11" cy="11" r="8" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-mail-icon lucide-mail"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-bell-icon lucide-bell"
          >
            <path d="M10.268 21a2 2 0 0 0 3.464 0" />
            <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
          </svg>
        </Box>
        <Box
          component="div"
          sx={{
            display: "flex",
            gap: 4,
            alignItems: "center",
            paddingRight: 4,
            paddingLeft: 2,
          }}
        >
          <img src={photo} alt="foto" className="" />
          <Box component="div" sx={{}}>
            <h1>Marcus Orlando</h1>
            <p className="text-[12px] text-[#545454]">
              marcusorlando@gmail.com
            </p>
          </Box>
          <img src={seta} alt="seta" />
        </Box>
      </Box>
    </nav>
  );
};

export default Navbar;
