import Head from "next/head";
import Blog from "../components/Blog/Blog";
import PageBanner from "../components/Common/PageBanner";
import {loadPosts} from "../lib/load-posts";

export default function News({ posts }) {
	return (
		<>
			<Head>
				<title>News Page</title>
			</Head>
			<PageBanner
				title="Our Blogs"
				content="An up to date feed full of Knowledge and Information."
			/>
			<Blog posts={posts} />
		</>
	);
}

export async function getStaticProps() {

  const data = await loadPosts();
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

  return {
    props: {
      posts: formattedData,
    },
    revalidate: 86400, // Use ISR, pages are recreated in the background as traffic comes in
  };
}
