import type { extensions } from "@data/data.ts";

export function filterExtension(
	baseExtensions: typeof extensions,
	activeFilter: Record<string, boolean>,
): typeof extensions {
	let isActive: string | undefined = undefined;
	Object.entries(activeFilter).forEach(([key, isSelected]) => {
		if (isSelected) isActive = key;
	});

	if (isActive === "Active") {
		return baseExtensions.filter((extension) => {
			return extension.isActive;
		});
	} else if (isActive === "Inactive") {
		return baseExtensions.filter((extension) => {
			return !extension.isActive;
		});
	} else {
		return baseExtensions;
	}
}
