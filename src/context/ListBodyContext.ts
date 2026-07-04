import * as React from "react";
import { createContext, type SetStateAction } from "react";
import { extensions } from "@data/data.ts";

export type ListBodyContext = {
	activeFilter: {
		[attr: string]: boolean;
	};
	setActiveFilter: Function;
	handleSetFilter: Function;
	extensions: typeof extensions;
	setExtensions: React.Dispatch<SetStateAction<typeof extensions>>;
	theme: "dark" | "light";
};

export const ListBodyContext = createContext<ListBodyContext | null>(null);
