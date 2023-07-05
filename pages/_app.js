import Head from "next/head";
import "react-image-lightbox/style.css";
import "react-modal-video/css/modal-video.min.css";
import "slick-carousel/slick/slick.css";
import Layout from "../components/Layout/Layout";
import "../styles/animate.css";
import "../styles/bootstrap.min.css";
import "../styles/icons.css";
import "../styles/scss/style.scss";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/img/logo.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
				<Analytics />
			</Layout>
		</>
	);
}

export default MyApp;
