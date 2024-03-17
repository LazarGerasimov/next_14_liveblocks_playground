
import { Validator, v } from 'convex/values';
import { defineSchema, defineTable } from 'convex/server';

const string_validator = String;

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    orgId: v.string(),
    authorId: v.string(),
    authorName: v.optional(v.string()),
    imageUrl: v.string(),
  })
    .index("by_org", ["orgId"])
    .searchIndex("search_title", {
      searchField: "title",
      filterFields: ["orgId"]
    })
})