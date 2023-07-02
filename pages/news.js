import Head from "next/head";
import Blog from "../components/Blog/Blog";
import PageBanner from "../components/Common/PageBanner";

export default function News() {
	return (
		<>
			<Head>
				<title>News Page</title>
			</Head>
			<PageBanner
				title="Our Blogs"
				content="An up to date feed full of Knowledge and Information."
			/>
			<Blog />
		</>
	);
}
