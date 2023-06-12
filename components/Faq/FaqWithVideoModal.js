import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
export const faqsData = [
	{
		id: 1,
		question: "What solar solutions does Vibrant Energy Solutions offer?",
		answer: "We offer a wide range of solar solutions for residential, commercial, and industrial clients, including solar panel installation, maintenance, and monitoring services.",
	},
	{
		id: 2,
		question: "How do I get a free solar consultation?",
		answer: "To get a free solar consultation, simply contact our team of experts through our website or by phone. We'll discuss your project requirements and provide a customized quote tailored to your needs.",
	},
	{
		id: 3,
		question: "What is the process for solar panel installation?",
		answer: "Our experienced technicians handle the entire solar panel installation process, from site assessment and design to permitting, installation, and system commissioning. We ensure a hassle-free experience throughout the project.",
	},
	{
		id: 4,
		question: "What are the benefits of installing solar panels?",
		answer: "Installing solar panels can help reduce your energy bills, decrease your carbon footprint, and increase the value of your property. Solar energy is a renewable and sustainable source of power that can help you save money and contribute to a greener environment.",
	},
	{
		id: 5,
		question: "How much maintenance do solar panels require?",
		answer: "Solar panels generally require minimal maintenance. It's important to keep them clean and free of debris, as dirt and dust can reduce their efficiency. You should also monitor their performance and schedule a professional inspection if you notice any issues.",
	},
	{
		id: 6,
		question: "How long do solar panels typically last?",
		answer: "Solar panels can last for 25 to 30 years or more, depending on the quality of the panels and the environmental conditions they are exposed to. Most solar panel manufacturers offer warranties that cover the panels for at least 25 years, ensuring their performance and durability.",
	}
];

export default function FaqWithVideoModal() {
	const [isOpen, setOpen] = useState(false);

	return (
		<section className="faq-video-block section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xl-6 pe-xl-5 col-12">
						<div
							className="faq-video-wrapper me-xl-4 d-flex justify-content-center align-items-center bg-cover bg-center"
							style={{ backgroundImage: "url(img/faq-video-bg.jpg)" }}
						>
							<div className="video-play-btn" onClick={() => setOpen(true)}>
								<BsFillPlayFill />
							</div>
							<div className="arrow-icon">
								<img src="img/icons/video-arrow.svg" alt="" />
							</div>

							<ModalVideo
								channel="youtube"
								autoplay
								isOpen={isOpen}
								videoId="CjIDwX_tnwo"
								onClose={() => setOpen(false)}
							/>
						</div>
					</div>
					<div className="col-xl-6 ps-xl-5 col-12 mt-xl-0 mt-5">
						<div className="block-contents ms-xl-4">
							<div className="section-title wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
								<h2>Got questions about solar solutions? Ask us!</h2>
							</div>
						</div>
						<div className="faq-accordion ms-xl-4 me-xl-4">
							<div className="accordion" id="mainaccordion">
								<Accordion content={faqsData} />
							</div>
						</div>
						<div
							className="faq-bottom ms-xl-4 mt-4 wow fadeInUp"
							data-wow-duration="1s"
							data-wow-delay=".9s"
						>
							<span>Still have questions?</span>
							<Link href="/contact">
								<a>Get in touch</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}