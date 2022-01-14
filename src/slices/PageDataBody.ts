import { SliceZoneComponents } from "@prismicio/react";

import type { PageDataBodyTextFragment } from "../types.generated";
import { PageDataBodyText } from "./PageDataBodyText";

export const components: SliceZoneComponents<PageDataBodyTextFragment> = {
	text: PageDataBodyText,
};
