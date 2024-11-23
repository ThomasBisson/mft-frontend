import * as React from 'react';
import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';

interface BadgeButtonProps extends IconButtonProps {
  hideBadge?: boolean;
  nbNotifs?: number;
  nbNotifsMax?: number;
}

export default function BadgeButton({
  hideBadge = false,
  nbNotifs = 0,
  nbNotifsMax = 99,
  ...props
}: BadgeButtonProps) {
  return (
    <Badge
      color="error"
      invisible={hideBadge}
      badgeContent={nbNotifs}
      max={nbNotifsMax}
      sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
    >
      <IconButton size="small" {...props} />
    </Badge>
  );
}
