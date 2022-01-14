/**
 * @type {import("@prismicio/helpers").LinkResolverFunction}
 */
exports.linkResolver = function linkResolver(doc) {
	switch (doc.type) {
		case "page": {
			if (doc.uid === "home") {
				return "/";
			} else {
				return `/${doc.uid}/`;
			}
		}

		default: {
			return "/";
		}
	}
};
