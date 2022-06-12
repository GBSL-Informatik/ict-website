import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Features from '../components/Features';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Features: Features,
};