import { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
	const { pathname } = useLocation();
	const onTop = () => {
		// window.scroll(0, 0);
		window.scrollTo({ top: 0, behavior: "smooth" });
		// var access = document.getElementById('topShow');
		// access.scrollIntoView({ behavior: 'smooth' }, true);
	};
	useEffect(() => {
		setTimeout(() => onTop(), 0);
		// animateScroll.scrollToTop();
	}, [pathname]);
	return children || null;
}

ScrollToTop.propTypes = {
	children: PropTypes.any,
};
