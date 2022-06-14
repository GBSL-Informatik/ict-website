import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Features from '../components/Features';
import FeatureCategories from '../components/FeatureCategories';
import ExcelBox from '../components/ExcelBox';
import SearchBox from '../components/SearchBox';
import Figure from '../components/Figure';
import DefinitionList from '../components/DefinitionList';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  Features: Features,
  FeatureCategories: FeatureCategories,
  ExcelBox: ExcelBox,
  SearchBox: SearchBox,
  Figure: Figure,
  dl: DefinitionList
};