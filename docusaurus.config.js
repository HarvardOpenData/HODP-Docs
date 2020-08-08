const math = require('remark-math')
const katex = require('rehype-katex')

module.exports = {
  title: 'HODP Docs',
  tagline: 'Resources for data science, statistical principles, visualization, and writing created by HODP members.',
  url: 'https://docs.hodp.org',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Harvard Open Data Project', // Usually your GitHub org/user name.
  projectName: 'HODP-docs', // Usually your repo name.
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],
  themeConfig: {
    navbar: {
      title: 'HODP Docs',
      logo: {
        alt: 'HODP Docs',
        src: 'img/logo.png',
      },
      links: [
        {
          href: 'https://github.com/HarvardOpenData/HODP-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Main Website',
              href: 'https://hodp.org',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/HarvardODP/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/HarvardODP',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://www.hodp.org/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/HarvardOpenData',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Harvard Open Data Project. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: '',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/HarvardOpenData/HODP-Docs/tree/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
