import { IconButton, Menu, MenuItem } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import { useState } from 'react';
import { useRouter } from 'next/router';

const languages = {
  en: 'English',
  es: 'Español',
};

export default function TranslationMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router;
    setAnchorEl(null);
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=15768017; path=/`;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <>
      <IconButton
        aria-label="select language"
        onClick={(e) => setAnchorEl(e.currentTarget)}
        sx={{ mx: 1 }}>
        <LanguageIcon />
      </IconButton>

      <Menu
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
