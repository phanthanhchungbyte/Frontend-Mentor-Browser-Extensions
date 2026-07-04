// @ts-nocheck
import "./ExtensionCard.css";
import type { extensions } from "@data/data.ts";
import type { SetStateAction } from "react";
import type { ArrayElement } from "types/utils.ts";
import * as React from "react";

type ExtensionCardProp = {
	extensionObj: (typeof extensions)[number];
	setExtensions: React.Dispatch<SetStateAction<typeof extensions>>;
};

export default function ExtensionCard({
																				extensionObj,
																				setExtensions
																			}: ExtensionCardProp) {
	function handleSwitch() {
		setExtensions((prev) => {
			const newExtensions = prev.map(
				(extension: ArrayElement<typeof extensions>) => {
					if (extension.name === extensionObj.name) {
						const reverseData = !extensionObj.isActive;
						return { ...extension, isActive: reverseData };
					} else {
						return extension;
					}
				}
			);
			return newExtensions;
		});
	}

	function handleRemoval(extensionObj: (typeof extensions)[number]) {
		setExtensions((prev) =>
			prev.filter((extension) => {
				return extension.name != extensionObj.name;
			})
		);
	}

	return (
		<>
			<div className="extension-card">
				<div className="extension-card__info">
					<img
						className="extension-card__image"
						src={extensionObj.logo}
						alt=""
					/>
					<div>
						<p className="extension-card__name">{extensionObj.name}</p>
						<p className="extension-card__description">
							{extensionObj.description}
						</p>
					</div>
				</div>

				<div className="extension-card__control">
					<button
						className="button extension-card__remove"
						onClick={() => handleRemoval(extensionObj)}
					>
						Remove
					</button>

					{extensionObj.isActive ? (
						<div className="switch-btn active" onClick={handleSwitch}>
							<div className="switch-btn__thumb"></div>
						</div>
					) : (
						<div className="switch-btn" onClick={handleSwitch}>
							<div className="switch-btn__thumb"></div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
