import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  SvgIcon,
  Button,
  // IconButton,
  Link as MuiLink,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
// import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Icon from './Icon';
import TranslationMenu from './TranslationMenu';

const links = {
  about: '/about',
  projects: '/projects',
};

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  let currentTab = false;

  Object.entries(links).forEach(([title, link]) => {
    if (router.pathname === link) {
      currentTab = title;
    }
  });

  return (
    <AppBar color="inherit" position="sticky">
      <Toolbar>
        <Link href="/">
          <SvgIcon fontSize="large" color="primary" sx={{ cursor: 'pointer' }}>
            <Icon name="logo" height="100%" width="100%" />
          </SvgIcon>
        </Link>

        <Tabs
          aria-label="navbar tabs"
          value={currentTab}
          sx={{
            ml: 'auto',
            '& .MuiTabs-indicator': {
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'transparent',
            },
            '& .MuiTabs-indicatorSpan': {
              maxWidth: 60,
              width: '100%',
              bgcolor: 'primary.main',
            },
          }}
          TabIndicatorProps={{
            children: <span className="MuiTabs-indicatorSpan" />,
          }}>
          {Object.entries(links).map(([title, link]) => (
            <Link href={link} passHref key={title} value={title}>
              <Tab
                label={t(title)}
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
          download
          href="/resume.pdf"
          sx={{
            textTransform: 'none',
            color: (theme) => theme.palette.grey[600],
          }}>
          {t('resume')}
        </Button>

        <TranslationMenu />

        {/* <IconButton aria-label="change theme" sx={{ mx: 1 }}>
          <DarkModeOutlinedIcon />
        </IconButton> */}

        <Button
          component={MuiLink}
          href="mailto:edwingl@uci.edu"
          sx={{
            textTransform: 'none',
            color: (theme) => theme.palette.grey[600],
          }}>
          {t('contact')}
        </Button>
      </Toolbar>
    </AppBar>
  );
}
