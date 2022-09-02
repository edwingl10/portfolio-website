import PropTypes from 'prop-types';
import CSharp from '../public/images/icons/csharp.svg';
import Css from '../public/images/icons/css.svg';
import Figma from '../public/images/icons/figma.svg';
import Firebase from '../public/images/icons/firebase.svg';
import Html from '../public/images/icons/html.svg';
import Illustrator from '../public/images/icons/illustrator.svg';
import Java from '../public/images/icons/java.svg';
import Jest from '../public/images/icons/jest.svg';
import JQuery from '../public/images/icons/jquery.svg';
import Javascript from '../public/images/icons/js.svg';
import MongoDB from '../public/images/icons/mongodb.svg';
import Mui from '../public/images/icons/mui.svg';
import Photoshop from '../public/images/icons/photoshop.svg';
import Python from '../public/images/icons/python.svg';
import React from '../public/images/icons/react.svg';
import Terminal from '../public/images/icons/terminal.svg';
import Typescript from '../public/images/icons/typescript.svg';
import Unity from '../public/images/icons/unity.svg';

export const iconTitles = {
  csharp: 'C#',
  css: 'CSS',
  figma: 'Figma',
  firebase: 'Firebase',
  html: 'HTML',
  illustrator: 'Illustrator',
  java: 'Java',
  jest: 'Jest',
  jquery: 'JQuery',
  js: 'Javascript',
  mongodb: 'MongoDB',
  mui: 'MUI',
  photoshop: 'Photoshop',
  python: 'Python',
  react: 'React',
  terminal: 'Terminal',
  typescript: 'Typescript',
  unity: 'Unity',
};

const iconTypes = {
  csharp: CSharp,
  css: Css,
  figma: Figma,
  firebase: Firebase,
  html: Html,
  illustrator: Illustrator,
  java: Java,
  jest: Jest,
  jquery: JQuery,
  js: Javascript,
  mongodb: MongoDB,
  mui: Mui,
  photoshop: Photoshop,
  python: Python,
  react: React,
  terminal: Terminal,
  typescript: Typescript,
  unity: Unity,
};

export default function Icon({ name, ...props }) {
  const CustomIcon = iconTypes[name];
  return <CustomIcon {...props} />;
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};
