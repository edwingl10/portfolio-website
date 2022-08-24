import React from 'react';
import {
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import PropTypes from 'prop-types';

export default function ProjectSection({ projects }) {
  return (
    <Grid container spacing={4} sx={{ mb: 2 }}>
      {projects.map((project) => (
        <Grid key={project.id} item xs={11} sm={6} md={4}>
          <Card>
            <Link href={`projects/${project.id}`}>
              <CardActionArea>
                <CardMedia>
                  <Image
                    src={project.mainImg}
                    alt="placeholder image"
                    height={500}
                    objectFit="cover"
                  />
                </CardMedia>
                <CardContent>
                  <Typography textAlign="left" paragraph>
                    {project.name}
                  </Typography>
                  <Typography textAlign="left" variant="body2">
                    {project.overview}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

ProjectSection.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      overview: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string,
      link: PropTypes.string,
      mainImg: PropTypes.object,
    })
  ).isRequired,
};
