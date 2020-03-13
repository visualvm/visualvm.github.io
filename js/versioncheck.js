function checkVersion(pagebase) {
    if (window.location.search) {
        var version = window.location.search.substring(1);

        if (version.startsWith("VisualVM_1")) document.getElementById("header_div").innerHTML += visualVMUpgrade(pagebase, version);
    }
}

function visualVMUpgrade(pagebase, oldversion) {
    var target = pagebase + "/download.html";
    var message = "Still using " + oldversion.replace("_", " ") + "? <a style='margin-left: 5px;' href='" + target + "'>Download the latest version!</a>";

    return "\
        <div class='header_alert'>\
            <center>" + message + "</center>\
        </div>\
    ";
}
