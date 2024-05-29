$(document).ready(function(){ 
    let listOfProjects = [
        {date: "8/2023", project: "Stravalytics (Work In Progress)", description: "An interactive website that uses the Strava API to break down a users' run statistics into simple, yet detailed visualizations.", githubLink: "https://github.com/origamitician/run-visualizer", webLink: "https://stravalytics.up.railway.app", circleNum: 7, tags: ["personal", "visual", "mobile compatible"], uses: ["HTML", "CSS", "JS", "Strava API", "Node.js", "MongoDB"]},

        {date: "5/2023", project: "Social Gaming Web Platform (developed for Hawaii Digital Health Lab)", description: "This is a full-stack web application built on React and Meteor.js that allows adolescents to play games while their facial expressions are recorded over time. It was developed over the summer for one of the lab's projects, which involved using AI to predict developmental delays in children by looking into facial features. Videos of clients' faces while they are playing the games on the site would be recieved from this and then fed into AI models to predict these delays.", githubLink: "https://github.com/hawaiidigitalhealth/Social-Gaming-Web-Platform", webLink: "", circleNum: 17, tags: ["internship", "medical"], uses: ["React", "Node.js", "MongoDB", "Meteor.js"]},

        {date: "1/2023", project: "Fireworks", description: "This small project uses the Tkinter module from Python to create a window to generate fireworks. The user can customize various aspects of fireworks by entering different values. Made in celebration for New Years' day!", githubLink: "https://github.com/origamitician/fireworks", webLink: "", circleNum: 8, tags: ["personal", "visual"], uses: ["Python"]},
    
        {date: "12/2022", project: "The PitchKeys Website", description: "This full-stack web application uses the MERN stack, and allows visitors to my YouTube channel to download the various files I use for my videos. My first project involving backend, and tracks (anonymous) user ratings as well as number of downloads.", githubLink: "https://github.com/pitchkeys/pitchkeys.github.io/", webLink: "https://pitchkeys.github.io", circleNum: 22, tags: ["personal", "full-stack", "mobile compatible", "routing"], uses: ["React", "Node.js", "MongoDB", "Express", "My own API"]},
    
        {date: "5/2022", project: "Family Tree [Link disabled]", description: "I created this website for a school project. Primarily uses recursive Javascript to draw cells and lines. All names, photos, and biographies have been made anonymous, and have been replaced with placeholders for protection.", githubLink: "https://github.com/origamitician/familytree", webLink: "", circleNum: 12, tags: ["personal", "school", "static", "mobile compatible", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "3/2022", project: "Virus Simulator", description: "Just for fun. Uses JavaScript to clone fake 'virus' windows.", githubLink: "https://github.com/origamitician/notavirus1", webLink: "https://origamitician.github.io/notavirus1", circleNum: 7, tags: ["personal", "static", "visual", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "2/2022", project: "Dystopian Control Panel Simulator", description: "This app was coded for a movie trailer school project. It simulates a control panel for a future dystopian society where every individual’s action is controlled by a computer. Enter full screen for full functionality.", githubLink: "https://github.com/origamitician/dystopian", webLink: "https://origamitician.github.io/dystopian/dystopian/index.html", circleNum: 12, tags: ["school", "static", "visual", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "12/2021", project: "Tas4Teens", description: "Tas4Teens (The Truth About Substance Use, for Teens), is a website dedicated to raising awareness about adolescent substance use. This site initially started as a personal project and expanded as part of my senior culmination project. <b><u>Site hasn't been maintained in a while, so broken links and glitches may exist.</u></b> This even was hosted on a custom domain temporarily.", githubLink: "https://github.com/tas4teens/h", webLink: "https://tas4teens.github.io/h", circleNum: 9, tags: ["school", "personal", "static", "routing", "mobile compatible"], uses: ["HTML", "CSS", "JS"]},

        {date: "11/2021", project: "2021 (4th place) submission for Hawaii Annual Code Challenge", description: "Maryknoll High School’s coding club submission for the 2021 HACC, which was a mobile compatible timed quiz app for tourists on Hawaiian culture. Uses HTML, CSS, and JS for quiz app functionality. <b><u>This submission came in 4th out of all high school submissions!</u></b>", githubLink: "https://github.com/tas4teens/SpartanDevsAlt", webLink: "https://tas4teens.github.io/SpartanDevsAlt/game.html", circleNum: 19, tags: ["school", "hackathon", "static", "mobile compatible"], uses: ["HTML", "CSS", "JS", "Temporary python server"]},

        {date: "7/2021", project: "The Origamitician's Website", description: "A personal website that hosts instructions to my original origami models. My old site, <a href = 'https://pitchk.github.io/h' target='_blank'>pitchk.github.io/h</a>, was originally completed in July 2021, yet I've migrated some content into a cleaner looking site more recently. You can see the difference!", githubLink: "https://github.com/origamitician/origamitician.github.io", webLink: "https://origamitician.github.io", circleNum: 39, tags: ["personal", "static", "routing", "mobile compatible"], uses: ["HTML", "CSS", "JS"]},

        {date: "5/2020", project: "Quote Generator and Encryptor", description: "A quote generator and encryptor created for extra credit in computer science class. <b>⚠When doing a GitHub search, you may see <a href = 'https://github.com/PitchK/quote-generator' target='_blank'>pitchk/quote-generator</a> and <a href = 'https://github.com/easymath/quote-generator-and-encryptor' target='_blank'>easymath/quote-generator-and-encryptor'</a>. I created both these repositories on different accounts (i.e. I'm the owner of both repositories). I forked the 'pitchk' repository to keep all my personal projects under 'origamitician'.</b>", githubLink: "https://github.com/origamitician/quote-generator", webLink: "https://origamitician.github.io/quote-generator", circleNum: 9, tags: ["school", "static", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "4/2020", project: "Diabetes Article", description: "A website for diabetes that I made for biomedical science class. <b>⚠Forked from <a href='https://github.com/easymath/diabetes-article' target='_blank'>easymath/diabetes-article</a> due to same reasons above.</b>", githubLink: "https://github.com/origamitician/diabetes-article", webLink: "https://origamitician.github.io/diabetes-article", circleNum: 26, tags: ["school", "static", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "10/2019", project: "Chatbot for obesity", description: "A simple chatbot for obesity created for my high school computer science class.<b>⚠Original source is from <a href = 'https://codepen.io/TheCoderGuy/pen/bGGVMEL' target='_blank'>https://codepen.io/TheCoderGuy/pen/bGGVMEL</a> and code is copied from there due to reasons above.</b>", githubLink: "https://github.com/origamitician/diabetes-article", webLink: "https://origamitician.github.io/chatbot", circleNum: 13, tags: ["school", "static", "single page"], uses: ["HTML", "CSS", "JS"]},

        {date: "7/2019", project: "Pizza website", description: "My first website! Was a coding assignment for DevLeague\'s web development class. <b>⚠Forked from <a href = 'https://github.com/easymath/pizzaria' target='_blank'>easymath/pizzaria</a> due to same reasons above.</b>", githubLink: "https://github.com/origamitician/pizzaria", webLink: "https://origamitician.github.io/pizzaria", circleNum: 0, tags: ["school", "static", "single page"], uses: ["HTML", "CSS"]},
    ]

    listOfProjects.forEach(e => {
        $("#allProjects").append("<div class = 'outerContainer'></div>")
    })
    $(".outerContainer").append("<div class = 'leftDots'></div>")
    $(".outerContainer").append("<div class = 'rightComponents'></div>")
    //$(".leftDots").append("")

    for (let i = 0; i < listOfProjects.length; i++){
        let date = document.createElement("p");
        date.className = "date";
        date.innerHTML = listOfProjects[i].date
        document.getElementsByClassName("leftDots")[i].appendChild(date)  
    }
    $(".leftDots").append("<div class = 'verticalDots'><div>")
    for (let i = 0; i < listOfProjects.length; i++){
        let main = document.createElement("div");
        main.className = "mainCircle"
        document.getElementsByClassName("verticalDots")[i].appendChild(main)
        if (window.innerWidth > window.innerHeight) {
            for(let j = 0; j < listOfProjects[i].circleNum; j++){
                let sub = document.createElement("div");
                sub.className = "subCircle"
                document.getElementsByClassName("verticalDots")[i].appendChild(sub)
            }
        } else {
            for(let j = 0; j < listOfProjects[i].circleNum * 2; j++){
                let sub = document.createElement("div");
                sub.className = "subCircle"
                document.getElementsByClassName("verticalDots")[i].appendChild(sub)
            }
        }
        

        let link = document.createElement("a")
        link.className = "projectLink";
        link.setAttribute("href", listOfProjects[i].githubLink)
        let s = document.createTextNode(listOfProjects[i].project + " →")
        link.appendChild(s)
        link.setAttribute("target", "_blank")
        document.getElementsByClassName("rightComponents")[i].appendChild(link)
        
        let desc = document.createElement("p")
        desc.className = "description";
        desc.innerHTML = listOfProjects[i].description
        document.getElementsByClassName("rightComponents")[i].appendChild(desc)

        let bottomFlexContainer = document.createElement("div")
        bottomFlexContainer.className = "bottomFlex"
        document.getElementsByClassName("rightComponents")[i].appendChild(bottomFlexContainer)

        let bfcl = document.createElement("div")
        bfcl.className = "bfcl"
        document.getElementsByClassName("bottomFlex")[i].appendChild(bfcl)

        let uses = document.createElement("p")
        uses.className = "uses";
        uses.innerHTML = "Uses: "
        document.getElementsByClassName("bfcl")[i].appendChild(uses)

        for (let j = 0; j < listOfProjects[i].uses.length; j++){
            let indivUses = document.createElement("span")
            indivUses.innerHTML = listOfProjects[i].uses[j]
            indivUses.className = "indivUses";
            document.getElementsByClassName("uses")[i].appendChild(indivUses)
        }

        /*let tags = document.createElement("p")
        tags.className = "tags";
        tags.innerHTML = "Tags: "
        document.getElementsByClassName("bfcl")[i].appendChild(tags)

        for (let j = 0; j < listOfProjects[i].tags.length; j++){
            let indivTags = document.createElement("span")
            indivTags.innerHTML = listOfProjects[i].tags[j]
            indivTags.className = "indivTags";
            document.getElementsByClassName("tags")[i].appendChild(indivTags)
        }*/

        if (listOfProjects[i].webLink != "") {
            let githubLink = document.createElement("a")
            githubLink.className = "githubLink";
            let inner = document.createTextNode("View Site →")
            githubLink.append(inner);
            githubLink.setAttribute("href", listOfProjects[i].webLink)
            githubLink.setAttribute("target", "_blank")
            document.getElementsByClassName("bottomFlex")[i].appendChild(githubLink)
        }
        
    }

    /*$.each(listOfProjects, function(index, val){
        
        $(".leftDots:nth-child(" + (index+1) + ")").text(val.description)
       
    })*/

    $(".mainCircle").css({/*"height": "30px", "width": "30px", */"background-color": "cornflowerblue", "border-radius": "50%"})
    $(".subCircle").css({/*"height": "10px", "width": "10px", */"border": "2px solid cornflowerblue", "border-radius": "50%"})

   
    
});  
