"use client";

import Search from "./Search";
import Link from "next/link";
import {
	PlusCircleIconSymbol,
	HomeIconSymbol,
	ArrowRightEndOnRectangleIconSymbol,
} from "./symbols";
import { ProfileDropDown } from "./ProfileDropdown";
import { supabase } from "../../lib/server";
import { useState } from "react";
import { phoneIconWH, navLargeWidth, navMediumWidth } from "../constants/sizes";
import { useAuth } from "../context/AuthProvider";
import LoginModal from "./LoginModal";

export default function Nav() {
	const { session } = useAuth();
	const [showModal, setShowModal] = useState(false);

	const handleSignOut = async (e: any) => {
		const { error } = await supabase.auth.signOut();
	};

	return (
		<nav className={"fixed top-0 left-0 h-screen w-64 bg-white shadow-md"}>
			<div className="text-center py-6 font-bold text-2xl">
				<Link href={"/"}>Yumex</Link>
			</div>
			<div className="flex-1">
				{showModal && <LoginModal setShowModal={setShowModal} />}
				<ul className="w-full flex flex-col justify-around p-4">
					<li className="flex items-center">
						<Link
							href="/"
							className={"flex-1 md:flex items-center gap-2 cursor-pointer"}
						>
							<HomeIconSymbol styles={phoneIconWH} />
							<span className="lg:block hidden">Home</span>
						</Link>
					</li>
					<li className="flex items-center">
						<Link
							href="/create"
							className={"flex-1 md:flex items-center gap-2 cursor-pointer"}
						>
							<PlusCircleIconSymbol styles={phoneIconWH} />
							<span className="hidden lg:block">Create Post</span>
						</Link>
					</li>
					<li className="flex items-center md:w-[40%]">
						<Search placeholder="Search..." />
					</li>
					{session ? (
						<>
							<li className="flex items-center">
								{session && <ProfileDropDown handleSignOut={handleSignOut} />}
							</li>
						</>
					) : (
						<>
							<li className="md:flex items-center cursor-pointer">
								<button
									onClick={(e) => setShowModal(true)}
									className="border p-3 flex gap-2 justify-center items-center rounded-full"
								>
									<ArrowRightEndOnRectangleIconSymbol styles={phoneIconWH} />
									<span className="lg:block">Log in</span>
								</button>
							</li>
						</>
					)}
				</ul>
			</div>
		</nav>
	);
}
