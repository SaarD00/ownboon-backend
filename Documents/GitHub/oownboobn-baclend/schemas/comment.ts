import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'string',
    }),
    defineField({
        name: 'username',
        title: 'Username',
        type: 'string',
      }),
   
      
    defineField({
        name: 'profileImg',
        title: 'profileImg',
        type: 'string',
      }),
    defineField({
        name: 'blog',
        title: 'Blog',
        type: 'reference',
        to: {
            type: "post"
        }
      }),

      
  ],
})