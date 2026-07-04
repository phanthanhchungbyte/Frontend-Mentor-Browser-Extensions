import "@features/filter/FilterBar.css";
import { ListBodyContext } from "context/ListBodyContext.ts";
import { useContext } from "react";

type FilterButtonProps = {
	btnText: string;
	state: boolean;
};

export default function FilterButton({ btnText, state }: FilterButtonProps) {
	// Color styling
	let active = state ? "active" : null;
	const { handleSetFilter } = useContext(ListBodyContext) as ListBodyContext;

	return (
		<button
			className={`filter__button ${active}`}
			onClick={() => handleSetFilter(btnText)}
		>
			<p>{btnText}</p>
		</button>
	);
}
