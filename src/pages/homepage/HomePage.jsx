import classNames from "classnames";
import PostHeader from "../../components/posts/PostHeader";
import PostCompo from "./PostCompo";

export default function HomePage() {
	return (
		<>
			<div className={classNames(" flex justify-center p-3.5 lg:p-6 lg:py-16")}>
				<div className={classNames("relative w-full max-w-[700px] space-y-6")}>
					<div className="space-y-9">
						<PostHeader
							title={"Hello Jane"}
							description={
								"How are you doing today? Would you like to share something with the community 🤗"
							}
						/>
						<PostCompo />
					</div>
				</div>
			</div>
		</>
	);
}
