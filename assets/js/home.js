document.getElementById("music-on").onclick = function () {
    // Change Music On To Off
    "use strict";
    document.getElementById("music-off").style.display = "inline-block";
    this.style.display = "none";
    var music = document.getElementById("music-player");
    music.pause();
};

document.getElementById("music-off").onclick = function () {
    // Change Music Off To On
    "use strict";
    document.getElementById("music-on").style.display = "inline-block";
    this.style.display = "none";
    var music = document.getElementById("music-player");
    music.volume = 0.1;
    music.play();
};

document.getElementById("start-game").onclick = function () {
    // Start Game Button Event
    "use strict";
    window.location.assign("game.html");
};

document.getElementById("body").onkeydown = function (e) {
    //Keys Event
    "use strict";
    e = e.which;

    //Hide Modal With Escape
    if (e === 27) {
        $(".modal").modal("hide");
        return 0;
    }

    //Music Off Shortcut Key
    if (e === 48) {
        document.getElementById("music-on").onclick();
        return 0;
    }

    //Music On Shortcut Key
    if (e === 49) {
        document.getElementById("music-off").onclick();
        return 0;
    }

    //Help Game Shortcut Key
    if (e === 72) {
        $(".modal").modal("hide");
        var helpModal = $("#helpModal");
        helpModal.modal("show");
        return 0;
    }

    //About Game Shortcut Key
    if (e === 65) {
        $(".modal").modal("hide");
        var aboutModal = $("#aboutModal");
        aboutModal.modal("show");
        return 0;
    }

    //Share Game Shortcut Key
    if (e === 83) {
        $(".modal").modal("hide");
        var shareModal = $("#shareModal");
        shareModal.modal("show");
        return 0;
    }

    //Start Shortcut Key
    if (e === 13) {
        document.getElementById("start-game").onclick();
        return 0;
    }
};

// Initial Javascript in Root index.html
var music = document.getElementById("music-player");
music.volume = 0.1;
music.play();

var waterMark = document.getElementById("watermark");
waterMark.style.height = screen.height + "px";