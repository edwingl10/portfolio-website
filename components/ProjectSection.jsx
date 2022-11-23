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

export default function ProjectSection({ projects, placeholders }) {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={4}>
      {projects.map((project) => (
        <Grid
          key={project.id}
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ m: { xs: 'auto', sm: 0 } }}>
          <Card sx={{ height: '100%' }}>
            <Link href={`projects/${project.id}`}>
              <CardActionArea>
                <CardMedia
                  sx={{ position: 'relative', width: '100%', height: 145 }}>
                  <Image
                    src={project.mainImg}
                    alt={project.mainImgAltText}
                    layout="fill"
                    objectFit="cover"
                    placeholder="blur"
                    blurDataURL={placeholders[project.id]}
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
      name: PropTypes.string,
      overview: PropTypes.string,
      description: PropTypes.string,
      moreDetails: PropTypes.string,
      techUsed: PropTypes.arrayOf(PropTypes.string),
      type: PropTypes.string,
      link: PropTypes.string,
      mainImg: PropTypes.string,
      secondImg: PropTypes.string,
      mainImgAltText: PropTypes.string,
      secondImgAltText: PropTypes.string,
    })
  ).isRequired,
  placeholders: PropTypes.objectOf(PropTypes.string).isRequired,
};
