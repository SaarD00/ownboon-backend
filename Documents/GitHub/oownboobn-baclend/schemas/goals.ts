import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'goals',
  title: 'Goals',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'progress',
      title: 'Progress',
      type: 'number',
    }),
    defineField({
      name: 'username',
      title: 'Username',
      type: 'string',
    }),
    defineField({
      name: 'completed',
      title: 'Completed',
      type: 'boolean',
    }),
    defineField({
      name: 'delete',
      title: 'Delete',
      type: 'boolean',
    }),
  ],

 
})