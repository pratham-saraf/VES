import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_API;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });

export default async function handler(req, res) {
    console.log("req.query", req.query)
    const { postID } = req.query;

    try {
        const post = await notion.pages.retrieve({ page_id: postID });
        console.log("Fetching data from Notion API...", post);
        res.status(200).json(post);
    } catch (error) {
        console.error("Error in server-side code:", error);
        res.status(500).json({ message: "Error fetching data from Notion API" });
    }
}
