require("dotenv").config();

/**
 * @type import("gatsby").GatsbyConfig
 */
module.exports = {
	siteMetadata: {
		title: `Prismic + Gatsby Twitch Stream`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	jsxRuntime: "automatic",
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-prismic",
			/**
			 * @type import("gatsby-source-prismic").UnpreparedPluginOptions
			 */
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
				linkResolver: require("./src/linkResolver").linkResolver,
			},
		},
		{
			resolve: "gatsby-plugin-prismic-previews",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
			},
		},
	],
};
