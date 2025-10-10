"use client";

// this shit is NOT mine

import React, { useState, useRef, useEffect } from "react";

type DropdownOption = {
	label: string;
	value: string;
};

interface DropdownProps {
	options: DropdownOption[];
	placeholder?: string;
	onSelect: (value: string) => void;
	selected?: string;
	className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
	options,
	placeholder = "☰ Navigation",
	onSelect,
	selected,
	className = "",
}) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleSelect = (value: string) => {
		onSelect(value);
		setOpen(false);
	};

	const selectedLabel = options.find((opt) => opt.value === selected)?.label;

	return (
		<div ref={ref} className={`relative inline-block text-left ${className}`}>
			<button
				type="button"
				className="w-full px-4 py-2 rounded shadow-sm focus:outline-none focus:ring-2 flex justify-between items-center min-w-[120px]"
				onClick={() => setOpen((prev) => !prev)}
				aria-haspopup="listbox"
				aria-expanded={open}
			>
				<span>{selectedLabel || placeholder}</span>
				<svg
					className="w-4 h-4 ml-2 text-gray-500"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
				</svg>
			</button>
			{open && (
				<ul
					className="absolute z-10 mt-1 w-full bg-stone-100 border border-gray-200 rounded shadow-lg max-h-60 overflow-auto"
					role="listbox"
				>
					{options.map((option) => (
						<li
							key={option.value}
							className={`px-4 py-2 cursor-pointer hover:bg-stone-300 ${selected === option.value ? "bg-stone-300" : ""}`}
							onClick={() => handleSelect(option.value)}
							role="option"
							aria-selected={selected === option.value}
						>
							{option.label}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;