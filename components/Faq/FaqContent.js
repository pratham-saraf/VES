import Accordion from "../Accordion/Accordion";

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
	},
];

export default function FaqContent() {
	const halfLength = Math.ceil(faqsData.length / 2);
	const firstHalf = faqsData.slice(0, halfLength);
	const secondHalf = faqsData.slice(halfLength);
	return (
		<section className="faq-ask-wrapper section-padding">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents fw500">
						<div className="section-title wow fadeInUp" data-wow-duration="1s">
							<h2>If you want to know anything, ask us</h2>
						</div>
					</div>
				</div>


				{/* map half faq in first cols and half in another */}

				

				<div className="row faq-ask">
					<div className="col-lg-6 col-12">
						<div className="faq-accordion">
							<Accordion content={firstHalf} />
						</div>
					</div>
					<div className="col-lg-6 col-12">
						<div className="faq-accordion">
							<Accordion content={secondHalf} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
