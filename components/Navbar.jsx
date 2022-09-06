import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  SvgIcon,
  Button,
  IconButton,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Icon from './Icon';

const links = {
  About: '/about',
  Projects: '/projects',
};

export default function Navbar() {
  const router = useRouter();
  let currentTab = false;

  Object.entries(links).forEach(([title, link]) => {
    if (router.pathname === link) {
      currentTab = title;
    }
  });

  return (
    <AppBar color="inherit">
      <Toolbar>
        <Link href="/">
          <SvgIcon fontSize="large" color="primary" sx={{ cursor: 'pointer' }}>
            <Icon name="logo" height="100%" width="100%" />
          </SvgIcon>
        </Link>

        <Tabs aria-label="navbar tabs" value={currentTab} sx={{ ml: 'auto' }}>
          {Object.entries(links).map(([title, link]) => (
            <Link href={link} passHref key={title} value={title}>
              <Tab
                label={title}
                component="a"
                sx={{
                  textTransform: 'none',
                  p: 0,
                }}
              />
            </Link>
          ))}
        </Tabs>

        <Button
          sx={{
            textTransform: 'none',
            color: (theme) => theme.palette.grey[600],
          }}>
          Resume
        </Button>
        <IconButton aria-label="select language" sx={{ mx: 1 }}>
          <LanguageIcon />
        </IconButton>
        <IconButton aria-label="change theme" sx={{ mx: 1 }}>
          <DarkModeOutlinedIcon />
        </IconButton>
        <Button
          sx={{
            textTransform: 'none',
            color: (theme) => theme.palette.grey[600],
          }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
}
