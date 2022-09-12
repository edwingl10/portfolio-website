import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import WindowOutlinedIcon from '@mui/icons-material/WindowOutlined';
import Logo from '../public/images/logo.svg';

export default function MobileNavbar() {
  return (
    <Paper sx={{ position: 'sticky', bottom: 0 }} elevation={10}>
      <BottomNavigation showLabels sx={{ justifyContent: 'space-between' }}>
        <BottomNavigationAction
          icon={<Logo style={{ height: 30, width: 30 }} />}
        />
        <BottomNavigationAction
          icon={<WindowOutlinedIcon sx={{ width: 30, height: 30 }} />}
        />
      </BottomNavigation>
    </Paper>
  );
}
