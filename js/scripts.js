$(document).ready(function(){


///// TILES & UP/DOWN BUTTONS /////


var verticalimages = [	"0px", "627px", "1254px", "1881px", "2508px"];

var lightboxCurrent = 0;

function downclick() {

	lightboxCurrent += 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)
 	$("#upbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 1)) {

 		$("#downbutton").fadeOut()
        setTimeout(function(){
        $('#tooltip2').fadeOut() }, 5000);

 	}


}

function upclick() {


	lightboxCurrent -= 1

 	$("#internalwrapper").animate({"bottom": verticalimages[lightboxCurrent]}, 1000)

 	$("#downbutton").fadeIn()

 	if (lightboxCurrent==(verticalimages.length - 6)) {  //NB  "-5" needs to be whatever length of array is

 		$("#upbutton").fadeOut();
 	}


}



  $("#downbutton").click(function(event) {      	

  	event.preventDefault();

  	downclick()

	});


  $("#upbutton").click(function(event) {      	

  	event.preventDefault();

  	upclick()

	});

 ///// END OF TILES & UP/DOWN BUTTONS ///// 


 $("#explore").click(function(event) {       

    event.preventDefault();

    $("#slider").animate({"left": "-940px"}, 1000, function(){

      $("#buttons").fadeIn()
      $("#tooltip1").fadeIn()
    })

  });




var boxs = [
    {
        selector: '#cover3',
        headline: 'The Austin Motel',
        copy: '<a target="_blank" href="http://www.austinmotel.com/">Austin Motel</a> is one of the most recognisable buildings in the trendy South Congress area, if not for its bright lights then for its slightly phallic shaped sign - locals have affectionately dubbed it the "penis motel". For $150 a night and at the recommendation of <a target="_blank" href="https://twitter.com/TWalk/status/347006443104382976">@TWalk</a>, we checked into a huge, clean room – nothing outwardly fancy about the decor, but it was bright and funky.',
        address: "• <a target='_blank' href='http://www.austinmotel.com'>Austin Motel</a>, 1220 S Congress Ave, Austin, Texas",
        content: "<img src='images/motel.jpg'>"
    },

    {
        selector: '#cover2',
        headline: "Smitty's Market",
        copy: "Since 99% of tips for the Austin area involved food, and 99% of those food tips involved BBQ, it's important to note that we didn't take our First Taste of Texas BBQ decision lightly. At Smitty's, we ordered a pound each of of the most popular meets (ribs, brisket and sausage), which came on tear sheets of thick brown paper . Dizzy with meat coma.",
        content: '<img src="images/smittys.jpg">',
        address: "• <a target='_blank' href='http://www.smittysmarket.com'>Smitty's Market</a>, 208 S Commerce St  Lockhart, Texas"
    },

    {
        selector: '#cover6',
        headline: 'El Cosmico',
        copy: "We arrived in Marfa after 10pm, about four hours later than planned and two hours later than the office at our hotel, El Cosmico, stays open. What followed was a night of toss-and-turn sleep in a trailer that seemed to retain all of the previous day's heat, until the temperature suddenly dropped to freezing in the early morning.",
        content: '<img src="images/cosmico.jpg">',
        address: "• <a target='_blank' href='http://www.elcosmico.com'>El Cosmico</a>, 802 S Highland Ave  Marfa, Texas"
    },

    {
        selector: '#cover4',
        headline: 'Texas Capitol',
        copy: "Everything's bigger in Texas: the Texas Capitol is ornate and enormous, with state troopers in cowboy hats at every corner. If you stand in the centre of the rotunda, you'll be able to hear your voice echo from all directions - not that it's the kind of place you'd feel comfortable yelling.",
        content: '<img src="images/capitol.jpg">',
        address: "• <a target='_blank'  href='http://www.tspb.state.tx.us/SPB/capitol/texcap.htm'>Texas Capitol</a>, 112 E 11th St, Austin, Texas"

    },

    {
        selector: '#cover1',
        headline: 'Gruene Hall',
        copy: "Gruene Hallwas recommended by several readers, including <a target='_blank' href='https://twitter.com/peterkraft/status/349331892941750274%20%20'>@peterkraft</a>. A few seconds after setting foot inside, it was clear why this place is hallowed ground for both musicians and their fans. The ancient dancehall's wooden floorboards were so worn they bounced underfoot. I helped myself to a Shiner Bock and sat down to listen to Danny Bams and Billy Bright.",
        content: '<img src="images/gruene.jpg">',
        address: "• <a target='_blank' href='http://www.gruenehall.com'>Gruene Hall</a>, 1281 Gruene Rd, New Braunfels, Texas"
    },

    {
        selector: '#cover7',
        headline: "Boggy Creek Taxidermy",
        copy: "About an hour into our journey west, we decided to head up to Bandera, the self-proclaimed <a target='_blank' href='http://www.banderacowboycapital.com/'>Cowboy Capital of the World</a>. At Boggy Creek Taxidermy we asked Bandera native <strong>Greg Schmidt</strong>, 54, two questions about Texas:<br/><br/><b>Biggest misconception?</b> 'People say everything's bigger in Texas, but that's not necessarily true.'<br/><br/><strong>Truth?</strong> 'I think people are nicest in Texas. I've gone to other states and people are stuck up.'",
        content: '<img src="images/boggycreek.jpg">',
        address: '• Boggy Creek Taxidermy, 1206 Hackberry St, Bandera, Texas'
    },

    {
        selector: '#cover8',
        headline: 'Stonehenge II',
        copy: "Before heading out of the Kerrville area, we decided to stop off at Ingram, home to Stonehenge II, the hollow younger sibling of the neolithic British stone structure. Fear not, Britons – not everything's bigger in Texas: Stonehenge II is only '90% as tall and 60% as wide as the original'",
        content: '<img src="images/stonehenge.jpg">',
        address: '• Stonehenge II, Ingram, Texas'
    },

    {
        selector: '#cover9',
        headline: "On the road to Sonora",
        copy: "We officially entered the Road Trip segment of this journey. It snuck up on us directly after we left Ingram. No cell service and very little scenery; the rolling green of Texas Hill Country shifted to the rocky expanse of West Texas before our eyes.",
        content: '<img src="images/roadtosonora.jpg">',
        address: ''
    },

    {
        selector: '#cover10',
        headline: 'Welcome to New Mexico',
        copy: "After  crossing the state line sign we were pleased to see that New Mexicans seem very excited to show us their state. We'd logged over 1,000 miles in our rental car since picking it up in Austin on Sunday. To keep ourselves occupied, we discussed the following: iceberg wedge salads (why?), diaper-wearing astronauts, Big Red-flavoured Ices, the secrets to long-lasting relationships (avoid road trips) and the ever-changing landscape outside.",
        content: '<img src="images/welcometonewmexico.jpg">',
        address: ''

    },

    {
        selector: '#cover11',
        headline: 'Balmorhea State Park',
        copy: "At Balmorhea State Park we quickly checked out the huge, spring-fed pool of the same name. This pool mixes man-made concrete with natural rock. At its deepest, it's 25ft deep, and you swim with what appear to be overfed, friendly minnows and smaller, more shy catfish. While our driver opted for a nap, Sarah and I took a break from the punishing sun – the temperature just crept up to 39C (102F) – and dove in. The things we do in the name of journalism. ",
        content: '<img src="images/balmorhea.jpg">',
        address: '• <a target="_blank" href="www.tpwd.state.tx.us/state-parks/balmorhea">Balmorhea State Park</a>‎, Toyahvale, Texas'
    },

    {
        selector: '#cover12',
        headline: 'Prada art installation - Valentine',
        copy: "We swung by the Prada installation in Valentine, which has been standing in the middle of a field since October 2005. It was installed by local art group <a target='_blank' href='http://ballroommarfa.org/'>Ballroom Marfa</a> and has weathered the elements over the years. Today, lizards and unidentifiable worm-looking insects crawl on the structure, just feet away from leather shoes and bags.",
        content: '<img src="images/prada.jpg">',
        address: '• Prada art installation, Route 90, Marfa'
    },

    {
        selector: '#cover13',
        headline: "Pecos",
        copy: "Pody's BBQ, named by Texas Monthly as one of the best pits in the state, was also closed for the day when we rolled up. Luckily, the sign on the door pointed to the Sheriff Posse building across the parking lot. Posse president Brett Walker shared some brisket with us from his personal pit. ",
        content: '<img src="images/pecos.jpg">',
        address: "• Pecos Sheriff Posse's Barn, Pecos, Texas"
    },

    {
        selector: '#cover14',
        headline: 'McDonald Observatory',
        copy: "The twisty mountain road gave way to stunning views of the Texas landscape, which changed from lush green to rocky and back again during the course of the drive. We spotted teepees, odd trailers and desolate picnic spots along the way, plus stout vegetation I've never seen before, including <a target='_blank' href='http://en.wikipedia.org/wiki/Agave_americana'>'century' plants</a>, Joshua trees and mesquite bushes.",
        content: '<img src="images/mcdonald.jpg">',
        address: "• <a target='_blank' href='mcdonaldobservatory.org'>McDonald Observatory</a>, 3640 Dark Sky Drive  Fort Davis, Texas"
    },

    {
        selector: '#cover15',
        headline: "Billy the Kid's final resting place",
        copy: "Baking in the 100-degree sun, the grey gravelled military cemetery looked like a really lonely place to spend eternity. In the middle is Billy the Kid's headstone. On one hand, the Kid is known as a thief and murderer, but his gregarious personality, hardscrabble upbringing and baby face has has secured him a place in wild-west folklore.",
        content: '<img src="images/billlykid.jpg">',
        address: ""
    },

    {
        selector: '#cover16',
        headline: 'Roswell',
        copy: "As you might've guessed, the town is decked out in an alien theme - even the street lights look like little green men. We asked our hotel concierge about what it's like to live in a town known for aliens. 'It's better to be known for something than for nothing,' he said with a shrug. Can't argue with that.",
        content: '<img src="images/roswell.jpg">',
        address: '• Roswell, New Mexico'
    },

    {
        selector: '#cover18',
        headline: 'Santa Fe',
        copy: "You readers weren't kidding about Santa Fe being beautiful; we enjoyed our drinks in an open-air restaurant with fairy lights and actual stars overhead. ",
        content: '<img src="images/thedrive.jpg">',
        address: ""
    },

    {
        selector: '#cover17',
        headline: 'Montezuma Hot Springs',
        copy: "Lea Lake has a large recreation area, paddle posts and foam surfboards. Sadly, we only had enough time to dip our toes, but taking in the gorgeous view - again, brown rock against bright blue water and sky - was reason enough to visit. ",
        content: '<img src="images/montezuma.jpg">',
        address: ""
    },

    {
        selector: '#cover19',
        headline: "Turquoise Trail",
        copy: "We cruised along NM14, a 54-mile stretch of blacktop that links Albuquerque and Santa Fe, and takes in most of the Turquoise Trail, a National Scenic Byway. The Scenic and Historic Area encompasses 15,000 square miles in the heart of central New Mexico. The mountains are beautiful and green here and there are old mining towns with museums and art centres.",
        content: '<img src="images/turqoise.jpg">',
        address: ""
    },

    {
        selector: '#cover20',
        headline: 'Tinkertown Museum',
        copy: "Our last stop was the much-recommended Tinkertown Museum, built over four decades by circus and carnival painter Ross J Ward. The museum  is full of painted wooden carvings Ross made over the years, and the walls are covered in glass mosaic. You can play with ancient carnival machines - discards Ross fixed up - and drop quarters into giant old accordion machines to play old time music. ",
        content: '<img src="images/tinkertown.jpg">',
        address: "• <a target='_blank' href='tinkertown.com'>Tinkertown Museum</a>, 121 Sandia Crest Rd  Sandia Park, New Mexico"
    },

    {
        selector: '#cover21',
        headline: 'Java Junction',
        copy: "A place for serious coffee snobs. We went outside to the patio to talk to  Peter and his friend Steve, a local gallery owner who goes by the name GhostRider. We asked them about New Mexico. 'We are blessed here,' said Peter. 'There is so much more personal freedom here than anywhere else. You can do what you want to do. Less cops, less everything.' GhostRider interrupted his friend: 'Do not paint too pretty a picture. We like that you folks are not here.'",
        content: '<img src="images/java.jpg">',
        address: "• <a target='_blank' href='www.java-junction.com'>Java Junction</a>, 2855 Hwy. 14, Madrid, New Mexico"
    },

    {
        selector: '#cover22',
        headline: "Breaking Bad tour",
        copy: "We reached the <a target='_blank' href='http://www.guardian.co.uk/travel/2013/jun/28/road-trips-texas-new-mexico-day-five#block-51cdea50e4b042dd8f04a01d'>Breaking Bad</a> segment of this live blog. We picked up Miguel Jaramillo at our hotel and are driving around Albuquerque checking out filming locations.<br/><br/>Jaramillo started <a target='_blank' href='http://instagram.com/breakingbadlocations'>his Instagram account</a> tracking film locations as a hobby, but since the account has bloomed to 5,800 followers, he's thinking about making guided tours a full time gig. Thiis is the iconic car wash that is in no way whatsoever a money laundering operation … except in Breaking Bad.",
        content: '<img src="images/breakingbad.jpg">',
        address: "• The <a target='_blank' href='http://www.itsatrip.org/albuquerque/arts/breaking-bad-in-albuquerque.aspx'>Albuquerque Visitor Bureau</a> offers a map for self-guided tours "
    }


 ]

 function processPlaceClick(box) {

    $("#buttons").fadeOut();
    $(".dayofweek").fadeOut();
    $("#tooltip1").fadeOut();
    $("#lightbox").fadeIn(function(event){      
      $("#content").html(box.content);
      $("#copyheader").html(box.headline)
      $("#copy").html(box.copy)
      $("#address").html(box.address)
    });

 }

 $.each(boxs, function(i, box) {
        $(box.selector).on('click', function(e){
            e.preventDefault();
            processPlaceClick(box);
        });
    });


  $("#close").click(function(event) {        

    event.preventDefault();


    $("#lightbox").fadeOut(function(event){
       $("#buttons").fadeIn();
      $("#content").html('');
      $("#copyheader").html('');
      $("#copy").html('');
      $("#address").html('')
       $(".dayofweek").fadeIn();

    })

  });



}); //ready

