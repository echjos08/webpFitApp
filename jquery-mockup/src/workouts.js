$(document).ready(function(){
    $("button").click(function(){

        var workout = this.innerHTML;
        var time = prompt("For how long?");
        $("ul").append('<li class="list-group-item">'+ workout + " for "+time + '</li>' ); 
        
    });
   
});