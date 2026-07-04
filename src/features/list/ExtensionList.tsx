import "./ExtensionList.css";
import ExtensionCard from "@features/list/ExtensionCard.tsx";
import { filterExtension } from "@features/list/utils/FilterExtensions.ts";
import { ListBodyContext } from "context/ListBodyContext.ts";
import { useContext } from "react";

export default function ExtensionList() {
	// 	Get the extensions
	const { extensions, setExtensions, activeFilter } = useContext(
		ListBodyContext,
	) as ListBodyContext;

	const currentExtensions = filterExtension(extensions, activeFilter);

	return (
		<>
			<div className="extension-list">
				{currentExtensions.map((extension) => (
					<ExtensionCard
						key={extension.name}
						extensionObj={extension}
						setExtensions={setExtensions}
					/>
				))}
			</div>
		</>
	);
}
