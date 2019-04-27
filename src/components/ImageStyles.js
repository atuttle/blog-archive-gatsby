import React from "react"
import Img from "gatsby-image";

const Clearfix = ({ direction = `both` }) => <div style={{ clear: direction }} />;

const FullSizeImage = ({ img, alt = `` }) => (
	<div style={{
		width: `125%`,
		left: `50%`,
		transform: `translateX(-50%)`,
		position: `relative`,
		display: `block`,
		marginBottom: `25px`,
		clear: `both`
	}}>
		<Img fluid={img.childImageSharp.fluid} style={{ borderRadius: `8px` }} alt={alt} />
	</div>
);

const FloatyImage = ({ img, float = `right`, width = `300px`, alt = `` }) => (
	<div style={{ clear: float, float: float, width: width, marginLeft: `15px` }}>
		<Img fixed={img.childImageSharp.fixed} style={{ borderRadius: `8px` }} alt={alt} />
	</div>
);

export { FullSizeImage, FloatyImage, Clearfix };
