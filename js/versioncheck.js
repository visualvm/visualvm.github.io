function checkVersion(pagebase) {
    if (window.location.search) {
        var version = window.location.search.substring(1);

        if (version.startsWith("VisualVM_1")) document.getElementById("header_div").innerHTML += visualVMUpgrade(pagebase, version);
        else if (version.startsWith("Java_VisualVM")) document.getElementById("header_div").innerHTML += javaVisualVMUpgrade(pagebase);
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

function javaVisualVMUpgrade(pagebase) {
    var target = pagebase + "/javavisualvm.html";
    var message = "Using Java VisualVM? <a style='margin-left: 5px;' href='" + target + "'>Learn how to upgrade to the latest VisualVM version!</a>";

    return "\
        <div class='header_alert'>\
            <center>" + message + "</center>\
        </div>\
    ";
}
