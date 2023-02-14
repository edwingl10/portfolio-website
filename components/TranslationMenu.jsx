import { IconButton, Menu, MenuItem } from '@mui/material';
import TranslateIcon from '@mui/icons-material/Translate';
import { useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';

const languages = {
  en: 'English',
  es: 'Español',
};

export default function TranslationMenu({ btnStyle }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const { t } = useTranslation('common');

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    setAnchorEl(null);
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=15768017; path=/`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <IconButton
        aria-label={t('selectLang')}
        aria-controls="menu-language"
        aria-haspopup="true"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ ...btnStyle }}>
        <TranslateIcon />
      </IconButton>

      <Menu
        id="menu-language"
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'center', vertical: 'top' }}>
        {Object.entries(languages).map(([abbr, lang]) => (
          <MenuItem
            key={lang}
            selected={router.locale === abbr}
            onClick={() => onToggleLanguageClick(abbr)}>
            {lang}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

TranslationMenu.propTypes = {
  btnStyle: PropTypes.shape({
    color: PropTypes.func,
    opacity: PropTypes.number,
    mx: PropTypes.number,
  }),
};
TranslationMenu.defaultProps = {
  btnStyle: {},
};
