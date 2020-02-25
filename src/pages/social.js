import React from 'react';
import { graphql, Link } from 'gatsby';

import { FullSizeImage, FloatyImage } from '../components/ImageStyles';
import { ThemedButton } from '../components/ButtonStyles';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({ data }) => {
	return (
		<Layout title="Adam Tuttle">
			<SEO
				title="On Becoming CTO - A Behind the Curtain Look at My Journey from Software Engineer to CTO"
				keywords={[`Engineering`, `Personal Growth`, `Management`]}
			/>
			<FloatyImage width={`250px`} img={data.adam} alt="Adam Tuttle" />
			<FloatyImage
				width={`250px`}
				collapse
				img={data.skydiving}
				alt="A photo of Adam Tuttle somewhere between an airplane and the ground"
			/>
			<p>
				Of all social media, I'm most active on Twitter,{' '}
				<a href="https://twitter.com/adamtuttle" target="_blank">
					@AdamTuttle
				</a>
				. Follow me, and let's have a conversation.
			</p>
			<p>
				When it comes to Instagram, I have two accounts. One for random personal
				stuff and skydiving photos{' '}
				<a href="https://instagram.com/adamtuttle" target="_blank">
					@AdamTuttle
				</a>
				, and one for woodworking stuff{' '}
				<a href="https://instagram.com/alteregowoodworks" target="_blank">
					@AlterEgoWoodworks
				</a>
				. I realize that may be a little weird, but if I do ever turn the
				woodworking thing into a{' '}
				<a href="/blog/2020/time-is-all-you-have/">side business</a>, I'm sure
				that I'll be glad I split them.
			</p>
			<p>
				I don't have a solid plan yet, but I'm really interested in streaming
				(video games?) with my kids so I've started a Twitch channel, too:{' '}
				<a href="https://www.twitch.tv/wethreegame">@WeThreeGame</a>. Follow and
				let me know if you'd like to see that, because it's sure to motivate
				some action!
			</p>
			<p>
				I also blog about tech &amp; transitioning into management{' '}
				<a href="https://adamtuttle.codes" target="_blank">
					here on adamtuttle.codes
				</a>
				.
			</p>
			<p>
				I'm too young for Tumblr and too old for SnapChat or TikTok. It may not
				be a popular approach, but I like to keep my Facebook account limited to
				family, and friends that I've met in meatspace. Sorry!
			</p>
			<p>
				Wow, if you've read this far then you must <em>really</em> not hate me!
				In that case, it may also interest you to know that I've written and
				self-published a book. It's called{' '}
				<a href="https://restassuredbook.com/">REST Assured</a>, and it's all
				about REST API's: From a no-nonsense practical approach to creating
				them, to a clear but concise explanation of how it works under the hood.
			</p>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query socialpage {
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
	}
`;
