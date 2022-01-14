import { Link } from "gatsby";
import { PrismicProvider } from "@prismicio/react";
import {
	componentResolverFromMap,
	PrismicPreviewProvider,
} from "gatsby-plugin-prismic-previews";

import { linkResolver } from "./src/linkResolver";
import PageTemplate from "./src/pages/{PrismicPage.url}";

import "./src/styles.css";

/**
 * @type import("gatsby").GatsbyBrowser["wrapRootElement"]
 */
export const wrapRootElement = ({ element }) => {
	return (
		<PrismicProvider
			linkResolver={linkResolver}
			internalLinkComponent={({ href, ...props }) => (
				<Link to={href} {...props} />
			)}
		>
			<PrismicPreviewProvider
				repositoryConfigs={[
					{
						repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
						linkResolver,
						componentResolver: componentResolverFromMap({
							page: PageTemplate,
						}),
					},
				]}
			>
				{element}
			</PrismicPreviewProvider>
		</PrismicProvider>
	);
};
