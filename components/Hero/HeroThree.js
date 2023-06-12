export default function HeroThree() {
	return (
		<section className="hero-welcome-wrapper hero-3 fw500">
			<div className="single-slide">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-xl-5 col-12 text-xl-start mt-5 mt-xl-0 text-center order-2 order-xl-1">
							<div className="hero-mobile">
								<img src="/img/home3/hero-img.png" alt="" />
							</div>
						</div>
						<div className="col-xl-7 ps-xl-5 text-center text-xl-start col-12 order-1 order-xl-2">
							<div className="hero-contents">
								<h1>Power Your Future with Solar</h1>
								<p>
								Welcome to vibrant energy solutions. We are committed to harnessing the power of the sun to provide clean and sustainable energy solutions for your home or business. With our expertise and cutting-edge technology, we make solar energy accessible and affordable.
								</p>
								<a className="app-download-btn">
									<img src="/img/apple.png" alt="" />
								</a>
								<a className="app-download-btn">
									<img src="/img/android.png" alt="" />
								</a>
								<div className="client-feedback-wrapper">
									<div className="client-faces">
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: "url(/img/user/1.png)" }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: "url(/img/user/2.png)" }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: "url(/img/user/3.png)" }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: "url(/img/user/4.png)" }}
										></div>
										<div
											className="single-face bg-cover"
											style={{ backgroundImage: "url(/img/user/5.png)" }}
										></div>
									</div>
									<h6>Satisfied global clients</h6>
									<div className="rating">
										<span className="icon-star"></span> 4.5 Global rating
									</div>
									<div className="hero-arrow">
										<img src="/img/home3/hero-arrow.png" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
