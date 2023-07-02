import SingleBlogPost from "../Blog/SingleBlogPost";
import { useEffect, useState } from "react";

export default function BlogContent() {

	const [blogData, setBlogData] = useState([]);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch("/api/posts");
				const data = await response.json();
				console.log(data);
				const formattedData = data.map((post) => ({
					id: post.id,
					title: post.properties.Name.title[0].plain_text,
					author: post.properties.Author.rich_text[0].plain_text,
					content: post.properties.Content.rich_text[0].plain_text,
					date: new Date(post.properties.Date.date.start).toLocaleDateString(),
					imageUrl: post.properties.Image.files[0].file.url,
					link: post.url,
					category: post.properties.Tags.multi_select[0].name,
				}));

				setBlogData(formattedData);;
			} catch (error) {
				console.error("Error fetching data from Notion API:", error);
			}
		}

		fetchData();
	}, []);

	return (
		<section className="news-wrapper section-padding fix">
			<div className="container">
				<div className="col-lg-8 col-xl-6 offset-xl-3 col-12 offset-lg-2 text-center">
					<div className="block-contents">
						<div className="section-title wow fadeInUp" data-wow-duration="1.2s">
							<h2>Browse our blogs to know more</h2>
						</div>
					</div>
				</div>

				<div className="row">
					{blogData.slice(0, 3).map((blog) => (
						<div key={blog.id} className="col-md-6 col-xl-4 col-12">
							<SingleBlogPost post={blog} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
