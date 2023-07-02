import { useEffect, useState } from "react";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";

export default function Blog() {
	const [blogData, setBlogData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

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
					tags: post.properties.Tags.multi_select,
					category: post.properties.Category.select.name,
					excerpt : post.properties.Excerpt.rich_text[0].text.content
				}));

				setBlogData(formattedData);;
			} catch (error) {
				console.error("Error fetching data from Notion API blog.js:", error);
			}
		}

		fetchData();
	}, []);

	let filteredPosts = blogData.filter(
		(post) =>
		  (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
		  (selectedCategory === "" || post.category === selectedCategory)
	  );
	

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost); // change from blogData to filteredPosts
	const totalPosts = filteredPosts.length; // change from blogData to filteredPosts
	
	console.log("filteredPosts");
	console.log(filteredPosts);

	const paginate = (pageNumber) => {
		if (pageNumber < 1) pageNumber = 1;
		else if (pageNumber > Math.ceil(totalPosts / postsPerPage)) pageNumber = Math.ceil(totalPosts / postsPerPage);
		
		setCurrentPage(pageNumber);
	  };

	  return (
		<div className="blog-grid-wrapper section-padding mtm-30">
		  <div className="container">
			<div className="row">
			  <div className="col-xl-8 col-12">
				<div className="row">
				  {currentPosts.map((post) => (
					<div key={post.id} className="col-md-6 col-12">
					  <SingleBlogPost post={post} />
					</div>
				  ))}
				</div>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={filteredPosts.length} // change from blogData to filteredPosts
					paginate={paginate}
					currentPage={currentPage}
				/>
			  </div>
			  <div className="col-xl-4 col-12">
			  <BlogSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} />
			  </div>
			</div>
		  </div>
		</div>
	  );
	}
