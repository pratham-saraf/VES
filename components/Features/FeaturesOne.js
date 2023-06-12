import { AiOutlineBarChart } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BiSun } from "react-icons/bi";

export default function FeaturesOne() {
	return (
		<section className="our-best-features-wrapper section-padding">
			<div className="container">
				<div className="col-xl-8 offset-xl-2 text-center">
					<div className="block-contents">
						<div className="section-title">
							<h2>The best Energy solutions you won't find anywhere else</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon1">
								<BiPhoneCall />
							</div>
							<h3>Solar Consultation</h3>
							<p>Expert guidance for your solar energy needs</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon2">
								<BiSun />
							</div>
							<h3>High-Quality Solar Panels</h3>
							<p>Providing the latest solar technology</p>
						</div>
					</div>
					<div className="col-lg-4 col-md-6 col-12">
						<div className="features-card-item style-1">
							<div className="icon icon3">
								<AiOutlineBarChart />
							</div>
							<h3>Monitoring & Maintenance</h3>
							<p>Optimizing performance and longevity</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
