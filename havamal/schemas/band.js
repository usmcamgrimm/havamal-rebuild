export default {
  name: 'band',
  title: 'HymnWeavers',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 30,
      },
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'instrument',
      title: 'Instrument',
      type: 'string',
    },
    {
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'A short bio for each member of Havamal'
    },
  ],
}