import React from "react";
import QueueMusicRoundedIcon from "@mui/icons-material/QueueMusicRounded";
import { Box, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";  
import Link from "@mui/material/Link";

const Liferay = (window as any).Liferay;

interface headerProps {
  subTitle: string;
  mainTitle: string;
  footerTitle: string;
  PARSEDHASH: any;
  parsedHashTitle: any;
  defaultMainTitle: string;
}
const Header: React.FC<headerProps> = ({ subTitle, mainTitle, footerTitle, PARSEDHASH, parsedHashTitle, defaultMainTitle }) => {
  const currentUrl = Liferay.ThemeDisplay.getCanonicalURL();
  return (
    <Box sx={{ m: 5 }}>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", marginRight: "auto" }}
      >
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href={currentUrl}
              id="crumbOne"
            >
              <QueueMusicRoundedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              {subTitle}
            </Link>

            {PARSEDHASH ? (
            <Typography variant="body2">
               {PARSEDHASH
          ?  parsedHashTitle 
          : ""}
            </Typography>
          ) : (
            ""
          )}
          </Breadcrumbs>
        </div>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", marginRight: "auto" }}
      >
        <Typography variant="h4" sx={{ mt: 2 }}>
         {PARSEDHASH ? mainTitle : defaultMainTitle}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", alignItems: "flex-start", marginRight: "auto" }}
      >
        <Typography variant="body2" sx={{ mt: 2 }}>
          {PARSEDHASH ? footerTitle : ""}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
