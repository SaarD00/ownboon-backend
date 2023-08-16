import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'feedcomment',
  title: 'feedComment',
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
        name: 'feed',
        title: 'Feed',
        type: 'reference',
        to: {
            type: "videos"
        }
      }),

      
  ],
})