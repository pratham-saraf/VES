import StepAccordion from "../Accordion/StepAccordion";

const data = [
	{
		id: 1,
		title: "Learn about our solar solutions",
		body: "Discover the various solar solutions we provide for residential, commercial, and industrial clients",
	},
	{
		id: 2,
		title: "Get a free solar consultation",
		body: "Contact our experts for a free solar consultation and customized quote for your project",
	},
	{
		id: 3,
		title: "Experience seamless solar installation",
		body: "Our experienced technicians handle the entire installation process, ensuring a hassle-free experience",
	},
];
export default function ContentBlockTwo() {
	return (
		<section className="content-block fix faq-wrapper section-padding section-bg">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-6 col-xl-5 mt-5 mt-lg-0 order-2 order-lg-1">
						<div className="block-contents">
							<div className="section-title wow fadeInUp" data-wow-duration="1s">
								<h2>Unlock the power of solar with Vibrant Energy Solutions</h2>
							</div>
						</div>
						<div className="step-accordion">
							<StepAccordion content={data} />
						</div>
					</div>
					<div className="col-lg-6 col-xl-6 offset-xl-1 pe-xl-3 col-12 order-1 order-lg-2">
						<div
							className="block-img ms-xl-5 wow fadeInRight"
							data-wow-duration="1.2s"
							data-wow-delay=".3s"
						>
							<img src="img/home1/faq-img.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
