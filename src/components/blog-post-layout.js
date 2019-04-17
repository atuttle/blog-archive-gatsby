import React from 'react'
import Helmet from 'react-helmet'
import Layout from './layout'

import moment from 'moment'

const BlogPostLayout = ({ children, pageContext }) => {
	const { title, date } = pageContext.frontmatter;
	return (
		<Layout>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<article>
				<header style={{ marginBottom: `20px` }}>
					<h1>{title}</h1>
					<time style={{ backgroundColor: `#eee`, display: `block`, padding: `10px` }}>
						Posted: {moment(date).format(`YYYY-MM-DD`)}
					</time>
				</header>
				{children}
			</article>
		</Layout>
	);
};

export default BlogPostLayout;
