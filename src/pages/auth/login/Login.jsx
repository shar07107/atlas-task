import classNames from "classnames";
import Input from "../../../components/common/input/Input";
import { EyeIcon } from "../../../icons_images/CustomImgIcon";
import Button from "../../../components/common/button/Button";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function Login({ switchFormLink = true, changeFormFunc }) {
	let navigate = useNavigate();
	return (
		<>
			<div className="w-full space-y-10">
				<div className="flex flex-col justify-center items-center space-y-1">
					<h6
						className={classNames(
							"uppercase text-color-secondary font-medium",
						)}>
						Welcome Back
					</h6>
					<h1 className="text-lg font-semibold text-white">
						Log into your account
					</h1>
				</div>
				<div>
					<form className="space-y-2">
						<div className="space-y-4">
							<div className="space-y-1">
								<div className="flex">
									<label htmlFor="email" className={classNames("text-label-1")}>
										Email or Username
									</label>
								</div>
								<div>
									<Input
										className={``}
										placeholder="Enter your email or username"
										name="email"
										type="email"
										id="email"
									/>
								</div>
							</div>
							<div className="space-y-1">
								<div className="flex justify-between items-center">
									<label
										htmlFor="password"
										className={classNames("text-label-1")}>
										Password
									</label>
									<div>
										<span
											type="button"
											className={classNames(
												"text-label-1 text-xs hover:text-color-primary ease-in duration-100 cursor-pointer",
											)}>
											Forgot password?
										</span>
									</div>
								</div>
								<div>
									<Input
										className={``}
										placeholder="Enter your password"
										name="password"
										type="password"
										id="password"
										iconRender={
											<>
												<Button type="button">
													<EyeIcon
														className={
															"text-color-secondary hover:text-color-primary cursor-pointer"
														}
													/>
												</Button>
											</>
										}
									/>
								</div>
							</div>
							<div>
								<Button
									onClick={() => {
										navigate("/home");
									}}
									variant={"primary"}
									className="w-full"
									type="button">
									Continue
								</Button>
							</div>
						</div>
						<div>
							<span className="text-color-secondary">
								Not registered yet? &nbsp;
								{switchFormLink ? (
									<>
										<Link
											to={"/signup"}
											type="button"
											className="text-color-primary">
											Register →
										</Link>
									</>
								) : (
									<>
										<Button
											onClick={changeFormFunc}
											type="button"
											className="text-color-primary">
											Register →
										</Button>
									</>
								)}
							</span>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

Login.propTypes = {
	switchFormLink: PropTypes.bool,
	changeFormFunc: PropTypes.any,
};
