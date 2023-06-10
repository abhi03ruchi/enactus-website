import React, { useEffect } from 'react';
import $ from 'jquery'
function MyComponent() {
	useEffect(() => {
		$(document).ready(function () {

			$(".counting").each(function () {
				var $this = $(this),
					countTo = $this.attr("data-count");

				$({ countNum: $this.text() }).animate(
					{
						countNum: countTo
					},

					{
						duration: 3000,
						easing: "linear",
						step: function () {
							$this.text(Math.floor(this.countNum));
						},
						complete: function () {
							$this.text(this.countNum);
							//alert('finished');
						}
					}
				);
			});
		});
	}, []);

	return (
		<div>
			<section id="counter-stats" class="wow fadeInRight" data-wow-duration="1.4s">
				<div class="containers">
					<div class="row">
						<div class="col-lg-3 stats">
							<i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
							<div class="counting" data-count="6">0</div>
							<h5>PROJECTS</h5>
						</div>

						<div class="col-lg-3 stats">
						<i class="fa-solid fa-award"></i>							
						<div class="counting" data-count="55">0</div>
							<h5>CAMPUS PROGRAMS </h5>
						</div>

						<div class="col-lg-3 stats">
							<i class="fa-solid fa-users" aria-hidden="true"></i>
							<div class="counting" data-count="60">0</div>
							<h5>MEMBERS </h5>
						</div>

						<div class="col-lg-3 stats">
							<i class="fa-solid fa-hands-holding-child" aria-hidden="true"></i>
							<div class="counting" data-count="6900">0</div>
							<h5>LIVES IMPACTED</h5>
						</div>

					</div>

				</div>


			</section>
		</div>
	);
}

export default MyComponent;
