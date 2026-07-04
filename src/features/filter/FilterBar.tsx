import "./FilterBar.css";
import { ListBodyContext } from "context/ListBodyContext.ts";
import { useContext } from "react";
import FilterButton from "@components/ui/FilterButton.tsx";

export default function FilterBar() {
	// Get the value from the context
	const { activeFilter } = useContext(ListBodyContext) as ListBodyContext;

	return (
		<>
			<div className="filter">
				<p className="filter__list_name">Extensions List</p>

				<div className="filter__button_list">
					{Object.entries(activeFilter).map(([name, activeState]) => {
						return (
							<FilterButton key={name} btnText={name} state={activeState} />
						);
					})}
				</div>
			</div>
		</>
	);
}
