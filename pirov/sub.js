
var lastMsg = "--";
var up = 0;
var left = 0;

$(document).keydown(function(event) {
    var code = event.keyCode;
    
    if(37 <= code && code <= 40)
    {
        event.preventDefault();
        
        if (code === 37 && left === 0) left = 1;
        if (code === 38 && up === 0)   up = 1;
        if (code === 39 && left === 0) left = -1;
        if (code === 40 && up === 0)   up = -1;
        
        send(command(up, left));
    }
});

$(document).keyup(function(event) {
    var code = event.keyCode;
    
    if(37 <= code && code <= 40)
    {
        if (code === 38 || code === 40) up = 0;
        if (code === 37 || code === 39) left = 0;
        
        send(command(up, left));
    }
});

function command(up, left)
{
    if (up === 0)
    {
        if (left === 0)
            return "--";  // standby
        else if (left > 0)
            return "v^";  // hard left
        else
            return "^v";  // hard right
    }
    else if (up > 0)
    {
        if (left === 0)
            return "^^";  // forward
        else if (left > 0)
            return "-^";  // forward left
        else
            return "^-";  // forward right
    }
    else
    {
        if (left === 0)
            return "vv";  // back
        else if (left > 0)
            return "v-";  // back left
        else
            return "-v";  // back right
    }
}

function send(msg) {
    if(msg !== lastMsg)
    {
        //console.log("sent:"+msg);
        lastMsg = msg;
        // send to php on the pi via ajax
        $.post("pirov/receiver.php",
            {name: msg},
            // response from the pi
            function (data, status) {
                console.log("data=["+data+"]");
            }
        );
    }
}
