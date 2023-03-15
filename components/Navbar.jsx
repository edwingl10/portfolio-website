import {
  AppBar,
  Tabs,
  Tab,
  Toolbar,
  SvgIcon,
  Button,
  IconButton,
  Link as MuiLink,
  useScrollTrigger,
  Slide,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PropTypes from 'prop-types';
import Icon from './Icon';
import TranslationMenu from './TranslationMenu';
import { useThemeUpdate } from './ThemeContext';

const links = {
  about: '/about',
  projects: '/projects',
};
const iconStyles = {
  color: (theme) => theme.palette.text.primary,
  opacity: 0.8,
  mx: 1,
};

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Navbar() {
  const { t } = useTranslation('common');
  const router = useRouter();
  let currentTab = false;
  const currentTheme = useTheme();
  const { toggleColorMode } = useThemeUpdate();

  Object.entries(links).forEach(([title, link]) => {
    if (router.pathname === link) {
      currentTab = title;
    }
  });

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        sx={{
          '& .MuiToolbar-root': { bgcolor: 'background.paper' },
          color: (theme) => theme.palette.text.primary,
        }}>
        <Toolbar>
          <Link href="/" legacyBehavior>
            <SvgIcon
              fontSize="large"
              color="primary"
              sx={{ cursor: 'pointer' }}>
              <Icon name="logo" height="100%" width="100%" />
            </SvgIcon>
          </Link>

          <Tabs
            aria-label={t('navTabs')}
            value={currentTab}
            sx={{
              ml: 'auto',
              color: 'text.primary',
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
              <Link
                href={link}
                passHref
                key={title}
                value={title}
                legacyBehavior>
                <Tab
                  label={t(title)}
                  component="a"
                  sx={{
                    textTransform: 'none',
                    p: 0,
                    opacity: 0.8,
                  }}
                />
              </Link>
            ))}
          </Tabs>

          <Button
            href="/resume.pdf"
            target="_blank"
            sx={{
              textTransform: 'none',
              ...iconStyles,
            }}>
            {t('resume')}
          </Button>

          <TranslationMenu btnStyle={{ ...iconStyles }} />

          <IconButton
            aria-label={t('changeTheme')}
            onClick={toggleColorMode}
            sx={{
              ...iconStyles,
            }}>
            {currentTheme.palette.mode === 'light' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>

          <Button
            component={MuiLink}
            href="mailto:edwingl@uci.edu"
            sx={{
              textTransform: 'none',
              ...iconStyles,
            }}>
            {t('contact')}
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
