import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../../components/layout';

const PostBlock = styled.div`
	margin: 10px 0;
`;

const PostDate = styled.div`
	font-weight: normal;
	color: #a0a0a0;
	display: inline-block;
	width: 150px;
	text-align: right;
	padding-right: 10px;

	@media (max-width: 768px) {
		display: none;
	}
`;

function BlogIndex({ data }) {
	const { edges: posts } = data.allMdx;

	let postYears = [];
	const organizedPosts = posts.reduce((org, post) => {
		let { date, title } = post.node.frontmatter;
		const postYear = date === null ? '🤷‍♂️' : parseInt(date.split(' ')[2], 10);
		if (!postYears.includes(postYear)) {
			postYears.push(postYear);
		}
		if (!(postYear in org)) {
			org[postYear] = [];
		}
		org[postYear].push({
			title,
			date,
			id: post.node.id,
			slug: post.node.fields.slug
		});
		return org;
	}, {});

	return (
		<Layout>
			{postYears.map(year => (
				<section key={`year-${year}`}>
					<h2 style={{ marginTop: `20px` }}>{year}</h2>
					{organizedPosts[year].map(post => {
						return (
							<PostBlock key={post.id}>
								<PostDate>{post.date}</PostDate>
								<Link to={post.slug}>
									<strong>{post.title}</strong>
								</Link>
							</PostBlock>
						);
					})}
				</section>
			))}
		</Layout>
	);
}

export default BlogIndex;

export const pageQuery = graphql`
	query blogIndex {
		allMdx(sort: { fields: frontmatter___date, order: DESC }) {
			edges {
				node {
					id
					excerpt
					fields {
						slug
					}
					frontmatter {
						title
						date(formatString: "MMM D, YYYY")
					}
				}
			}
		}
	}
`;
