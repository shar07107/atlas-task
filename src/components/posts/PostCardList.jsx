import classNames from "classnames";
import { ChatBubble, DotHorizontal } from "../../icons_images/CustomImgIcon";
import { AvatarIcon } from "../common/avatar/Avatar";
import Button from "../common/button/Button";
import PropTypes from "prop-types";

export default function PostCardList({ data }) {
	// console.log(data, "data");

	return (
		<>
			<div className="space-y-6">
				{data.map((postData, key) => {
					return <PostCard key={key} data={postData} />;
				})}
			</div>
		</>
	);
}
PostCardList.propTypes = {
	data: PropTypes.any,
};
function PostCard({ data }) {
	return (
		<>
			<div className="w-full border border-level-2 bg-color-base-2 rounded-lg p-6">
				<div className="w-full space-y-3.5">
					<div className="flex justify-between items-center gap-2">
						<div className="shrink-0">
							<div className="flex gap-2 items-center">
								<AvatarIcon
									avatar={data?.postUserImg}
									alt={data?.postUserName}
								/>
								<div>
									<h6 className="text-base text-color-primary/80 font-medium">
										{data?.postUserName}
									</h6>
									<div className="flex items-center gap-1 text-sm text-color-secondary leading-tight font-medium">
										<span className="flex">{data?.postdateTime}</span>
										{data?.edited ? (
											<>
												<span className="flex w-[4px] h-[4px] bg-color-secondary rounded-full shrink-0"></span>
												<span className="flex">Edited</span>
											</>
										) : null}
									</div>
								</div>
							</div>
						</div>
						<div className="shrink-0">
							<Button className={classNames("text-lg p-0.5")}>
								<DotHorizontal />
							</Button>
						</div>
					</div>
					<div>
						<div className="relative bg-color-base-1 overflow-hidden rounded-md p-3.5 md:p-4 flex gap-3">
							<div className="w-[40px] h-[40px] bg-color-base-2 rounded-full flex justify-center items-center shrink-0 relative leading-none">
								<span
									className={classNames(
										"absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
									)}>
									{data?.postMessageReaction}
								</span>
							</div>
							<div>
								<p className="text-color-secondary text-base">
									{data?.postMessage}
								</p>
							</div>
						</div>
					</div>
					<div className="flex items-center gap-2 text-color-secondary text-base">
						<span>
							<ChatBubble size={20} />
						</span>
						<span className="font-medium">{data?.commentCount} comments</span>
					</div>
				</div>
			</div>
		</>
	);
}

PostCard.propTypes = {
	data: PropTypes.any,
};
