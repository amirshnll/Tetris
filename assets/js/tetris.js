//myTools Object Contained Game Tools
var myTools = {
    randomNumber: function (min, max) {
        // Generation Random Number
        "use strict";
        var randomResult = Math.floor(Math.random() * (max - min + 1)) + min;
        if (randomResult === undefined) {
            return min;
        } else if (randomResult < min) {
            return min;
        } else if (randomResult > max) {
            return min;
        } else {
            return randomResult;
        }
    },
    randomAlphabet: function () {
        "use strict";
        /*
        data.json contained :
        {
             alef    : 1371
             b       : 366
             p       : 165
             t       : 480
             s(...)  : 8
             jim     : 139
             che     : 85
             he      : 59
             khe     : 152
             dal     : 421
             zal     : 9
             re      : 930
             ze      : 186
             zhe     : 21
             sin     : 392
             shin    : 382
             sat     : 39
             zat     : 21
             t(|)    : 43
             z(|)    : 9
             ein     : 72
             ghein   : 45
             fe      : 163
             ghe     : 103
             kef     : 376
             gaf     : 200
             lam     : 386
             mim     : 538
             non     : 726
             vav     : 604
             he      : 424
             ye      : 819
             ---------------------
             sum : 1 to 9734 vaj
             random in sum number because up chance to alphabet :)
        }

        first Algoritm :::

         var randomNumber = this.randomNumber(0,31);
         var arrayAlphabet = ...;
         if(arrayAlphabet[randomNumber]===undefined)
         return arrayAlphabet[0];
         else
         return arrayAlphabet[randomNumber];

         */
        var arrayAlphabet = [
            "ا",
            "ب",
            "پ",
            "ت",
            "ث",
            "ج",
            "چ",
            "ح",
            "خ",
            "د",
            "ذ",
            "ر",
            "ز",
            "ژ",
            "س",
            "ش",
            "ص",
            "ض",
            "ط",
            "ظ",
            "ع",
            "غ",
            "ف",
            "ق",
            "ک",
            "گ",
            "ل",
            "م",
            "ن",
            "و",
            "ه",
            "ی"
        ];
        var MyRandomNumber = this.randomNumber(0, 9734);
        var alphabetCode = -1;

        /* Alphabet chance */
        switch (true) {
        case MyRandomNumber <= 1371:
            alphabetCode = 0;
            break;
        case MyRandomNumber <= 1737:
            alphabetCode = 1;
            break;
        case MyRandomNumber <= 1902:
            alphabetCode = 2;
            break;
        case MyRandomNumber <= 2382:
            alphabetCode = 3;
            break;
        case MyRandomNumber <= 2390:
            alphabetCode = 4;
            break;
        case MyRandomNumber <= 2529:
            alphabetCode = 5;
            break;
        case MyRandomNumber <= 2614:
            alphabetCode = 6;
            break;
        case MyRandomNumber <= 2673:
            alphabetCode = 7;
            break;
        case MyRandomNumber <= 2825:
            alphabetCode = 8;
            break;
        case MyRandomNumber <= 3246:
            alphabetCode = 9;
            break;
        case MyRandomNumber <= 3255:
            alphabetCode = 10;
            break;
        case MyRandomNumber <= 4185:
            alphabetCode = 11;
            break;
        case MyRandomNumber <= 4371:
            alphabetCode = 12;
            break;
        case MyRandomNumber <= 4392:
            alphabetCode = 13;
            break;
        case MyRandomNumber <= 4784:
            alphabetCode = 14;
            break;
        case MyRandomNumber <= 5166:
            alphabetCode = 15;
            break;
        case MyRandomNumber <= 5205:
            alphabetCode = 16;
            break;
        case MyRandomNumber <= 5226:
            alphabetCode = 17;
            break;
        case MyRandomNumber <= 5269:
            alphabetCode = 18;
            break;
        case MyRandomNumber <= 5278:
            alphabetCode = 19;
            break;
        case MyRandomNumber <= 5350:
            alphabetCode = 20;
            break;
        case MyRandomNumber <= 5395:
            alphabetCode = 21;
            break;
        case MyRandomNumber <= 5558:
            alphabetCode = 22;
            break;
        case MyRandomNumber <= 5661:
            alphabetCode = 23;
            break;
        case MyRandomNumber <= 6037:
            alphabetCode = 24;
            break;
        case MyRandomNumber <= 6237:
            alphabetCode = 25;
            break;
        case MyRandomNumber <= 6623:
            alphabetCode = 26;
            break;
        case MyRandomNumber <= 7161:
            alphabetCode = 27;
            break;
        case MyRandomNumber <= 7887:
            alphabetCode = 28;
            break;
        case MyRandomNumber <= 8491:
            alphabetCode = 29;
            break;
        case MyRandomNumber <= 8915:
            alphabetCode = 30;
            break;
        case MyRandomNumber <= 9734:
            alphabetCode = 31;
            break;
        default:
            alphabetCode = 0;
        }

        if (arrayAlphabet[alphabetCode] === undefined) {
            return arrayAlphabet[0];
        } else {
            return arrayAlphabet[alphabetCode];
        }
    },
    timerGame: function () {
        "use strict";
        // Game Timer In ScoreBox 00:00 up to 00:59 -> 01:00 and etc.
        var minute = document.getElementById("clock-minute").innerText;
        var second = document.getElementById("clock-second").innerText;
        var newSecond = "";
        var newMinute = "";

        if (parseInt(second) === 59) {
            newMinute = parseInt(minute) + 1;
            newMinute = newMinute.toString();
            document.getElementById("clock-minute").innerHTML = newMinute;
            document.getElementById("clock-second").innerHTML = "0";
        } else {
            newSecond = parseInt(second) + 1;
            newSecond = newSecond.toString();
            document.getElementById("clock-second").innerHTML = newSecond;
        }
    },
    dataJson: function (callback) {
        // Read Json File For Data
        "use strict";
        var rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", "assets/data/data.json", true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status === 200) {
                callback(rawFile.responseText);
            } else {
                return undefined;
            }
        };
        rawFile.send(null);
    },
    emptyText: function (count) {
        // Generated Empty String Count parametr Lenght.
        // eg: emptyText(3) -> "   "
        "use strict";
        if (count === undefined) {
            count = 0;
        }
        var emptyResult = "";
        var i = 0;
        while (i <= count) {
            emptyResult += " ";
            i += 1;
        }
        return emptyResult;
    }
};

