import classNames from "classnames";
import PropTypes from "prop-types";
export default function Image({ ...props }) {
	return (
		<img
			src={props?.src}
			alt={props?.alt ? props?.alt : "portalImg"}
			style={props?.style}
			loading="lazy"
			className={classNames(props?.className)}
		/>
	);
}
Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.string,
};
