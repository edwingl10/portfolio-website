import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  SvgIcon,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import Icon from './Icon';

export default function MobileNavbar() {
  return (
    <Paper sx={{ position: 'sticky', bottom: 0 }} elevation={3}>
      <BottomNavigation showLabels sx={{ justifyContent: 'space-between' }}>
        <BottomNavigationAction
          icon={
            <SvgIcon color="primary" sx={{ fontSize: 25 }}>
              <Icon name="logo" />
            </SvgIcon>
          }
          sx={{ maxWidth: 50 }}
        />
        <BottomNavigationAction
          icon={<GridViewIcon color="primary" sx={{ fontSize: 25 }} />}
          sx={{ maxWidth: 50 }}
        />
      </BottomNavigation>
    </Paper>
  );
}
