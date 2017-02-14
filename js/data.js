
var $projects = $("#projects-list"),
projectsCode = $("#projects-js").html(),
projectsCompile = Handlebars.compile(projectsCode),
projectsData = {
	"projects": [

	{
		"company": "TeamTask",
		"company-description":"Task management for small projects made simple in the form of an  Android app.",
		"project-description":"Developer console for an ecosystem of modular smartphones, a tool by which developers register and manage modules.",
		"url":"teamtask.html",
		"tooltip":"Pick me!",
		"bg_img":"img/covers/covers-05.png"},
		{
			"company": "Educabilia",
			"company-description":"Biggest e-learning platform in Latin America selling online and presential courses",
			"project-description":"Developer console for an ecosystem of modular smartphones, a tool by which developers register and manage modules.",
			"url":"educabilia.html",
			"tooltip":"Pick me!",
			"bg_img":"img/covers/covers-04.png"},

			{"company": "Project ARA",
			"company-description":"Developer console for an ecosystem of modular smartphones, a tool by which developers register and manage modules.",
			"project-description":"Firstly, to generate an expert review to mark pain points of the existing UI. Next, to propose solutions to create a more standardized, user-friendly platform.",
			"url":"ara.html",
			"tooltip":"Pick me!",
			"bg_img":"img/covers/covers-02.png"},
			{		
				"company": "LAN",		
				"company-description":"LAN Airlines is the flag carrier of Chile, and one of the largest airlines in Latin America.",		
				"project-description":"To propose a new UI to solve legibility issues and better highlight most relevant information like flight number, dates, and price.",		
				"url":"lan.html",		
				"tooltip":"Pick me!",		
				"bg_img":"img/covers/covers-06.png"},
				{
					"company": "AutoSave",
					"company-description":"Research and  business model ideation to encourage millennials to improve their saving habits through the aid of gaming.",
					"project-description":"To interview gamers users to decide whether there was a feasible business model where millennials would be encouraged to save and invest. Then, based on the info collected, to help ideate that product",
					"url":"autosave.html",
					"tooltip":"Pick me!",
					"bg_img":"img/covers/covers-01.png"},

					{
						"company": "Presidio National Park",
						"company-description":"National Park in San Francisco, California who was looking to completely redesign its website.",
						"project-description":"Redesign main sections include home page, landing pages, detail pages. Design from scratch a map section.",
						"url":"presidio.html",
						"tooltip":"Pick me!",
						"bg_img":"img/covers/covers-03.jpg"},
						]
					}
					$projects.html(projectsCompile(projectsData));


					var $process = $("#process"),
					handlebarsTemplate = $("#handlebars-template").html(),
					templateCompile = Handlebars.compile(handlebarsTemplate),
					data = {
						"sections": [{
							"title": "Meet clients and users",
							"subtitle": "Who are am I designining for?",
							"text":"Customer journeys, user flows, value propositions, personas and wireframes are more than just documents. They are a fundamental part of a working with the client and as a part of a team.<br>I am always committed to create meaningful documents that tells what and why I am taking a design decisions. The use of a clear graphic and written language is crucial to explain something to somebody who has never seen it before."},
							{
								"title": "Research before start",
								"subtitle": "Think, plan, do.",
								"text":"Customer journeys, user flows, value propositions, personas and wireframes are more than just documents. They are a fundamental part of a working with the client and as a part of a team.<br>I am always committed to create meaningful documents that tells what and why I am taking a design decisions. The use of a clear graphic and written language is crucial to explain something to somebody who has never seen it before."},
								{
									"title": "Create meaningful documents.",
									"subtitle": "Deliverables meant to be read and used.",
									"text": "Customer journeys, user flows, value propositions, personas and wireframes are more than just documents. They are a fundamental part of a working with the client and as a part of a team.<br>I am always committed to create meaningful documents that tells what and why I am taking a design decisions. The use of a clear graphic and written language is crucial to explain something to somebody who has never seen it before."
								},
								{
									"title": "Test, question yourself.",
									"subtitle": "We are not the users.",
									"text":"Not always you can reach your users to test your hypothesis, but we you can squeeze that opportunity as much as possible. I have been part of user testing and interviews in the past check AutoSave project and currently, getting into the data driven design world"
								}]
							}
							$process.html(templateCompile(data));



