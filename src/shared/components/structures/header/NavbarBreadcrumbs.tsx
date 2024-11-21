import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';
import { useLocation, Link as RouterLink, } from 'react-router-dom';
import { breadcrumbNameMap } from '../../../../routes';
import { Link, LinkProps } from '@mui/material';

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink as any} />;
}

export default function NavbarBreadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  return (
    <Breadcrumbs 
      aria-label="breadcrumb"
      separator={<NavigateNextRoundedIcon fontSize="small" />}
    >
       {pathnames.map((value, index) => {
        const isLastParam = index === pathnames.length - 1;
        const sliced = pathnames.slice(0, index + 1);
        const to = `${sliced.join('/')}`;
        const lastParam = sliced[sliced.length - 1];
        const breadcrumbName = breadcrumbNameMap.has(lastParam) ? breadcrumbNameMap.get(lastParam) : lastParam;

        return isLastParam ? (
          <Typography key={to} sx={{ color: 'text.primary' }}>
            {breadcrumbName}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbName}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}
