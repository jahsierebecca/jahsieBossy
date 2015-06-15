// // Filename: main.js

// // Require.js allows us to configure shortcut alias
// // There usage will become more apparent further along in the tutorial.
// require.config({
//   paths: {
//     jquery: 'libs/jquery/jquery',
//     underscore: 'libs/underscore/underscore',
//     backbone: 'libs/backbone/backbone'
//   }

// });

// require([

//   // Load our app module and pass it to our definition function
//   'app',
// ], function(App){
//   // The "app" dependency is passed in as "App"
//   App.initialize();
// });


//////////////////// MODELS //////////////////////
var Project = Backbone.Model.extend({});
var Skill = Backbone.Model.extend({});
var Contact = Backbone.Model.extend({});
// var Tool = Backbone.Model.extend({});
// var contact = new Contact();

//////////////////// COLLECTIONS //////////////////////
var Projects = Backbone.Collection.extend({
	model: Project,
	comparator: 'cid' // or perhaps sort by 'title'
});

var Skills = Backbone.Collection.extend({
	model: Skill,
	comparator: 'cid' // or perhaps sort by 'title'
});

// var tool = new Tool;
var projects = new Projects();
var skills = new Skills();


// We can add multiple items to our collection, our collection will instantiate
// them with the appropriate model class, since we told the Collection class which model it uses


//Populating collections
// skills.add([
// 	{
// 		"skill": "Code",
// 		"skillDescrip": "I'm primarily a front-end developer, but I'm comportable with the full-stack. I can hand-code form the ground up or use frameworks when necessary",
// 	},
// 	{
// 		"skill": "Design",
// 		"skillDescrip": "Everything from graphic/print design to UX/UI. I love making things beautiful, engaging, intuitive and compulsively consumable. I design with users in mind",
// 	},
// 	{
// 		"skill": "Brainz",
// 		"skillDescrip": "I've worked in communications, nonprofits, libraries. I've worked teaching computer hardware, building flkasdj and lkdjf. ",
// 	},
// ])

projects.add([ 
    {
        "id": "curious-cities",
        "title": "Curious Cities",
        "link": "https://curious-cities.herokuapp.com/",
        "description": "Curious Cities is a location based photo sharing app I co-created.",
        "brief": "Exploration app",
        "tools": "Javascript, Jquery, Backbone, Sass",
        "imageUrl": "img/phones/curious-cities.png"
    },
    {
        "id": "karnes-allen",
        "title": "Karnes Allen",
        "link": "http://jahsierebecca.github.io/ka-redesign/",
        "description": "Karnes Allen Group is an executive search company. I designed their logo and built their website.",
        "brief": "Hiring Agency Webiste",
        "tools": "Bootstrap, CSS",
        "imageUrl": "img/phones/karnes-allen.png"
    },
    {
        "id": "get-the-picture",
        "title": "Get the Picture",
        "link": "http://jahsierebecca.github.io/GetThePicture/",
        "description": "Get the picture is a free stock-photo sharing website I created. I took all of the photos and they are available to visitors to download and use for free.",
        "brief": "Free stock photos",
        "tools": "HTML, Sass, Jquery, Lightroom",
        "imageUrl": "img/phones/get-the-picture.png"
    },
    {
        "id": "pattern-gallery",
        "title": "Pattern Gallery",
        "link": "http://jahsierebecca.github.io/patterns/",
        "description": "The Pattern Gallery is a free pattern library. I created all of the patterns using Adobe Illustrator. Visitors can download and use the patterns for free.",
        "brief": "Free patterns",
        "tools": "HTML, Sass, Jquery, Illustrator",
        "imageUrl": "img/phones/pattern-gallery.png"
    },
    {
        "id": "javascript-calendar",
        "title": "Javascript Calendar",
        "link": "http://jahsierebecca.github.io/Calendar/",
        "description": "This is a calendar I created using pure javascript. I wanted to test my javascript logic skills, so rather than use the javascript date function I created the calendar by hand.",
        "brief": "Pure JS calendar",
        "tools": "Pure HTML, CSS and Javascript",
        "imageUrl": "img/phones/javascript-calendar.png"
    }
]);



// TEST OUR COLLECTIONS BY LOGGING COLLECTION ITEMS TO THE CONSOLE

// console.log('get one item by its cid :');
// console.log(projects.get({cid:'c1'}));
// or console.log(todos.get('cid', 'c1'));
// model.get() will accept either a single object argument ({key:val})
// or two arguments (key,value)

// loop over all the items in the collection, log them and some info about them
// projects.models.forEach(function (item, index){
// 	console.log('item\'s cid :' + item.cid);
// 	console.log(item);
// 	console.log(item.toJSON());
// });

///For Input
// var ProjectInputView = Backbone.View.extend({
// 	el: '#project-form',
// 	//collection: todos,//could be hardwired into class,
// 						//but better to pass as instance option
// 	events: {
// 		'click #add-project': 'addProject'
// 	},
// 	addProject: function (event) {
// 		event.preventDefault();
// 		console.log("Adding model");
// 		var $title = $(this.el).find('#project-input');
// 		this.collection.add({title: $title.val()}); 
// 		$title.val('');
// 	}
// });


