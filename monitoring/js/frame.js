var mcd={coverbg:"rgba(0,0,0,0.75)",boxwidth:"70%",boxpadding:"1.2em 5% 1.4em",boxmargin:"0 10%",boxbg:"#fff",boxborder:"none",boxshadow:"none",boxradius:"0.5em",falign:"center",fcolor:"#555",fsize:"0.85em",fweight:"normal",fstyle:"normal",flineh:"1.5em",btnwidth:"40%",btnbg1:"#15d6b7",btnbg2:"#15d6b7",btnborder:"0",btnshadow:"none",btnradius:"0.4em",btnfcolor:"#fff",btnfsize:"0.85em",btnfweight:"normal",btnfstyle:"normal",btnflineh:"2.2em",btnls:"0.1em",btnmargintop:"1em"};
var ud = "undefined";

function rs() {
    var c = document.documentElement.clientWidth,
        a = document.documentElement.clientHeight;
    $("body").css({
        fontSize: 1 * c / 360 + "em"
    });
    var b, f;
    b = c / a > 720 / 936 ? a / 936 * 720 : c;
    f = c / a < 720 / 1390 ? c / 720 * 1390 : a;
    var d = (a - f) / 2,
        e = (c - b) / 2,
        c = b / c;
    $(".bodyctrl").css({
        width: b + "px",
        top: d + "px",
        height: f + "px",
        left: e + "px",
        fontSize: c + "em"
    });
    $(".bodyview").css({
        width: b + "px",
        left: e + "px"
    });
    $(".bodyviewf").css({
        width: b + "px",
        left: e + "px",
        fontSize: c + "em"
    });
    a = a / 1136 * 720;
    a > b && (a = b);
    d = (b - a) / 2;
    b = a / b;
    $(".framectrl").css({
        width: a + "px",
        top: 0,
        height: f + "px",
        left: d + "px",
        fontSize: b + "em"
    })
    $(".framectrlc").css({
        fontSize: b + "em"
    })
}
$(window).resize(function() {
    rs()
});
$(function() {
    rs();
    $("body").append('\x3cdiv class\x3d"msg pf h100 t0 l0 hide" style\x3d"z-index:999999"\x3e\x3ctable class\x3d"msg_f pf t0 l0 h100 full_tb" style\x3d"background:' + mcd.coverbg + '"\x3e\x3ctr\x3e\x3ctd\x3e\x3cdiv class\x3d"msg_m" style\x3d"width:' + mcd.boxwidth + ";margin:" + mcd.boxmargin + ";padding:" + mcd.boxpadding + ";background:" + mcd.boxbg + ";border:" + mcd.boxborder + ";box-shadow:" + mcd.boxshadow + ";border-radius:" + mcd.boxradius + '"\x3e\x3cdiv class\x3d"msg_t" style\x3d"text-align:' + mcd.falign + ";color:" + mcd.fcolor + ";font-size:" + mcd.fsize + ";font-weight:" + mcd.fweight + ";font-style:" + mcd.fstyle + ";line-height:" + mcd.flineh + '"\x3e\x3c/div\x3e\x3cdiv class\x3d"msg_btn msg_b1 tac" style\x3d"width:' + mcd.btnwidth + ";background:" + mcd.btnbg1 + ";border:" + mcd.btnborder + ";box-shadow:" + mcd.btnshadow + ";border-radius:" + mcd.btnradius + ";color:" + mcd.btnfcolor + ";font-size:" + mcd.btnfsize + ";font-weight:" + mcd.btnfweight + ";font-style:" + mcd.btnfstyle + ";line-height:" + mcd.btnflineh + ";letter-spacing:" + mcd.btnls + ";margin-top:" + mcd.btnmargintop + '"\x3e\x3cspan style\x3d"padding-left:' + mcd.btnls + '"\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"msg_btn msg_b2 tac" style\x3d"width:' + mcd.btnwidth + ";background:" + mcd.btnbg2 + ";border:" + mcd.btnborder + ";box-shadow:" + mcd.btnshadow + ";border-radius:" + mcd.btnradius + ";color:" + mcd.btnfcolor + ";font-size:" + mcd.btnfsize + ";font-weight:" + mcd.btnfweight + ";font-style:" + mcd.btnfstyle + ";line-height:" + mcd.btnflineh + ";letter-spacing:" + mcd.btnls + ";margin-top:" + mcd.btnmargintop + '"\x3e\x3cspan style\x3d"padding-left:' + mcd.btnls + '"\x3e\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e')
});

