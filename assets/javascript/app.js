
        $(document).ready(function () {
            // Input name into search bar to search for id
            const cors = "https://cors-bcs.herokuapp.com/";
            var queryURL = cors + 'https://overwatch-api.net/api/v1/hero';

            $.ajax({
                url: queryURL,
                method: 'GET',
            }).done(function (result) {

                var characters = result.data
               

                for (var i = 0; i < characters.length; i++) {
                    var d = $("<button>")
                    d.addClass("btn btn-outline-success my-2 my-sm-0")
                    d.data("url", characters[i].url)
                    d.data("data-toggle", "modal")
                    d.data("data-target", "#exampleModal")
                    d.html(characters[i].name + ": " + characters[i].id)
                    $("#grid").append(d);


                }


                $(document).on("click", "button", function () {


                    var click = $(this).data().url;

                    $.ajax({
                        url: click,
                        method: 'GET',
                    }).done(function (result) {
                        console.log(result.armour)
                        

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





                        $("#details").empty();

                        var details = $("<div>");
                        details.addClass("hero-details")

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

                        var heroShield = $("<span>")
                        heroShield.addClass("hero-armour")
                        heroShield.html(result.armour)

                        var Abilities = $("<span>")
                        Abilities.addClass("abilities")
                        Abilities.html(result.abilities)

                        $(heroStats).append(heroHealth, heroShield)

                        $(details).append(heroName, heroInfo, heroStats, Abilities)

                        $("#details").append(details)
                        console.log('result', result);


                    })

                });


            });


        });