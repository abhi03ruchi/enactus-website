import React, { useEffect } from 'react';
import $ from 'jquery';

function MyComponent() {
  useEffect(() => {
    $(document).ready(function() {
      
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
				<i class="fa fa-code" aria-hidden="true"></i>
				<div class="counting" data-count="900000">0</div>
				<h5>Lines</h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-check" aria-hidden="true"></i>
				<div class="counting" data-count="280">0</div>
				<h5>Projects </h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-user" aria-hidden="true"></i>
				<div class="counting" data-count="75">0</div>
				<h5>Happy </h5>
			</div>

			<div class="col-lg-3 stats">
				<i class="fa fa-coffee" aria-hidden="true"></i>
				<div class="counting" data-count="999">0</div>
				<h5>coffee</h5>
			</div>

		</div>

	</div>


</section>
    </div>
  );
}

export default MyComponent;
