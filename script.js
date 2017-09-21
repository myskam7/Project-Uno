const cors = "https://cors-bcs.herokuapp.com/";

$(document).ready(function(){

    var queryURL = cors + 'https://overwatch-api.net/api/v1/hero';

    $.ajax({
        url: queryURL,
        method: 'GET',
    }).done(function(result){
        
       var characters = result.data
        //console.log(characters);
        
        for(var i = 0; i < characters.length; i++){
            var d = $("<button>");
            d.addClass("btn btn-outline-success my-2 my-sm-0")
            d.data("url", characters[i].url)
            d.data("data-toggle", "modal")
            d.data("data-target", "#exampleModal")
            d.html(characters[i].name + ": " + characters[i].id)
            $("#grid").append(d);

           //  var img = $("<img>");
           //  img.addClass("hero-thumbnail")
           //  img.attr("src", "https://blzgdapipro-a.akamaihd.net/hero/" + characters[i].name + "/icon-portrait.png")
           //  //https://blzgdapipro-a.akamaihd.net/hero/genji/icon-portrait.png
           //  $(d).append(img);
        }


    })

})

function displayInfo(){
    
    
    
    // var modal = $("<div>");
    // modal.addClass("modal fade");
    // modal.attr("id", "myModal");
    // modal.attr("tabindex", "-1");
    // modal.attr("role", "dialog");
    // modal.attr("aria-labelledby","exampleModalLabel")
    // modal.attr("aria-hidden", "true")

    // var modalDialog = $("<div>")
    // modalDialog.addClass("modal-dialog")
    // modalDialog.attr("role", "document")

    // var modalContent = $("<div>")
    // modalContent.addClass("modal-content")

    // $(modal).append(modalDialog, modalContent)
    
    // var modalHeader = $("<div>")
    // modalHeader.addClass("modal-header")

    // var modalTitle = $("<h3>")
    // modalTitle.addClass("modal-title")
    // modalTitle.html(selectedName)

    // var closeModal = $("<button>")
    // closeModal.addClass("close")
    // closeModal.data("data-dismiss", "modal")
    // closeModal.attr("aria-label", "Close")

    // var closeSpan = $("<span>");
    // closeSpan.attr("aria-hidden", "true")
    // closeSpan.html("&times;")

    // $(closeModal).append(closeSpan)

    // $(modalHeader).append(modalTitle, closeModal)

    // $(modalContent).append(modalHeader);

    // var modalBody = $("<div>");
    // modalBody.addClass('modal-body');
    // modalBody.html(selectedAffiliation);

    // var modalFooter = $("<div>");
    // modalFooter.addClass("modal-footer");
    // modalFooter.html(selectedName)

    // $(modal).append(modalBody, modalFooter);



}

$(document).on("click", "button", function(){

    var click = $(this).data().url;

    $.ajax({
       url: click,
       method: 'GET',
   }).done(function(result){
      console.log(result)
      console.log(result.age)
     


    $("#details").empty();

    var details = $("<div>");
    details.addClass("hero-details")
    console.log(details)

    var heroName = $("<h3>")
    heroName.addClass("hero-name")
    heroName.html(result.name)

    var heroInfo = $("<div>")
    heroInfo.addClass("hero-info")

        var heroAffiliation = $("<div>")
        heroAffiliation.addClass("hero-Affiliation")
        heroAffiliation.html(result.affiliation);

        var heroDifficulty = $("<span>")
        heroDifficulty.addClass("hero-difficulty")
        heroDifficulty.html(result.difficulty)

        var heroOperations = $("<div>")
        heroOperations.addClass("hero-operations")
        heroOperations.html(result.base_of_operations);

        var heroDescription = $("<p>")
        heroDescription.addClass("hero-description")
        heroDescription.html(result.description)



    $(heroInfo).append(heroAffiliation, heroDifficulty, heroDescription, heroOperations)

    var heroStats = $("<div>")
    heroStats.addClass("hero-stats")
    heroStats.html("Hero Stats")

        var heroHealth = $("<span>")
        heroHealth.addClass("hero-health")
        heroHealth.html(result.health)

        var heroArmour = $("<span>")
        heroArmour.addClass("hero-armour")
        heroArmour.html(result.armour)

        for(i = 0; i < result.abilities.length; i ++){
            var heroAbilities = $("<div>")
            heroAbilities.addClass("hero-abilities")
            heroAbilities.html("Abilities" + "<br>" + result.abilities[i].name + ": " + result.abilities[i].description)
            $(heroStats).append(heroAbilities)
        }
       
            var heroRole = $("<div>")
            heroRole.addClass("hero-role")
            heroRole.html("Hero Role: " + "<br>" + result.role.name)
            $(heroStats).append(heroRole)

            var heroLore = $("<a>")
            heroLore.addClass("hero-role")
            heroLore.html("Learn More about their Lore")
            heroLore.attr("href", "http://overwatch.wikia.com/wiki/" + result.name)
            $(heroStats).append(heroLore)

           //  https://www.overbuff.com/heroes/genji
           //https://blzgdapipro-a.akamaihd.net/hero/genji/icon-portrait.png
           var heroRate = $("<a>")
           heroRate.addClass("hero-rate")
           heroRate.html("Learn More About Their Win Rates")
           heroRate.attr("href", "https://www.overbuff.com/heroes/" + result.name)
           $(heroStats).append(heroRate)


           //https://www.amazon.com/s/ref=nb_sb_noss_1/142-0300230-6136724?url=search-alias%3Daps&field-keywords=overwatch+genji
           var heroMerch = $("<a>")
           heroMerch.addClass("hero-merch")
           heroMerch.html("Buy " + result.name + " " + "Merch")
           heroMerch.attr("href", "https://www.amazon.com/s/ref=nb_sb_noss_1/142-0300230-6136724?url=search-alias%3Daps&field-keywords=overwatch+" + result.name)
           $(heroStats).append(heroMerch)

           lowerCaseHero = result.name.toLowerCase()
           soldier = "soldier-76"
           lucio = "lucio"
           torbjorn = "torbjorn"
           dva = "dva"

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
           $(heroStats).append(heroImg)
           
           var youtubeApiKey = "AIzaSyAgk2t-v33L1UZlEksXMD96frXKLKhNIUQ"
           var youtubeUrl = "https://cors-bcs.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=overwatch+" + result.name + "+" + "gameplay" + "&key=" + youtubeApiKey
           $.ajax({
               url: youtubeUrl,
               method: 'GET',
           }).done(function(response){
               console.log(response)
               for(i=0; i < response.items.length; i++){
                   console.log(response.items[i].id.videoId)
                   var video = $("<iframe>")
                   video.attr("class","video")
                   video.attr("height", "420")
                   video.attr("width", "600")
                   video.attr("src","https://www.youtube.com/embed/" + response.items[i].id.videoId)
                   video.attr("frameborder", "0")
                   $("#details").append(video)
                   console.log(video)
               }
           })
    
    $(heroStats).append(heroHealth, heroArmour)

    $(details).append(heroName, heroInfo, heroStats)

       $("#details").append(details)
       console.log('result', result);

       
   })
   
});