/* Global Variables */
var lose = false;
var pause = false;
var currentSlice = "";
var intervalTimer;
var intervalGame;
var myData;
var tableRows = 13;
var tableColumn = 6;
var gameSpeed = 250;
var playerWinWord = 0;
var playerScore = 0;

// tetrisGame Object is Main Object For GamePlay
var tetrisGame = {
    loosing: function () {
        "use strict";
        clearInterval(intervalGame);
        clearInterval(intervalTimer);
        var temp;
        temp = document.getElementById("score").innerHTML;
        document.getElementById("resultScore").innerText = temp;
        temp = document.getElementById("win-word").innerHTML;
        document.getElementById("resultWinWord").innerText = temp;
        temp = document.getElementById("clock-minute").innerText;
        temp += " : ";
        temp += document.getElementById("clock-second").innerText;
        document.getElementById("resultTime").innerText = temp;
        $(".modal").modal("hide");
        var gameOverModal = $("#gameOverModal");
        gameOverModal.modal("show");
        lose = true;
    },
    newWordSlice: function () {
        // New Slice Character In Table For Fixed Current Slice
        "use strict";
        if (currentSlice !== undefined) {
            this.checkSlice();
        }
        var randomPosition = myTools.randomNumber(1, tableColumn);
        if (randomPosition > tableColumn) {
            this.loosing();
            return 0;
        }
        var newSlice = document.getElementById("col-1-" + randomPosition);
        if (newSlice.innerHTML !== "") {
            this.loosing();
            return 0;
        }
        newSlice.setAttribute("class", "word-slice currentSlice");
        newSlice.innerHTML = myTools.randomAlphabet();
        currentSlice = "col-1-" + randomPosition;
    },
    sliceBottom: function () {
        // Go Bottom Current Slice in Table
        "use strict";
        var temp;
        var sliceLocation = currentSlice.split("-");
        temp = "col-" + sliceLocation[1] + "-" + sliceLocation[2];
        temp = document.getElementById(temp);
        var srcColumn = temp;

        if (parseInt(sliceLocation[1]) === tableRows) {
            srcColumn.setAttribute("class", "word-slice");
            this.newWordSlice();
            return 0;
        }

        temp = "col-" + parseInt(parseInt(sliceLocation[1]) + 1);
        temp += "-" + sliceLocation[2];
        temp = document.getElementById(temp);
        var destColumn = temp;

        if (srcColumn === null || destColumn === null) {
            return 0;
        }
        if (destColumn.innerText === "") {
            destColumn.innerText = srcColumn.innerText;
            destColumn.setAttribute("class", "word-slice currentSlice");
            currentSlice = "col-" + parseInt(parseInt(sliceLocation[1]) + 1);
            currentSlice += "-" + sliceLocation[2];
            srcColumn.innerText = "";
            srcColumn.setAttribute("class", "");
        } else {
            if (parseInt(sliceLocation[1]) === 1) {
                this.loosing();
                return 0;
            }
            srcColumn.setAttribute("class", "word-slice");
            this.newWordSlice();
        }
    },
    sliceLeft: function () {
        // Go Left Current Slice in Table
        "use strict";
        var srcColumn;
        var destColumn;
        var sliceLocation = currentSlice.split("-");
        if (sliceLocation[2] === "1") {
            return 0;
        }
        srcColumn = "col-" + sliceLocation[1] + "-" + sliceLocation[2];
        srcColumn = document.getElementById(srcColumn);
        destColumn = "col-" + sliceLocation[1] + "-";
        destColumn += parseInt(parseInt(sliceLocation[2]) - 1);
        destColumn = document.getElementById(destColumn);
        if (srcColumn === null || destColumn === null) {
            return 0;
        }
        if (destColumn.innerText === "") {
            destColumn.innerText = srcColumn.innerText;
            destColumn.setAttribute("class", "word-slice currentSlice");
            currentSlice = "col-" + sliceLocation[1] + "-";
            currentSlice += parseInt(parseInt(sliceLocation[2]) - 1);
            srcColumn.innerText = "";
            srcColumn.setAttribute("class", "");
        } else {
            return 0;
        }
    },
    slideRight: function () {
        // Go Right Current Slice in Table
        "use strict";
        var srcColumn;
        var destColumn;
        var sliceLocation = currentSlice.split("-");
        if (sliceLocation[2] === tableColumn) {
            return 0;
        }
        srcColumn = "col-" + sliceLocation[1] + "-" + sliceLocation[2];
        srcColumn = document.getElementById(srcColumn);
        destColumn = "col-" + sliceLocation[1] + "-";
        destColumn += parseInt(parseInt(sliceLocation[2]) + 1);
        destColumn = document.getElementById(destColumn);
        if (srcColumn === null || destColumn === null) {
            return 0;
        }
        if (destColumn.innerText === "") {
            destColumn.innerText = srcColumn.innerText;
            destColumn.setAttribute("class", "word-slice currentSlice");
            currentSlice = "col-" + sliceLocation[1] + "-";
            currentSlice += parseInt(parseInt(sliceLocation[2]) + 1);
            srcColumn.innerText = "";
            srcColumn.setAttribute("class", "");
        } else {
            return 0;
        }
    },
    checkSlice: function () {
        /* Check Slice For WinWord.
         * Algoritm :
          * 1. checkSlice Function Called Fixed CurrentSlice
          * 2. check this Rows For Win Word
          * 3. Loop myData Word From Json File to Search Words
          * 4. if Find Word Delete WinWord Char Slice
          * */
        "use strict";
        if (myData === undefined || currentSlice === "") {
            return 0;
        }
        var gameBoard = document.getElementById("game-board");
        var tempRow = "";
        var wordPosition = -1;
        var change = 0;
        var sliceLocation = currentSlice.split("-");
        var cellsLength;
        cellsLength = parseInt(sliceLocation[1]) - 1;
        cellsLength = gameBoard.rows[cellsLength].cells.length - 1;
        var checkRows = parseInt(sliceLocation[1]) - 1;
        var i = cellsLength;
        var j = 0;
        var k = 0;
        var tempCounter = 0;
        var temp;
        while (i >= 0) {
            if (gameBoard.rows[checkRows].cells[i].innerText !== "") {
                tempRow += gameBoard.rows[checkRows].cells[i].innerText;
            } else {
                tempRow += " ";
            }
            i -= 1;
        }

        while (j <= myData.word.length) {
            wordPosition = tempRow.indexOf(myData.word[j]);
            if (wordPosition !== -1) {
                temp = myTools.emptyText(myData.word[j].length);
                tempRow = tempRow.replace(myData.word[j], temp);
                this.addScore();
                change = 1;
            }

            if (change === 1) {
                change = 0;
                tempCounter = 0;
                k = cellsLength;
                while (k >= 0) {
                    if (tempRow.slice(tempCounter, tempCounter + 1) === " ") {
                        gameBoard.rows[checkRows].cells[k].innerText = "";
                        gameBoard.rows[checkRows].cells[k]
                            .setAttribute("class", "");
                        if (checkRows !== tableRows) {
                            this.freeBottomSlice(k + 1);
                        }
                    }
                    tempCounter += 1;
                    k -= 1;
                }
                break;
            }
            j += 1;
        }
    },
    freeBottomSlice: function (checkColumn) {
        // Check Top Slice In WinWord Time and go bottom top slice deleted slice
        "use strict";
        var srcColumn;
        var destColumn;
        var i = tableRows - 1;
        while (i >= 1) {
            srcColumn = "col-" + i + "-" + checkColumn;
            srcColumn = document.getElementById(srcColumn);
            destColumn = "col-" + parseInt(i + 1) + "-" + checkColumn;
            destColumn = document.getElementById(destColumn);
            if (srcColumn === null || destColumn === null) {
                return 0;
            }
            if (srcColumn.innerText !== "" && destColumn.innerText === "") {
                destColumn.innerText = srcColumn.innerText;
                destColumn.setAttribute("class", "word-slice");
                srcColumn.innerText = "";
                srcColumn.setAttribute("class", "");
            }
            i -= 1;
        }

    },
    addScore: function () {
        // Score Up - ScoreBox
        "use strict";
        playerWinWord += 1;
        document.getElementById("win-word").innerHTML = playerWinWord;
        playerScore += 5 * playerWinWord;
        document.getElementById("score").innerHTML = playerScore;

        //GameSpeed Uping
        clearInterval(intervalGame);
        if (gameSpeed >= 10) {
            gameSpeed = gameSpeed - 10;
        }
        intervalGame = setInterval(function () {
            tetrisGame.sliceBottom();
        }, gameSpeed);
    }
};


