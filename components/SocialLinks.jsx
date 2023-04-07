import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { Stack, Link as MuiLink } from '@mui/material';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { moveUpOnHover } from '../utils/animations';

export default function SocialLinks({ color }) {
  const socialIconStyles = { color };

  const socialLinks = {
    linkedIn: {
      link: 'https://www.linkedin.com/in/edwinglopez/',
      icon: <LinkedInIcon sx={socialIconStyles} />,
      aria: 'LinkedIn',
    },
    github: {
      link: 'https://github.com/edwingl10',
      icon: <GitHubIcon sx={socialIconStyles} />,
      aria: 'GitHub',
    },
    mail: {
      link: 'mailto:edwingl@uci.edu',
      icon: <EmailIcon sx={socialIconStyles} />,
      aria: 'Email',
    },
  };

  return (
    <Stack direction="row" spacing={2}>
      {Object.entries(socialLinks).map(([key, val]) => (
        <motion.div whileHover={moveUpOnHover} key={key}>
          <MuiLink
            href={val.link}
            target="_blank"
            key={key}
            aria-label={val.aria}>
            {val.icon}
          </MuiLink>
        </motion.div>
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
