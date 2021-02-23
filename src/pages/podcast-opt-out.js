import React from 'react';

import { FloatyImage } from '../components/ImageStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
	return (
		<Layout title="Adam Tuttle">
			<SEO
				title="Adam Tuttle: JavaScript, Skydiving, Woodworking -- the new Renaissance Man"
				keywords={[`JavaScript`, `Skydiving`, `Woodworking`]}
			/>
			<FloatyImage width={`250px`} img={data.adam} alt="Adam Tuttle" />
			<h2>No problemo!</h2>
			<p>
				Thanks for letting me know you're not interested in the podcast. I'll
				stop emailing you about it, forever!
			</p>
			<p>
				That's it. No confirm button. No "are you sure?" I respect your inbox.
			</p>
		</Layout>
	);
};

export default IndexPage;
export const pageQuery = graphql`
	query podcastOptOut {
		adam: file(relativePath: { eq: "about/adam-tuttle-removebg.png" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;
