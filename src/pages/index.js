import React from 'react';
import { graphql, Link } from 'gatsby';

import { FullSizeImage, FloatyImage } from '../components/ImageStyles';
import { ThemedButton } from '../components/ButtonStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
	const posts = data.allMdx.edges.map(e => e.node);
	return (
		<Layout>
			<SEO
				title="Adam Tuttle: JavaScript, Skydiving, Woodworking -- the new Renaissance Man"
				keywords={[`JavaScript`, `Skydiving`, `Woodworking`]}
			/>
			<FloatyImage width={`250px`} img={data.adam} alt="Adam Tuttle" />
			<FloatyImage
				width={`250px`}
				collapse
				img={data.skydiving}
				alt="A photo of Adam Tuttle somewhere between an airplane and the ground"
			/>
			<FloatyImage
				width={`250px`}
				collapse
				img={data.balloon_jump}
				alt="Me jumping out of a hot air balloon"
			/>
			<FloatyImage
				width={`250px`}
				collapse
				img={data.bender}
				alt="My Boston Terrier, Bender"
			/>
			<h1 style={{ margin: 0 }}>Adam Tuttle</h1>
			<h2>[object Object]</h2>
			<p>
				I write code, jump out of airplanes, make stuff from wood, and{' '}
				<a href="/blog">write about all of that stuff here</a>. I'm CTO for{' '}
				<a href="https://www.alumniq.com">AlumnIQ</a>, but we're a pretty small
				company so I wear many hats: coder, humane interface designer, and
				technical debt herder. I used to blog more often, but that was before I
				fell in love with both woodworking and skydiving. I identify as
				Philadelphian, but I live in the suburbs.
			</p>
			<h3>Most Recent Blog Posts</h3>
			<ul style={{ listStyle: `none`, margin: 0, marginBottom: `1.45rem` }}>
				{posts.map(post => {
					return (
						<li key={post.id}>
							<Link to={post.fields.slug} style={{ fontWeight: `bold` }}>
								{post.frontmatter.title}
								{post.frontmatter.title.length === 0 && '(no title yet)'}
							</Link>
							<div
								style={{ fontSize: `0.9em`, color: `#666`, marginTop: `-7px` }}
							>
								{post.frontmatter.date === null && '(no date yet)'}
								{post.frontmatter.date}
							</div>
						</li>
					);
				})}
				<li>
					<ThemedButton href="/blog">All blog posts</ThemedButton>
				</li>
			</ul>
			<p>
				Socially I'm most active on{' '}
				<a href="https://twitter.com/adamtuttle">Twitter</a>. I use{' '}
				<a href="https://github.com/atuttle">GitHub</a> daily, but mostly for
				work these days. Still, I can be found putzing around in open source as
				needed and as my interests motivate. I have two Instagram accounts, for{' '}
				<a href="https://www.instagram.com/alteregowoodworks/">woodworking</a>,
				and <a href="https://www.instagram.com/adamtuttle/">skydiving</a>). I
				also have two YouTube channels, for{' '}
				<a href="https://www.youtube.com/user/fusiongrokker">skydiving</a>, and{' '}
				<a href="https://www.youtube.com/channel/UCOeYypSs8QoqX6AgA5eqGEg">
					code nerdistry
				</a>
				. When time allows, I also like to read, so you can see what I've been
				reading over on{' '}
				<a href="https://www.goodreads.com/author/show/7514385.Adam_Tuttle">
					GoodReads
				</a>
				. I am a devout believer in the oxford comma.
			</p>
			<p>
				I joined <a href="https://alumniq.com">AlumnIQ</a> as employee #2 in
				2012, where I have become the CTO and Lead developer, shaping and
				building technology that aims to revolutionize Higher Education
				Advancement, and Alumni Relations. In my time here, I've helped grow the
				company from two people to five.
			</p>
			<p>
				I work from home on a geographically distributed, 100% remote team,
				which means that on most days I get the privilege of making breakfast
				and lunch for my two children. I have a strange addiction to collecting
				board games even though we don't play them as much as I'd like.
			</p>
			<p>
				In more recent years I've found that I love woodworking, so when I'm not
				coding or falling out of various aricraft you'll most often find me in
				my basement turning wood into things.
			</p>
			<p>
				I love traveling, whether it be for work, to attend or speak at an
				event, or vacationing. I've lived on all three Continental American
				coasts, and{' '}
				<a href="https://www.google.com/maps/@38.6903073,-27.9664891,8.98z">
					The Azores
				</a>
				. My dog is named after a character from Futurama. I've called 911 in
				two different emergency situations. One of them was for my brother. I
				swam a mile, camped in deep snow, hiked some parts of the Appalachain
				Trail and different parts of Redwood National and State Parks. I've
				never been to the Grand Canyon. I remember attending 6 different schools
				up to and including high school, but it might have been more. I can tie
				a bowline knot with one hand. My favorite author is Bill Bryson, but my
				favorite book genre is hard science fiction. Space operas are{' '}
				<em>my jam</em>.
			</p>
			<p>
				Speaking of books, I wrote and self-published a book:{' '}
				<a href="https://restassuredbook.com/">REST Assured</a>
				&mdash; and I did it over the course of two weeks, after work. If you
				use or build APIs, it might interest you.
			</p>
			<p>
				Want to chat? <a href="https://twitter.com/adamtuttle">Tweet at me</a>.
				🐦
			</p>
			<FullSizeImage
				img={data.stone_beach}
				alt="A stone covered beach in Ireland"
			/>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query homepage {
		allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
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
		adam: file(relativePath: { eq: "about/adam-tuttle-removebg.png" }) {
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
