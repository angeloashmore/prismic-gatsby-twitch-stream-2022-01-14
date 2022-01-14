import { SliceZone } from "@prismicio/react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import {
	withPrismicPreview,
	WithPrismicPreviewProps,
} from "gatsby-plugin-prismic-previews";

import type { PageTemplateQuery } from "../types.generated";
import { components } from "../slices/PageDataBody";
import { Layout } from "../components/Layout";

type PageTemplateProps = PageProps<PageTemplateQuery> &
	WithPrismicPreviewProps<PageTemplateQuery>;

function PageTemplate({ data }: PageTemplateProps) {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const page = data.prismicPage!;

	return (
		<Layout>
			<Helmet>
				<title>{page.data.title?.text}</title>
			</Helmet>
			<SliceZone slices={page.data.body} components={components} />
		</Layout>
	);
}

export default withPrismicPreview(PageTemplate);

export const query = graphql`
	query PageTemplate($id: String!) {
		prismicPage(id: { eq: $id }) {
			_previewable
			data {
				title {
					text
				}
				body {
					... on PrismicSliceType {
						slice_type
					}
					...PageDataBodyText
				}
			}
		}
	}
`;