function msg(c, a, b, f) {
    if (typeof c != ud) {
        var d = typeof c,
            e = typeof a,
            k = typeof b,
            l = typeof f,
            g = $(".msg"),
            h = g.find(".msg_btn"),
            n = g.find(".msg_btn").eq(0),
            m = g.find(".msg_btn").eq(1),
            p = n.find("span"),
            q = m.find("span");
        g.find(".msg_t").html(c);
        h.show();
        "string" == d && e == ud ? (h.css({
            background: mcd.btnbg1,
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }), n.hide(), q.html("\u5173\u95ed"), g.stop().fadeIn(300, function() {
            m.unbind().bind("click", closemsg)
        })) : "string" == d && "string" == e && k == ud ? (h.css({
            background: mcd.btnbg1,
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }), n.hide(), q.html(a), g.stop().fadeIn(300, function() {
            m.unbind().bind("click", closemsg)
        })) : "string" == d && "number" == e && k == ud ? (h.hide(), g.stop().fadeIn(300, function() {
            0 !== a && setTimeout(function() {
                g.fadeOut(300)
            }, a)
        })) : "string" == d && "function" == e && k == ud ? (n.css({
            background: mcd.btnbg1
        }), m.css({
            background: mcd.btnbg2
        }), 50 <= toint(mcd.btnwidth) ? h.css({
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }) : h.css({
            marginLeft: (100 - 2 * toint(mcd.btnwidth)) / 3 + "%"
        }), p.html("\u786e\u5b9a"), q.html("\u53d6\u6d88"), g.stop().fadeIn(300, function() {
            n.unbind().bind("click", function() {
                closemsg(a)
            });
            m.unbind().bind("click", closemsg)
        })) : "string" == d && "object" == e && "function" == k && l == ud ? (n.css({
            background: mcd.btnbg1
        }), m.css({
            background: mcd.btnbg2
        }), 50 <= toint(mcd.btnwidth) ? h.css({
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }) : h.css({
            marginLeft: (100 - 2 * toint(mcd.btnwidth)) / 3 + "%"
        }), p.html(a[0]), q.html(a[1]), g.stop().fadeIn(300, function() {
            n.unbind().bind("click", function() {
                closemsg(b)
            });
            m.unbind().bind("click", closemsg)
        })) : "string" == d && "function" == e && "boolean" == k && 1 == b ? (h.css({
            background: mcd.btnbg1,
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }), m.hide(), p.html("\u786e\u5b9a"), g.stop().fadeIn(300, function() {
            n.unbind().bind("click", function() {
                closemsg(a)
            })
        })) : "string" == d && "string" == e && "function" == k && "boolean" == l && 1 == f ? (h.css({
            background: mcd.btnbg2,
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }), m.hide(), p.html(a), g.stop().fadeIn(300, function() {
            n.unbind().bind("click", function() {
                closemsg(b)
            })
        })) : "string" == d && "object" == e && "function" == k && "function" == l && (n.css({
            background: mcd.btnbg1
        }), m.css({
            background: mcd.btnbg2
        }), 50 <= toint(mcd.btnwidth) ? h.css({
            marginLeft: (100 - toint(mcd.btnwidth)) / 2 + "%"
        }) : h.css({
            marginLeft: (100 - 2 * toint(mcd.btnwidth)) / 3 + "%"
        }), p.html(a[0]), q.html(a[1]), g.stop().fadeIn(300, function() {
            n.unbind().bind("click", function() {
                closemsg(b)
            });
            m.unbind().bind("click", function() {
                closemsg(f)
            })
        }))
    }
}

function closemsg(c) {
    $(".msg").find(".msg_btn").unbind();
    $(".msg").fadeOut(300, function() {
        "function" == typeof c && c()
    })
}

function loadimg(c, a, b) {
    if ("string" == typeof c) {
        var f = new Image;
        f.src = imgurl + imgsrc;
        f.onload = a
    } else if ("object" == typeof c) {
        var d = 0;
        c.each(function(e) {
            e = $(this).attr("src");
            $("\x3cimg/\x3e").attr("src", e).load(function() {
                d++;
                typeof b == ud ? d == c.length && a() : (a(d), d == c.length && b())
            })
        })
    }
}

function loadjs(c, a) {
    var b = document.getElementsByTagName("head")[0],
        f = document.createElement("script");
    f.setAttribute("type", "text/javascript");
    f.setAttribute("src", c);
    b.appendChild(f);
    f.onload = a
}

function resizeimg(c) {
    c.each(function(a) {
        var b = $(this);
        a = b.attr("data-src");
        $("\x3cimg/\x3e").attr("src", a).load(function() {
            var a = c.width(),
                d = c.height();
            this.width / this.height > a / d ? b.css({
                backgroundSize: "auto 100%"
            }) : b.css({
                backgroundSize: "100%"
            })
        })
    })
}

function strlen(c, a) {
    for (var b = 0, f = "", d = 0; d < c.length; d++) {
        var e = c.charCodeAt(d),
            b = 0 <= e && 128 >= e ? b + 1 : b + 2;
        if (b < a || typeof a == ud) f += c[d]
    }
    return f
}

function to(c) {
    window.location.href = c
}

function tor(c) {
    window.location.replace(c)
}

function getrq(c) {
    c = window.location.search.substr(1).match(new RegExp("(^|\x26)" + c + "\x3d([^\x26]*)(\x26|$)", "i"));
    return null != c ? unescape(c[2]) : null
}

function isnull(c) {
    return ("" == c || null == c || typeof c == ud || 0 >= c.length) && 0 !== c ? !0 : !1
}

function istel(c){
    if(!(/^0?1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(c))&&!(/^0?1[4][0|1|4]\d{10}$/.test(c))){
        return false
    }else{
        return true
    }
}

function isemail(c) {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z])+/.test(c) ? !0 : !1
}

function totxt(c) {
    return "object" == typeof c ? JSON.stringify(c) : "number" == typeof c || "string" == typeof c ? c + "" : null
}

function toint(c) {
    c = parseInt(c);
    return isNaN(c) ? null : c
}

function toflt(c) {
    c = parseFloat(c);
    return isNaN(c) ? null : c
}

function todec(c) {
    var a = parseFloat(c);
    if (isNaN(a)) return !1;
    a = Math.round(100 * c) / 100;
    c = a.toString();
    a = c.indexOf(".");
    0 > a && (a = c.length, c += ".");
    for (; c.length <= a + 2;) c += "0";
    return c
}

function tojson(c) {
    return "string" == typeof c ? eval("(" + c + ")") : null
}

function rand(c, a) {
    isnull(c) && 0 !== c && (c = 100);
    if (isnull(a)) return 0 < c ? Math.floor(Math.random() * c) + 1 : -(Math.floor(Math.random() * -c) + 1);
    if (Math.abs(c) > Math.abs(a)) {
        var b = c;
        c = a;
        a = b
    }
    if (0 < a) return Math.floor(Math.random() * (1 + a - c)) + c;
    c = -c;
    return -(Math.floor(Math.random() * (1 + -a - c)) + c)
}

