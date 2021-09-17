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
    // {
    //   name: 'newsItem',
    //   title: 'News Item',
    //   description: 'Newsworthy posts from Havamal for updates and such',
    //   type: 'text'
    // },
    {
      name: 'newsItem',
      title: 'News Block Content',
      type: 'array',
      of: [
        {
          title: 'News Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [{title: 'Bullet', value: 'bullet'}],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'}, 
              {title: 'Emphasis', value: 'em'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}
