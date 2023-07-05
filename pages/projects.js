import dynamic from "next/dynamic";
import Head from "next/head";
import PageBanner from "../components/Common/PageBanner";
const IsotopeSection = dynamic(() => import("../components/Isotope/IsotopeSection"), {
	ssr: false,
});

export default function projects({projects, uniqueCategories}) {
	return (
		<>
			<Head>
				<title>Projects Page</title>
			</Head>
			<PageBanner
				title="Our Solar and Electrical Portfolio"
				content="Explore our range of solar and electrical solutions. We offer top-tier solar panel installation, lighting solutions, and more from a variety of leading brands. View our pricelist to find the best fit for your needs."
			/>
			<IsotopeSection projects={projects} uniqueCategories={uniqueCategories} />
		</>
	);
}

export async function getStaticProps() {
	try {
		const res = await fetch("http://localhost:3000/api/pricelists");
		const data = await res.json();

		const formattedData = data.map((post) => ({
			id: post.id,
			title: post.properties.Title.title[0].plain_text,
			link: post.properties.Link.url,
			// convert category to lowercase to make it easier to filter
			filterValue: post.properties.Category.select.name.toLowerCase(),
			category: post.properties.Category.select.name,
			image : post.properties.Image.files[0].file.url
	
		}));

		const categories = formattedData.map((item) => item.category);
		const uniqueCategories = [...new Set(categories)];

		return {
			props: {
				projects: formattedData,
				uniqueCategories: uniqueCategories,
			},
			revalidate: 86400,
		};
	} catch (error) {
		console.error("Error fetching data from Notion API:", error);
		return {
			props: {
				projects: [],
				uniqueCategories: [],
			},
		};
	}
}
