import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { ImFacebook, ImLinkedin, ImPinterest, ImTwitter } from "react-icons/im";
import BlogSidebar from "./BlogSidebar";
import React from "react";
import { useEffect, useState } from "react";


function renderRichText(content) {
	return content.map((element, index) => {
	  const { annotations, plain_text } = element;
	  let Component = 'p';
  
	  if (annotations.bold) {
		Component = 'strong';
	  } else if (annotations.italic) {
		Component = 'em';
	  } else if (annotations.strikethrough) {
		Component = 'del';
	  } else if (annotations.underline) {
		Component = 'u';
	  }
  
	  const style = {
		color: annotations.color !== 'default' ? annotations.color : 'inherit',
	  };
  
	  // Split the plain_text by newlines and render each line separately, adding a <br /> between each line
	  const lines = plain_text.split('\n').map((line, lineIndex) => <React.Fragment key={lineIndex}>
		{lineIndex > 0 && <br />}
		{line}
	  </React.Fragment>);
  
	  return <Component key={index} style={style}>{lines}</Component>;
	});
  }
  


export default function BlogDetails({ postDetails ,searchTerm, setSearchTerm ,setSelectedCategory, posts, categories}) {
	console.log({ postDetails, categories });
	const [href, setHref] = useState('');
	console.log("blogdets");
	console.log(postDetails , searchTerm, setSearchTerm ,setSelectedCategory, posts, categories);

	useEffect(() => {
	  setHref(window.location.href);
	}, []);


	return (
		<div className="blog-details-wrapper section-padding mtm-30">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-12 pe-xl-5">
					<div className="single-related-post">
										<a href="/news">
											<HiArrowLeft /> Back
										</a>
							</div>
						<div className="blog-content">
							<img src={postDetails?.properties.Image.files[0].file.url} alt="" />

							<div className="post-meta d-flex">
								<div className="post-cat">
									<Link href="/news">
										<a>{postDetails?.properties.Category.select.name}</a>
									</Link>
								</div>
								<div className="post-date">
									<span>{postDetails?.properties.Date.date.start}</span>
									{/* <span>{postDetails.url}</span> */}
								</div>
							</div>

							

							{postDetails && postDetails.properties.Content && renderRichText(postDetails.properties.Content.rich_text)}
						
						</div>


				<div className="share-post-wrapper d-flex justify-content-between align-items-center">
					<div className="share-title">
						<h5 className="mb-0">Share this post:</h5>
					</div>
					<div className="share-links">
						{/* https://www.facebook.com/sharer.php?u=https://lancerninja.com/unlocking-quick-data-insights-with-pandas-and-csv-agents-effortlessly/ */}
						<a href={`https://www.facebook.com/sharer.php?u=${encodeURIComponent(href)}`} target="_blank" rel="noopener noreferrer">
						<ImFacebook className="facebook" />
						</a>
						<a href={`https://twitter.com/share?url=${encodeURIComponent(href)}`} target="_blank" rel="noopener noreferrer">
						<ImTwitter className="twitter" />
						</a>
						<a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(href)}`} target="_blank" rel="noopener noreferrer">
						<ImLinkedin className="linkedin" />
						</a>
						<a href={`http://pinterest.com/pin/create/bookmarklet/?url=${encodeURIComponent(href)}`} target="_blank" rel="noopener noreferrer">
						<ImPinterest className="pinterest" />
						</a>
					</div>
					</div>

					</div>
					<div className="col-xl-4 col-12">
						|<BlogSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} posts={posts} categories={categories}/>
					</div>
				</div>
			</div>
		</div>
	);
}
