window.onload = function () {
    if (!ROT.isSupported()) {
        alert("rot.js is not supported.");
    } else {
        Game.init();
        document.body.appendChild(Game.getDisplay().getContainer());
    }
}

var Game = {
    _display: null,
    init: function () {
        this._display = new ROT.Display({ width: 80, height: 24 });
    },
    getDisplay: function () {
        return this._display;
    }
}