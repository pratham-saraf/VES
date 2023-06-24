import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_API;
const notionDatabaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: notionSecret });


export default async function handler(req, res) {

  try {

    console.log("Fetching data from Notion API...", notionDatabaseId)
    const query = await notion.databases.query({
      database_id: notionDatabaseId,
      filter: {
        property: "Status",
        select: {
          equals: "Published",
        },
      },
    });

    res.status(200).json(query.results);
  } catch (error) {
    console.error("Error in server-side code:", error);
    res.status(500).json({ message: "Error fetching data from Notion API" });
  }
}
