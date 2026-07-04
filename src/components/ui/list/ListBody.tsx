import { useExtensions } from "@components/ui/list/hooks/useExtensions.tsx";
import { ListBodyContext } from "context/ListBodyContext.ts";

export default function ListBody({
	children,
}: {
	children: React.ReactNode[];
}) {
	const {
		activeFilter,
		setActiveFilter,
		handleSetFilter,
		setCurExtensions,
		curExtensions,
	} = useExtensions();

	return (
		<>
			<ListBodyContext.Provider
				value={{
					activeFilter: activeFilter,
					setActiveFilter: setActiveFilter,
					handleSetFilter: handleSetFilter,
					extensions: curExtensions,
					setExtensions: setCurExtensions,
					theme: "dark",
				}}
			>
				{children}
			</ListBodyContext.Provider>
		</>
	);
}
