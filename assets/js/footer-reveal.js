/**
 * footer-reveal.js
 * 
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014 Iain Andrew
 * https://github.com/IainAndrew
 */
! function(a) {
    a.fn.footerReveal = function(b) {
        var c = a(this),
            d = c.prev(),
            e = a(window),
            f = a.extend({
                shadow: !0,
                shadowOpacity: .8,
                zIndex: -100
            }, b);
        a.extend(!0, {}, f, b);
        return c.outerHeight() <= e.outerHeight() && c.offset().top >= e.outerHeight() && (c.css({
            "z-index": f.zIndex,
            position: "fixed",
            bottom: 0
        }), f.shadow && d.css({
            "-moz-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
            "-webkit-box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")",
            "box-shadow": "0 20px 30px -20px rgba(0,0,0," + f.shadowOpacity + ")"
        }), e.on("load resize footerRevealResize", function() {
            c.css({
                width: d.outerWidth()
            }), d.css({
                "margin-bottom": c.outerHeight()
            })
        })), this
    }
}(jQuery);