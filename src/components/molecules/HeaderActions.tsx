import React from "react";
import styled from "styled-components";
import { theme } from "../../core/theme/index";

import NotificationsIcon from "@mui/icons-material/Notifications";
import WarningIcon from "@mui/icons-material/Warning";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const styledAvatar = {
  backgroundColor: theme.colors.lightGray,
  cursor: "pointer",
  height: "3.5rem",
  width: "3.5rem",
};

export default function HeaderActions() {
  return (
    <ActionsContainer>
      <Badge color="error" overlap="circular">
        <Avatar sx={styledAvatar}>
          <NotificationsIcon sx={{ color: "black" }} />
        </Avatar>
      </Badge>

      <Badge color="error" overlap="circular">
        <Avatar sx={styledAvatar}>
          <WarningIcon sx={{ color: "black" }} />
        </Avatar>
      </Badge>

      <Avatar sx={styledAvatar}>
        <SettingsIcon sx={{ color: "black" }} />
      </Avatar>
    </ActionsContainer>
  );
}
