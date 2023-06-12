import { useEffect, useState } from "react";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";

export default function Blog() {
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
  
	// console.log(blogData);
	return (
		<div className="blog-grid-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12">
						<div className="row">
							{blogData.map((post) => (
								<div key={post.id} className="col-md-6 col-12">
									<SingleBlogPost post={post} />
								</div>
							))}
						</div>
						<Pagination />
					</div>
					<div className="col-xl-4 col-12">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</div>
	);
}
