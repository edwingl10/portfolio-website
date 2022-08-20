import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Stack, Link as MuiLink } from '@mui/material';

const socialIconStyles = { '&:hover': { color: 'secondary.main' } };
const socialLinks = {
  linkedIn: {
    link: 'https://www.linkedin.com/in/edwinglopez/',
    icon: <LinkedInIcon color="primary" sx={socialIconStyles} />,
  },
  github: {
    link: 'https://github.com/edwingl10',
    icon: <GitHubIcon color="primary" sx={socialIconStyles} />,
  },
  mail: {
    link: 'mailto:edwingl@uci.edu',
    icon: <EmailIcon color="primary" sx={socialIconStyles} />,
  },
};

export default function SocialLinks() {
  return (
    <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
      {Object.entries(socialLinks).map(([key, val]) => (
        <MuiLink href={val.link} target="_blank" key={key}>
          {val.icon}
        </MuiLink>
      ))}
    </Stack>
  );
}