function format(c) {
    return new Date(Date.parse(c.replace(/-/g, "/")))
}

function getnow() {
    var c = new Date,
        a = c.getMonth() + 1,
        b = c.getDate();
    1 <= a && 9 >= a && (a = "0" + a);
    0 <= b && 9 >= b && (b = "0" + b);
    return c.getFullYear() + "-" + a + "-" + b + " " + c.getHours() + ":" + c.getMinutes() + ":" + c.getSeconds()
}

function tc(c) {
    c.preventDefault()
}

function notouch() {
    document.addEventListener("touchmove", tc, !1)
}

function cantouch() {
    try {
        document.removeEventListener("touchmove", tc, !1)
    } catch (c) {}
}
setnormalcss();

function setnormalcss() {
    for (var c = '\x3cstyle\x3ebody{margin:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-touch-callout:none;-webkit-user-select:none;font-family:"Arial"}div{width:100%;float:left}img{width:100%;border:0;float:left}.hide{display:none}.ovh{overflow:hidden}.full_bg{background-repeat:no-repeat;background-size:100% 100%}.top_bg{background-repeat:no-repeat;background-size:100%;background-position:top}.bottom_bg{background-repeat:no-repeat;background-size:100%;background-position:bottom}.wbg{background-repeat:no-repeat;background-position:center;background-size:auto 100%}.center_bg{background-repeat:no-repeat;background-size:100%;background-position:center}.full_tb{width:100%;border:0;border-collapse:collapse;border-spacing:0}.full_tb td,.full_tb th{padding:0}.cover{position:fixed;height:100%;background:rgba(0,0,0,0.75)}.pa{position:absolute !important}.pr{position:relative !important}.pf{position:fixed !important}.tal{text-align:left}.tac{text-align:center}.tar{text-align:right}.op0{opacity:0}.bodyctrl,.framectrl{position:absolute;height:100%;overflow-y:auto;left:0}.bgm{position:absolute;opacity:0;width:1px;height:1px}select{float:left;appearance:button;-webkit-appearance:button;background-repeat:no-repeat;background-size:auto 100%;background-position:right}input,textarea{float:left;appearance:button;-webkit-appearance:button}.animated{animation-duration:1s;animation-fill-mode:both}.animated.infinite{animation-iteration-count:infinite}.animated.hinge{animation-duration:2s}.animated.flipOutX,.animated.flipOutY,.animated.bounceIn,.animated.bounceOut{animation-duration:.75s}@keyframes bounce{from,20%,53%,80%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);transform:translate3d(0,0,0)}40%,43%{animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);transform:translate3d(0,-30px,0)}70%{animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);transform:translate3d(0,-15px,0)}90%{transform:translate3d(0,-4px,0)}}.bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}.flash{animation-name:flash}@keyframes pulse{from{transform:scale3d(1,1,1)}50%{transform:scale3d(1.05,1.05,1.05)}to{transform:scale3d(1,1,1)}}.pulse{animation-name:pulse}@keyframes rubberBand{from{transform:scale3d(1,1,1)}30%{transform:scale3d(1.25,0.75,1)}40%{transform:scale3d(0.75,1.25,1)}50%{transform:scale3d(1.15,0.85,1)}65%{transform:scale3d(.95,1.05,1)}75%{transform:scale3d(1.05,.95,1)}to{transform:scale3d(1,1,1)}}.rubberBand{animation-name:rubberBand}@keyframes shake{from,to{transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{transform:translate3d(-10px,0,0)}20%,40%,60%,80%{transform:translate3d(10px,0,0)}}.shake{animation-name:shake}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate3d(0,0,1,15deg)}40%{transform:rotate3d(0,0,1,-10deg)}60%{transform:rotate3d(0,0,1,5deg)}80%{transform:rotate3d(0,0,1,-5deg)}to{transform:rotate3d(0,0,1,0deg)}}.swing{transform-origin:top center;animation-name:swing}@keyframes tada{from{transform:scale3d(1,1,1)}10%,20%{transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{transform:scale3d(1,1,1)}}.tada{animation-name:tada}@keyframes wobble{from{transform:none}15%{transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{transform:none}}.wobble{animation-name:wobble}@keyframes jello{from,11.1%,to{transform:none}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}.jello{animation-name:jello;transform-origin:center}@keyframes bounceIn{from,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}0%{opacity:0;transform:scale3d(.3,.3,.3)}20%{transform:scale3d(1.1,1.1,1.1)}40%{transform:scale3d(.9,.9,.9)}60%{opacity:1;transform:scale3d(1.03,1.03,1.03)}80%{transform:scale3d(.97,.97,.97)}to{opacity:1;transform:scale3d(1,1,1)}}.bounceIn{animation-name:bounceIn}@keyframes bounceInDown{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}.bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}.bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}from{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}.bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{from,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}from{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translate3d(0,0,0)}}.bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;transform:scale3d(1.1,1.1,1.1)}to{opacity:0;transform:scale3d(.3,.3,.3)}}.bounceOut{animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0,10px,0)}40%,45%{opacity:1;transform:translate3d(0,-20px,0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px,0,0)}to{opacity:0;transform:translate3d(-2000px,0,0)}}.bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px,0,0)}to{opacity:0;transform:translate3d(2000px,0,0)}}.bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0,-10px,0)}40%,45%{opacity:1;transform:translate3d(0,20px,0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}.bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{animation-name:fadeIn}@keyframes fadeInDown{from{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{from{opacity:0;transform:translate3d(0,-2000px,0)}to{opacity:1;transform:none}}.fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{from{opacity:0;transform:translate3d(-100%,0,0)}to{opacity:1;transform:none}}.fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{from{opacity:0;transform:translate3d(-2000px,0,0)}to{opacity:1;transform:none}}.fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{from{opacity:0;transform:translate3d(100%,0,0)}to{opacity:1;transform:none}}.fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{from{opacity:0;transform:translate3d(2000px,0,0)}to{opacity:1;transform:none}}.fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{from{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{from{opacity:0;transform:translate3d(0,2000px,0)}to{opacity:1;transform:none}}.fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;transform:translate3d(0,2000px,0)}}.fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{from{opacity:1}to{opacity:0;transform:translate3d(-100%,0,0)}}.fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0)}}.fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;transform:translate3d(2000px,0,0)}}.fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes flip{from{transform:perspective(400px) rotate3d(0,1,0,-360deg);animation-timing-function:ease-out}40%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(.95,.95,.95);animation-timing-function:ease-in}to{transform:perspective(400px);animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;animation-name:flip}@keyframes flipInX{from{transform:perspective(400px) rotate3d(1,0,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(1,0,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInX}@keyframes flipInY{from{transform:perspective(400px) rotate3d(0,1,0,90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotate3d(0,1,0,-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipInY}@keyframes flipOutX{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.flipOutX{animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@keyframes flipOutY{from{transform:perspective(400px)}30%{transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;animation-name:flipOutY}@keyframes lightSpeedIn{from{transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg);opacity:1}to{transform:none;opacity:1}}.lightSpeedIn{animation-name:lightSpeedIn;animation-timing-function:ease-out}@keyframes lightSpeedOut{from{opacity:1}to{transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{animation-name:lightSpeedOut;animation-timing-function:ease-in}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0,0,1,-200deg);opacity:0}to{transform-origin:center;transform:none;opacity:1}}.rotateIn{animation-name:rotateIn}@keyframes rotateInDownLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInDownLeft{animation-name:rotateInDownLeft}@keyframes rotateInDownRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInDownRight{animation-name:rotateInDownRight}@keyframes rotateInUpLeft{from{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}to{transform-origin:left bottom;transform:none;opacity:1}}.rotateInUpLeft{animation-name:rotateInUpLeft}@keyframes rotateInUpRight{from{transform-origin:right bottom;transform:rotate3d(0,0,1,-90deg);opacity:0}to{transform-origin:right bottom;transform:none;opacity:1}}.rotateInUpRight{animation-name:rotateInUpRight}@keyframes rotateOut{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0,0,1,200deg);opacity:0}}.rotateOut{animation-name:rotateOut}@keyframes rotateOutDownLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,45deg);opacity:0}}.rotateOutDownLeft{animation-name:rotateOutDownLeft}@keyframes rotateOutDownRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutDownRight{animation-name:rotateOutDownRight}@keyframes rotateOutUpLeft{from{transform-origin:left bottom;opacity:1}to{transform-origin:left bottom;transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutUpLeft{animation-name:rotateOutUpLeft}@keyframes rotateOutUpRight{from{transform-origin:right bottom;opacity:1}to{transform-origin:right bottom;transform:rotate3d(0,0,1,90deg);opacity:0}}.rotateOutUpRight{animation-name:rotateOutUpRight}@keyframes hinge{0%{transform-origin:top left;animation-timing-function:ease-in-out}20%,60%{transform:rotate3d(0,0,1,80deg);transform-origin:top left;animation-timing-function:ease-in-out}40%,80%{transform:rotate3d(0,0,1,60deg);transform-origin:top left;animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0,700px,0);opacity:0}}.hinge{animation-name:hinge}@keyframes jackInTheBox{from{opacity:0;transform:scale(0.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{from{opacity:0;transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;transform:none}}.rollIn{animation-name:rollIn}@keyframes rollOut{from{opacity:1}to{opacity:0;transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}.rollOut{animation-name:rollOut}@keyframes zoomIn{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{animation-name:zoomIn}@keyframes zoomInDown{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{from{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}60%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomOutDown{animation-name:zoomOutDown}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(-2000px,0,0);transform-origin:left center}}.zoomOutLeft{animation-name:zoomOutLeft}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;transform:scale(.1) translate3d(2000px,0,0);transform-origin:right center}}.zoomOutRight{animation-name:zoomOutRight}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(.475,.475,.475) translate3d(0,60px,0);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190)}to{opacity:0;transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform-origin:center bottom;animation-timing-function:cubic-bezier(0.175,0.885,0.320,1)}}.zoomOutUp{animation-name:zoomOutUp}@keyframes slideInDown{from{transform:translate3d(0,-100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}.slideInDown{animation-name:slideInDown}@keyframes slideInLeft{from{transform:translate3d(-100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}.slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{from{transform:translate3d(100%,0,0);visibility:visible}to{transform:translate3d(0,0,0)}}.slideInRight{animation-name:slideInRight}@keyframes slideInUp{from{transform:translate3d(0,100%,0);visibility:visible}to{transform:translate3d(0,0,0)}}.slideInUp{animation-name:slideInUp}@keyframes slideOutDown{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,100%,0)}}.slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(-100%,0,0)}}.slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(100%,0,0)}}.slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{from{transform:translate3d(0,0,0)}to{visibility:hidden;transform:translate3d(0,-100%,0)}}.slideOutUp{animation-name:slideOutUp}', a = 0; 101 > a; a++) c += ".h" + a + "{height:" + a + "% !important}.w" + a + "{width:" + a + "% !important}.t" + a + "{top:" + a + "% !important}.l" + a + "{left:" + a + "% !important}.r" + a + "{right:" + a + "% !important}.b" + a + "{bottom:" + a + "% !important}.mt" + a + "{margin-top:" + a + "% !important}.ml" + a + "{margin-left:" + a + "% !important}.mr" + a + "{margin-right:" + a + "% !important}.mb" + a + "{margin-bottom:" + a + "% !important}";
    c += "\x3c/style\x3e";
    $("head").append(c)
}(function(c) {
    for (var a, b, f = document.getElementsByTagName("head")[0].style, d = ["transformProperty", "WebkitTransform", "OTransform", "msTransform", "MozTransform"], e = 0; e < d.length; e++) void 0 !== f[d[e]] && (a = d[e]);
    a && (b = a.replace(/[tT]ransform/, "TransformOrigin"), "T" == b[0] && (b[0] = "t"));
    eval('IE \x3d "v"\x3d\x3d"\v"');
    jQuery.fn.extend({
        rotate: function(a) {
            if (0 !== this.length && ud != typeof a) {
                "number" == typeof a && (a = {
                    angle: a
                });
                for (var k = [], b = 0, e = this.length; b < e; b++) {
                    var d = this.get(b);
                    if (d.Wilq32 && d.Wilq32.PhotoEffect) d.Wilq32.PhotoEffect._14(a);
                    else {
                        var f = c.extend(!0, {}, a),
                            d = (new Wilq32.PhotoEffect(d, f))._2;
                        k.push(c(d))
                    }
                }
                return k
            }
        },
        getRotateAngle: function() {
            for (var a = [], c = 0, b = this.length; c < b; c++) {
                var d = this.get(c);
                d.Wilq32 && d.Wilq32.PhotoEffect && (a[c] = d.Wilq32.PhotoEffect._3)
            }
            return a
        },
        stopRotate: function() {
            for (var a = 0, c = this.length; a < c; a++) {
                var b = this.get(a);
                b.Wilq32 && b.Wilq32.PhotoEffect && clearTimeout(b.Wilq32.PhotoEffect._13)
            }
        }
    });
    Wilq32 = window.Wilq32 || {};
    Wilq32.PhotoEffect = function() {
        return a ? function(a, c) {
            a.Wilq32 = {
                PhotoEffect: this
            };
            this._1 = this._2 = this._12 = a;
            this._14(c)
        } : function(a, c) {
            this._1 = a;
            this._20 = [c];
            this._2 = document.createElement("span");
            this._2.style.display = "inline-block";
            this._2.Wilq32 = {
                PhotoEffect: this
            };
            a.parentNode.insertBefore(this._2, a);
            if (a.complete) this._24();
            else {
                var b = this;
                jQuery(this._1).bind("load", function() {
                    b._24()
                })
            }
        }
    }();
    Wilq32.PhotoEffect.prototype = {
        _28: function(a) {
            this._0 = this._0 || {};
            "number" !== typeof this._3 && (this._3 = 0);
            "number" === typeof a.angle && (this._3 = a.angle);
            this._0.animateTo = "number" === typeof a.animateTo ? a.animateTo : this._3;
            this._0.step = a.step || this._0.step || null;
            this._0.easing = a.easing || this._0.easing || this._30;
            this._0.duration = a.duration || this._0.duration || 1E3;
            this._0.callback = a.callback || this._0.callback || this._31;
            this._0.center = a.center || this._0.center || ["50%", "50%"];
            this._17 = "string" == typeof this._0.center[0] ? parseInt(this._0.center[0], 10) / 100 * this._7 * this._9 : this._0.center[0];
            this._16 = "string" == typeof this._0.center[1] ? parseInt(this._0.center[1], 10) / 100 * this._8 * this._10 : this._0.center[1];
            a.bind && a.bind != this._0.bind && this._32(a.bind)
        },
        _31: function() {},
        _30: function(a, c, b, d, e) {
            return -d * ((c = c / e - 1) * c * c * c - 1) + b
        },
        _14: function(c, b) {
            a || this._1.complete || b ? (this._28(c), this._3 == this._0.animateTo ? this._18(this._3) : this._37()) : this._20.push(c)
        },
        _32: function(a) {
            if (a && this._12) {
                if (this._0.bind) {
                    var c = this._0.bind,
                        b;
                    for (b in c) c.hasOwnProperty(b) && jQuery(this._12).unbind(b, c[b])
                }
                this._0.bind = a;
                for (b in a) a.hasOwnProperty(b) && jQuery(this._12).bind(b, a[b])
            }
        },
        _24: function() {
            return IE ? function() {
                var a = this._1.width,
                    c = this._1.height;
                this._7 = a;
                this._8 = c;
                this._1.parentNode.removeChild(this._1);
                this._6 = this.createVMLNode("image");
                this._6.src = this._1.src;
                this._6.style.height = c + "px";
                this._6.style.width = a + "px";
                this._6.style.position = "absolute";
                this._6.style.top = "0px";
                this._6.style.left = "0px";
                this._9 = this._10 = 1;
                this._5 = this.createVMLNode("group");
                this._5.style.width = a;
                this._5.style.height = c;
                this._5.style.position = "absolute";
                this._5.style.top = "0px";
                this._5.style.left = "0px";
                this._5.setAttribute("coordsize", a - 1 + "," + (c - 1));
                this._5.appendChild(this._6);
                this._2.appendChild(this._5);
                this._2.style.position = "relative";
                this._2.style.width = a + "px";
                this._2.style.height = c + "px";
                this._2.setAttribute("id", this._1.getAttribute("id"));
                this._2.className = this._1.className;
                for (this._12 = this._2; a = this._20.shift();) this._14(a, !0)
            } : function() {
                this._2.setAttribute("id", this._1.getAttribute("id"));
                this._2.className = this._1.className;
                this._7 = this._1.naturalWidth;
                this._8 = this._1.naturalHeight;
                var a = Math.sqrt(this._8 * this._8 + this._7 * this._7);
                this._27 = 3 * a;
                this._34 = 3 * a;
                this._9 = this._1.offsetWidth / this._1.naturalWidth;
                this._10 = this._1.offsetHeight / this._1.naturalHeight;
                this._1.parentNode.removeChild(this._1);
                this._4 = document.createElement("canvas");
                this._4.setAttribute("width", this._27);
                this._4.style.position = "relative";
                this._4.style.left = -this._1.height * this._9 + "px";
                this._4.style.top = -this._1.width * this._10 + "px";
                this._4.Wilq32 = this._2.Wilq32;
                this._2.appendChild(this._4);
                this._2.style.width = this._1.width * this._9 + "px";
                this._2.style.height = this._1.height * this._10 + "px";
                this._12 = this._4;
                for (this._11 = this._4.getContext("2d"); a = this._20.shift();) this._14(a, !0)
            }
        }(),
        _37: function() {
            this._13 && clearTimeout(this._13);
            this._22 = +new Date;
            this._21 = this._3;
            this._23()
        },
        _23: function() {
            var a = +new Date,
                c = a - this._22 > this._0.duration;
            if (c && !this._0.animatedGif) clearTimeout(this._13);
            else {
                if (this._4 || this._6 || this._1) a = this._0.easing(0, a - this._22, this._21, this._0.animateTo - this._21, this._0.duration), this._18(~~(10 * a) / 10);
                this._0.step && this._0.step(this._3);
                var b = this;
                this._13 = setTimeout(function() {
                    b._23.call(b)
                }, 10)
            }
            this._0.callback && c && (this._3 = this._0.animateTo, this._18(this._3), this._0.callback.call(this._2))
        },
        _18: function() {
            var c = Math.PI / 180;
            return IE ? function(a) {
                this._3 = a;
                this._5.style.rotation = a % 360 + "deg";
                this._6.style.top = -(this._16 - this._8 / 2) + "px";
                this._6.style.left = -(this._17 - this._7 / 2) + "px";
                this._5.style.top = this._16 - this._8 / 2 + "px";
                this._5.style.left = this._17 - this._7 / 2 + "px"
            } : a ? function(c) {
                this._3 = c;
                this._1.style[a] = "rotate(" + c % 360 + "deg)";
                this._1.style[b] = this._0.center.join(" ")
            } : function(a) {
                this._3 = a;
                a = a % 360 * c;
                this._4.width = this._27;
                this._4.height = this._34;
                this._11.translate(this._7 * this._9, this._8 * this._10);
                this._11.translate(this._17, this._16);
                this._11.rotate(a);
                this._11.translate(-this._17, -this._16);
                this._11.scale(this._9, this._10);
                this._11.drawImage(this._1, 0, 0)
            }
        }()
    };
    IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function() {
        document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
        try {
            return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"),
                function(a) {
                    return document.createElement("\x3crvml:" + a + ' class\x3d"rvml"\x3e')
                }
        } catch (k) {
            return function(a) {
                return document.createElement("\x3c" + a + ' xmlns\x3d"urn:schemas-microsoft.com:vml" class\x3d"rvml"\x3e')
            }
        }
    }())
})(jQuery);
! function(c) {
    "object" == typeof exports && ud != typeof module ? module.exports = c() : "function" == typeof define && define.amd ? define([], c) : (ud != typeof window ? window : ud != typeof global ? global : ud != typeof self ? self : this).store = c()
}(function() {
    return function a(b, f, d) {
        function e(g, h) {
            if (!f[g]) {
                if (!b[g]) {
                    var l = "function" == typeof require && require;
                    if (!h && l) return l(g, !0);
                    if (k) return k(g, !0);
                    h = Error("Cannot find module '" + g + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                h = f[g] = {
                    exports: {}
                };
                b[g][0].call(h.exports, function(a) {
                    var d = b[g][1][a];
                    return e(d ? d : a)
                }, h, h.exports, a, b, f, d)
            }
            return f[g].exports
        }
        for (var k = "function" == typeof require && require, l = 0; l < d.length; l++) e(d[l]);
        return e
    }({
        1: [
            function(a, b, f) {
                f = a("../src/store-engine");
                a = [a("../storages/localStorage"), a("../storages/sessionStorage"), a("../storages/cookieStorage"), a("../storages/memoryStorage")];
                b.exports = f.createStore(a, [])
            }, {
                "../src/store-engine": 2,
                "../storages/cookieStorage": 4,
                "../storages/localStorage": 5,
                "../storages/memoryStorage": 6,
                "../storages/sessionStorage": 7
            }
        ],
        2: [
            function(a, b, f) {
                function d() {
                    var a = ud == typeof console ? null : console;
                    a && (a.warn ? a.warn : a.log).apply(a, arguments)
                }

                function e(a, b, e) {
                    e || (e = "");
                    a && !m(a) && (a = [a]);
                    b && !m(b) && (b = [b]);
                    var f = e ? "__storejs_" + e + "_" : "",
                        t = e ? new RegExp("^" + f) : null;
                    if (!/^[a-zA-Z0-9_\-]*$/.test(e)) throw Error("store.js namespaces can only have alphanumerics + underscores and dashes");
                    var r = n({
                        _15: f,
                        _29: t,
                        _33: function(a) {
                            try {
                                a.write("__storejs__test__", "__storejs__test__");
                                var b = "__storejs__test__" === a.read("__storejs__test__");
                                return a.remove("__storejs__test__"), b
                            } catch (v) {
                                return !1
                            }
                        },
                        _35: function(a, b) {
                            var d = this[b];
                            this[b] = function() {
                                var b = k(arguments, 0),
                                    e = this,
                                    p = [
                                        function() {
                                            if (d) return g(arguments, function(a, d) {
                                                b[d] = a
                                            }), d.apply(e, b)
                                        }
                                    ].concat(b);
                                return a.apply(e, p)
                            }
                        },
                        _36: function(a) {
                            return JSON.stringify(a)
                        },
                        _25: function(a, b) {
                            if (!a) return b;
                            var d = "";
                            try {
                                d = JSON.parse(a)
                            } catch (w) {
                                d = a
                            }
                            return void 0 !== d ? d : b
                        },
                        _26: function(a) {
                            this.enabled || this._33(a) && (this.storage = a, this.enabled = !0)
                        },
                        _19: function(a) {
                            var b = this;
                            if (m(a)) return void g(a, function(a) {
                                b._19(a)
                            });
                            if (!l(this.plugins, function(b) {
                                return a === b
                            })) {
                                if (this.plugins.push(a), !p(a)) throw Error("Plugins must be function values that return objects");
                                var d = a.call(this);
                                if (!q(d)) throw Error("Plugins must return an object of function properties");
                                g(d, function(d, e) {
                                    if (!p(d)) throw Error("Bad plugin property: " + e + " from plugin " + a.name + ". Plugins should only return functions.");
                                    b._35(d, e)
                                })
                            }
                        },
                        addStorage: function(a) {
                            d("store.addStorage(storage) is deprecated. Use createStore([storages])");
                            this._26(a)
                        }
                    }, u, {
                        plugins: []
                    });
                    return r.raw = {}, g(r, function(a, b) {
                        p(a) && (r.raw[b] = h(r, a))
                    }), g(a, function(a) {
                        r._26(a)
                    }), g(b, function(a) {
                        r._19(a)
                    }), r
                }
                a = a("./util");
                var k = a.slice,
                    l = a.pluck,
                    g = a.each,
                    h = a.bind,
                    n = a.create,
                    m = a.isList,
                    p = a.isFunction,
                    q = a.isObject;
                b.exports = {
                    createStore: e
                };
                var u = {
                    version: "2.0.12",
                    enabled: !1,
                    get: function(a, b) {
                        a = this.storage.read(this._15 + a);
                        return this._25(a, b)
                    },
                    set: function(a, b) {
                        return void 0 === b ? this.remove(a) : (this.storage.write(this._15 + a, this._36(b)), b)
                    },
                    remove: function(a) {
                        this.storage.remove(this._15 + a)
                    },
                    each: function(a) {
                        var b = this;
                        this.storage.each(function(d, e) {
                            a.call(b, b._25(d), (e || "").replace(b._29, ""))
                        })
                    },
                    clearAll: function() {
                        this.storage.clearAll()
                    },
                    hasNamespace: function(a) {
                        return this._15 == "__storejs_" + a + "_"
                    },
                    createStore: function() {
                        return e.apply(this, arguments)
                    },
                    addPlugin: function(a) {
                        this._19(a)
                    },
                    namespace: function(a) {
                        return e(this.storage, this.plugins, a)
                    }
                }
            }, {
                "./util": 3
            }
        ],
        3: [
            function(a, b, f) {
                (function(a) {
                    function d(a, b) {
                        return Array.prototype.slice.call(a, b || 0)
                    }

                    function f(a, b) {
                        l(a, function(a, d) {
                            return b(a, d), !1
                        })
                    }

                    function l(a, b) {
                        if (g(a))
                            for (var d = 0; d < a.length; d++) {
                                if (b(a[d], d)) return a[d]
                            } else
                                for (d in a)
                                    if (a.hasOwnProperty(d) && b(a[d], d)) return a[d]
                    }

                    function g(a) {
                        return null != a && "function" != typeof a && "number" == typeof a.length
                    }
                    var h = function() {
                            return Object.assign ? Object.assign : function(a, b, d, e) {
                                for (var g = 1; g < arguments.length; g++) f(Object(arguments[g]), function(b, d) {
                                    a[d] = b
                                });
                                return a
                            }
                        }(),
                        n = function() {
                            if (Object.create) return function(a, b, e, f) {
                                var g = d(arguments, 1);
                                return h.apply(this, [Object.create(a)].concat(g))
                            };
                            var a = function() {};
                            return function(b, e, f, g) {
                                var k = d(arguments, 1);
                                return a.prototype = b, h.apply(this, [new a].concat(k))
                            }
                        }(),
                        m = function() {
                            return String.prototype.trim ? function(a) {
                                return String.prototype.trim.call(a)
                            } : function(a) {
                                return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                            }
                        }();
                    b.exports = {
                        assign: h,
                        create: n,
                        trim: m,
                        bind: function(a, b) {
                            return function() {
                                return b.apply(a, Array.prototype.slice.call(arguments, 0))
                            }
                        },
                        slice: d,
                        each: f,
                        map: function(a, b) {
                            var d = g(a) ? [] : {};
                            return l(a, function(a, e) {
                                return d[e] = b(a, e), !1
                            }), d
                        },
                        pluck: l,
                        isList: g,
                        isFunction: function(a) {
                            return a && "[object Function]" === {}.toString.call(a)
                        },
                        isObject: function(a) {
                            return a && "[object Object]" === {}.toString.call(a)
                        },
                        Global: ud != typeof window ? window : a
                    }
                }).call(this, ud != typeof global ? global : ud != typeof self ? self : ud != typeof window ? window : {})
            }, {}
        ],
        4: [
            function(a, b, f) {
                function d(a) {
                    for (var b = g.cookie.split(/; ?/g), d = b.length - 1; 0 <= d; d--)
                        if (l(b[d])) {
                            var e = b[d].split("\x3d"),
                                f = unescape(e[0]),
                                e = unescape(e[1]);
                            a(e, f)
                        }
                }

                function e(a) {
                    a && k(a) && (g.cookie = escape(a) + "\x3d; expires\x3dThu, 01 Jan 1970 00:00:00 GMT; path\x3d/")
                }

                function k(a) {
                    return (new RegExp("(?:^|;\\s*)" + escape(a).replace(/[\-\.\+\*]/g, "\\$\x26") + "\\s*\\\x3d")).test(g.cookie)
                }
                a = a("../src/util");
                f = a.Global;
                var l = a.trim;
                b.exports = {
                    name: "cookieStorage",
                    read: function(a) {
                        if (!a || !k(a)) return null;
                        a = "(?:^|.*;\\s*)" + escape(a).replace(/[\-\.\+\*]/g, "\\$\x26") + "\\s*\\\x3d\\s*((?:[^;](?!;))*[^;]?).*";
                        return unescape(g.cookie.replace(new RegExp(a), "$1"))
                    },
                    write: function(a, b) {
                        a && (g.cookie = escape(a) + "\x3d" + escape(b) + "; expires\x3dTue, 19 Jan 2038 03:14:07 GMT; path\x3d/")
                    },
                    each: d,
                    remove: e,
                    clearAll: function() {
                        d(function(a, b) {
                            e(b)
                        })
                    }
                };
                var g = f.document
            }, {
                "../src/util": 3
            }
        ],
        5: [
            function(a, b, f) {
                function d(a) {
                    return e.localStorage.getItem(a)
                }
                var e = a("../src/util").Global;
                b.exports = {
                    name: "localStorage",
                    read: d,
                    write: function(a, b) {
                        return e.localStorage.setItem(a, b)
                    },
                    each: function(a) {
                        for (var b = e.localStorage.length - 1; 0 <= b; b--) {
                            var f = e.localStorage.key(b);
                            a(d(f), f)
                        }
                    },
                    remove: function(a) {
                        return e.localStorage.removeItem(a)
                    },
                    clearAll: function() {
                        return e.localStorage.clear()
                    }
                }
            }, {
                "../src/util": 3
            }
        ],
        6: [
            function(a, b, f) {
                b.exports = {
                    name: "memoryStorage",
                    read: function(a) {
                        return d[a]
                    },
                    write: function(a, b) {
                        d[a] = b
                    },
                    each: function(a) {
                        for (var b in d) d.hasOwnProperty(b) && a(d[b], b)
                    },
                    remove: function(a) {
                        delete d[a]
                    },
                    clearAll: function(a) {
                        d = {}
                    }
                };
                var d = {}
            }, {}
        ],
        7: [
            function(a, b, f) {
                function d(a) {
                    return e.sessionStorage.getItem(a)
                }
                var e = a("../src/util").Global;
                b.exports = {
                    name: "sessionStorage",
                    read: d,
                    write: function(a, b) {
                        return e.sessionStorage.setItem(a, b)
                    },
                    each: function(a) {
                        for (var b = e.sessionStorage.length - 1; 0 <= b; b--) {
                            var f = e.sessionStorage.key(b);
                            a(d(f), f)
                        }
                    },
                    remove: function(a) {
                        return e.sessionStorage.removeItem(a)
                    },
                    clearAll: function() {
                        return e.sessionStorage.clear()
                    }
                }
            }, {
                "../src/util": 3
            }
        ]
    }, {}, [1])(1)
});
(function(c) {
    c.fn.extend({
        move: function(a, b, f, d, e) {
            var k = c(this);
            a = "translate(" + a + "," + b + ")";
            b = "";
            "string" == typeof d && (b = d + " ");
            b = "all " + b + f + "ms";
            k.css({
                transform: a,
                transition: b,
                "'+wt+'": a,
                "-webkit-transition": b,
                "'+mt+'": a,
                "-ms-transition": b,
                "-moz-transform": a,
                "-moz-transition": b,
                "-o-transform": a,
                "-o-transition": b
            });
            "function" == typeof d && setTimeout(d, f);
            "function" == typeof e && setTimeout(e, f)
        },
        scale: function(a, b, f, d, e) {
            var k = c(this);
            a = "scale(" + a + "," + b + ")";
            b = "";
            "string" == typeof d && (b = d + " ");
            b = "all " + b + f + "ms";
            k.css({
                transform: a,
                transition: b,
                "'+wt+'": a,
                "-webkit-transition": b,
                "'+mt+'": a,
                "-ms-transition": b,
                "-moz-transform": a,
                "-moz-transition": b,
                "-o-transform": a,
                "-o-transition": b
            });
            "function" == typeof d && setTimeout(d, f);
            "function" == typeof e && setTimeout(e, f)
        }
    })
})(window.jQuery);
$(function() {
    $("body").append('\x3cdiv id\x3d"atten" style\x3d"position:fixed;width:100%;top:0;left:0;height:100%;background:#1d1d20;color:#fff;z-index:9999999;display:none"\x3e\x3ctable style\x3d"width:100%;height:100%;border:none" cellspacing\x3d0 cellpadding\x3d0\x3e\x3ctr\x3e\x3ctd style\x3d"height:100%;text-align:center"\x3e\x3cimg src\x3d"https://scdn.wemediacn.com/laneige/newfansbinding/uploadyun/images/exchange.png" style\x3d"width:1em;vertical-align:middle;float:none"/\x3e\u3000\u8bf7\u4fdd\u6301\u7ad6\u5c4f\u4ee5\u8fbe\u5230\u66f4\u597d\u6d4f\u89c8\u4f53\u9a8c\x3c/td\x3e\x3c/tr\x3e\x3c/table\x3e\x3c/div\x3e');
    /* window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", sa, !1) */
});

function sa() {
    var c = window.orientation;
    180 != c && 0 != c || $("#atten").hide();
    90 != c && -90 != c || $("#atten").show()
};