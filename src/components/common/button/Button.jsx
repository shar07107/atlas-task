import classNames from "classnames";
import PropTypes from "prop-types";

export default function Button({ ...props }) {
	return (
		<button
			className={classNames(
				props?.variant === "primary"
					? "relative flex justify-center items-center gap-1 bg-color-primaryColor1 hover:bg-color-primaryColor2 duration-200 ease-in py-1.5 px-2.5 rounded-[4px] text-white hover:shadow-xs text-base hover:shadow-slate-200 disabled:opacity-80 disabled:text-opacity-70 hover:disabled:bg-color-primaryColor2 cursor-pointer mb-0"
					: props?.variant === "secondary"
					? ""
					: "",
				props?.className,
			)}
			style={props?.style}
			disabled={props?.disabled}
			type={props?.type}
			onClick={props.onClick}
			onBlur={props.onBlur}
			onTouchStart={props.onTouchStart}
			onTouchMove={props.onTouchMove}
			onFocus={props.onFocus}>
			{props?.children}
		</button>
	);
}

Button.propTypes = {
	variant: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.string,
	children: PropTypes.any,
	type: PropTypes.string,
	disabled: PropTypes.bool,
	onClick: PropTypes.func,
	onBlur: PropTypes.func,
	onTouchStart: PropTypes.func,
	onTouchMove: PropTypes.func,
	onFocus: PropTypes.func,
};
