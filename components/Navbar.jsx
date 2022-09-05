import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
        <Tabs aria-label="navbar tabs" value={currentTab}>
          {Object.entries(links).map(([title, link]) => (
            <Link href={link} passHref key={title} value={title}>
              <Tab
                label={title}
                component="a"
                sx={{
                  textTransform: 'none',
                  minWidth: { xs: 64, md: 72 },
                  p: 0,
                }}
              />
            </Link>
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
