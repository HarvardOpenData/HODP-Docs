module.exports = {
  title: 'HODP Docs',
  tagline: 'Resources for data science, statistical principles, visualization, and writing created by HODP members.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Harvard Open Data Project', // Usually your GitHub org/user name.
  projectName: 'HODP-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'HODP Docs',
      logo: {
        alt: 'HODP Docs',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/doc1',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
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
              to: 'blog',
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
          homePageId: 'docs/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/HarvardOpenData/HODP-Docs/tree/master/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/HarvardOpenData/HODP-Docs/tree/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
