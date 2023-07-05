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
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [posts, setPosts] = useState([]);
    console.log("blog", blog);

    // export default function BlogSidebar({ <BlogSidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} posts={posts} categories={uniqueCategories} tags={uniqueTags} />})  {

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(`/api/fetchpostbyid?postID=${blog}`);

                const postDetails = response.data;
                setPostDetails(postDetails);
                // console.log("postDetails", postDetails)
                // console.log("+++++++++++++++++")
                const res = await axios.get(`/api/posts`);
                const data = await res.data
                // console.log("API Response Data:", data);
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
                const uniqueCategories = allCategories.filter((category, index, self) => self.indexOf(category) === index);
                // add All category
                // uniqueCategories.unshift("All");
                setCategories(uniqueCategories);
                // console.log("Categories State:", categories);
                setPosts(formattedData);


            } catch (error) {
                console.error("Error fetching post details:", error);
            }
        };

        if (blog) {
            console.log("blog", blog);
            fetchPostDetails();

        }
    }, [blog]);


    // if (!postDetails) {
    //     return <p>Loading...</p>;
    // }
    console.log("=====================================")
    console.log("postDetails", postDetails);
    console.log("categories", categories);
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
            <BlogDetails postDetails={postDetails} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setSelectedCategory={setSelectedCategory} posts={posts} categories={categories} />
            {/* Render the blog post details using the postDetails */}
        </div>
    );
}
