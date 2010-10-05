Modernizr.addTest('textshadow', function(){ 
	return document.createElement('div').style.textShadow === '';
});

$(document).ready(function() {
				
	$("#pagination").hide();
	
	var postOptions = {
		morePosts: true,
		skip: 1,
		count: 2
	}
	
	$(window).scroll(function () {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			if (postOptions.morePosts) {
				postOptions.morePosts = false;
				$.get(
					"script/blogposts.js",
					function (data) {
						data = JSON.parse(data);
						for (var i = 0; i < data.length; i++) {
							var newPost = $("#postTemplate").render(data[i])
							newPost.hide()
									.appendTo("#page > section")
									.fadeIn("slow");
						}

						postOptions.skip += postOptions.count;
					}
				);
			}
		}
	});
	
});