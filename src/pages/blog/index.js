import React from 'react';
import { graphql, Link } from 'gatsby';
import { format } from 'date-fns';
import styled from 'styled-components';

import Layout from '../../components/layout';

const PostBlock = styled.div`
	margin: 10px 0;
`;

const PostDate = styled.div`
	font-weight: bold;
	color: #a0a0a0;

	@media(max-width: 768px) {
		display: none;
	}
`;

function BlogIndex({ data }) {
	const { edges: posts } = data.allMdx

	let postYears = [];
	const organizedPosts = posts.reduce((org, post) => {
		let { date, title } = post.node.frontmatter;
		const postYear = parseInt( format(date, 'YYYY'), 10);
		if (!postYears.includes(postYear)){
			postYears.push(postYear);
		}
		if (!(postYear in org)){
			org[postYear] = [];
		}
		org[postYear].push({ title, date, id: post.node.id, slug: post.node.fields.slug });
		return org;
	}, {});

	return (
		<Layout>
			{postYears.map(year => (
				<section key={`year-${year}`}>
					<h2 style={{ marginTop: `20px` }}>{year}</h2>
					{organizedPosts[year].map(post => {
						return (<PostBlock key={post.id}>
							<PostDate>{format(post.date, `MMMM D`)}</PostDate>
							<Link to={post.slug}>{post.title}</Link>
						</PostBlock>);
					})}
				</section>
			))}
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query blogIndex {
		allMdx(sort: {fields: frontmatter___date, order: DESC}) {
			edges {
				node {
					id
					excerpt
					fields {
						slug
					}
					frontmatter {
						title
						date
					}
				}
			}
		}
	}
`
