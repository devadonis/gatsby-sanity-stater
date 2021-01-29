import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import BlockContent from '@sanity/block-content-to-react'

const IndexPage = () => {
	const data = useStaticQuery(blogQuery)

	const posts = data.allSanityBlogPost.nodes.map(post => (
		<div key={post.id} style={{backgroundColor: '#ddd', padding: '20px', margin: '20px 0'}}>
			<h2>{ post.title }</h2>
			<small>{ post.date }</small>
			<p>{ post.description }</p>
			<div style={{backgroundColor: '#eee', padding: '20px'}}>
				<BlockContent blocks={post._rawContent} />
			</div>
		</div>
	))

	return (
		<Layout>
			<SEO title="Blog" />
			<h1>My blog posts</h1>
			{ posts }
			{/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link> <br />
			<Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
		</Layout>
	)
}

const blogQuery = graphql`
	query {
		allSanityBlogPost(sort: {fields: date, order: DESC}) {
			nodes {
				id
				title
				date(formatString: "MMMM DD YY")
				description
				_rawContent(resolveReferences: {maxDepth: 10})
			}
		}
	}
`

export default IndexPage
