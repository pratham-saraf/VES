import { useState } from "react";
import BlogSidebar from "./BlogSidebar";
import Pagination from "./Pagination";
import SingleBlogPost from "./SingleBlogPost";

export default function Blog({ posts }) {
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(4);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	
	const allCategories = posts.map(post => post.category);

	// Filter out duplicates
	const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);
	
	const allTags = posts.flatMap(post => post.tags.map(tag => tag.name));
	const uniqueTags = allTags.filter((tag, index, self) => self.indexOf(tag) === index);


	let filteredPosts = posts.filter(
		(post) =>
		  (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())) &&
		  (selectedCategory === "" || post.category === selectedCategory)
	  );
	
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
	const totalPosts = filteredPosts.length;
	
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
							totalPosts={filteredPosts.length}
							paginate={paginate}
							currentPage={currentPage}
						/>
					</div>
					<div className="col-xl-4 col-12">
					<BlogSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} posts={posts} categories={uniqueCategories} />
					</div>
				</div>
			</div>
		</div>
	);
}
