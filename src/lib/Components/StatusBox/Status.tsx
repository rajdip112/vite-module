import { Box, Typography } from "@mui/material";
import { BlueRightArrowIcon } from "../CustomIcon/SvgIcons";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface StatusProps {
  StatusSymbol: any;
  StatusTitle: any;
  StatusBlog: any;
}

const Status: React.FC<StatusProps> = ({
  StatusSymbol,
  StatusTitle,
  StatusBlog,
}) => {
  const borderColor = StatusSymbol ? "#2E7D32" : "#0288D1";
  return (
    <Box
      sx={{
        width: "380px",
        p: 1,
        border: `1px solid ${borderColor}`,
        borderRadius: "3px",
        display: "flex",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        {StatusSymbol ? (
          <CheckCircleOutlineIcon sx={{ color: "#2E7D32" }} />
        ) : (
          <BlueRightArrowIcon />
        )}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
        <Typography component="div" variant="subtitle1">
          {StatusTitle}
        </Typography>
        <Typography variant="subtitle1" component="div">
          {StatusBlog}
        </Typography>
      </Box>
    </Box>
  );
};

export default Status;
