import { useState , useEffect } from "react";
import { XBlock, XMasonry } from "react-xmasonry";
import SingleIsotope from "./SingleIsotope";

export default function IsotopeSection() {
	const [projects, setProjects] = useState([]);
	const [selectedProject, setSelectedProject] = useState([]);
	const [uniqueCategories, setUniqueCategories] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch("/api/pricelists");
				const data = await res.json();
				// console.log(data);
				const formattedData = data.map((post) => ({
					id: post.id,
					title: post.properties.Title.title[0].plain_text,
					link: post.properties.Link.url,
					// convert category to lowercase to make it easier to filter
					filterValue: post.properties.Category.select.name.toLowerCase(),
					category: post.properties.Category.select.name,
					image : post.properties.Image.files[0].file.url
			
				}));

				// get unique categories

				const categories = formattedData.map((item) => item.category);
				const uniqueCategories = [...new Set(categories)];
				setUniqueCategories(uniqueCategories);
				console.log(formattedData)


				setProjects(formattedData);
				setSelectedProject(formattedData);
			}
			catch (error) {
				console.error("Error fetching data from Notion API:", error);
			}
		}

		fetchData();

	}, []);

	const handleFilterKeyChange = (key) => () => {
		console.log("key");
		console.log(key);
		const filteredItems = projects.filter((item) => {
			if (key === "*") return item;
			console.log(key === item.filterValue);

			if (key === item.filterValue) return item;
		});

		console.log("filteredItems");
		console.log(filteredItems);

		setSelectedProject(filteredItems);
	};

	return (
		<section className="portfolio-showcase-wrapper section-padding">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-12 text-center mb-4">
						<div className="portfolio-cat-filter">
							<button onClick={handleFilterKeyChange("*")} className="active">
								All Pricelists
							</button>
							{uniqueCategories.map((category) => (
								<button key={category} onClick={handleFilterKeyChange(category.toLowerCase())}>{category}</button>
							))}
							{/* <button onClick={handleFilterKeyChange("creative")}>Creative</button>
							<button onClick={handleFilterKeyChange("ui")}>UI/UX Design</button>
							<button onClick={handleFilterKeyChange("branding")}>Branding</button>
							<button onClick={handleFilterKeyChange("photography")}>Photography</button> */}
						</div>
					</div>
				</div>

				<div className="row ">
					<div className="col-sm-12">
						<XMasonry center={false} maxColumns={3} targetBlockWidth={400}>
							{selectedProject.map((item) => (
								<XBlock key={item.id}>
									<SingleIsotope item={item} />
								</XBlock>
							))}
						</XMasonry>
					</div>
				</div>
			</div>
		</section>
	);
}
