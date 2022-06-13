import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Features from '../components/Features';
import FeatureCategories from '../components/FeatureCategories';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Features: Features,
  FeatureCategories: FeatureCategories,
};