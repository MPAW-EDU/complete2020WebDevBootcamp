
$(document).ready(() => {

    // Add and remove class
    $("h1").addClass("big-title margin-50");
    $("h1").removeClass("big-title margin-50");

    // Allows you to change the inner text
    $("h1").text("Goodbye")
    // $("button").text("Don't Click Me")

    // Allows you to add html, similar to innerHTML
    // $("button").html("<em>Hey</em>")

    // Adding a listener
    // $("button").on("click", () => {
    //     alert("You Clicked it!")
    // })

    // Print out all of the classes from an item
    console.log($("h1").attr("class"));

    // Night Mode / Dark Mode using ON handler
    $("#night-mode").text("Dark-Mode");
    $("#night-mode").on("click", () => {
        console.log($("body"))
        console.log($("body")[0])
        console.log($("body").attr("class"))
        if($("body").hasClass("night-mode")){
            $("body").removeClass("night-mode");
            $("body").animate({opacity: 1});
            $("#night-mode").text("Dark-Mode");

        } else {
            $("body").addClass("night-mode");
            $("body").animate({opacity: 0.7});
            $("#night-mode").text("Light-Mode");
            console.log("Night-mode clicked!");
        }
    })

    // Click handler
    $("h1").click(() => {
        if($("body").hasClass("night-mode")){
            $("body").removeClass("night-mode");
            $("h1").removeClass("make-red");
            $("#night-mode").text("Dark-Mode");

        } else {
            $("body").addClass("night-mode");
            $("h1").addClass("make-red");
            $("#night-mode").text("Light-Mode");
            console.log("Night-mode clicked!");
        }
    })
});

$("a").attr("href", "https://www.bing.com");
$("a").text("Bing");

// Checking for key/typed input
$("input").keypress((e) => {
    $("h1").text(e.key);
})


// JQuery Animations
$("button#hideTitle").text("Hide-Title");
$("#hideTitle").on("click", (e) => {
    if($("h1").hasClass("hide-title")){
        $("h1").removeClass("hide-title");
    } else {
        $("h1").addClass("hide-title");
    }
})

$("#toggleHide").on("click", () => {
    $("h1").toggle();
})


// Fade in and out
$("#fade-toggle").on("click", () => {
    $("h1").fadeToggle();
})


// Slide up and down
$("#slide").on("click", () => {
    $("h1").slideToggle();
})


// Custom Animations
$("#animate").on("click", () => {
    $("h1").animate({opacity: 0.5});
})


