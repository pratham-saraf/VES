import Link from "next/link";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import Image from "next/image";

export default function SingleIsotope({ item: { title, image, category, link,toBeRemoved } }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{isOpen && <Lightbox mainSrc={"/img/portfolio/" + image} onCloseRequest={() => setIsOpen(false)} />}

			<div className="portfolio-item-card">
				<div className="d-block pointer" onClick={() => setIsOpen(true)}>
					<img src={`${image}`} alt={`${title}`} />
				</div>

				<div className="contents">
					<h5>
						<Link href={link} passHref>
							<a target="_blank" rel="noopener noreferrer">{title}</a>
						</Link>
					</h5>
					<span>{category}</span>
				</div>
			</div>
		</>
	);
}
