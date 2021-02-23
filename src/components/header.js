import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ResponsiveHeader = styled.header`
	background: #4f9e5a;
	margin-bottom: 1.45rem;
	padding: 1.45rem 1.0875rem;

	@media (max-width: 530px) {
		padding-top: 1rem;
		padding-bottom: 1rem;

		& h1 {
			font-size: 1.7rem;
		}
	}
	@media (max-width: 320px) {
		& h1 {
			font-size: 1.4rem;
		}
	}
`;

const Header = ({ siteTitle }) => (
	<ResponsiveHeader>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960
			}}
		>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: `white`,
						textDecoration: `none`
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</ResponsiveHeader>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
