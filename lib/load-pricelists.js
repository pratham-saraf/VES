// lib/load-pricelists.js
import { Client } from "@notionhq/client";

const notionSecret = process.env.NOTION_API;
const notionDatabaseId = process.env.NOTION_PRICELIST_DB_ID;

const notion = new Client({ auth: notionSecret });

export async function loadPricelists() {
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

    return query.results;
  } catch (error) {
    console.error("Error in server-side code:", error);
    return [];
  }
}
