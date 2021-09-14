export default {
  name: 'newsPost',
  title: 'Havamal News',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'postDate',
      title: 'Date of Post',
      type: 'date'
    },
    {
      name: 'postAuthor',
      title: 'Authored By',
      type: 'string',
      description: 'Shows if post was written by Havamal or someone else',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'newsItem',
      title: 'News Item',
      description: 'Newsworthy posts from Havamal for updates and such',
      type: 'text'
      // type: 'array',
      // of: [{type: 'block'}]
    }
  ]
}
