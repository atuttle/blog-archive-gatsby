import React from 'react';
import styled from 'styled-components';

const VideoContainer = styled.div`
	position: relative;
	padding-bottom: 56.25%;
	padding-top: 30px;
	height: 0;
	overflow: hidden;
	margin-bottom: 1.45rem;

	& iframe, object, embed {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
`;

const FluidVideo = ({ id, title='' }) => (
	<VideoContainer>
		<iframe
			width="100%"
			src={`https://www.youtube.com/embed/${id}`}
			title={title}
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
	</VideoContainer>
);

export default FluidVideo;
