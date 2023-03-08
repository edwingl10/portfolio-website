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
  Backdrop,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import EmailIcon from '@mui/icons-material/Email';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Icon from './Icon';
import { useThemeUpdate } from './ThemeContext';

const links = {
  about: {
    link: '/about',
    icon: <AccountBoxIcon color="primary" />,
  },
  projects: {
    link: '/projects',
    icon: <IntegrationInstructionsIcon color="primary" />,
  },
};

function CustomMenuItem({ MenuIcon, title, ...menuProps }) {
  return (
    <MenuItem {...menuProps} sx={{ my: 1, mx: 0.5 }}>
      <Stack alignItems="center" spacing={1} sx={{ width: { xs: 75, sm: 95 } }}>
        <MenuIcon color="primary" />
        <Typography>{title}</Typography>
      </Stack>
    </MenuItem>
  );
}

CustomMenuItem.propTypes = {
  MenuIcon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};

export default function MobileNavbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { t } = useTranslation('common');
  const { toggleColorMode } = useThemeUpdate();
  const currentTheme = useTheme();
  const isDarkMode = currentTheme.palette.mode === 'dark';

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    setAnchorEl(null);
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=15768017; path=/`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <Paper sx={{ position: 'sticky', bottom: 0 }} elevation={3}>
        <BottomNavigation showLabels sx={{ justifyContent: 'space-between' }}>
          <BottomNavigationAction
            aria-label={t('home')}
            icon={
              <Link href="/" legacyBehavior>
                <SvgIcon color="primary" sx={{ fontSize: 25 }}>
                  <Icon name="logo" />
                </SvgIcon>
              </Link>
            }
            sx={{ maxWidth: 50 }}
          />
          <BottomNavigationAction
            aria-label={t('navMenu')}
            aria-haspopup="true"
            aria-controls="menu-appbar"
            icon={<GridViewIcon color="primary" sx={{ fontSize: 25 }} />}
            sx={{ maxWidth: 50 }}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          />
        </BottomNavigation>
      </Paper>

      <Backdrop open={Boolean(anchorEl)} sx={{ bgcolor: 'rgba(0,0,0,0.2)' }}>
        <Menu
          id="menu-appbar"
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ flexWrap: 'wrap', maxWidth: 410 }}>
            {Object.entries(links).map(([title, content]) => (
              <Link
                href={content.link}
                passHref
                key={title}
                value={title}
                legacyBehavior>
                <MenuItem
                  onClick={() => setAnchorEl(null)}
                  sx={{ my: 1, mx: 0.5 }}>
                  <Stack
                    alignItems="center"
                    spacing={1}
                    sx={{ width: { xs: 75, sm: 95 } }}>
                    {content.icon}
                    <Typography>{t(title)}</Typography>
                  </Stack>
                </MenuItem>
              </Link>
            ))}

            <CustomMenuItem
              component="button"
              href="/resume.pdf"
              target="_blank"
              MenuIcon={DescriptionIcon}
              title={t('resume')}
              onClick={() => setAnchorEl(null)}
            />
            <CustomMenuItem
              MenuIcon={LanguageIcon}
              title={router.locale === 'en' ? 'Español' : 'English'}
              onClick={() =>
                onToggleLanguageClick(router.locale === 'en' ? 'es' : 'en')
              }
            />
            <CustomMenuItem
              MenuIcon={isDarkMode ? LightModeIcon : DarkModeIcon}
              title={isDarkMode ? t('lightMode') : t('darkMode')}
              onClick={toggleColorMode}
            />
            <CustomMenuItem
              component={MuiLink}
              href="mailto:edwingl@uci.edu"
              MenuIcon={EmailIcon}
              title={t('contact')}
            />
          </Stack>
        </Menu>
      </Backdrop>
    </>
  );
}
