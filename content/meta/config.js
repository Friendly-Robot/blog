const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Friendly-Robot", // <title>
  shortSiteTitle: "Friendly Blog", // <title> ending for posts and pages
  siteDescription: "A friendly blog.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Andy Li",
  authorTwitterAccount: "rhymeswithandy",
  // info
  infoTitle: "Andy Li",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Friendly-Robot",
  manifestShortName: "FriendlyBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "andyzanli@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/friendly-robot" },
    { name: "twitter", url: "https://twitter.com/rhymeswithandy" },
    { name: "facebook", url: "https://facebook.com/andyzanli" }
  ]
};
