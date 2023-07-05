import Head from "next/head";
import BlogDetails from "../components/Blog/BlogDetails";
import PageBanner from "../components/Common/PageBanner";
import axios from 'axios';

function NewsDetails({ postDetails }) {
    console.log("postDetails", postDetails);
    const title = postDetails.properties.title.title[0].plain_text;

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <PageBanner
                title={title}
                content="The CVI is created by computing a decentralized volatility index from cryptocurrency option prices together with analyzing the market."
            />
            <BlogDetails />
        </>
    );
}

export async function getServerSideProps(context) {
    const postID = context.query.post;
    console.log(postID);
    try {
        const response = await axios.get(`http://localhost:3000/api/fetchpostbyid?postID=${postID}`);
        const postDetails = response.data;
        const posts = await axios.get(`http://localhost:3000/api/posts`);
        const data = await posts.json();
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
        const allCategories = formattedData.map(post => post.category);

        // Filter out duplicates
        const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);

        return {
            props: {
                postDetails,
            },
        };
    } catch (error) {
        console.error('Error fetching post details:', error);
        return {
            notFound: true,
        };
    }
}

export default NewsDetails;
