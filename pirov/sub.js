
var lastCode = 0;

$(document).keydown(function(event) {
    var code = event.keyCode;
    // Skip key repeats:
    if(lastCode == code)
        return;
    lastCode = code;
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

$(document).keyup(function(event) {
    var code = event.keyCode;
    if (code === 37) // left arrow
        send(" left_off ");
    if (code === 38) // up arrow
        send(" up_off ");
    if (code === 39) // right arrow
        send(" right_off ");
    if (code === 40) // down arrow
        send(" down_off ");
});

function send(msg) {
    $.post("pirov/receiver.php",
            {name: msg},
            function (data, status) {
                console.log("data=["+data+"]");
            });
}
