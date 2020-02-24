/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';

const ResponsiveContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 0px 1.0875rem 1.45rem;
	padding-top: 0;

	@media (max-width: 960px) {
		overflow: hidden;
	}
`;

const Layout = ({ title = '', children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Header
					siteTitle={title !== '' ? title : data.site.siteMetadata.title}
				/>
				<ResponsiveContainer>
					<main>{children}</main>
					<footer
						style={{
							padding: `10px 10px 50px`,
							textAlign: `center`,
							color: `#333`,
							borderTop: `1px solid #ccc`
						}}
					>
						Made with <a href="https://github.com">GitHub</a>,{` `}
						<a href="https://netlify.com/">Netlify</a>,{` `}
						<a href="https://gatsbyjs.org/">Gatsby</a>, and
						{` `}
						<a href="https://gatsby-mdx.netlify.com/">MDX</a>, by Adam Tuttle in
						Philadelphia 🏙️
					</footer>
				</ResponsiveContainer>
			</>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
