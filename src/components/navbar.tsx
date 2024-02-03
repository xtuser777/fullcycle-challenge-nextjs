import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";

export function NavBar() {
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ backgroundColor: "background.paper" }}> 
        <Image
          src="/next.svg"
          width={147.66}
          height={63.66}
          alt="logo"
          priority
        />
        <Box
          component={Link}
          href={"/posts"}
          sx={{ textDecoration: "none", display: "flex", ml: 3 }}
        >
          <HomeIcon sx={{ color: "text.primary" }} />
          <Typography
            color="text.primary"
            sx={{ fontWeight: 500, display: "flex" }}
          >
            Home
          </Typography>
        </Box>
        {/* <Box
          sx={{ display: "flex", flexGrow: 1, justifyContent: "center", ml: 1 }}
        >
          <SearchBar />
        </Box> */}
      </Toolbar>
    </AppBar>
  );
}