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
import PersonIcon from '@mui/icons-material/Person';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import DescriptionIcon from '@mui/icons-material/Description';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import Icon from './Icon';
import { useThemeUpdate } from './ThemeContext';

const links = {
  about: {
    link: '/about',
    icon: <PersonIcon color="primary" sx={{ mb: 1 }} />,
  },
  projects: {
    link: '/projects',
    icon: <IntegrationInstructionsIcon color="primary" sx={{ mb: 1 }} />,
  },
};

function CustomMenuItem({ MenuIcon, title, ...menuProps }) {
  return (
    <MenuItem {...menuProps}>
      <Stack alignItems="center" sx={{ width: 75 }}>
        <MenuIcon color="primary" sx={{ mb: 1 }} />
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
            icon={
              <Link href="/">
                <SvgIcon color="primary" sx={{ fontSize: 25 }}>
                  <Icon name="logo" />
                </SvgIcon>
              </Link>
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

      <Backdrop open={Boolean(anchorEl)} sx={{ bgcolor: 'rgba(0,0,0,0.2)' }}>
        <Menu
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
          transformOrigin={{ horizontal: 'center', vertical: 'bottom' }}>
          <Stack
            direction="row"
            rowGap={3}
            columnGap={{ xs: 2, sm: 3 }}
            justifyContent="center"
            sx={{
              flexWrap: 'wrap',
              maxWidth: 450,
            }}>
            {Object.entries(links).map(([title, content]) => (
              <Link href={content.link} passHref key={title} value={title}>
                <MenuItem onClick={() => setAnchorEl(null)}>
                  <Stack alignItems="center" sx={{ width: 75 }}>
                    {content.icon}
                    <Typography>{t(title)}</Typography>
                  </Stack>
                </MenuItem>
              </Link>
            ))}

            <CustomMenuItem
              component="button"
              download
              href="/resume.pdf"
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
              MenuIcon={SendIcon}
              title={t('contact')}
            />
          </Stack>
        </Menu>
      </Backdrop>
    </>
  );
}
