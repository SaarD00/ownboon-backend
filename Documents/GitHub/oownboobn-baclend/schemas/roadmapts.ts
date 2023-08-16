import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'roadmap',
  title: 'roadmap',
  type: 'document',
  fields: [
      defineField({
        name: 'email',
        title: 'Email',
        type: 'string',
      }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'email',
        maxLength: 96,
      },
    }),
    
  ],

 
})