import { AppBar, Tabs, Tab, Toolbar } from '@mui/material';
import Link from 'next/link';

const links = {
  About: '/about',
  Projects: '/projects',
};

export default function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Tabs>
          {Object.entries(links).map(([title, link]) => (
            <Link href={link} passHref key={title}>
              <Tab label={title} component="a" />
            </Link>
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
