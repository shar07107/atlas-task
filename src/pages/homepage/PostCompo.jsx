import AddPostCard from "../../components/posts/AddPostCard";
import PostCardList from "../../components/posts/PostCardList";
import { postData } from "./PostDummyData";

export default function PostCompo() {
	return (
		<>
			<section className="space-y-6">
				<AddPostCard />
				<PostCardList data={postData} />
			</section>
		</>
	);
}
