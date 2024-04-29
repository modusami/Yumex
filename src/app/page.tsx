import Forum from "@/components/ui/Forum";
export default function Page() {
	return (
		<main className="min-h-screen">
			<div className="w-full md:w-[100%] lg:w-[100%] min-h-screen mx-auto flex-col flex">
				{/* <ForumSkeleton/> */}
				<Forum />
			</div>
		</main>
	);
}
