import { useState } from 'react';
import Link from 'next/link';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  SvgIcon,
  Menu,
  MenuItem,
  Typography,
  Stack,
  Link as MuiLink,
} from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import PersonIcon from '@mui/icons-material/Person';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SendIcon from '@mui/icons-material/Send';
import Icon from './Icon';

const links = {
  About: { link: '/about', icon: <PersonIcon color="primary" /> },
  Projects: {
    link: '/projects',
    icon: <IntegrationInstructionsIcon color="primary" />,
  },
};

export default function MobileNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <>
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
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
        </BottomNavigation>
      </Paper>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}>
        <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
          {Object.entries(links).map(([title, content]) => (
            <Link href={content.link} passHref key={title} value={title}>
              <MenuItem>
                <Stack alignItems="center" sx={{ width: 85 }}>
                  {content.icon}
                  <Typography>{title}</Typography>
                </Stack>
              </MenuItem>
            </Link>
          ))}

          <MenuItem component="button" download href="/resume.pdf">
            <Stack alignItems="center" sx={{ width: 85 }}>
              <DescriptionIcon color="primary" />
              <Typography>Resume</Typography>
            </Stack>
          </MenuItem>

          <MenuItem>
            <Stack alignItems="center" sx={{ width: 85 }}>
              <LanguageIcon color="primary" />
              <Typography>Language</Typography>
            </Stack>
          </MenuItem>

          <MenuItem>
            <Stack alignItems="center" sx={{ width: 85 }}>
              <DarkModeIcon color="primary" />
              <Typography>Dark Mode</Typography>
            </Stack>
          </MenuItem>

          <MenuItem component={MuiLink} href="mailto:edwingl@uci.edu">
            <Stack alignItems="center" sx={{ width: 85 }}>
              <SendIcon color="primary" />
              <Typography>Contact</Typography>
            </Stack>
          </MenuItem>
        </Stack>
      </Menu>
    </>
  );
}
