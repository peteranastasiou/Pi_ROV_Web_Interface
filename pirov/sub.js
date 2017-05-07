
$(document).keypress(function(event) {
    code = event.keyCode;
    if(37 <= code && code <= 40) {
        event.preventDefault();
    }
    if (code === 37) // left arrow
        send(" left ");
    if (code === 38) // up arrow
        send(" up ");
    if (code === 39) // right arrow
        send(" right ");
    if (code === 40) // down arrow
        send(" down ");
});

function send(msg) {
    $.post("pirov/receiver.php",
            {name: msg},
            function (data, status) {
                console.log("data=["+data+"]");
            });
}
