const cors = "https://cors-bcs.herokuapp.com/";

$(document).ready(function(){

    // tne url for the overwatch api
    var queryURL = cors + 'https://overwatch-api.net/api/v1/hero';

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function(result){
        
       var characters = result.data
        
       
    //  the for loop that creates the buttons containing the hero's name
        for(var i = 0; i < characters.length; i++){
            var d = $("<button>");
            d.addClass("characters")
            d.addClass("btn btn-outline-success my-2 my-sm-0")
            d.data("url", characters[i].url)
            d.data("data-toggle", "modal")
            d.data("data-target", "#exampleModal")
            d.html(characters[i].name)
            $("#grid").append(d);
        }
    })

})

$(document).on("click", "button", function(){

    // targets the url of the selected hero's url found in the hero's json object
    var click = $(this).data().url;

    $("#videos").empty();
    


    //this refreshes the videos div containing the youtube videos
    $("#videos").empty();


    $.ajax({
       url: click,
       method: 'GET',
   }).done(function(result){

      console.log(result)
      console.log(result.age)
     
      var ctx = document.getElementById('myChart').getContext('2d');
      ctx.font="20px Georgia";
      ctx.fillText("Hello World!",10,50);
      
      $(".inner-content").text('HEALTH')
     
      var myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          
          data: {
              labels: [result.health],
              datasets: [{
                  label: "My First dataset",
                  backgroundColor: ['rgb(218, 252, 100)','rgb(252, 250, 250)'],
                  borderColor: 'white',
                  data: [result.health, 600 - result.health],
              
                   
              }]
          },

          // Configuration options go here
          options: {
              maintainAspectRatio: true,
              responsive: true,
              rotation: Math.PI *-0.01,
              cutoutPercentage: 80,
              animation:{
                  animateScale: true,
              },
          }
         
      });



    //this refreshes the details div containing the hero's details
    $("#details").empty();

    $("#detailGrid").empty();
    var details = $("<div>");
    details.addClass("hero-details")
    
    console.log(details)

    var heroName = $("<div>")



    var details = $("<div>");
    details.addClass("hero-details")

    // this starts the divs being used to display the hero's details
    var heroName = $("<h3>")

    heroName.addClass("hero-name")
    var name = $("<h3> Name: "+result.name+"</h3>");
    heroName.append(name)
    heroName.css({
        "border-bottom": "1px solid #292B2C"
    })

    $("#detailGrid").append(heroName)

    var heroInfo = $("<div>")
    heroInfo.addClass("hero-info")
        var affiliationDiv = $("<div>")
        var affiliationP= $("<div>" +result.affiliation+"</div>")
        var heroAffiliation = $("<div>")
        heroAffiliation.addClass("hero-Affiliation divGen")
        heroAffiliation.html("Affiliation: "+result.affiliation);
        console.log("Affiliation: "+result.affiliation)
        affiliationDiv.append(heroAffiliation)
        affiliationDiv.append(affiliationP)
        
        //result.affiliation

        var heroDifficulty = $("<div>")
        heroDifficulty.addClass("hero-difficulty divGen")
        heroDifficulty.html("Difficulty: "+result.difficulty)
    
       

        //result.difficulty
        var heroOperations = $("<div>")
        heroOperations.addClass("hero-operations divGen")
        heroOperations.html("Location: "+result.base_of_operations);

        var heroDescription = $("<p>")
        heroDescription.addClass("hero-description divGen")
        heroDescription.html("Description: ")

        var heroParagraph = $("<div>"+result.description+"</div>")
        heroParagraph.css({
            "text-align": "center",
            "padding-top": "10px",
            "padding-bottom": "10px "
        })
    


    $(heroInfo).append(heroAffiliation, heroDifficulty, heroDescription, heroParagraph, heroOperations, heroRole)


    var heroStats = $("<div>")
    heroStats.addClass("hero-stats divGen")
    heroStats.html("Hero Stats")


        $(heroInfo).append(heroStats)


        

        var abilities = $("<div>");
        var abilitiesText = $("<p> Abilities </p>");
        abilities.append(abilitiesText);
        abilities.addClass("divGen")
        $(heroInfo).append(abilities)

        var heroStats = $("<div>")
        heroStats.addClass("hero-stats")
        heroStats.html("Hero Stats")
        $(heroStats).append("<br>")
            var heroHealth = $("<span>")
            heroHealth.addClass("hero-health")
            heroHealth.append(result.health)
            $(heroStats).append("<br>")
            $(heroStats).append("Health: ")
            $(heroStats).append(heroHealth)
            $(heroStats).append("<br>")

            var heroArmour = $("<span>")
            heroArmour.addClass("hero-armour")
            heroArmour.append("Armor: ")
            heroArmour.append(result.armour)
            $(heroStats).append(heroArmour)
            $(heroStats).append("<br>")
            
            

            var abilities = $("<div>");
            var abilitiesText = $("<p> Abilities </p>");
            abilities.append(abilitiesText);
            $(heroStats).append("<br>")
            $(heroStats).append(abilities)


        // a for loop that displays every individual abilities of the selected Hero
        for(i = 0; i < result.abilities.length; i ++){
            var heroAbilities = $("<div>")
            heroAbilities.addClass("hero-abilities")
            heroAbilities.css({
                "margin-bottom": 5+"px", 
                "border-bottom": "1px solid black",
                "padding-top": "10px",
                "padding-bottom": "10px",
                "text-align": "center"
            });
            

            heroAbilities.html( result.abilities[i].name + ": " + result.abilities[i].description)
            $(heroInfo).append(heroAbilities)
        }
       
            var heroRole = $("<div>")
            heroRole.addClass("hero-role divGen")
            heroRole.html("Hero Role: " + result.role.name)
            $(heroOperations).append(heroRole)
            $(heroOperations).append("<br>")
            
            $(heroInfo).append(heroRole)
            
            // this creates an "<a>" tag that contains a link the selected Hero's lore
            var heroLore = $("<a>")
            heroLore.addClass("hero-role")
            heroLore.addClass("btn btn-outline-success my-2 my-sm-0")
            heroLore.html("Learn More about their Lore")
            heroLore.attr("href", "http://overwatch.wikia.com/wiki/" + result.name)
            heroLore.css({"background": "white ", 
            "border-right": "3px solid white",
            "margin-right": "15px",
            
            });
            heroLore.attr("target", "_blank")
            $(links).append("<br>")
            
        
            

            // this creates an "<a>" tag that contains a link the selected Hero's stats
           var heroRate = $("<a>")
           heroRate.addClass("hero-rate")
           heroRate.addClass("btn btn-outline-success my-2 my-sm-0")
           heroRate.html("Learn More About Their Win Rates")
           heroRate.attr("href", "https://www.overbuff.com/heroes/" + result.name)
           heroRate.css({"background": "white", 
           "border-right": "3px solid white",
           "margin-right": "15px"
            });
           heroRate.attr("target", "_blank")
           


          // this creates an "<a>" tag that contains a link redirecting to amazon with the search words of the selected Hero"
           var heroMerch = $("<a>")
           heroMerch.addClass("hero-merch")
           heroMerch.addClass("btn btn-outline-success my-2 my-sm-0")
           heroMerch.html("Buy " + result.name + " " + "Merch")
           heroMerch.attr("href", "https://www.amazon.com/s/ref=nb_sb_noss_1/142-0300230-6136724?url=search-alias%3Daps&field-keywords=overwatch+" + result.name)
           heroMerch.attr("target", "_blank")

           heroMerch.css({"background": "white" });
           

           heroMerch.css({"background": "black" });
           $(heroStats).append(heroMerch)

        // conditional statements for heros that have special characters in their name

           lowerCaseHero = result.name.toLowerCase()
           soldier = "soldier-76"
           lucio = "lucio"
           torbjorn = "torbjorn"
           dva = "dva"

        // displays the hero's thumbnail image
           var heroImg = $("<img>")
           heroImg.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + lowerCaseHero + "/icon-portrait.png")
           if(result.name == "Soldier: 76"){
               heroImg.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + soldier + "/icon-portrait.png")
           }
           if(result.name == "Torbjörn"){
               heroImg.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + torbjorn + "/icon-portrait.png")
           }
           if(result.name == "Lúcio"){
               heroImg.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + lucio + "/icon-portrait.png")
           }
           if(result.name == "D.Va"){
               heroImg.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + dva + "/icon-portrait.png")
           }
         
           $("#detailGrid").append(heroImg);
           var links = $("<div>")
           links.addClass("links divGen")
           links.html("Links: ")
           links.append("<br>")
           links.append(heroLore)
           links.append(heroRate)
           links.append(heroMerch)
           
        // the youtube api key along with the youtube url used for the ajax call
           var youtubeApiKey = "AIzaSyAgk2t-v33L1UZlEksXMD96frXKLKhNIUQ"
           var youtubeUrl = "https://cors-bcs.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=overwatch+" + result.name + "+" + "gameplay" + "&key=" + youtubeApiKey

           $.ajax({
               url: youtubeUrl,
               method: 'GET',
           }).done(function(response){


                // the css for the videos div

                $("#videos").css({
                    "display": "grid",
                    "grid-template-columns": "1fr 1fr",
                    "grid-template-rows": "auto",
                    "grid-gap": "5px",
                    

                })

            // the for loops that creates the iframe of the youtube videos of the selected hero
               for(i=0; i < response.items.length; i++){
                   console.log(response.items[i].id.videoId)
                   var video = $("<iframe>")
                   video.attr("class","video")
                   video.attr("height", "255")
                   video.attr("width", "450")
                   video.attr("src","https://www.youtube.com/embed/" + response.items[i].id.videoId)
                   video.attr("frameborder", "0")
                   $("#videos").append(video)
                   console.log(video)
               }
           })
    
    


    $(details).append(heroName, heroInfo, heroStats, links)

    
    $(details).append(heroName, heroInfo, heroStats)


    $("#details").append(details)
       
   })
   
});