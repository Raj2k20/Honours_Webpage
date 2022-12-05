import { Typography, Box, useTheme } from "@mui/material";
import { tokens, ColorModeContext } from "../theme";
import { IconButton } from "@mui/material";
import { useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <Box>
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
        width="90%"
        display="inline-block"
      >
        {title}
      </Typography>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
      <Typography
        variant="h5"
        color={colors.greenAccent[400]}
        width="90%"
        sx={{ m: "0 0 5px 0" }}
        display="inline-block"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};
export default Header;
