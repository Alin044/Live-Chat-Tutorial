function _(element){
    return document.getElementById(element);
}

function readData(){
    var inner_pannel = _("inner_left_pannel"); 
}

var label = _("label_chat");
label.addEventListener("click", function(){
    var inner_pannel = _("inner_left_pannel");
    var ajax = new XMLHttpRequest();
    ajax.onload = function(){
        if(ajax.status == 200 || ajax.readyState == 4){
            inner_pannel.innerHTML = ajax.responseText;
        }
    }

    ajax.open("POST", "file.txt", true);
    ajax.send();
});

