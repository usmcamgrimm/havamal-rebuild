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
      type: 'text',
    }
  ]
}