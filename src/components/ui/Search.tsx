"use client";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { MagnifyingGlassIconSymbol } from "@/components/ui/symbols";

export default function Search({ placeholder }: { placeholder: string }) {
	const { searchQuery, setSearchQuery } = useContext(SearchContext);

	const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value);
	};

	return (
		<div className="relative w-full flex flex-shrink-0 mr-5">
			<label htmlFor="search" className="sr-only">
				Search
			</label>
			<input
				className="peer block w-full text-black rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
				placeholder={placeholder}
				value={searchQuery}
				onChange={handleSearchChange}
			/>
			<MagnifyingGlassIconSymbol styles="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
		</div>
	);
}
