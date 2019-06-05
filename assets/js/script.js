//Strik through functionality
// $("li").click(function(){
//     console.log($(this).css("color"));

//     if($(this).css("color") == "rgb(0, 128, 0)"){
//     $(this).css({
//         color: "black",
//         textDecoration : "none"

//     })
// }
// else{
//     $(this).css({
//     color: "green",
//     textDecoration : "line-through"
//     })
//     }
// })

$("ul").on("click", "li",function(){
    $(this).toggleClass("done");
})


// delete functionality

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(200,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

// add 
$("input").keypress(function(event){
    if(event.which === 13){
        var task = $("input").val()
        $("ul").append("<li><span class='delete'><i class='fa fa-trash'></i></span>"+ task +"</li>")
        $("input").val("")
    }

})
// this is the toggling the input text
$("#plus").click(function(){
    $("input").fadeToggle()
})