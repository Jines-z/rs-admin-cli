var operationCookie = {
    get: function() {
        var cookie = {}, all = document.cookie, list, i, len, item, index;
        if (all === '') {
            return cookie;
        }
        list = all.split('; ');
        for (i = 0, len = list.length; i < len; i++) {
            item = list[i];
            index = item.indexOf('=');
            var cookieNow;
            try {
                cookieNow = decodeURIComponent(item.substring(index + 1));
            } catch (e) {
                cookieNow = item.substring(index + 1);
            }
            cookie[item.substring(0, index)] = cookieNow;
        }
        return cookie;
    },
    set: function(opt) {
        var cookie = opt.name + '=' + encodeURIComponent(opt.value);
        if (typeof opt.day === 'number' || typeof opt.hour === 'number' || typeof opt.min === 'number' || typeof opt.sec === 'number') {
            var time;
            //IE不支持max-age，使用expires
            if (window.navigator.userAgent.match(/MSIE/)) {
                var date = new Date();
                if (opt.day) {
                    time = opt.day * 24 * 3600 * 1000;
                } else if (opt.hour) {
                    time = opt.hour * 3600 * 1000;
                } else if (opt.min) {
                    time = opt.min * 60 * 1000;
                } else if (opt.sec) {
                    time = opt.sec * 1000;
                }
                date.setTime(new Date().getTime() + time);
                cookie += '; expires=' + date.toGMTString();
            } else {
                if (opt.day) {
                    time = opt.day * 60 * 60 * 24;
                } else if (opt.hour) {
                    time = opt.hour * 60 * 60;
                } else if (opt.min) {
                    time = opt.min * 60;
                } else if (opt.sec) {
                    time = opt.sec;
                }
                cookie += '; max-age=' + time;
            }
            if (opt.path) {
                cookie += '; path=' + opt.path;
            }
            if (opt.domain) {
                cookie += '; domain=' + opt.domain;
            }
        }
        document.cookie = cookie;
    },
    delete: function(name) {
        var exp = new Date();
        exp.setTime(exp.getTime() - 1);
        var cval = this.get()[name];
        if (cval !== null)
            document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
    },
    clearAll: function() {
        var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (keys) {
            for (var i = keys.length; i--;)
                document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
        }
    }
};
export default operationCookie;
