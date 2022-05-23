import { default as data } from "../db/db.js";

function populateSkills(items, id) {
	let skillsTag = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h3 = getElement('h3',null);
		h3.innerHTML = items[i].skillName;

		let divProgress = getElement('div','progress');

		let divProgressBar = document.createElement("div");
		divProgressBar.className = "progress-bar color-" + items[i].color;
		divProgressBar.style = "width:" + items[i].percentage + "%";
		divProgress.append(divProgressBar);

		let divProgressWrap = document.createElement("div");
		divProgressWrap.className = "progress-wrap";
		divProgressWrap.append(h3);
		divProgressWrap.append(divProgress);

		let divAnimateBox = document.createElement("div");
		divAnimateBox.className = "col-md-6 animate-box";
		divAnimateBox.append(divProgressWrap);

		skillsTag.append(divAnimateBox);
	}
}


function populateProjects(items, id) {
	let projectdesign = document.getElementById(id);
	for (let i = 0; i < items.length; i++) {
		let h4 = document.createElement("h4");
		h4.className = "project-heading";
		h4.innerHTML = items[i].projectName;

		let a = document.createElement("a");
		a.href = items[i].preview;
		a.target = "_blank";
		a.append(h4);

		let img = document.createElement("img");
		img.src = items[i].image;
		img.className = "img-fluid";

		let divResumeContentLeft = document.createElement("div");
		divResumeContentLeft.className = "resume-content";
		divResumeContentLeft.id = "left-div";
		divResumeContentLeft.append(img);

		let divResumeContentRight = document.createElement("div");
		divResumeContentRight.className = "resume-content";
		divResumeContentRight.id = "right-div";

		let p = document.createElement("p");
		p.className = "project-description";
		p.innerHTML = items[i].summary;

		let divSpan = document.createElement("div");
		for (let k = 0; k < items[i].techStack.length; k++) {
			let span = document.createElement("span");
			span.className = "badge badge-secondary";
			span.innerHTML = items[i].techStack[k];
			divSpan.append(span);
		}

		let divSubHeading = document.createElement("div");
		divSubHeading.className = "sub-heading";
		divSubHeading.append(p);
		divSubHeading.append(divSpan);
		divResumeContentRight.append(divSubHeading);

		let divResumeItem = document.createElement("div");
		divResumeItem.className = "resume-item";
		divResumeItem.append(divResumeContentLeft);
		divResumeItem.append(divResumeContentRight);
		a.append(divResumeItem);

		let divProjectCard = document.createElement("div");
		divProjectCard.className = "project-card";
		divProjectCard.append(a);

		let li = document.createElement("li");
		li.append(divProjectCard);
		projectdesign.append(li);

		if(i != items.length-1) {
			let hr = document.createElement('hr');
			projectdesign.append(hr);
		}
	}
}







function getElement(tagName,className) {
	let item = document.createElement(tagName);
	item.className = className;
	return item;
}

populateSkills(data.skills, "skills");


populateProjects(data.projects.web, "web-projects");
populateProjects(data.projects.software, "software-projects");
populateProjects(data.projects.android, "android-projects");
populateProjects(data.projects.freelance, "freelance-projects");

populateExp_Edu(data.experience, "experience");
populateExp_Edu(data.education, "education");

populateLinks(data.footer, "footer");