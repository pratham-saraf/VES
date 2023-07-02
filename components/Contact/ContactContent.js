import { AiTwotonePhone } from "react-icons/ai";
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Map from "../GoogleMap/Map";
import ContactCard from "./ContactCard";
import Form from "./Form";

export default function ContactContent() {
	return (
		<section className="contact-us-wrapper section-padding">
			<div className="container">
				<div className="row text-center">
					<div className="col-md-6 col-xl-4">
					<div className={`single-contact-box box2`}>
							<div className="icon"><AiTwotonePhone /></div>
							<div className="contact-info">
								<span> <a href="tel:+919820860111">+91-9820860111 </a></span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4">
						<div className={`single-contact-box box2`}>
							<div className="icon"><FaEnvelope /></div>
							<div className="contact-info">
								<span> <a href="mailto:vibrantenergysolutions@gmail.com">vibrantenergysolutions@gmail.com </a></span>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-xl-4">
						<ContactCard
							icon={<FaMapMarkerAlt />}
							contentOne="115 , Manbhavan Nagar "
							ContentTwo="Indore , India"
							className="box3"
						/>
					</div>
				</div>

				<div className="row mt-4 mt-lg-5">
					<div className="col-lg-8 col-xl-6 offset-xl-3 offset-lg-2 text-center">
						<div className="block-contents">
							<div className="section-title mb-4">
								<h2 className="wow fadeInUp">Get in touch now!</h2>
								<p className="wow fadeInUp pt-15" data-wow-delay=".3s">
									Is there an inquiry or some feedback for us? Fill out the form to contact our team.
									We love to hear from you.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6 pe-lg-4 order-2 order-lg-1">
						<div className="google-map me-lg-4 wow fadeInUp">
							<Map />
						</div>
					</div>
					<div className="col-lg-6 pls-lg-4 wow fadeInUp order-1 order-lg-2">
						<Form />
					</div>
				</div>
			</div>
		</section>
	);
}
