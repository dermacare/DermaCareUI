function createMock(id, type, heading, content, url, rank, tags) {
	return {
		id,
		type,
		heading,
		content,
		url,
		rank,
		tags
	};
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

let sportsMock = {
	"matches": [
	  {
			"sport": "Basketball (M)",
			"date": "Oct 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
			"home": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			},
			"away": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			}
		},
		{
			"sport": "Basketball (M)",
			"date": "Oct 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
		},
		{
			"sport": "Basketball (M)",
			"date": "Dec 27 2018",
			"progress": "final",
			"time": "12:00 PM PST",
			"airing": "Pac-12 Oregon",
			"details": "https://pac-12.com/mens-basketball/event/2018/10/27/montana-tech-oregon-state",
			"live": "https://pac-12.com/live?network=P12ORG",
			"tickets": "https://ev12.evenue.net/cgi-bin/ncommerce3/SEGetGroupList?groupCode=BEAVER&linkID=oregonst&shopperContext=&caller=&appCode=&RSRC=PAC12&RDAT=2017",
			"location": "Gill Coliseum, Corvallis, OR",
			"alt_title": "Pac-12 Tournament Day Three",
			"home": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			},
			"away": {
				"logo_url": "https://x.pac-12.com/sites/default/files/styles/thumbnail/public/oregon-state-logo_0__1438812147.png?itok=f_Lwjkxw",
				"name": "OSU",
				"score": "54"
			}
		},
	]
  }

  let seminarMock = {
	"events": [
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"lat": "44.568231",
		"long": "-123.280393",

		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process. A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.A short workshop to learn how to simplify the class registration process.",
		"lat": "44.568231",
		"long": "-123.280393",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	  {
		"title": "Nov 6, 2018: Class Registration Workshop at Wilkinson Hall/ Gilfillan Auditorium",
		"date": "Tue, 06 Nov 2018 16:00:00 -0800",
		"desc": "A short workshop to learn how to simplify the class registration process",
		"address" : "Memorial Union, 2501 SW Jefferson Way, Corvallis, OR 97331",
		"lat": "44.568231",
		"long": "-123.280393",
		"link": "https://events.oregonstate.edu/event/class_registration_workshop",
		"image": "https://d3e1o4bcbhmj8g.cloudfront.net/photos/751040/huge/0bf45d9003a2a7099e592c53e733ca084f4039e8.jpg",
		"category": "Conference or Workshop"
	  },
	]
  }

	let eventsMock = [

		{
"_id" : "5be74773bb5c7486688684f4",
"title" : "Dec 3, 2018: HANDMADE IN OREGON XV at Memorial Union Building (MU)",
"geo_lat" : "44.564917",
"geo_long" : "-123.278976",
"published_parsed" : [
	2018,
	12,
	3,
	16,
	0,
	0,
	0,
	337,
	0
],
"link" : "https://events.oregonstate.edu/event/handmade_in_oregon_xv",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/762909/huge/8b01e5407c45c5c6c6baadc75d609780c2a0927d.jpg"
	}
],
"tags" : [
	{
		"term" : "Fair or Festival",
		"scheme" : null,
		"label" : null
	},
	{
		"term" : "Celebration or Ceremony",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684f3",
"title" : "Dec 3, 2018: Free Group Fitness Classes at Dixon Recreation Center",
"geo_lat" : "44.563137",
"geo_long" : "-123.278729",
"published_parsed" : [
	2018,
	12,
	3,
	14,
	0,
	0,
	0,
	337,
	0
],
"link" : "https://events.oregonstate.edu/event/free_group_fitness_classes",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/721863/huge/13a181276352d8c1397bc769f2497ac82aedc9ee.jpg"
	}
],
"tags" : [
	{
		"term" : "Sporting Event",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684f5",
"title" : "Dec 3, 2018: Institutional Review Board (IRB) Consulting at Memorial Union Building (MU)",
"geo_lat" : "44.564917",
"geo_long" : "-123.278976",
"published_parsed" : [
	2018,
	12,
	3,
	21,
	30,
	0,
	0,
	337,
	0
],
"link" : "https://events.oregonstate.edu/event/institutional_review_board_irb_consulting",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/707529/huge/b34cfdea91508d9d8fa797644ed1349e1984d610.jpg"
	}
],
"tags" : [
	{
		"term" : "Meeting or Discussion",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684f8",
"title" : "Dec 4, 2018: Free Group Fitness Classes at Dixon Recreation Center",
"geo_lat" : "44.563137",
"geo_long" : "-123.278729",
"published_parsed" : [
	2018,
	12,
	4,
	14,
	0,
	0,
	1,
	338,
	0
],
"link" : "https://events.oregonstate.edu/event/free_group_fitness_classes",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/721863/huge/13a181276352d8c1397bc769f2497ac82aedc9ee.jpg"
	}
],
"tags" : [
	{
		"term" : "Sporting Event",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684f7",
"title" : "Dec 3, 2018: Lesbian, Bisexual, Queer & Questioning Women's Support Group  at Snell Hall/Mu East",
"geo_lat" : "44.56369",
"geo_long" : "-123.276442",
"published_parsed" : [
	2018,
	12,
	4,
	0,
	0,
	0,
	1,
	338,
	0
],
"link" : "https://events.oregonstate.edu/event/lesbian_bisexual_queer_questioning_womens_support_group",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/584423/huge/72c8006ff0e337ac32373edacd1a3f52b44597b2.jpg"
	}
],
"tags" : [
	{
		"term" : "Gathering",
		"scheme" : null,
		"label" : null
	},
	{
		"term" : "Meeting or Discussion",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684f9",
"title" : "Dec 4, 2018: HANDMADE IN OREGON XV at Memorial Union Building (MU)",
"geo_lat" : "44.564917",
"geo_long" : "-123.278976",
"published_parsed" : [
	2018,
	12,
	4,
	16,
	0,
	0,
	1,
	338,
	0
],
"link" : "https://events.oregonstate.edu/event/handmade_in_oregon_xv",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/762909/huge/8b01e5407c45c5c6c6baadc75d609780c2a0927d.jpg"
	}
],
"tags" : [
	{
		"term" : "Fair or Festival",
		"scheme" : null,
		"label" : null
	},
	{
		"term" : "Celebration or Ceremony",
		"scheme" : null,
		"label" : null
	}
]
},
{
"_id" : "5be74773bb5c7486688684fa",
"title" : "Dec 4, 2018: Traffic Engineering Fundamentals at LaSells Stewart Center",
"geo_lat" : "44.559161",
"geo_long" : "-123.27852",
"published_parsed" : [
	2018,
	12,
	4,
	16,
	0,
	0,
	1,
	338,
	0
],
"link" : "https://events.oregonstate.edu/event/traffic_engineering_fundamentals",
"media_content" : [
	{
		"medium" : "image",
		"url" : "https://d3e1o4bcbhmj8g.cloudfront.net/photos/584416/huge/a75d738d66f989ae0fb85e801f4be399ab07cd65.jpg"
	}
],
"tags" : [
	{
		"term" : "Lecture or Presentation",
		"scheme" : null,
		"label" : null
	}
]
}
,

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

  let freeFoodMock = [
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"1036998224723279872",
	   "url":"https://twitter.com/statuses/1036998224723279872",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSU_StudyAbroad: If you studied abroad during the Academic Year 2017-2018, Spring 2018 or Summer 2018 you're invited to the Returning S…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"989151887856406533",
	   "url":"https://twitter.com/statuses/989151887856406533",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUgreen: Don't forget about the 🐛 Zoo  from 11am-2pm today in the S.U. Cowboy Underground (instead of the Plaza) #OSUInsectAdventure #…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"981299222749351937",
	   "url":"https://twitter.com/statuses/981299222749351937",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUCASNR: The OSU Bioeconomy and Sustainability Expo will be held tomorrow from 9 a.m. to 12 p.m. at the Student Union Plaza. Stop by t…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"768108782186475520",
	   "url":"https://twitter.com/statuses/768108782186475520",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @matt_fletch: On the Union Plaza today from 11:30-1:30 with @OSUCoachBrad! Winner of our free throw contest gets a football VIP Experien…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"722827493149769728",
	   "url":"https://twitter.com/statuses/722827493149769728",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"Stop by the union plaza from 11:30 to 1:30 today to try some samples of great products made in Oklahoma!!! @OSUUnion",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"722810527395647488",
	   "url":"https://twitter.com/statuses/722810527395647488",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUDining: Come support hard-working Okies...try samples from @MIO_Coalition vendors today in the SU Plaza from 11:30a-1:30p! https://t…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"718457308326420481",
	   "url":"https://twitter.com/statuses/718457308326420481",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Don't miss the University Store's Mom's Day Beach Party tomorrow from 11am-3pm on the @OSUUnion Plaza with special guest @Gam…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"658436249062014976",
	   "url":"https://twitter.com/statuses/658436249062014976",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @matt_fletch: For those interested, there will be a Candlelight Vigil tonight at 9:00 at the @OSUUnion North Plaza. #StillwaterStrong",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"1050471035152228352",
	   "url":"https://twitter.com/statuses/1050471035152228352",
	   "screen_name":"eatfreeOSU",
	   "media_url":"http://pbs.twimg.com/media/DpQFdy2U0AAg5zX.jpg",
	   "description":"Doesn't this fruit look A-Peel-ing? Come grab some at the Sustainability Fair happening now till 3:00pm.\nLocation: SEC Plaza https://t.co/7yNQVdkmhf",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T00:00:00.000Z",
	   "id":"909818325470920705",
	   "url":"https://twitter.com/statuses/909818325470920705",
	   "screen_name":"eatfreeOSU",
	   "media_url":"",
	   "description":"\"Go Beavs! Go Greek BBQ!\"\nLearn about Greek life opportunities:  \nStudent Experience Center Plaza\nTODAY from 12:00pm-1:30pm",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:30.133Z",
	   "id":"1012336436882956289",
	   "url":"https://twitter.com/statuses/1012336436882956289",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Today is the last Summer on the Plaza of the Summer, and it's going to be a great one! \n\n🎵  Steelwind\n🎬  A Wrinkle in Time\n📍…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:30.993Z",
	   "id":"857349184743235584",
	   "url":"https://twitter.com/statuses/857349184743235584",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUCollegeofEd: #okstate students: Join President @BurnsHargis tomorrow on the @OSUUnion Plaza at noon for free #BurgersWithBurns! http…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:31.354Z",
	   "id":"778589054510125056",
	   "url":"https://twitter.com/statuses/778589054510125056",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Vote Week continues today with the Round Up Block Party from 10a-2p in the Union Plaza. #LeadOrange @OSUCampusLife https://t.…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:31.594Z",
	   "id":"748523933712822272",
	   "url":"https://twitter.com/statuses/748523933712822272",
	   "screen_name":"okstatefood",
	   "media_url":"http://pbs.twimg.com/media/CmNEV4UUsAA_dM-.jpg",
	   "description":"RT @OKStateProbs: Hey summer homies, my friend @KaitlinButts is playing at the @OSUUnion tonight. Go see her! https://t.co/1pKjx5EYIq",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:31.624Z",
	   "id":"743504673395482624",
	   "url":"https://twitter.com/statuses/743504673395482624",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: Join the @OSUUnion tonight for Summer on the Plaza &amp; a little shopping at the University Store. All #okstate apparel is 25% o…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:35.050Z",
	   "id":"1055137842509209601",
	   "url":"https://twitter.com/statuses/1055137842509209601",
	   "screen_name":"eatfreeOSU",
	   "media_url":"",
	   "description":"I Stand With Immigrants National Day of Action! Show support to immigrants in Oregon, use the photo booth, win prizes, and enjoy warm refreshments and pastries. Today @ SEC Plaza 10-2pm!",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-07T23:31:35.346Z",
	   "id":"926161006971076608",
	   "url":"https://twitter.com/statuses/926161006971076608",
	   "screen_name":"eatfreeOSU",
	   "media_url":"http://pbs.twimg.com/media/DNpihboVwAA5E9X.jpg",
	   "description":"Today 11-1pm @ SEC Plaza. Free donuts, donations encouraged! For Corvallis Public Schools Foundation to fill backpacks w/food for homeless 🙂 https://t.co/7rq15F9sOv",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"1011978877873414144",
	   "url":"https://twitter.com/statuses/1011978877873414144",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstate: 🎵  Steelwind\n🎬  A Wrinkle in Time\n📍  @OSUunion Plaza\n \nStop by Summer on the Plaza Thursday at 6 p.m. for live music, water ac…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"1009465514975023105",
	   "url":"https://twitter.com/statuses/1009465514975023105",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstate: 🎵  New Time Zones\n🎬  Tarzan\n📍  @osuunion Plaza\n \nStop by Summer on the Plaza Thursday at 6 p.m. for live music, water activiti…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-08T00:00:00.000Z",
	   "id":"902549723202154496",
	   "url":"https://twitter.com/statuses/902549723202154496",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: GameDay at the Union is back! 🏈🏈 The fun starts Thursday at 3:30p on the @OSUUnion Plaza. Visit our website for all the detai…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-09T00:00:00.000Z",
	   "id":"770729145185603584",
	   "url":"https://twitter.com/statuses/770729145185603584",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @OSUUnion: #OKSTATE PSA: College Colors Day is THIS WEEK! Get your orange ready and meet us on the SU Plaza at 2pm on Friday! https://t.…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-12T00:00:00.000Z",
	   "id":"1053470083794849792",
	   "url":"https://twitter.com/statuses/1053470083794849792",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @okstatereslife: Don't miss the Tailgate of Tailgates - kick off Homecoming week with us on Kerr-Drummond Plaza Monday night! 🎌🎌🎌Food, g…",
	   "location":"OSU"
	},
	{
	   "event_date":"2018-11-21T00:00:00.000Z",
	   "id":"1030120778652631040",
	   "url":"https://twitter.com/statuses/1030120778652631040",
	   "screen_name":"okstatefood",
	   "media_url":"",
	   "description":"RT @suabokstate: Come kick off the semester with us on Tuesday the 21st at our Exotic Petting Zoo! The animals will be on the SU Plaza from…",
	   "location":"OSU"
	}
 ]

  export {sportsMock, seminarMock, freeFoodMock, eventsMock}



export default mocks;
