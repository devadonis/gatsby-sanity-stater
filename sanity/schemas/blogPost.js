export default {
	name: 'blogPost',
	title: 'Bolg Post',
	type: 'document',
	fields: [
		// ...other fields...
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'date',
			title: 'Date',
			type: 'datetime'
		},
		{
			name: 'description',
			title: 'Description',
			type: 'string'
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block'
				},
				{
					type: 'image'
				}
			]
		},
		{
			name: 'sponsor',
			title: 'sponsor',
			type: 'sponsor'
		}
	]
}