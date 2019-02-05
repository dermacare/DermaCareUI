
function createMock(id, type, heading, content, url, rank, tags) {
	return { id, type, heading, content, url, rank, tags };
}

const lorem =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore' +
	'magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ' +
	'consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla ' +
	'pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id ' +
	'est laborum.';

let mocks = [];

for(var i = 0; i < 10; i++){
	mocks.push(createMock(i, i, 'Test', lorem, 'http://oregonstate.edu', 1, []));
}

let eventsMock = [

			{
				"_id":"5be74773bb5c7486688683f7",
				"title":"Nov 10, 2018: Poverty Action Week at Varies",
				"published_parsed":[2018,11,10,8,0,0,5,314,0],
				"link":"https://events.oregonstate.edu/event/poverty_action_week",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/762448/huge/a8c7764c7bbc425dff3827ff9d41d72ea3dde5fc.jpg"}],
				"tags":
					[{"term":"Civic Engagement",
						"scheme":null,
						"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683f8",
				"title":"Nov 10, 2018: 3v3 Basketball Tournament at Dixon Recreation Center",
				"geo_lat":"44.563137",
				"geo_long":"-123.278729",
				"published_parsed":[2018,11,10,19,0,0,5,314,0],
				"link":"https://events.oregonstate.edu/event/3v3_basketball_tournament_6439",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/721859/huge/f7eba25839110eb0b51e8bfd45438d74ad53a93f.jpg"}],
				"tags":
					[{"term":"Sporting Event",
						"scheme":null,"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683f9",
				"title":"Nov 10, 2018: Reverence: The Little Gallery at Kidder Hall",
				"geo_lat":"44.5665",
				"geo_long":"-123.276158",
				"published_parsed":[2018,11,10,21,30,0,5,314,0],
				"link":"https://events.oregonstate.edu/event/reverence_the_little_gallery",
				"media_content":
					[{"medium":"image",
					"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/732404/huge/4c82e3bcabf1dc5f458f77dbc996a7ff5c5a0f9b.jpg"}],
				"tags":
					[{"term":"Lecture or Presentation",
						"scheme":null,
						"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683fa",
				"title":"Nov 10, 2018: Shorts. Kurz & Schmerzlos program at Darkside Cinema",
				"geo_lat":"44.564566",
				"geo_long":"-123.262044",
				"published_parsed":[2018,11,11,3,0,0,6,315,0],
				"link":"https://events.oregonstate.edu/event/shorts_kurz_schmerzlos_program",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/675843/huge/790e30c74e5f1c51580494e1e87b84d2e904b66d.jpg"}],
				"tags":
					[{"term":"Performance",
						"scheme":null,
						"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683fb",
				"title":"Nov 10, 2018: The Passion of Dracula at Withycombe Hall",
				"geo_lat":"44.567201",
				"geo_long":"-123.283374",
				"published_parsed":[2018,11,11,3,30,0,6,315,0],
				"link":"https://events.oregonstate.edu/event/the_passion_of_dracula",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/751390/huge/de3bf5bedbde0f39aff2c0a977f3e0e0c9023f02.jpg"}],
				"tags":
					[{"term":"Performance",
						"scheme":null,
						"label":null},
					 {"term":"Fair or Festival",
						"scheme":null,
						"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683fc",
				"title":"Nov 10, 2018: AMC Movie Night at AMC Corvallis 12",
				"geo_lat":"44.587447",
				"geo_long":"-123.249284",
				"published_parsed":[2018,11,11,4,0,0,6,315,0],
				"link":"https://events.oregonstate.edu/event/amc_movie_night",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/586904/huge/4a4bbf739d801464d684cd0bedc8be0cf2d274bd.jpg"}],
				"tags":
					[{"term":"Film and Cinema",
						"scheme":null,
						"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683fd",
				"title":"Nov 11, 2018: Auditions: The Little Prince at Withycombe Hall",
				"geo_lat":"44.567201",
				"geo_long":"-123.283374",
				"published_parsed":[2018,11,11,8,0,0,6,315,0],
				"link":"https://events.oregonstate.edu/event/auditions_the_little_prince",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/753746/huge/8bac899f440c077b921b00230a90bf4e9207c30c.jpg"}],
				"tags":
					[{"term":"Performance",
						"scheme":null,
						"label":null},
					 {"term":"Fair or Festival",
					 "scheme":null,"label":null}]
			},
			{
				"_id":"5be74773bb5c7486688683fe",
				"title":"Nov 11, 2018: Poverty Action Week at Varies",
				"published_parsed":[2018,11,11,8,0,0,6,315,0],
				"link":"https://events.oregonstate.edu/event/poverty_action_week",
				"media_content":
					[{"medium":"image",
						"url":"https://d3e1o4bcbhmj8g.cloudfront.net/photos/762448/huge/a8c7764c7bbc425dff3827ff9d41d72ea3dde5fc.jpg"}],
				"tags":
					[{"term":"Civic Engagement",
						"scheme":null,"label":null}]
			}
		];


export {eventsMock}

export default mocks;
