import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';


export default function BlogSidebar({ searchTerm, setSearchTerm ,setSelectedCategory, posts, categories })  {
	// log all the passed props
	console.log({ searchTerm, setSearchTerm ,setSelectedCategory, posts, categories });


	return (
		<>
			<div className="blog-sidebar-wrapper fw500">
				<div className="single-sidebar-wid search-box-widgets">
				<form action="#">
					<input 
						type="text" 
						placeholder="Type to search..." 
						value={searchTerm} 
						onChange={(e) => setSearchTerm(e.target.value)} 
					/>
					<button type="submit">
						<AiOutlineSearch />
					</button>
				</form>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Blog Categories</h5>
					</div>
					<div className="widget_categories">
					<ul>
						<li>
							<a onClick={() => setSelectedCategory("")}>All</a>
						</li>
						{categories.map((category, index) => (
							<li key={index}>
							<a onClick={() => setSelectedCategory(category)}>{category}</a>
						  </li>
						))}
					</ul>


					</div>
				</div>
				<div className="single-sidebar-wid">
					<div className="wid-title">
						<h5>Recent Posts</h5>
					</div>
					<div className="recent-posts">
							{posts.slice(0, 5).map((post) =>(
								<div className="single-post-item" key={post.id}>
									<Link href="/blog-details/[blogId]" as={`/blog-details/${post.id}`}>
										<a>{post.title}</a>
									</Link>
									<span>{post.date}</span>
								</div>
							))
								}

					</div>
				</div>
			</div>

			{/* <div className="newsletter-subscribe-widgets text-white">
				<div className="wid-title">
					<h5>Join Us!</h5>
				</div>
				<p>Subscribe our newsletter and stay up to date about the company</p>
				<div className="newsletter-subscribe">
					<form action="#">
						<input type="email" placeholder="Enter your email" />
						<button type="submit" className="submit-btn">
							Subscribe Now
						</button>
					</form>
				</div>
			</div> */}
		</>
	);
}
