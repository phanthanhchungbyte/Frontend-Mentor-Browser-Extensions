import { extensions } from "@data/data.ts";
import { useState } from "react";

export function useExtensions() {
	const filters: Record<string, boolean> = {
		All: true,
		Active: false,
		Inactive: false,
	};

	const [activeFilter, setActiveFilter] =
		useState<Record<string, boolean>>(filters);

	function handleSetFilter(s: string) {
		const t = Object.fromEntries(
			Object.keys(filters).map((key) => [key, key === s]),
		);
		setActiveFilter(t);
	}

	const [curExtensions, setCurExtensions] = useState(extensions);

	return {
		activeFilter,
		setActiveFilter,
		handleSetFilter,
		curExtensions,
		setCurExtensions,
	};
}
