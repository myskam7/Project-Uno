 // Input name into search bar to search for id
 const cors = "https://cors-bcs.herokuapp.com/";
 
 $(document).ready(function(){
     var queryURL = cors + 'https://overwatch-api.net/api/v1/hero';

     $.ajax({
         url: queryURL,
         method: 'GET',
     }).done(function(result){
         var characters = result
         console.log(characters)
         
         for(i = 0; i < characters.data.length; i++){
             var d = $("<button>");
             d.addClass("btn btn-outline-success my-2 my-sm-0")
             d.attr("id", "selected")
             d.data("name", characters.data[i].name)
             d.data("affiliation", characters.data[i].affiliation)
             d.data("description", characters.data[i].description)
             d.data("difficulty", characters.data[i].difficulty)
             d.data("health", characters.data[i].health)
             d.data("armour", characters.data[i].armour)
             d.data("base_of_operations", characters.data[i].base_of_operations)

             var link = $("<a>")
             link.attr("href", characters.data[i].url )
             link.html("hello")

             d.append(link);


             d.data("data-toggle", "modal")
             d.data("data-target", "#exampleModal")
             d.html(characters.data[i].name + ": " + characters.data[i].id)
             $("#grid").append(d);

         }


     })

 })

 function displayInfo(){
     var selectedName = $(this).data("name");
     var selectedAffiliation = $(this).data("affiliation")
     var selectedDescription = $(this).data("description")
     var selectedDifficulty = $(this).data("difficulty")
     var selectedHealth = $(this).data("health")
     var selectedArmour = $(this).data("armour")
     var selectedBaseOfOperations = $(this).data("base_of_operations")
     var selectedUrl = $(this)


     console.log(selectedUrl);

     $("#details").empty();
 
     var details = $("<div>");
     details.addClass("hero-details")

     var heroName = $("<h3>")
     heroName.addClass("hero-name")
     heroName.html(selectedName)

     var heroInfo = $("<div>")
     heroInfo.addClass("hero-info")

         var heroAffiliation = $("<div>")
         heroAffiliation.addClass("hero-Affiliation")
         heroAffiliation.html(selectedAffiliation);

         var heroDifficulty = $("<span>")
         heroDifficulty.addClass("hero-difficulty")
         heroDifficulty.html(selectedDifficulty)

         var heroOperations = $("<div>")
         heroOperations.addClass("hero-operations")
         heroOperations.html(selectedBaseOfOperations);

         var heroDescription = $("<p>")
         heroDescription.addClass("hero-description")
         heroDescription.html(selectedDescription)


     $(heroInfo).append(heroAffiliation, heroDifficulty, heroDescription, heroOperations)

     var heroStats = $("<div>")
     heroStats.addClass("hero-stats")
     heroStats.html("Hero Stats")

         var heroHealth = $("<span>")
         heroHealth.addClass("hero-health")
         heroHealth.html(selectedHealth)

         var heroArmour = $("<span>")
         heroArmour.addClass("hero-armour")
         heroArmour.html(selectedArmour)
     
     $(heroStats).append(heroHealth, heroArmour)

     $(details).append(heroName, heroInfo, heroStats)

     $("#details").append(details)
     
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

 $(document).on("click", "#selected", displayInfo);

 // $(".btn btn-outline-success my-2 my-sm-0").on("click", function(event){
 //     event.preventDefault();
 //     console.log("You clicked on " + this.data.id);
 // }); 
 