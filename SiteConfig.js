const config = {
  contentPath: 'activities',
  dataPath: 'data',
  siteTitle: 'Aaron', // Site title.
  siteTitleShort: 'Aaron', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Aaron', // Alternative site title for SEO.
  siteLogo: '/logos/android-chrome-512x512.png', // Logo used for SEO and manifest.
  siteUrl: 'https://aaronamm.github.io', // Domain of your website without pathPrefix.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteRssTitle: 'Aaron RSS feed', // Title of the RSS feed
  pathPrefix: '/', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  nodePrefix: '/b', // Prefixes for only post created by createNodeField from `gastby-node.js`
  siteDescription: 'Aaron personal portfolio site', // Website description used for RSS feeds/meta description tag.
  siteFBAppID: 'xxxxx', // FB Application ID for using app insights
  googleAnalyticsID: 'UA-625xxxx-1', // GA tracking ID.
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'yyyy MMM, d', // Date format for display.
  postsPerPage: 10, // Amount of posts displayed per listing page.
  profile: {
    name: 'Aaron', // Username to display in the author segment.
    email: 'theeranitp@gmail.com', // Email used for RSS feed's author segment
    twitter: 'aaronamm', // For SEO
    github: 'aaronamm', // For showing Github Calendar and recent activities
    location: 'Bangkok, Thailand', // User location to display in the author segment and SEO.
    avatar: 'https://avatars.githubusercontent.com/u/2938310?v=4', // User avatar to display in the author segment.
    description:
      // User description to display in the author segment.'
      "I am a software engineer who loves to have everything automated." + 
      "Vim, C#, F#, Java, Groovy, TypeScript"
  },
  headlines: [
    'Software engineer',
    'Open source contributor',
    'Blogger'
  ],
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/aaronamm',
      iconClassName: ['fa', 'github'],
    },
    {
      label: 'Email',
      url: 'mailto:theeranitp@gmail.com',
      iconClassName: ['fas', 'envelope'],
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/aaronamm',
      iconClassName: ['fab', 'linkedin'],
    },
  ],
  copyright: 'Copyright © 2021. Aaron', // Copyright string for the footer of the website and RSS feed.
  themeColor: '#c62828', // Used for setting manifest and progress theme colors.
  backgroundColor: '#e0e0e0', // Used for setting manifest background color.
};


// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = '';
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure nodePrefix doesn't have an ending forward slash
if (config.nodePrefix.substr(-1) === '/')
  config.nodePrefix = config.nodePrefix.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
