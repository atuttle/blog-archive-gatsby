import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';

import moment from 'moment';

function BlogIndex({ data }) {
	const { edges: posts } = data.allMdx

	let postYears = [];
	const organizedPosts = posts.reduce((org, post) => {
		const { date, title } = post.node.frontmatter;
		const postYear = parseInt( moment(date).format('YYYY'), 10);
		if (!postYears.includes(postYear)){
			postYears.push(postYear);
		}
		if (!(postYear in org)){
			org[postYear] = [];
		}
		org[postYear].push({ title, date, id: post.node.id, slug: post.node.fields.slug });
		return org;
	}, {});

	postYears.sort((L,R) => L < R ? -1 : 1).reverse();

	console.log(organizedPosts);

	return (
		<Layout>
			{postYears.map(year => (
				<section key={`year-${year}`}>
					<h1 style={{ marginTop: `20px` }}>{year}</h1>
					{organizedPosts[year].map(post => {
						return (<div key={post.id}>
							<div className="postDate">{moment(post.date).format(`YYYY-MM-DD`)}</div>
							<Link to={post.slug}>{post.title}</Link>
						</div>);
					})}
				</section>
			))}
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query blogIndex {
		allMdx {
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