//////////////////// VIEWS //////////////////////

var SkillView = Backbone.View.extend({
	el: '#skills-list',
	initialize: function () {
		this.render();
	},
  	render: function () {
  			// var toolsHtml = ;
			// console.log(item)
			var skillsHtml = "<div class='skill column' id='code'><i class='fa fa-code fa-2x'></i><h4>Code</h4><p>I'm primarily a front-end developer, but I'm comportable with the full-stack. I can hand-code form the ground up or use frameworks when necessary</p></div>" +
			"<div class='skill column' id='design'><i class='fa fa-pencil fa-2x'></i><h4>Design</h4><p>Everything from graphic/print design to UX/UI. I love making things beautiful, engaging, intuitive and compulsively consumable. I design with users in mind</p></div>" +
			"<div class='skill column' id='brains'><i class='fa fa-puzzle-piece fa-2x'></i> <h4>Brains</h4><p>I've worked in communications, nonprofits, libraries. I've worked teaching computer hardware, building flkasdj and lkdjf.</p></div>";
			// outputHtml += '<div class="skill column" id="' + item.get('skill') + '"><h4>' + item.get('skill') + '</h4><p class="center">' + item.get('skillDescrip') + '</p></div>';

		$(this.el).html(skillsHtml);
	}
});



// var ToolView = Backbone.View.extend({
// 	el: '#tools',
// 	// showTools: function() {


// // $( "#show-tools" ).click(function() {
// //   $('#tools-list').toggleClass( "hide" );
// // });
// // 		// $('#project-list').toggleClass('hide');
// // 		// $('#project-list').css( "color", "red" );
// // 		console.log("clicked tools");
// // 	},
// // 	events: {
// // 		"click #see-tools": "showTools"
// // 	},
// 	initialize: function () {
// 		// Only if Input is there
// 		// this.collection.on('add', this.render, this);
// 		this.render();
// 	},
//   	render: function () {
//   		var outputHtml = "<button id='see-tools'>Tools I use</button><div id='tools-list'><p>Tools I use: HTML &#8226 CSS &#8226 Sass &#8226 Git &#8226 Grunt &#8226 Javascript &#8226 JQuery &#8226 Backbone &#8226 Node.js &#8226 Bower &#8226 Angular &#8226 Bourbon &#8226 Neat &#8226 Bower &#8226 Photoshop &#8226 Illustrator &#8226 Lightroom</p></div>";
// 		$(this.el).html(outputHtml);

// 	}
// });

var ProjectListView = Backbone.View.extend({
	el: '#project-list',
	initialize: function () {
		// Only if Input is there
		// this.collection.on('add', this.render, this);
		this.render();
	},
  	render: function () {
		var projectHtml = '';

		this.collection.models.forEach(function (item) {
			// console.log(item);
			console.log(item.id);
			// var cid = item.cid;
			// console.log(cid);
			// var position = cid.str.charAt(2);
			// console.log(position);
			var id= item.get('id');
			projectHtml += '<div class="project container" id="' + item.get('id') + '"><div class="project-img child">' + '<img src="imgs/' + id + '.png" class="portfolio-pic"></div><div class="project-body child"><div class="project-text">' + '<a target="blank" href="'+ item.get('link') + '"><h3>' + item.get('title') + '</h3></a><p class="project-brief">' + item.get('brief') + '</p><p class="description">' + item.get('description') +'</p></div></div></div>';
		});
		$(this.el).html(projectHtml);
	}
});

var ContactView = Backbone.View.extend({
	el: '#contact',
	initialize: function () {
		// Only if Input is there
		// this.collection.on('add', this.render, this);
		this.render();
	},
  	render: function () {
  		var outputHtml = '<h2>Get in Touch </h2><p>Im available for hire</p><div id="footer"><a href="https://github.com/jahsierebecca" target="blank"><i class="fa fa-github fa-2x"></i></a><a href="http://codepen.io/jahsierebecca/" target="blank"><i class="fa fa-codepen fa-2x"></i></a><a href="https://www.flickr.com/photos/shapeofshape/" target="blank"><i class="fa fa-flickr fa-2x"></i></a><a href="http://instagram.com/shapeofshape/" target="blank"><i class="fa fa-instagram fa-2x"></i></a><a href="http://shapeofshape.tumblr.com/" target="blank"><i class="fa fa-tumblr fa-2x"></i></a></div>';
		$(this.el).html(outputHtml);
	}
});



// var projectInputView;
$(function () {
	// projectInputView = new ProjectInputView({collection: projects});
	projectListView = new ProjectListView({collection: projects});
	skillView = new SkillView();
	contactView = new ContactView();
	// toolView = new ToolView({model: tool});
});

$( "#see-tools" ).click(function() {
  $('#tools-list').slideToggle( "hide" );
  console.log('hi!');
});