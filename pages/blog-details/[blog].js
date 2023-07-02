import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Head from "next/head";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetails from "../../components/Blog/BlogDetails";



export default function ReadBlog() {
    const router = useRouter();
    const { blog } = router.query;
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`/api/fetchpostbyid?postID=${blog}`);

                const postDetails = response.data;
                setPostDetails(postDetails);
                console.log("postDetails", postDetails)
            } catch (error) {
                console.error("Error fetching post details:", error);
            }
        };

        if (blog) {
            fetchPostDetails();

        }
    }, [blog]);


    // if (!postDetails) {
    //     return <p>Loading...</p>;
    // }
    const titleContent = postDetails?.properties.Name.title[0].plain_text;
    console.log(titleContent);


    return (
        <div>
            <Head>
                <title>{titleContent}</title>
                {/* <title>{postDetails?.properties.name.title.text.content}</title> */}
            </Head>
            <PageBanner
                title={titleContent}
                content={postDetails?.properties.Excerpt.rich_text[0].plain_text}
            />
            <BlogDetails postDetails={postDetails} />
            {/* Render the blog post details using the postDetails */}
        </div>
    );
}