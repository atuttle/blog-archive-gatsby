import React from "react"
import { graphql, Link } from 'gatsby';
import Img from "gatsby-image"

import Layout from "../components/layout";
import SEO from "../components/seo";

const FullSizeImage = ({ img }) => (
	<div style={{
		width: `125%`,
		left: `50%`,
		transform: `translateX(-50%)`,
		position: `relative`,
		display: `block`,
		marginBottom: `25px`
	}}>
		<Img fluid={img.childImageSharp.fluid} style={{ borderRadius: `8px` }} />
	</div>
);

const IndexPage = ({ data }) => {
	console.log(data);
	return (
	<Layout>
		<SEO title="JavaScript and Skydiving" keywords={[`javascript`, `react.js`, `skydiving`]} />
		<div style={{width: `300px`, float: `right`, marginLeft: `15px` }}>
			<Img fixed={data.adam.childImageSharp.fixed} style={{ borderRadius: `8px` }} />
		</div>
		<div style={{width: `300px`, float: `right`, clear: `right`, marginLeft: `15px` }}>
			<Img fixed={data.skydiving.childImageSharp.fixed} style={{ borderRadius: `8px` }} />
		</div>
		<h1 style={{ margin: 0 }}>Adam Tuttle</h1>
		<h2>Human Extraordinaire</h2>
		<ul>
			<li><Link to="/blog">Blog</Link></li>
		</ul>
		<p>
			I'm a coder, systems thinker, speaker, human interface designer — and fortunately enough,
			temporary collection of stardust in the approximate shape of a human being — living in the
			suburbs of the suburbs (that's not a typo) of Philadelphia, PA.
		</p>
		<p>
			You can connect with me on GitHub, on Twitter, on YouTube, and on GoodReads.
		</p>
		<p>
			I joined AlumnIQ as employee #2 in 2012, where I have become the CTO and Lead developer,
			shaping and building technology that aims to revolutionize Higher Education Advancement
			and Alumni Relations. In my time here, I've helped grow the company from two people to
			three. (I hope to be able to update that with a more impressive number as time goes on.)
		</p>
		<p>
			I work from home on a geographically distributed, 100% remote team, which means that on
			most days I get the privilege of making breakfast and lunch for my two children. I have
			a strange addiction to collecting board games even though we don't play them as much as
			I'd like. I make some pretty killer pizza from scratch, if I do say so myself.
		</p>
		<FullSizeImage img={data.pizza} />
		<p>
			I'm also a skydiving bum trapped in a working man's body.
		</p>
		<FullSizeImage img={data.balloon_jump} />
		<p>
			I love traveling, whether it be for work, to attend or speak at an event, or vacationing.
			I've lived on all three Continental American coasts, and [The Azores][azores]. My dog is
			named after a character from Futurama. I've called 911 in emergency situations twice in
			my life. One of them was for my brother. I swam a mile, camped in deep snow, hiked some
			parts of the Appalachain Trail and different parts of Redwood National and State Parks.
			I've never been to the Grand Canyon. I remember attending 6 different schools up to and
			including high school, but it might have been more. I can tie a bowline knot with one
			hand. My favorite author is Bill Bryson, but paradoxically my favorite book genre is
			science fiction.
		</p>
		<p>
			Speaking of books, I wrote and self-published [a book about designing REST APIs][restassured]
			&mdash; and I did it over the course of two weeks, after work. If you use or build APIs,
			it would probably interest you. You can read the first chapter for free, and if you decide
			not to buy it we can still be friends.
		</p>
		<p>
			Want to chat? [Email me][email]. Or ask on my AMA ([Ask Me Anything][ama]), if it's something
			others might be interested to read. I am also available to hire on an ad-hoc basis [for
			mentoring on coding and other topics][mentor].
		</p>
		<FullSizeImage img={data.stone_beach} />
	</Layout>
);
	}

export default IndexPage

export const pageQuery = graphql`
	query {
		adam: file(relativePath: { eq: "about/adam-tuttle.jpg" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
		skydiving: file(relativePath: { eq: "about/adam-tuttle-skydiving.jpg" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
		pizza: file(relativePath: { eq: "about/pizza.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		balloon_jump: file(relativePath: { eq: "about/balloon_jump.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		stone_beach: file(relativePath: { eq: "about/stone_beach.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
