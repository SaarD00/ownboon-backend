import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'notes',
  title: 'Notes',
  type: 'document',
  fields: [
    defineField({
      name: 'note',
      title: 'Note',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),

  ],

 
})