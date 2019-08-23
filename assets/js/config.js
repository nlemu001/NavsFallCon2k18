var morningWorkshops = "morningWorkshops";
var afternoonWorkshops = "afternoonWorkshops";
var workshops = 
{
    "morningWorkshops": [
        {
            "title": "Pursuing Christ",
            "speaker": "Don Allen",
            "description": "We will explore together the why, how and what now of knowing and following Christ."
        },
        {
            "title": "Healthy Communication / Community / Fellowship",
            "speaker": "Kyu Ho Lee",
            "description": "TBD"
        },
        {
            "title": "Living out your faith in a secular world",
            "speaker": "Chris Ballesteros",
            "description": "So you are trying to live out your faith on a college campus, but you are surrounded by parties, casual hook ups, and a whole bunch of other influences. Philippians 1:27 says “let your manner of life be worthy of the gospel of Christ”. So how the heck do we do that when we live in the environment we do? In this workshop we will be looking at the realities of the world we live in, and how we can not only navigate through the world, but how we can live in a way that honors both ourselves and God."
        },
        {
            "title": "Praying Scripture Powerfully",
            "speaker": "Bryan & Erin Thigpen",
            "description": "How important is prayer and how should we pray? The Lord Jesus spent a lot of time in prayer and so should we. If we want to be people who will effectively change the world than we need to learn how to pray more boldly. Come learn to be more bold and powerful in your prayer life by examining what The Bible shows us about it. Join us as we learn some unique tools and techniques in order to pray more powerfully like our Savior."
        },
        {
            "title": "Discipleship Essentials: One Beggar Showing Another Where to Find Breadcrumbs",
            "speaker": "Alicia Garcia",
            "description": "Discipleship can seem scaring when at the core we are sharing what we have learned and experienced from God with others.  Come spend time together growing a heart for the vision and a few practicals to make disciples as you make Him known."
        }
    ],
    "afternoonWorkshops": [
        {
            "title": "Did Jesus really rise from the dead?",
            "speaker": "TJ Hayes",
            "description": "Have you ever felt intimidated when people challenge your faith in Christ? Did you know that the apostle Paul said that if Christ has not been raised, then our faith is in vain? Come strengthen your faith by learning a few of the many evidences for Jesus' resurrection."
        },
        {
            "title": "What is God's will for my life?",
            "speaker": "Ryan Mullarkey",
            "description": "What does God want you to do with your life? Should you take that job you interned for? Does God want you to marry that person you've been dating? Psalm 25:14 says \"The Lord confides in those who fear him...\" In this workshop we will explore the difference between God's specific and general will, how to filter our decisions through God's Word, and how following God by faith is the most satisfying place we can be."
        },
        {
            "title": "Getting started with Extended Time Alone With God.",
            "speaker": "Carlos Ortiz",
            "description": "Eternal life is knowing God. Spending extended time alone with Him is a great way to do that.  Come develop the transformative habit that enables you to reprioritize your earthly life toward heavenly pursuits. Why? Because HE is so worth it!"
        },
        {
            "title": "Finding Hope in the Midst of Anxiety",
            "speaker": "Dave & Kelly Sasaki",
            "description": "Do you or someone you care about struggle with anxiety? Jesus cares, and offers healing, not condemnation. In this workshop we will discuss not only practical ways to deal with anxiety, but also ways to bring Jesus and his Word into your struggle."
        },
        {
            "title": "Understanding the Old Testament",
            "speaker": "Jonathan Fitzgerald",
            "description": "TBD"
        }
    ]
};

function appendWorkshop(wsJson, wsCnt, isMorningWs) {
    var title = wsJson.title;
    var speaker = wsJson.speaker;
    var description = wsJson.description;
    var section = isMorningWs ? morningWorkshops : afternoonWorkshops;

    var workshopEntry =  '<div class="accordion-heading">' +
                            '<a class="accordion-toggle' + (ws ? '' : ' active') + '" data-toggle="collapse" data-parent="#' + section + '" href="#' + section + ws + '">' +
                                '<i class="icon-' + (ws ? 'plus' : 'minus') + '"></i>' + title + '</a>' +
                        '</div>' +
                        '<div id="' + section + ws + '" class="accordion-body collapse' + (ws ? '' : ' in') + '">' +
                            '<div class="accordion-inner">' + speaker + '<br>' + description + '</div>' +
                        '</div>';

    var wsSection = document.getElementById(section);
    var newWorkshop = document.createElement('div');
    newWorkshop.setAttribute('class','accordion-group')
    newWorkshop.innerHTML = workshopEntry;
    wsSection.appendChild(newWorkshop);
}

for (var ws = 0; ws < workshops.morningWorkshops.length; ws++) {
    appendWorkshop(workshops.morningWorkshops[ws], ws, true);
}

for (var ws = 0; ws < workshops.afternoonWorkshops.length; ws++) {
    appendWorkshop(workshops.afternoonWorkshops[ws], ws, false);
}