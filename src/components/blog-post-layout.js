import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import { format, addHours } from 'date-fns';
import { DiscussionEmbed } from 'disqus-react';
import sha256 from 'sha-256-js';
import Layout from './layout';

const BlogPostLayout = ({ children, pageContext }) => {
	const { title, date } = pageContext.frontmatter;
	let { commentsPostId } = pageContext.frontmatter;
	if (commentsPostId === undefined) {
		commentsPostId = sha256(title);
	}
	const disqusShortname = 'adam-tuttle-codes';
	const disqusConfig = {
		identifier: commentsPostId,
		title: title
	};
	return (
		<Layout>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<article>
				<header style={{ marginBottom: `20px` }}>
					<h1>
						<Link to="/blog">Blog</Link> / {title}
					</h1>
					<time
						style={{
							display: `inline-block`,
							padding: `6px 10px`,
							fontSize: `0.8em`
						}}
					>
						<span
							style={{
								fontSize: `2.3em`,
								display: `inline-block`,
								position: `relative`,
								top: `0.15em`
							}}
						>
							👨‍💻
						</span>
						{` `}By Adam Tuttle on {format(date, `MMM DD, YYYY`)}
					</time>
				</header>
				{children}
			</article>
			<section id="comments">
				<DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
			</section>
		</Layout>
	);
};

export default BlogPostLayout;
