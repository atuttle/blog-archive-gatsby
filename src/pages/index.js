import React from "react"
import { graphql, Link } from 'gatsby';

import { FullSizeImage, FloatyImage, Clearfix } from '../components/ImageStyles';
import { ThemedButton } from '../components/ButtonStyles';
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="JavaScript and Skydiving" keywords={[`javascript`, `react.js`, `skydiving`]} />
		<FloatyImage img={data.adam} alt="Adam Tuttle" />
		<FloatyImage img={data.skydiving} alt="A photo of Adam Tuttle somewhere between an airplane and the ground" />
		<FloatyImage img={data.pizza} alt="Fig, prosciutto, & goat cheese pizza" />
		<FloatyImage img={data.balloon_jump} alt="Me jumping out of a hot air balloon" />
		<FloatyImage img={data.bender} alt="My Boston Terrier, Bender" />
		<h1 style={{ margin: 0 }}>Adam Tuttle</h1>
		<h2>[object Object]</h2>
		<p>
			I'm a coder, systems thinker, speaker, humane interface designer — and fortunately enough,
			temporary collection of stardust in the approximate shape of a human being — living in the
			suburbs of Philadelphia, PA.
		</p>
		<ul style={{ listStyle: `none`, margin: 0, marginBottom: `1.45rem` }}>
			<li>
				<ThemedButton href="/blog">Read my blog</ThemedButton>
			</li>
		</ul>
		<p>
			You can connect with me on <a href="https://github.com/atuttle">GitHub</a>,
			on <a href="https://twitter.com/adamtuttle">Twitter</a>,
			on Instagram (separate accounts for <a href="https://www.instagram.com/sawdustcoveredgeek/">woodworking</a>,
			and <a href="https://www.instagram.com/adamtuttle/">skydiving</a>),
			on <a href="https://www.youtube.com/user/fusiongrokker">YouTube</a>,
			and on <a href="https://www.goodreads.com/author/show/7514385.Adam_Tuttle">GoodReads</a>.
		</p>
		<p>
			I joined <a href="https://alumniq.com">AlumnIQ</a> as employee #2 in 2012, where I have
			become the CTO and Lead developer, shaping and building technology that aims to
			revolutionize Higher Education Advancement and Alumni Relations. In my time here, I've
			helped grow the company from two people to four.
			(<a href="https://docs.google.com/document/d/10qX9nLQnvM97GJcJ7q5t3ofLIAoEgoaEHdE-nG8q-ME/edit?usp=sharing">We're hiring!</a>)
		</p>
		<p>
			I work from home on a geographically distributed, 100% remote team, which means that on
			most days I get the privilege of making breakfast and lunch for my two children. I have
			a strange addiction to collecting board games even though we don't play them as much as
			I'd like. I make some pretty killer pizza from scratch, if I do say so myself.
		</p>
		<p>
			I'm also a skydiving bum trapped in a working man's body.
		</p>
		<p>
			In more recent years I've found that I love woodworking, so when I'm not coding or falling
			out of various aricraft you'll most often find me in my basement turning wood into things.
		</p>
		<p>
			I love traveling, whether it be for work, to attend or speak at an event, or vacationing.
			I've lived on all three Continental American coasts,
			and <a href="https://www.google.com/maps/@38.6903073,-27.9664891,8.98z">The Azores</a>.
			My dog is named after a character from Futurama. I've called 911 in two different emergency
			situations. One of them was for my brother. I swam a mile, camped in deep snow, hiked some
			parts of the Appalachain Trail and different parts of Redwood National and State Parks.
			I've never been to the Grand Canyon. I remember attending 6 different schools up to and
			including high school, but it might have been more. I can tie a bowline knot with one
			hand. My favorite author is Bill Bryson, but my favorite book genre is science fiction.
		</p>
		<p>
			Speaking of books, I wrote and self-published a book: <a href="https://restassuredbook.com/">REST Assured</a>
			&mdash; and I did it over the course of two weeks, after work. If you use or build APIs,
			it would probably interest you.
		</p>
		<p>
			Want to chat? <a href="https://twitter.com/adamtuttle">Tweet at me</a>. 🐦
		</p>
		<FullSizeImage img={data.stone_beach} alt="A stone covered beach in Ireland" />
	</Layout>
);

export default IndexPage;

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
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
		balloon_jump: file(relativePath: { eq: "about/balloon_jump.jpg" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
				}
			}
		}
		bender: file(relativePath: { eq: "about/bender.jpg" }) {
			childImageSharp {
				fixed(width: 300) {
					...GatsbyImageSharpFixed
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
