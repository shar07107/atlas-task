import PropTypes from "prop-types";
export default function PostHeader({ title, description }) {
	return (
		<>
			<section className="flex flex-col gap-3">
				<h1 className="text-2xl 2xl:text-3xl text-color-primary">{title}</h1>
				<p className="text-base text-color-secondary">{description}</p>
			</section>
		</>
	);
}
PostHeader.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
};
