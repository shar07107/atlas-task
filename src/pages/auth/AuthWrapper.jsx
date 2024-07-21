import classNames from "classnames";
import PropTypes from "prop-types";
import { Logo } from "../../icons_images/CustomImgIcon";
export default function AuthWrapper({ children }) {
	return (
		<>
			<div
				className={classNames(
					"min-h-screen flex justify-center items-center p-3.5 lg:p-6",
				)}>
				<div className={classNames("relative w-full max-w-[460px] space-y-6")}>
					<div className="flex justify-center">
						<Logo size="40" />
					</div>
					<div className="w-full rounded-lg overflow-hidden bg-gradientBorder bg-color-base-2 p-[1px]">
						<div className="flex h-full w-full items-center justify-center bg-color-base-2 rounded-lg p-6 py-10">
							<div className="w-full">{children}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

AuthWrapper.propTypes = {
	children: PropTypes.element,
};
