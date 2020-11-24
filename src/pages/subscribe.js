import React from 'react';
import { graphql } from 'gatsby';

import { FloatyImage } from '../components/ImageStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';
import CKSubscribe from '../components/CKSubscribe';

const IndexPage = ({ data }) => {
	return (
		<Layout title="Adam Tuttle">
			<SEO
				title="Adam Tuttle: JavaScript, Skydiving, Woodworking -- the new Renaissance Man"
				keywords={[`JavaScript`, `Skydiving`, `Woodworking`]}
			/>
			<FloatyImage width={`250px`} img={data.adam} alt="Adam Tuttle" />
			<p>
				I don't send out emails often. Maybe 5-10 a year when I'm feeling
				talkative. But if you want in on that list, you've come to the right
				place.
			</p>
			<CKSubscribe />
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query subscribe {
		adam: file(relativePath: { eq: "about/adam-tuttle-removebg.png" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;
