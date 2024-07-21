import { useState } from "react";
import AuthModal from "../../pages/auth/AuthModal";
import Button from "../common/button/Button";
import Input from "../common/input/Input";

export default function AddPostCard() {
	let [isAuthModalOpen, setIsAuthModalOpen] = useState(true);
	return (
		<>
			<div className="w-full border border-level-2 bg-color-base-2 rounded-lg p-6">
				<div className="w-full space-y-3">
					<div>
						<span className="text-label-1 text-lg">Create post</span>
					</div>
					<div className="relative bg-color-base-1 overflow-hidden rounded-lg">
						<div className="w-[40px] h-[40px] bg-color-base-2 rounded-full absolute top-1/2 -translate-y-1/2 left-3.5 md:left-4 z-[1] flex justify-center items-center">
							💬
						</div>
						<Input
							className={`p-2.5 h-[60px] pl-[65px] bg-transparent border-0 text-base font-normal rounded-lg`}
							placeholder="How are you feeling today?"
							name="postTitle"
							type="text"
							id="postTitle"
						/>
					</div>
					<div className="w-full flex justify-end">
						<Button
							onClick={() => {
								setIsAuthModalOpen(true);
							}}
							variant={"primary"}
							className="px-3.5 min-w-[100px]"
							type="button">
							Post
						</Button>
					</div>
				</div>
			</div>
			<AuthModal
				isAuthModalOpen={isAuthModalOpen}
				setIsAuthModalOpen={setIsAuthModalOpen}
			/>
		</>
	);
}
