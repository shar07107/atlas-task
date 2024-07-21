import Image from "../image/Image";
import PropTypes from "prop-types";

export function AvatarIcon({
	avatar = "https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoE-raK0~jpV1hiebtklrbwwiwYAYERs-GibIr4INGRpUYw3OKbAIt1Em53BZO1wJelCpUP3BShIQt~pUWP50FJtIrUMBJMYpTTnarlg7h~Oxndlnpg7wWTWy8isQM92ZVHgY1kEpO3JY3Og7eIQH0eWX~nAHhaV7nzVu9T2ocGJPujd-VWQ6CqCpC5LSkaPXFkFJ4Ke1cup5Ni84st~z7-lCrate8O287~srliQT7ZyGLTBra0rF2Ejo6Aak2UtM2MfqQX36793R1MmwqiiVaqu6ivhCUXDVidLBnkIHprHFGS9xfhqlFPzUAvn2zKUODeB1fHgRwbM4FYqX5BRfQ__",
	size,
	alt,
}) {
	return (
		<div
			className="w-11 h-11 rounded-full overflow-hidden shrink-0"
			style={{ width: size, height: size }}>
			<Image src={avatar} alt={alt} />
		</div>
	);
}

AvatarIcon.propTypes = {
	avatar: PropTypes.string,
	size: PropTypes.string,
	alt: PropTypes.string,
};
