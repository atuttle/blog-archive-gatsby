import React from 'react';

const CKSubscribe = function({ position = 'inline' }) {
	const formStyle = {
		backgroundColor: 'rgb(249, 250, 251)',
		borderRadius: '4px',
		marginLeft: 'auto',
		marginRight: 'auto',
		maxWidth: '400px'
	};
	if (position === 'left') {
		formStyle.float = 'left';
	}
	if (position === 'right') {
		formStyle.float = 'right';
	}
	return (
		<>
			<script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
			<form
				action="https://app.convertkit.com/forms/1637849/subscriptions"
				style={formStyle}
				class="seva-form formkit-form"
				method="post"
				data-sv-form="1637849"
				data-uid="02c5dc9bec"
				data-format="inline"
				data-version="5"
				data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
				min-width="400 500 600 700 800"
			>
				<div style={{ opacity: 0.2 }} class="formkit-background"></div>
				<div data-style="minimal">
					<div
						class="formkit-header"
						style={{
							color: 'rgb(77, 77, 77)',
							fontSize: '27px',
							fontWeight: 700
						}}
						data-element="header"
					>
						<h1>Join the Newsletter</h1>
					</div>
					<div
						class="formkit-subheader"
						style={{ color: 'rgb(104, 104, 104)', fontSize: '18px' }}
						data-element="subheader"
					>
						<p>
							Subscribers get a behind-the-scenes look at upcoming premium
							content, and special discounts at launch.
						</p>
					</div>
					<ul
						class="formkit-alert formkit-alert-error"
						data-element="errors"
						data-group="alert"
					></ul>
					<div
						data-element="fields"
						data-stacked="true"
						class="seva-fields formkit-fields"
					>
						<div class="formkit-field">
							<input
								class="formkit-input"
								aria-label="First Name"
								style={{
									color: 'rgb(0, 0, 0)',
									borderColor: 'rgb(227, 227, 227)',
									borderRadius: '4px',
									fontWeight: 400
								}}
								name="fields[first_name]"
								placeholder="First Name"
								type="text"
							/>
						</div>
						<div class="formkit-field">
							<input
								class="formkit-input"
								name="email_address"
								style={{
									color: 'rgb(0, 0, 0)',
									borderColor: 'rgb(227, 227, 227)',
									borderRadius: '4px',
									fontWeight: 400
								}}
								aria-label="Email Address"
								placeholder="Email Address"
								required=""
								type="email"
							/>
						</div>
						<button
							data-element="submit"
							class="formkit-submit formkit-submit"
							style={{
								color: 'rgb(255, 255, 255)',
								backgroundColor: 'rgb(22, 119, 190)',
								borderRadius: '4px',
								fontWeight: 400
							}}
						>
							<div class="formkit-spinner">
								<div></div>
								<div></div>
								<div></div>
							</div>
							<span>Subscribe</span>
						</button>
					</div>
					<div
						class="formkit-guarantee"
						style={{
							color: 'rgb(77, 77, 77)',
							fontSize: '13px',
							fontWeight: 400
						}}
						data-element="guarantee"
					>
						I won't send you spam or sell your email. Unsubscribe at any time.
					</div>
					{/* <div class="formkit-powered-by-convertkit-container">
						<a
							href="https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"
							data-element="powered-by"
							class="formkit-powered-by-convertkit"
							data-variant="dark"
							target="_blank"
							rel="noopener noreferrer"
						>
							Built with ConvertKit
						</a>
					</div> */}
				</div>
			</form>
		</>
	);
};

export default CKSubscribe;