// Game Controller Event
document.getElementById("body").onload = function () {
    /* Main Load Event */
    "use strict";
    //var waterMark = document.getElementById("watermark");
    //waterMark.style.height = screen.height + "px";
    tetrisGame.newWordSlice();
    myTools.dataJson(function (jsonText) {
        myData = JSON.parse(jsonText);
        var music = document.getElementById("music-player");
        music.volume = 0.1;
        music.play();
    });
};

document.getElementById("body").onkeydown = function (e) {
    //Keys Event
    "use strict";
    e = e.which;
    //Pause Shortcut Key
    if (e === 80) {
        if (pause === true) {
            document.getElementById("resume-game").onclick();
            return 0;
        } else if (pause === false && lose === false) {
            document.getElementById("pause-game").onclick();
            return 0;
        }
    }

    //Reload Shortcut Key
    if (e === 82) {
        document.getElementById("new-game").onclick();
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

    //Hide Modal With Escape
    if (e === 27) {
        $(".modal").modal("hide");
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

    //Back To Home Shortcut Key
    if (e === 66) {
        document.getElementById("back-home").onclick();
        return 0;
    }

    //Keyboard Controller
    if (pause === false && lose === false) {
        if (e === 37) {
            tetrisGame.sliceLeft();
        } else if (e === 39) {
            tetrisGame.slideRight();
        } else if (e === 40) {
            tetrisGame.sliceBottom();
        }
    }
};

document.getElementById("new-game").onclick = function () {
    //New Game Button Event
    "use strict";
    window.location.reload();
};

document.getElementById("back-home").onclick = function () {
    //Back Home Button Event
    "use strict";
    window.location.assign("index.html");
};

document.getElementById("pause-game").onclick = function () {
    //Pause Game Button Event
    "use strict";
    if (lose === true) {
        return 0;
    }
    pause = true;
    document.getElementById("resume-game").style.display = "block";
    this.style.display = "none";
    clearInterval(intervalGame);
    clearInterval(intervalTimer);
    intervalGame = undefined;
    intervalTimer = undefined;
};

document.getElementById("resume-game").onclick = function () {
    //Resume Game Button Event
    "use strict";
    pause = false;
    document.getElementById("pause-game").style.display = "block";
    this.style.display = "none";
    intervalTimer = setInterval(function () {
        myTools.timerGame();
    }, 1000);
    intervalGame = setInterval(function () {
        tetrisGame.sliceBottom();
    }, gameSpeed);
};

document.getElementById("music-on").onclick = function () {
    //Change Music On To Off
    "use strict";
    document.getElementById("music-off").style.display = "inline-block";
    this.style.display = "none";
    var music = document.getElementById("music-player");
    music.pause();
};

document.getElementById("music-off").onclick = function () {
    //Change Music Off To On
    "use strict";
    document.getElementById("music-on").style.display = "inline-block";
    this.style.display = "none";
    var music = document.getElementById("music-player");
    music.volume = 0.1;
    music.play();
};

document.getElementById("lose-new-game").onclick = function () {
    //New Game Button In GameOver Modal Event
    "use strict";
    document.getElementById("new-game").onclick();
};

document.getElementById("go-left").onclick = function () {
    //Left Key In MobilePhone
    "use strict";
    if (pause === false && lose === false) {
        tetrisGame.sliceLeft();
    }
};

document.getElementById("go-right").onclick = function () {
    //Right Key In MobilePhone
    "use strict";
    if (pause === false && lose === false) {
        tetrisGame.slideRight();
    }
};

document.getElementById("go-bottom").onclick = function () {
    //Left Key In MobilePhone
    "use strict";
    if (pause === false && lose === false) {
        tetrisGame.sliceBottom();
    }
};

// Game Intervals
intervalTimer = setInterval(function () {
    // Timer Intervals For Game Time
    "use strict";
    myTools.timerGame();
}, 1000);
intervalGame = setInterval(function () {
    // Game Play Intervals
    "use strict";
    tetrisGame.sliceBottom();
}, gameSpeed);