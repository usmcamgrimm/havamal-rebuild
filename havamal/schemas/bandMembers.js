export default {
  name: 'bandMembers',
  title: 'Band Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Hymn-Weaver',
      type: 'string',
      description: 'What is name of the Hymn Weaver?',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A little bit about the Hymn Weaver',
    }
  ]
}