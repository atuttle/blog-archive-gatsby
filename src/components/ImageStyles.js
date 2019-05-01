import React from "react"
import Img from "gatsby-image";
import styled, { css } from "styled-components";

const FloatyImgContainer = styled.div`
	${props => `
		clear: ${props.float};
		float: ${props.float};
		width: ${props.width};
	`}
	margin-left: 15px;

	@media (max-width: 709px){
		margin: 0;
		float: initial;
		clear: none;
		width: 100%;
		max-width: 300px;
		/* hide if collapse=true */
		${props => css`
			${props.collapse ? `display: none;` : ``}
		`};

		& .gatsby-image-wrapper {
			width: 100% !important;
		}
	}
`;

const Clearfix = ({ direction = `both` }) => <div style={{ clear: direction }} />;

const FullSizeImage = ({ img, alt = `` }) => (
	<div style={{
		width: `125%`,
		left: `50%`,
		transform: `translateX(-50%)`,
		position: `relative`,
		display: `block`,
		marginBottom: `25px`,
		clear: `both`,
		overflow: `none`,
	}}>
		<Img fluid={img.childImageSharp.fluid} style={{ borderRadius: `8px` }} alt={alt} />
	</div>
);

const FloatyImage = ({ img, float = `right`, width = `300px`, alt = ``, collapse = false }) => (
	<FloatyImgContainer float={float} width={width} collapse={collapse}>
		<Img fixed={img.childImageSharp.fixed} style={{ borderRadius: `8px`, width, height: width }} alt={alt} />
	</FloatyImgContainer>
);

export { FullSizeImage, FloatyImage, Clearfix };
