import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string'
    }),
    defineField({
      name: 'profileImage',
      title: 'image',
      type: 'string'
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'string',
   
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
     type: "string"
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'string',
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
    }),
  ],

 
})