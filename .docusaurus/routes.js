import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'c91'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'c70'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '5f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'aec'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '758'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '725'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'abe'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'ca0'),
    exact: true
  },
  {
    path: '/blog/2015/05/01/createive-destruction',
    component: ComponentCreator('/blog/2015/05/01/createive-destruction', 'ae3'),
    exact: true
  },
  {
    path: '/blog/2016/04/01/egypt',
    component: ComponentCreator('/blog/2016/04/01/egypt', '1e3'),
    exact: true
  },
  {
    path: '/blog/2016/05/01/zen',
    component: ComponentCreator('/blog/2016/05/01/zen', 'fae'),
    exact: true
  },
  {
    path: '/blog/2017/06/01/',
    component: ComponentCreator('/blog/2017/06/01/', '64c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '4de'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'a75'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'dfd'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'fa3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '4be'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'cb6'),
            routes: [
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Middle East Studies/IranMilitary',
                component: ComponentCreator('/docs/Middle East Studies/IranMilitary', '1bd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Science and Tech Policy/Article Review - Authority Gap of the NSF',
                component: ComponentCreator('/docs/Science and Tech Policy/Article Review - Authority Gap of the NSF', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Science and Tech Policy/Article Review - Economic Metrics',
                component: ComponentCreator('/docs/Science and Tech Policy/Article Review - Economic Metrics', 'd13'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Science and Tech Policy/Article Review - French Guiana and Space',
                component: ComponentCreator('/docs/Science and Tech Policy/Article Review - French Guiana and Space', '39a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Science and Tech Policy/Article Review - Satellites and Politics',
                component: ComponentCreator('/docs/Science and Tech Policy/Article Review - Satellites and Politics', '057'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/World War I/WWI_Review_01',
                component: ComponentCreator('/docs/World War I/WWI_Review_01', '498'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/World War I/WWI_Review_02',
                component: ComponentCreator('/docs/World War I/WWI_Review_02', '1f0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/World War I/WWI_Review_03',
                component: ComponentCreator('/docs/World War I/WWI_Review_03', '3a0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/World War I/WWI_Review_04',
                component: ComponentCreator('/docs/World War I/WWI_Review_04', '032'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '346'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
