import classNames from "classnames";
import PropTypes from "prop-types";
export default function Input({ ...props }) {
	return (
		<div className="relative">
			<input
				type={props?.type ? props?.type : "text"}
				id={props?.id}
				className={classNames(
					"bg-color-base-2 border-[1.5px] border-level-2 text-color-primary text-sm rounded-[4px] focus:ring-blue-2 focus:border-blue-2 focus:outline-none block w-full p-2.5 focus:shadow-none placeholder:text-color-secondary",
					// placeholder:text-[#7f8084]
					props?.className,
					props?.iconRender && "pr-8",
				)}
				placeholder={props?.placeholder}
				required={props?.required}
				pattern={props?.pattern}
				style={props?.style}
			/>
			{props?.iconRender && (
				<span className="flex absolute top-1/2 -translate-y-1/2 right-3">
					{props?.iconRender}
				</span>
			)}
		</div>
	);
}

Input.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.string,
	iconRender: PropTypes.element,
	placeholder: PropTypes.string || PropTypes.element,
	required: PropTypes.string,
	pattern: PropTypes.string,
};
