/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;
	if (node.internal.type === 'Mdx') {
		const value = createFilePath({ node, getNode });
		createNodeField({
			// Individual MDX node
			node,
			// Name of the field you are adding
			name: 'slug',
			// Generated value based on filepath with "blog" prefix
			value: `/blog${value}`
		});
	}
};
