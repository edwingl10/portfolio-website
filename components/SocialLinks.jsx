import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Stack, Link as MuiLink } from '@mui/material';
import PropTypes from 'prop-types';

export default function SocialLinks({ color }) {
  const socialIconStyles = {
    '&:hover': { color: 'secondary.main' },
    color,
  };

  const socialLinks = {
    linkedIn: {
      link: 'https://www.linkedin.com/in/edwinglopez/',
      icon: <LinkedInIcon sx={socialIconStyles} />,
    },
    github: {
      link: 'https://github.com/edwingl10',
      icon: <GitHubIcon sx={socialIconStyles} />,
    },
    mail: {
      link: 'mailto:edwingl@uci.edu',
      icon: <EmailIcon sx={socialIconStyles} />,
    },
  };

  return (
    <Stack direction="row" spacing={2}>
      {Object.entries(socialLinks).map(([key, val]) => (
        <MuiLink href={val.link} target="_blank" key={key}>
          {val.icon}
        </MuiLink>
      ))}
    </Stack>
  );
}

SocialLinks.propTypes = {
  color: PropTypes.string,
};
SocialLinks.defaultProps = {
  color: 'primary',
};
