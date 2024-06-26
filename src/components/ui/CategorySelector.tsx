"use client";
import { food_categories } from "@/lib/model";
import { food_category_images } from "@/lib/model";
import { useState } from "react";
import Image from "next/image";
import "@/components/styles/categoryslider.css";

const CategorySelector: React.FC<{ setSelectedCategory: any }> = ({ setSelectedCategory }) => {
	const categories = Object.values(food_categories);
	const [activeCategory, setActiveCategory] = useState<any>("");

	const handleSelectedCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
		const foodType = e.currentTarget.dataset.foodType;
		setSelectedCategory((prevCategory: any) => (prevCategory === foodType ? "" : foodType));
		setActiveCategory((prevCategory: any) => (prevCategory === foodType ? "" : foodType));
	};

	return (
		<>
			<div className="overflow-x-auto scrollbar-hidden">
				<ul className="flex justify-between whitespace-nowrap gap-3">
					{categories.map((food_type, index) => {
						const isActive = activeCategory === food_type;
						return (
							<>
								<li
									className={`flex flex-col items-center justify-center flex-1 transition-all ease-in-out duration-200 ${
										isActive ? "font-bold scale-105" : ""
									}`}
								>
									<button
										onClick={handleSelectedCategory}
										data-food-type={food_type}
										className="flex items-center justify-center flex-col"
									>
										<Image
											src={
												food_category_images[
													food_type as keyof typeof food_category_images
												]
											}
											alt={food_type}
											width={20}
											height={20}
										/>
										<span className="capitalize text-[0.80rem] md:text-[1rem]">
											{food_type}
										</span>
									</button>
								</li>
							</>
						);
					})}
				</ul>
			</div>
		</>
	);
};

export default CategorySelector;
