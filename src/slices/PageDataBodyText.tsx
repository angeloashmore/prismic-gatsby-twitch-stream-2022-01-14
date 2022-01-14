import { graphql } from "gatsby";
import { PrismicRichText } from "@prismicio/react";
import { isFilled } from "@prismicio/helpers";
import type { SliceComponentProps } from "@prismicio/react";

import type { PageDataBodyTextFragment } from "../types.generated";

export function PageDataBodyText({
	slice,
}: SliceComponentProps<PageDataBodyTextFragment>) {
	return (
		<section className="px-6 py-20">
			<div className="mx-auto max-w-4xl w-full">
				{slice.primary.text && isFilled.richText(slice.primary.text.richText) && (
					<div>
						<PrismicRichText
							field={slice.primary.text.richText}
							components={{
								paragraph: ({ children }) => (
									<p className="mb-4 last:mb-0">{children}</p>
								),
							}}
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export const fragment = graphql`
	fragment PageDataBodyText on PrismicPageDataBodyText {
		primary {
			text {
				richText
			}
		}
		slice_type
	}
`;
