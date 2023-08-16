import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'profileImage',
      title: 'profileImage',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'secret',
      title: 'Secret',
      type: 'string',
    }),
    defineField({
      name: 'verified',
      title: 'Verified',
      type: 'boolean',
    }),

    defineField({
      name: 'focus',
      title: 'Focus',
      type: 'string',
    }),
    defineField({
      name: 'leaderboard',
      title: 'leaderboard',
      type: 'number',
    }),
    defineField({
      name: 'categories',
      title: 'Cateogires',
      type: 'string',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'string',
    }),
    defineField({
      name: 'follow',
      title: 'Followed',
      type: "array",
      of: [{ type: "reference", to: { type: "user" } }],
    }),

  ],
})