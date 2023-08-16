import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'messages',
  title: 'Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
        name: 'username',
        title: 'Username',
        type: 'string',
      }),
    defineField({
        name: 'socketId',
        title: 'socketId',
        type: 'string',
      }),
    defineField({
        name: 'pfp',
        title: 'pfp',
        type: 'string',
      }),
      
    defineField({
        name: 'time',
        title: 'time',
        type: 'string',
      }),
    defineField({
        name: 'day',
        title: 'day',
        type: 'string',
      }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'string',
      }),
    defineField({
        name: 'replyuser',
        title: 'Replying User',
        type: 'string',
      }),
    defineField({
        name: 'replymessage',
        title: 'Replying Message',
        type: 'string',
      }),

      
  ],
})