import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string'
    }),
    defineField({
      name: 'profileImage',
      title: 'profile Image',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'image',
      type: 'string',
   
    }),
    defineField({
      name: 'video',
      title: 'video',
      type: 'string',
   
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
     type: "string"
    }),

    defineField({
      name: 'desc',
      title: 'desc',
      type: 'string',
    }),
  ],

 
})