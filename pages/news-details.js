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
