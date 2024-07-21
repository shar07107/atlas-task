import { useState } from "react";
import Modal from "../../components/common/modal/Modal";
import Login from "./login/Login";
import SignUp from "./signup/Signup";
import PropTypes from "prop-types";

export default function AuthModal({ isAuthModalOpen, setIsAuthModalOpen }) {
	const [isAuthForm, setAuthForm] = useState("login");
	const changeAuthLogin = () => {
		setAuthForm("signup");
	};
	const changeAuthSignUp = () => {
		setAuthForm("login");
	};

	const closeAuthModalHandle = () => {
		setIsAuthModalOpen(false);
	};
	return (
		<>
			<Modal
				isOpen={isAuthModalOpen}
				setIsOpen={setIsAuthModalOpen}
				close={closeAuthModalHandle}
				maskClosable={false}>
				<div className="py-3.5">
					{isAuthForm === "login" && (
						<>
							<Login switchFormLink={false} changeFormFunc={changeAuthLogin} />
						</>
					)}
					{isAuthForm === "signup" && (
						<>
							<SignUp
								switchFormLink={false}
								changeFormFunc={changeAuthSignUp}
							/>
						</>
					)}
				</div>
			</Modal>
		</>
	);
}
AuthModal.propTypes = {
	isAuthModalOpen: PropTypes.any,
	setIsAuthModalOpen: PropTypes.any,
};
