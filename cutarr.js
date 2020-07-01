function suiji(all, part) {
    var arr1 = [];
    var allarr = [];
    for (var i = 0; i < all; i++) {
        arr1.push(i);
    }
    for (var i = 0; i < all / part; i++) {
        var newarr = [];
        for (var j = 0; j < part; j++) {
            newarr.push(arr1.splice(Math.floor(Math.random() * arr1.length), 1));
        }
        allarr.push(newarr);
    }
    return allarr;
}
self.onmessage = function (ev) {
    var arr = suiji(ev.data, ev.data / 10);
    self.postMessage(arr);
}