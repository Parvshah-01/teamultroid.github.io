module.exports = {
  title: 'Ultroid',
  tagline: 'Ultroid, a pluggable telegram userbot, made in python using Telethon!',
  url: 'https://www.ultroid.tech',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/u.png',
  organizationName: 'TeamUltroid',
  projectName: 'teamultroid.github.io',
  themeConfig: {
    metadatas: [{ name: 'yandex-verification', content: 'b8291c7f76165c9d' }],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    image: 'img/metalogo.jpg',
    navbar: {
      title: 'Ultroid',
      logo: {
        alt: 'Ultroid Logo',
        src: 'img/u.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'changelog/',
          activeBasePath: 'changelog/',
          label: 'Changelog',
          position: 'left',
        },
        // { to: 'session-gen', label: 'Session-Gen', position: 'left' },
        {
          href: 'https://github.com/TeamUltroid/Ultroid',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Documentation',
              to: 'docs/',
            },
            {
              label: 'pyUltroid',
              to: 'docs/pyUltroid/pyUltroid',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://telegram.dog/UltroidSupportChat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheUltroid',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/TeamUltroid/Ultroid',
            },
            // {
            //   label: "URL Shortener",
            //   href: "https://tiny.ultroid.tech"
            // }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/TeamUltroid" target="_blank">Team Ultroid</a>, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-DF813CEEN9',
          anonymizeIP: true,
        }
      },
    ],
  ],
};
