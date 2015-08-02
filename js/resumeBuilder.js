var work = {
	"jobs" : [
		{
			"employer" : "Creative Behavior Interventions",
			"title" : "Behavior Therapist",
			"location" : "Beverly Hills, CA",
			"dates" : "June 2013 - Present",
			"description" : "Use of Applied Behavior Analysis (ABA) \
			techniques and programs in working with children with autism"
		},
		{
			"employer" : "sixthreezero Enterprises",
			"title" : "Manager of Operations",
			"location" : "Torrance, CA",
			"dates" : "October 2011 - December 2013",
			"description" : "Website management, design, and \
			development."
		}
	]
}

var projects = {
	"projects" : [
		{
			"start" : "June 2015",
			"title" : "Portfolio Site",
			"dates" : "June 2015",
			"description" : "Replicated a PDF design mockup using HTML \
			and CSS to create a responsive website which displays web \
			development projects.",
			"images" : ["images/portfolio.png"]
		},
		{
			"start" : "July 2015",
			"title" : "Online Resume",
			"dates" : "July 2015",
			"description" : "Created an online resume",
			"images" : ["https://placekitten.com/g/200/300"]
		}
	]
}

var bio = {
	"name" : "Alanna Malicdem",
	"role" : "Front-end Web Developer",
	"welcomeMsg" : "Welcome to my online resume.",
	"contacts" : {
		"mobile" : "562-708-1686",
		"email" : "alanna.malicdem@gmail.com",
		"github" : "amalicdem1",
		"twitter" : "alannaxbanana",
		"bioLocation" : "Los Angeles, CA"
	},
	"skills" : [
		"web development", "design", "problem solving", "eating"
	],
	"bioPic" : "images/biopic.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "UCLA",
			"location" : "Los Angeles, CA",
			"degree" : "BS",
			"major" : "Biology",
			"dates" : "2014",
			"url" : "http://www.ucla.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud304-nd"
		},
		{
			"title" : "Responsive Web Design Fundamentals",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud893-nd"
		},
		{
			"title" : "Responsive Images",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud882-nd"
		},
		{
			"title" : "Version Control with Git and GitHub",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "https://www.udacity.com/course/viewer#!/c-ud775-nd/"
		},
		{
			"title" : "HTML & CSS",
			"school" : "Codecademy",
			"dates" : "2015",
			"url" : "https://www.codecademy.com/en/tracks/web"
		},
		{
			"title" : "JavaScript",
			"school" : "Codecademy",
			"dates" : "2015",
			"url" : "https://www.codecademy.com/en/tracks/javascript"
		}
	]
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var bioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(bioPic);
	var welcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(welcomeMsg);

	var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var email = HTMLemail.replace("%data%", bio.contacts.email);
	var github = HTMLgithub.replace("%data%", bio.contacts.github);
	var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var bioLocation = HTMLlocation.replace("%data%", bio.contacts.bioLocation);
	var allContacts = mobile + email + github + twitter + bioLocation;

	$("#topContacts").append(allContacts);
	$("#footerContacts").append(allContacts);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
}
bio.display();

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedName = HTMLschoolName.replace
			("%data%", education.schools[school].name);
		var formattedLocation = HTMLschoolLocation.replace
			("%data%", education.schools[school].location);
		var formattedDegree = HTMLschoolDegree.replace
			("%data%", education.schools[school].degree);
		var formattedMajor = HTMLschoolMajor.replace
			("%data%", education.schools[school].major);
		var formattedDates = HTMLschoolDates.replace
			("%data%", education.schools[school].dates);
		var formattedEduData = formattedName + formattedDegree +
			formattedDates + formattedLocation + formattedMajor;
		$(".education-entry:last").append(
			formattedEduData);
	}
	$("#education").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var title = HTMLonlineTitle.replace
			("%data%", education.onlineCourses[onlineCourse].title);
		var school = HTMLonlineSchool.replace
			("%data%", education.onlineCourses[onlineCourse].school);
		var dates = HTMLonlineDates.replace
			("%data%", education.onlineCourses[onlineCourse].dates);
		var URL = HTMLonlineURL.replace
			("%data%", education.onlineCourses[onlineCourse].url);
		var formattedCourseData = title + school +
			dates + URL;
		$(".education-entry:last").append(
			formattedCourseData);
	}
}
education.display();

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace
			("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace
			("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer +
			formattedTitle;
		var formattedLocation = HTMLworkLocation.replace
			("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace
			("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace
			("%data%", work.jobs[job].description);
		var formattedWorkData = formattedEmployerTitle +
			formattedDates + formattedLocation + formattedDescription;
		$(".work-entry:last").append(
			formattedWorkData);
	}
}
work.display();

projects.display = function() {
	for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace
			("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace
			("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace
			("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImages = HTMLprojectImage.replace
					("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedImages);
			}
		}
	}
}
projects.display();

$(document).click(function(loc) {
 var x = loc.pageX;
 var y = loc.pageY;

 logClicks(x,y);
});

function inName(name) {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() +
	name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
}

var name = $("#name").text();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);