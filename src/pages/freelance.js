import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import FluidYouTube from '../components/FluidYouTube';

const FreelancePage = () => (
	<Layout>
		<SEO title="Freelance Web Development by Adam Tuttle" />
		<h1>I am available for freelance web development</h1>
		<p>
			Here because of <a href="https://taffy.io">Taffy</a>? Taffy is an open
			source framework I created for authoring REST API's in CFML.
		</p>
		<p>
			Most of the freelance work that comes my way is people having trouble with
			their Taffy API who want to pay me to figure out the problem and fix it
			for them. This type of job is one that I am happy to consider. There is
			also a community of people who are usually very willing to help out with
			small problems (for free!) in the <strong>#taffy</strong> channel on the{' '}
			<a href="https://cfml-slack.herokuapp.com/">CFML Slack</a>. Sometimes I
			do, too.
		</p>
		<p>
			I also occasionally take on small projects that are entirely independent
			of Taffy. I am an expert CFML/ColdFusion developer, and a pretty decent
			Node.js/React developer, and those are the opportunities that will most
			interest me. If you've got a project you think will interest me, read on.
		</p>
		<p>
			I am happily employed at <a href="https://www.alumniq.com/">AlumnIQ</a>{' '}
			which both means that I am not seeking a new employer, and that I am not
			available at all from 8am&ndash;6pm in the US/Eastern time zone. All of my
			freelance work is done on a strictly nights &amp; weekends schedule, with
			availability in the 5-20 hours per week range depending on what else is
			going on (very seasonal).
		</p>
		<p>
			I have no interest in working for stock options, profit sharing, or
			"exposure."
		</p>
		<p>
			If all of the above sounds good to you, here's the last thing you need to
			know: My usual rate is USD $200 per hour. I am also willing to consider
			fixed-price projects if they're interesting and/or lucrative enough.
		</p>
		<p>
			Email your freelancing requests to me at{' '}
			<a href="mailto:adamtuttlecodes@gmail.com">adamtuttlecodes@gmail.com</a>.
			If you've ignored the information above, I probably won't reply.
		</p>
	</Layout>
);

export default FreelancePage;
