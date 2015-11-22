! function(t) {
    t.fn.parallax = function(e) {
        var o = t(window).height(),
            i = t.extend({
                speed: .15
            }, e);
        return this.each(function() {
            var e = t(this);
            t(document).scroll(function() {
                var n = t(window).scrollTop(),
                    s = e.offset().top,
                    a = e.outerHeight();
                if (!(n >= s + a || s >= n + o)) {
                    var r = Math.round((s - n) * i.speed);
                    e.css("background-position", "center " + r + "px")
                }
            })
        })
    }
}(jQuery),
function(t) {
    function e(t, e) {
        return t.toFixed(e.decimals)
    }
    t.fn.countTo = function(e) {
        return e = e || {}, t(this).each(function() {
            function o() {
                h += a, p++, i(h), "function" == typeof n.onUpdate && n.onUpdate.call(r, h), p >= s && (l.removeData("countTo"), clearInterval(c.interval), h = n.to, "function" == typeof n.onComplete && n.onComplete.call(r, h))
            }

            function i(t) {
                var e = n.formatter.call(r, t, n);
                l.text(e)
            }
            var n = t.extend({}, t.fn.countTo.defaults, {
                    from: t(this).data("from"),
                    to: t(this).data("to"),
                    speed: t(this).data("speed"),
                    refreshInterval: t(this).data("refresh-interval"),
                    decimals: t(this).data("decimals")
                }, e),
                s = Math.ceil(n.speed / n.refreshInterval),
                a = (n.to - n.from) / s,
                r = this,
                l = t(this),
                p = 0,
                h = n.from,
                c = l.data("countTo") || {};
            l.data("countTo", c), c.interval && clearInterval(c.interval), c.interval = setInterval(o, n.refreshInterval), i(h)
        })
    }, t.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: e,
        onUpdate: null,
        onComplete: null
    }
}(jQuery),
function(t) {
    t.fn.appear = function(e, o) {
        var i = t.extend({
            data: void 0,
            one: !0,
            accX: 0,
            accY: 0
        }, o);
        return this.each(function() {
            var o = t(this);
            if (o.appeared = !1, !e) return void o.trigger("appear", i.data);
            var n = t(window),
                s = function() {
                    if (!o.is(":visible")) return void(o.appeared = !1);
                    var t = n.scrollLeft(),
                        e = n.scrollTop(),
                        s = o.offset(),
                        a = s.left,
                        r = s.top,
                        l = i.accX,
                        p = i.accY,
                        h = o.height(),
                        c = n.height(),
                        u = o.width(),
                        d = n.width();
                    r + h + p >= e && e + c + p >= r && a + u + l >= t && t + d + l >= a ? o.appeared || o.trigger("appear", i.data) : o.appeared = !1
                },
                a = function() {
                    if (o.appeared = !0, i.one) {
                        n.unbind("scroll", s);
                        var a = t.inArray(s, t.fn.appear.checks);
                        a >= 0 && t.fn.appear.checks.splice(a, 1)
                    }
                    e.apply(this, arguments)
                };
            i.one ? o.one("appear", i.data, a) : o.bind("appear", i.data, a), n.scroll(s), t.fn.appear.checks.push(s), s()
        })
    }, t.extend(t.fn.appear, {
        checks: [],
        timeout: null,
        checkAll: function() {
            var e = t.fn.appear.checks.length;
            if (e > 0)
                for (; e--;) t.fn.appear.checks[e]()
        },
        run: function() {
            t.fn.appear.timeout && clearTimeout(t.fn.appear.timeout), t.fn.appear.timeout = setTimeout(t.fn.appear.checkAll, 20)
        }
    }), t.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(e, o) {
        var i = t.fn[o];
        i && (t.fn[o] = function() {
            var e = i.apply(this, arguments);
            return t.fn.appear.run(), e
        })
    })
}(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(t, e, o, i, n) {
            return jQuery.easing[jQuery.easing.def](t, e, o, i, n)
        },
        easeInQuad: function(t, e, o, i, n) {
            return i * (e /= n) * e + o
        },
        easeOutQuad: function(t, e, o, i, n) {
            return -i * (e /= n) * (e - 2) + o
        },
        easeInOutQuad: function(t, e, o, i, n) {
            return (e /= n / 2) < 1 ? i / 2 * e * e + o : -i / 2 * (--e * (e - 2) - 1) + o
        },
        easeInCubic: function(t, e, o, i, n) {
            return i * (e /= n) * e * e + o
        },
        easeOutCubic: function(t, e, o, i, n) {
            return i * ((e = e / n - 1) * e * e + 1) + o
        },
        easeInOutCubic: function(t, e, o, i, n) {
            return (e /= n / 2) < 1 ? i / 2 * e * e * e + o : i / 2 * ((e -= 2) * e * e + 2) + o
        },
        easeInQuart: function(t, e, o, i, n) {
            return i * (e /= n) * e * e * e + o
        },
        easeOutQuart: function(t, e, o, i, n) {
            return -i * ((e = e / n - 1) * e * e * e - 1) + o
        },
        easeInOutQuart: function(t, e, o, i, n) {
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e + o : -i / 2 * ((e -= 2) * e * e * e - 2) + o
        },
        easeInQuint: function(t, e, o, i, n) {
            return i * (e /= n) * e * e * e * e + o
        },
        easeOutQuint: function(t, e, o, i, n) {
            return i * ((e = e / n - 1) * e * e * e * e + 1) + o
        },
        easeInOutQuint: function(t, e, o, i, n) {
            return (e /= n / 2) < 1 ? i / 2 * e * e * e * e * e + o : i / 2 * ((e -= 2) * e * e * e * e + 2) + o
        },
        easeInSine: function(t, e, o, i, n) {
            return -i * Math.cos(e / n * (Math.PI / 2)) + i + o
        },
        easeOutSine: function(t, e, o, i, n) {
            return i * Math.sin(e / n * (Math.PI / 2)) + o
        },
        easeInOutSine: function(t, e, o, i, n) {
            return -i / 2 * (Math.cos(Math.PI * e / n) - 1) + o
        },
        easeInExpo: function(t, e, o, i, n) {
            return 0 == e ? o : i * Math.pow(2, 10 * (e / n - 1)) + o
        },
        easeOutExpo: function(t, e, o, i, n) {
            return e == n ? o + i : i * (-Math.pow(2, -10 * e / n) + 1) + o
        },
        easeInOutExpo: function(t, e, o, i, n) {
            return 0 == e ? o : e == n ? o + i : (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + o : i / 2 * (-Math.pow(2, -10 * --e) + 2) + o
        },
        easeInCirc: function(t, e, o, i, n) {
            return -i * (Math.sqrt(1 - (e /= n) * e) - 1) + o
        },
        easeOutCirc: function(t, e, o, i, n) {
            return i * Math.sqrt(1 - (e = e / n - 1) * e) + o
        },
        easeInOutCirc: function(t, e, o, i, n) {
            return (e /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + o : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + o
        },
        easeInElastic: function(t, e, o, i, n) {
            var s = 1.70158,
                a = 0,
                r = i;
            if (0 == e) return o;
            if (1 == (e /= n)) return o + i;
            if (a || (a = .3 * n), r < Math.abs(i)) {
                r = i;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(i / r);
            return -(r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a)) + o
        },
        easeOutElastic: function(t, e, o, i, n) {
            var s = 1.70158,
                a = 0,
                r = i;
            if (0 == e) return o;
            if (1 == (e /= n)) return o + i;
            if (a || (a = .3 * n), r < Math.abs(i)) {
                r = i;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(i / r);
            return r * Math.pow(2, -10 * e) * Math.sin(2 * (e * n - s) * Math.PI / a) + i + o
        },
        easeInOutElastic: function(t, e, o, i, n) {
            var s = 1.70158,
                a = 0,
                r = i;
            if (0 == e) return o;
            if (2 == (e /= n / 2)) return o + i;
            if (a || (a = .3 * n * 1.5), r < Math.abs(i)) {
                r = i;
                var s = a / 4
            } else var s = a / (2 * Math.PI) * Math.asin(i / r);
            return 1 > e ? -.5 * r * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) + o : r * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (e * n - s) * Math.PI / a) * .5 + i + o
        },
        easeInBack: function(t, e, o, i, n, s) {
            return void 0 == s && (s = 1.70158), i * (e /= n) * e * ((s + 1) * e - s) + o
        },
        easeOutBack: function(t, e, o, i, n, s) {
            return void 0 == s && (s = 1.70158), i * ((e = e / n - 1) * e * ((s + 1) * e + s) + 1) + o
        },
        easeInOutBack: function(t, e, o, i, n, s) {
            return void 0 == s && (s = 1.70158), (e /= n / 2) < 1 ? i / 2 * e * e * (((s *= 1.525) + 1) * e - s) + o : i / 2 * ((e -= 2) * e * (((s *= 1.525) + 1) * e + s) + 2) + o
        },
        easeInBounce: function(t, e, o, i, n) {
            return i - jQuery.easing.easeOutBounce(t, n - e, 0, i, n) + o
        },
        easeOutBounce: function(t, e, o, i, n) {
            return (e /= n) < 1 / 2.75 ? 7.5625 * i * e * e + o : 2 / 2.75 > e ? i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + o : 2.5 / 2.75 > e ? i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + o : i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + o
        },
        easeInOutBounce: function(t, e, o, i, n) {
            return n / 2 > e ? .5 * jQuery.easing.easeInBounce(t, 2 * e, 0, i, n) + o : .5 * jQuery.easing.easeOutBounce(t, 2 * e - n, 0, i, n) + .5 * i + o
        }
    }),
    function(t) {
        "object" == typeof exports ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function(t) {
        "use strict";
        var e = {},
            o = Math.max,
            i = Math.min;
        e.c = {}, e.c.d = t(document), e.c.t = function(t) {
            return t.originalEvent.touches.length - 1
        }, e.o = function() {
            var o = this;
            this.o = null, this.$ = null, this.i = null, this.g = null, this.v = null, this.cv = null, this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.$c = null, this.c = null, this.t = 0, this.isInit = !1, this.fgColor = null, this.pColor = null, this.dH = null, this.cH = null, this.eH = null, this.rH = null, this.scale = 1, this.relative = !1, this.relativeWidth = !1, this.relativeHeight = !1, this.$div = null, this.run = function() {
                var e = function(t, e) {
                    var i;
                    for (i in e) o.o[i] = e[i];
                    o._carve().init(), o._configure()._draw()
                };
                if (!this.$.data("kontroled")) {
                    if (this.$.data("kontroled", !0), this.extend(), this.o = t.extend({
                            min: void 0 !== this.$.data("min") ? this.$.data("min") : 0,
                            max: void 0 !== this.$.data("max") ? this.$.data("max") : 100,
                            stopper: !0,
                            readOnly: this.$.data("readonly") || "readonly" === this.$.attr("readonly"),
                            cursor: this.$.data("cursor") === !0 && 30 || this.$.data("cursor") || 0,
                            thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), .01) || .35,
                            lineCap: this.$.data("linecap") || "butt",
                            width: this.$.data("width") || 200,
                            height: this.$.data("height") || 200,
                            displayInput: null == this.$.data("displayinput") || this.$.data("displayinput"),
                            displayPrevious: this.$.data("displayprevious"),
                            fgColor: this.$.data("fgcolor") || "#87CEEB",
                            inputColor: this.$.data("inputcolor"),
                            font: this.$.data("font") || "Arial",
                            fontWeight: this.$.data("font-weight") || "bold",
                            inline: !1,
                            step: this.$.data("step") || 1,
                            rotation: this.$.data("rotation"),
                            draw: null,
                            change: null,
                            cancel: null,
                            release: null,
                            format: function(t) {
                                return t
                            },
                            parse: function(t) {
                                return parseFloat(t)
                            }
                        }, this.o), this.o.flip = "anticlockwise" === this.o.rotation || "acw" === this.o.rotation, this.o.inputColor || (this.o.inputColor = this.o.fgColor), this.$.is("fieldset") ? (this.v = {}, this.i = this.$.find("input"), this.i.each(function(e) {
                            var i = t(this);
                            o.i[e] = i, o.v[e] = o.o.parse(i.val()), i.bind("change blur", function() {
                                var t = {};
                                t[e] = i.val(), o.val(o._validate(t))
                            })
                        }), this.$.find("legend").remove()) : (this.i = this.$, this.v = this.o.parse(this.$.val()), "" === this.v && (this.v = this.o.min), this.$.bind("change blur", function() {
                            o.val(o._validate(o.o.parse(o.$.val())))
                        })), !this.o.displayInput && this.$.hide(), this.$c = t(document.createElement("canvas")).attr({
                            width: this.o.width,
                            height: this.o.height
                        }), this.$div = t('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>'), this.$.wrap(this.$div).before(this.$c), this.$div = this.$.parent(), "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(this.$c[0]), this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null, !this.c) throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    };
                    return this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1), this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%"), this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%"), this.relative = this.relativeWidth || this.relativeHeight, this._carve(), this.v instanceof Object ? (this.cv = {}, this.copy(this.v, this.cv)) : this.cv = this.v, this.$.bind("configure", e).parent().bind("configure", e), this._listen()._configure()._xy().init(), this.isInit = !0, this.$.val(this.o.format(this.v)), this._draw(), this
                }
            }, this._carve = function() {
                if (this.relative) {
                    var t = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                        e = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                    this.w = this.h = Math.min(t, e)
                } else this.w = this.o.width, this.h = this.o.height;
                return this.$div.css({
                    width: this.w + "px",
                    height: this.h + "px"
                }), this.$c.attr({
                    width: this.w,
                    height: this.h
                }), 1 !== this.scale && (this.$c[0].width = this.$c[0].width * this.scale, this.$c[0].height = this.$c[0].height * this.scale, this.$c.width(this.w), this.$c.height(this.h)), this
            }, this._draw = function() {
                var t = !0;
                o.g = o.c, o.clear(), o.dH && (t = o.dH()), t !== !1 && o.draw()
            }, this._touch = function(t) {
                var i = function(t) {
                    var e = o.xy2val(t.originalEvent.touches[o.t].pageX, t.originalEvent.touches[o.t].pageY);
                    e != o.cv && (o.cH && o.cH(e) === !1 || (o.change(o._validate(e)), o._draw()))
                };
                return this.t = e.c.t(t), i(t), e.c.d.bind("touchmove.k", i).bind("touchend.k", function() {
                    e.c.d.unbind("touchmove.k touchend.k"), o.val(o.cv)
                }), this
            }, this._mouse = function(t) {
                var i = function(t) {
                    var e = o.xy2val(t.pageX, t.pageY);
                    e != o.cv && (o.cH && o.cH(e) === !1 || (o.change(o._validate(e)), o._draw()))
                };
                return i(t), e.c.d.bind("mousemove.k", i).bind("keyup.k", function(t) {
                    if (27 === t.keyCode) {
                        if (e.c.d.unbind("mouseup.k mousemove.k keyup.k"), o.eH && o.eH() === !1) return;
                        o.cancel()
                    }
                }).bind("mouseup.k", function() {
                    e.c.d.unbind("mousemove.k mouseup.k keyup.k"), o.val(o.cv)
                }), this
            }, this._xy = function() {
                var t = this.$c.offset();
                return this.x = t.left, this.y = t.top, this
            }, this._listen = function() {
                return this.o.readOnly ? this.$.attr("readonly", "readonly") : (this.$c.bind("mousedown", function(t) {
                    t.preventDefault(), o._xy()._mouse(t)
                }).bind("touchstart", function(t) {
                    t.preventDefault(), o._xy()._touch(t)
                }), this.listen()), this.relative && t(window).resize(function() {
                    o._carve().init(), o._draw()
                }), this
            }, this._configure = function() {
                return this.o.draw && (this.dH = this.o.draw), this.o.change && (this.cH = this.o.change), this.o.cancel && (this.eH = this.o.cancel), this.o.release && (this.rH = this.o.release), this.o.displayPrevious ? (this.pColor = this.h2rgba(this.o.fgColor, "0.4"), this.fgColor = this.h2rgba(this.o.fgColor, "0.6")) : this.fgColor = this.o.fgColor, this
            }, this._clear = function() {
                this.$c[0].width = this.$c[0].width
            }, this._validate = function(t) {
                var e = ~~((0 > t ? -.5 : .5) + t / this.o.step) * this.o.step;
                return Math.round(100 * e) / 100
            }, this.listen = function() {}, this.extend = function() {}, this.init = function() {}, this.change = function() {}, this.val = function() {}, this.xy2val = function() {}, this.draw = function() {}, this.clear = function() {
                this._clear()
            }, this.h2rgba = function(t, e) {
                var o;
                return t = t.substring(1, 7), o = [parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16)], "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + e + ")"
            }, this.copy = function(t, e) {
                for (var o in t) e[o] = t[o]
            }
        }, e.Dial = function() {
            e.o.call(this), this.startAngle = null, this.xy = null, this.radius = null, this.lineWidth = null, this.cursorExt = null, this.w2 = null, this.PI2 = 2 * Math.PI, this.extend = function() {
                this.o = t.extend({
                    bgColor: this.$.data("bgcolor") || "#EEEEEE",
                    angleOffset: this.$.data("angleoffset") || 0,
                    angleArc: this.$.data("anglearc") || 360,
                    inline: !0
                }, this.o)
            }, this.val = function(t, e) {
                return null == t ? this.v : (t = this.o.parse(t), void(e !== !1 && t != this.v && this.rH && this.rH(t) === !1 || (this.cv = this.o.stopper ? o(i(t, this.o.max), this.o.min) : t, this.v = this.cv, this.$.val(this.o.format(this.v)), this._draw())))
            }, this.xy2val = function(t, e) {
                var n, s;
                return n = Math.atan2(t - (this.x + this.w2), -(e - this.y - this.w2)) - this.angleOffset, this.o.flip && (n = this.angleArc - n - this.PI2), this.angleArc != this.PI2 && 0 > n && n > -.5 ? n = 0 : 0 > n && (n += this.PI2), s = n * (this.o.max - this.o.min) / this.angleArc + this.o.min, this.o.stopper && (s = o(i(s, this.o.max), this.o.min)), s
            }, this.listen = function() {
                var e, n, s, a, r = this,
                    l = function(t) {
                        t.preventDefault();
                        var s = t.originalEvent,
                            a = s.detail || s.wheelDeltaX,
                            l = s.detail || s.wheelDeltaY,
                            p = r._validate(r.o.parse(r.$.val())) + (a > 0 || l > 0 ? r.o.step : 0 > a || 0 > l ? -r.o.step : 0);
                        p = o(i(p, r.o.max), r.o.min), r.val(p, !1), r.rH && (clearTimeout(e), e = setTimeout(function() {
                            r.rH(p), e = null
                        }, 100), n || (n = setTimeout(function() {
                            e && r.rH(p), n = null
                        }, 200)))
                    },
                    p = 1,
                    h = {
                        37: -r.o.step,
                        38: r.o.step,
                        39: r.o.step,
                        40: -r.o.step
                    };
                this.$.bind("keydown", function(e) {
                    var n = e.keyCode;
                    if (n >= 96 && 105 >= n && (n = e.keyCode = n - 48), s = parseInt(String.fromCharCode(n)), isNaN(s) && (13 !== n && 8 !== n && 9 !== n && 189 !== n && (190 !== n || r.$.val().match(/\./)) && e.preventDefault(), t.inArray(n, [37, 38, 39, 40]) > -1)) {
                        e.preventDefault();
                        var l = r.o.parse(r.$.val()) + h[n] * p;
                        r.o.stopper && (l = o(i(l, r.o.max), r.o.min)), r.change(r._validate(l)), r._draw(), a = window.setTimeout(function() {
                            p *= 2
                        }, 30)
                    }
                }).bind("keyup", function() {
                    isNaN(s) ? a && (window.clearTimeout(a), a = null, p = 1, r.val(r.$.val())) : r.$.val() > r.o.max && r.$.val(r.o.max) || r.$.val() < r.o.min && r.$.val(r.o.min)
                }), this.$c.bind("mousewheel DOMMouseScroll", l), this.$.bind("mousewheel DOMMouseScroll", l)
            }, this.init = function() {
                (this.v < this.o.min || this.v > this.o.max) && (this.v = this.o.min), this.$.val(this.v), this.w2 = this.w / 2, this.cursorExt = this.o.cursor / 100, this.xy = this.w2 * this.scale, this.lineWidth = this.xy * this.o.thickness, this.lineCap = this.o.lineCap, this.radius = this.xy - this.lineWidth / 2, this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset), this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc), this.angleOffset = this.o.angleOffset * Math.PI / 180, this.angleArc = this.o.angleArc * Math.PI / 180, this.startAngle = 1.5 * Math.PI + this.angleOffset, this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                var t = o(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                this.o.displayInput && this.i.css({
                    width: (this.w / 2 + 4 >> 0) + "px",
                    height: (this.w / 3 >> 0) + "px",
                    position: "absolute",
                    "vertical-align": "middle",
                    "margin-top": (this.w / 3 >> 0) + "px",
                    "margin-left": "-" + (3 * this.w / 4 + 2 >> 0) + "px",
                    border: 0,
                    background: "none",
                    font: this.o.fontWeight + " " + (this.w / t >> 0) + "px " + this.o.font,
                    "text-align": "center",
                    color: this.o.inputColor || this.o.fgColor,
                    padding: "0px",
                    "-webkit-appearance": "none"
                }) || this.i.css({
                    width: "0px",
                    visibility: "hidden"
                })
            }, this.change = function(t) {
                this.cv = t, this.$.val(this.o.format(t))
            }, this.angle = function(t) {
                return (t - this.o.min) * this.angleArc / (this.o.max - this.o.min)
            }, this.arc = function(t) {
                var e, o;
                return t = this.angle(t), this.o.flip ? (e = this.endAngle + 1e-5, o = e - t - 1e-5) : (e = this.startAngle - 1e-5, o = e + t + 1e-5), this.o.cursor && (e = o - this.cursorExt) && (o += this.cursorExt), {
                    s: e,
                    e: o,
                    d: this.o.flip && !this.o.cursor
                }
            }, this.draw = function() {
                var t, e = this.g,
                    o = this.arc(this.cv),
                    i = 1;
                e.lineWidth = this.lineWidth, e.lineCap = this.lineCap, "none" !== this.o.bgColor && (e.beginPath(), e.strokeStyle = this.o.bgColor, e.arc(this.xy, this.xy, this.radius, this.endAngle - 1e-5, this.startAngle + 1e-5, !0), e.stroke()), this.o.displayPrevious && (t = this.arc(this.v), e.beginPath(), e.strokeStyle = this.pColor, e.arc(this.xy, this.xy, this.radius, t.s, t.e, t.d), e.stroke(), i = this.cv == this.v), e.beginPath(), e.strokeStyle = i ? this.o.fgColor : this.fgColor, e.arc(this.xy, this.xy, this.radius, o.s, o.e, o.d), e.stroke()
            }, this.cancel = function() {
                this.val(this.v)
            }
        }, t.fn.dial = t.fn.knob = function(o) {
            return this.each(function() {
                var i = new e.Dial;
                i.o = o, i.$ = t(this), i.run()
            }).parent()
        }
    }),
    function(t) {
        var e = -1,
            o = -1,
            i = function(t) {
                return parseFloat(t) || 0
            },
            n = function(e) {
                var o = 1,
                    n = t(e),
                    s = null,
                    a = [];
                return n.each(function() {
                    var e = t(this),
                        n = e.offset().top - i(e.css("margin-top")),
                        r = a.length > 0 ? a[a.length - 1] : null;
                    null === r ? a.push(e) : Math.floor(Math.abs(s - n)) <= o ? a[a.length - 1] = r.add(e) : a.push(e), s = n
                }), a
            },
            s = function(e) {
                var o = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1
                };
                return "object" == typeof e ? t.extend(o, e) : ("boolean" == typeof e ? o.byRow = e : "remove" === e && (o.remove = !0), o)
            },
            a = t.fn.matchHeight = function(e) {
                var o = s(e);
                if (o.remove) {
                    var i = this;
                    return this.css(o.property, ""), t.each(a._groups, function(t, e) {
                        e.elements = e.elements.not(i)
                    }), this
                }
                return this.length <= 1 && !o.target ? this : (a._groups.push({
                    elements: this,
                    options: o
                }), a._apply(this, o), this)
            };
        a._groups = [], a._throttle = 80, a._maintainScroll = !1, a._beforeUpdate = null, a._afterUpdate = null, a._apply = function(e, o) {
            var r = s(o),
                l = t(e),
                p = [l],
                h = t(window).scrollTop(),
                c = t("html").outerHeight(!0),
                u = l.parents().filter(":hidden");
            return u.each(function() {
                var e = t(this);
                e.data("style-cache", e.attr("style"))
            }), u.css("display", "block"), r.byRow && !r.target && (l.each(function() {
                var e = t(this),
                    o = "inline-block" === e.css("display") ? "inline-block" : "block";
                e.data("style-cache", e.attr("style")), e.css({
                    display: o,
                    "padding-top": "0",
                    "padding-bottom": "0",
                    "margin-top": "0",
                    "margin-bottom": "0",
                    "border-top-width": "0",
                    "border-bottom-width": "0",
                    height: "100px"
                })
            }), p = n(l), l.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || "")
            })), t.each(p, function(e, o) {
                var n = t(o),
                    s = 0;
                if (r.target) s = r.target.outerHeight(!1);
                else {
                    if (r.byRow && n.length <= 1) return void n.css(r.property, "");
                    n.each(function() {
                        var e = t(this),
                            o = "inline-block" === e.css("display") ? "inline-block" : "block",
                            i = {
                                display: o
                            };
                        i[r.property] = "", e.css(i), e.outerHeight(!1) > s && (s = e.outerHeight(!1)), e.css("display", "")
                    })
                }
                n.each(function() {
                    var e = t(this),
                        o = 0;
                    r.target && e.is(r.target) || ("border-box" !== e.css("box-sizing") && (o += i(e.css("border-top-width")) + i(e.css("border-bottom-width")), o += i(e.css("padding-top")) + i(e.css("padding-bottom"))), e.css(r.property, s - o))
                })
            }), u.each(function() {
                var e = t(this);
                e.attr("style", e.data("style-cache") || null)
            }), a._maintainScroll && t(window).scrollTop(h / c * t("html").outerHeight(!0)), this
        }, a._applyDataApi = function() {
            var e = {};
            t("[data-match-height], [data-mh]").each(function() {
                var o = t(this),
                    i = o.attr("data-mh") || o.attr("data-match-height");
                e[i] = i in e ? e[i].add(o) : o
            }), t.each(e, function() {
                this.matchHeight(!0)
            })
        };
        var r = function(e) {
            a._beforeUpdate && a._beforeUpdate(e, a._groups), t.each(a._groups, function() {
                a._apply(this.elements, this.options)
            }), a._afterUpdate && a._afterUpdate(e, a._groups)
        };
        a._update = function(i, n) {
            if (n && "resize" === n.type) {
                var s = t(window).width();
                if (s === e) return;
                e = s
            }
            i ? -1 === o && (o = setTimeout(function() {
                r(n), o = -1
            }, a._throttle)) : r(n)
        }, t(a._applyDataApi), t(window).bind("load", function(t) {
            a._update(!1, t)
        }), t(window).bind("resize orientationchange", function(t) {
            a._update(!0, t)
        })
    }(jQuery),
    // function(t, e) {
    //     "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd && define("GMaps", [], e), t.GMaps = e()
    // }
    "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, o) {
        var i = {
            init: function(e, o) {
                var i = this;
                i.$elem = t(o), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
            },
            loadContent: function() {
                function e(t) {
                    var e, o = "";
                    if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
                    else {
                        for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
                        i.$elem.html(o)
                    }
                    i.logIn()
                }
                var o, i = this;
                "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (o = i.options.jsonPath, t.getJSON(o, e)) : i.logIn()
            },
            logIn: function() {
                var t = this;
                t.$elem.data("owl-originalStyles", t.$elem.attr("style")), t.$elem.data("owl-originalClasses", t.$elem.attr("class")), t.$elem.css({
                    opacity: 0
                }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
            },
            setVars: function() {
                var t = this;
                return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
            },
            onStartup: function() {
                var t = this;
                t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
            },
            eachMoveUpdate: function() {
                var t = this;
                t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
            },
            updateVars: function() {
                var t = this;
                "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
            },
            reload: function() {
                var t = this;
                e.setTimeout(function() {
                    t.updateVars()
                }, 0)
            },
            watchVisibility: function() {
                var t = this;
                return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
                    opacity: 0
                }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function() {
                    t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
                        opacity: 1
                    }, 200), e.clearInterval(t.checkVisible))
                }, 500)))
            },
            wrapItems: function() {
                var t = this;
                t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
            },
            baseClass: function() {
                var t = this,
                    e = t.$elem.hasClass(t.options.baseClass),
                    o = t.$elem.hasClass(t.options.theme);
                e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme)
            },
            updateItems: function() {
                var e, o, i = this;
                if (i.options.responsive === !1) return !1;
                if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
                if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
                    for (i.options.itemsCustom.sort(function(t, e) {
                            return t[0] - e[0]
                        }), o = 0; o < i.options.itemsCustom.length; o += 1) i.options.itemsCustom[o][0] <= e && (i.options.items = i.options.itemsCustom[o][1]);
                else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
                i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
            },
            response: function() {
                var o, i, n = this;
                return n.options.responsive !== !0 ? !1 : (i = t(e).width(), n.resizer = function() {
                    t(e).width() !== i && (n.options.autoPlay !== !1 && e.clearInterval(n.autoPlayInterval), e.clearTimeout(o), o = e.setTimeout(function() {
                        i = t(e).width(), n.updateVars()
                    }, n.options.responsiveRefreshRate))
                }, void t(e).resize(n.resizer))
            },
            updatePosition: function() {
                var t = this;
                t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
            },
            appendItemsSizes: function() {
                var e = this,
                    o = 0,
                    i = e.itemsAmount - e.options.items;
                e.$owlItems.each(function(n) {
                    var s = t(this);
                    s.css({
                        width: e.itemWidth
                    }).data("owl-item", Number(n)), (n % e.options.items === 0 || n === i) && (n > i || (o += 1)), s.data("owl-roundPages", o)
                })
            },
            appendWrapperSizes: function() {
                var t = this,
                    e = t.$owlItems.length * t.itemWidth;
                t.$owlWrapper.css({
                    width: 2 * e,
                    left: 0
                }), t.appendItemsSizes()
            },
            calculateAll: function() {
                var t = this;
                t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
            },
            calculateWidth: function() {
                var t = this;
                t.itemWidth = Math.round(t.$elem.width() / t.options.items)
            },
            max: function() {
                var t = this,
                    e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
                return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
            },
            min: function() {
                return 0
            },
            loops: function() {
                var e, o, i, n = this,
                    s = 0,
                    a = 0;
                for (n.positionsInArray = [0], n.pagesInArray = [], e = 0; e < n.itemsAmount; e += 1) a += n.itemWidth, n.positionsInArray.push(-a), n.options.scrollPerPage === !0 && (o = t(n.$owlItems[e]), i = o.data("owl-roundPages"), i !== s && (n.pagesInArray[s] = n.positionsInArray[e], s = i))
            },
            buildControls: function() {
                var e = this;
                (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
            },
            buildButtons: function() {
                var e = this,
                    o = t('<div class="owl-buttons"/>');
                e.owlControls.append(o), e.buttonPrev = t("<div/>", {
                    "class": "owl-prev",
                    html: e.options.navigationText[0] || ""
                }), e.buttonNext = t("<div/>", {
                    "class": "owl-next",
                    html: e.options.navigationText[1] || ""
                }), o.append(e.buttonPrev).append(e.buttonNext), o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function(t) {
                    t.preventDefault()
                }), o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function(o) {
                    o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
                })
            },
            buildPagination: function() {
                var e = this;
                e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(o) {
                    o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
                })
            },
            updatePagination: function() {
                var e, o, i, n, s, a, r = this;
                if (r.options.pagination === !1) return !1;
                for (r.paginationWrapper.html(""), e = 0, o = r.itemsAmount - r.itemsAmount % r.options.items, n = 0; n < r.itemsAmount; n += 1) n % r.options.items === 0 && (e += 1, o === n && (i = r.itemsAmount - r.options.items), s = t("<div/>", {
                    "class": "owl-page"
                }), a = t("<span></span>", {
                    text: r.options.paginationNumbers === !0 ? e : "",
                    "class": r.options.paginationNumbers === !0 ? "owl-numbers" : ""
                }), s.append(a), s.data("owl-page", o === n ? i : n), s.data("owl-roundPages", e), r.paginationWrapper.append(s));
                r.checkPagination()
            },
            checkPagination: function() {
                var e = this;
                return e.options.pagination === !1 ? !1 : void e.paginationWrapper.find(".owl-page").each(function() {
                    t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
                })
            },
            checkNavigation: function() {
                var t = this;
                return t.options.navigation === !1 ? !1 : void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
            },
            updateControls: function() {
                var t = this;
                t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
            },
            destroyControls: function() {
                var t = this;
                t.owlControls && t.owlControls.remove()
            },
            next: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
                    if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
                    e.currentItem = 0, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            prev: function(t) {
                var e = this;
                if (e.isTransition) return !1;
                if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
                    if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
                    e.currentItem = e.maximumItem, t = "rewind"
                }
                e.goTo(e.currentItem, t)
            },
            goTo: function(t, o, i) {
                var n, s = this;
                return s.isTransition ? !1 : ("function" == typeof s.options.beforeMove && s.options.beforeMove.apply(this, [s.$elem]), t >= s.maximumItem ? t = s.maximumItem : 0 >= t && (t = 0), s.currentItem = s.owl.currentItem = t, s.options.transitionStyle !== !1 && "drag" !== i && 1 === s.options.items && s.browser.support3d === !0 ? (s.swapSpeed(0), s.browser.support3d === !0 ? s.transition3d(s.positionsInArray[t]) : s.css2slide(s.positionsInArray[t], 1), s.afterGo(), s.singleItemTransition(), !1) : (n = s.positionsInArray[t], s.browser.support3d === !0 ? (s.isCss3Finish = !1, o === !0 ? (s.swapSpeed("paginationSpeed"), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.paginationSpeed)) : "rewind" === o ? (s.swapSpeed(s.options.rewindSpeed), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.rewindSpeed)) : (s.swapSpeed("slideSpeed"), e.setTimeout(function() {
                    s.isCss3Finish = !0
                }, s.options.slideSpeed)), s.transition3d(n)) : o === !0 ? s.css2slide(n, s.options.paginationSpeed) : "rewind" === o ? s.css2slide(n, s.options.rewindSpeed) : s.css2slide(n, s.options.slideSpeed), void s.afterGo()))
            },
            jumpTo: function(t) {
                var e = this;
                "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
            },
            afterGo: function() {
                var t = this;
                t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
            },
            stop: function() {
                var t = this;
                t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
            },
            checkAp: function() {
                var t = this;
                "stop" !== t.apStatus && t.play()
            },
            play: function() {
                var t = this;
                return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function() {
                    t.next(!0)
                }, t.options.autoPlay)))
            },
            swapSpeed: function(t) {
                var e = this;
                "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
            },
            addCssSpeed: function(t) {
                return {
                    "-webkit-transition": "all " + t + "ms ease",
                    "-moz-transition": "all " + t + "ms ease",
                    "-o-transition": "all " + t + "ms ease",
                    transition: "all " + t + "ms ease"
                }
            },
            removeTransition: function() {
                return {
                    "-webkit-transition": "",
                    "-moz-transition": "",
                    "-o-transition": "",
                    transition: ""
                }
            },
            doTranslate: function(t) {
                return {
                    "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
                    "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
                    transform: "translate3d(" + t + "px, 0px,0px)"
                }
            },
            transition3d: function(t) {
                var e = this;
                e.$owlWrapper.css(e.doTranslate(t))
            },
            css2move: function(t) {
                var e = this;
                e.$owlWrapper.css({
                    left: t
                })
            },
            css2slide: function(t, e) {
                var o = this;
                o.isCssFinish = !1, o.$owlWrapper.stop(!0, !0).animate({
                    left: t
                }, {
                    duration: e || o.options.slideSpeed,
                    complete: function() {
                        o.isCssFinish = !0
                    }
                })
            },
            checkBrowser: function() {
                var t, i, n, s, a = this,
                    r = "translate3d(0px, 0px, 0px)",
                    l = o.createElement("div");
                l.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), n = null !== i && 1 === i.length, s = "ontouchstart" in e || e.navigator.msMaxTouchPoints, a.browser = {
                    support3d: n,
                    isTouch: s
                }
            },
            moveEvents: function() {
                var t = this;
                (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
            },
            eventTypes: function() {
                var t = this,
                    e = ["s", "e", "x"];
                t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
            },
            disabledEvents: function() {
                var e = this;
                e.$elem.on("dragstart.owl", function(t) {
                    t.preventDefault()
                }), e.$elem.on("mousedown.disableTextSelect", function(e) {
                    return t(e.target).is("input, textarea, select, option")
                })
            },
            gestures: function() {
                function i(t) {
                    if (void 0 !== t.touches) return {
                        x: t.touches[0].pageX,
                        y: t.touches[0].pageY
                    };
                    if (void 0 === t.touches) {
                        if (void 0 !== t.pageX) return {
                            x: t.pageX,
                            y: t.pageY
                        };
                        if (void 0 === t.pageX) return {
                            x: t.clientX,
                            y: t.clientY
                        }
                    }
                }

                function n(e) {
                    "on" === e ? (t(o).on(l.ev_types.move, a), t(o).on(l.ev_types.end, r)) : "off" === e && (t(o).off(l.ev_types.move), t(o).off(l.ev_types.end))
                }

                function s(o) {
                    var s, a = o.originalEvent || o || e.event;
                    if (3 === a.which) return !1;
                    if (!(l.itemsAmount <= l.options.items)) {
                        if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
                        l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), s = t(this).position(), p.relativePos = s.left, p.offsetX = i(a).x - s.left, p.offsetY = i(a).y - s.top, n("on"), p.sliding = !1, p.targetElement = a.target || a.srcElement
                    }
                }

                function a(n) {
                    var s, a, r = n.originalEvent || n || e.event;
                    l.newPosX = i(r).x - p.offsetX, l.newPosY = i(r).y - p.offsetY, l.newRelativeX = l.newPosX - p.relativePos, "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && (p.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== r.preventDefault ? r.preventDefault() : r.returnValue = !1, p.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && t(o).off("touchmove.owl"), s = function() {
                        return l.newRelativeX / 5
                    }, a = function() {
                        return l.maximumPixels + l.newRelativeX / 5
                    }, l.newPosX = Math.max(Math.min(l.newPosX, s()), a()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
                }

                function r(o) {
                    var i, s, a, r = o.originalEvent || o || e.event;
                    r.target = r.target || r.srcElement, p.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), p.targetElement === r.target && l.browser.isTouch !== !0 && (t(r.target).on("click.disable", function(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
                    }), s = t._data(r.target, "events").click, a = s.pop(), s.splice(0, 0, a))), n("off")
                }
                var l = this,
                    p = {
                        offsetX: 0,
                        offsetY: 0,
                        baseElWidth: 0,
                        relativePos: 0,
                        position: null,
                        minSwipe: null,
                        maxSwipe: null,
                        sliding: null,
                        dargging: null,
                        targetElement: null
                    };
                l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", s)
            },
            getNewPosition: function() {
                var t = this,
                    e = t.closestItem();
                return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
            },
            closestItem: function() {
                var e = this,
                    o = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
                    i = e.newPosX,
                    n = null;
                return t.each(o, function(s, a) {
                    i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, e.currentItem = e.options.scrollPerPage === !0 ? t.inArray(n, e.positionsInArray) : s) : i + e.itemWidth / 20 < a && i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (n = o[s + 1] || o[o.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = o[s + 1], e.currentItem = s + 1))
                }), e.currentItem
            },
            moveDirection: function() {
                var t, e = this;
                return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
            },
            customEvents: function() {
                var t = this;
                t.$elem.on("owl.next", function() {
                    t.next()
                }), t.$elem.on("owl.prev", function() {
                    t.prev()
                }), t.$elem.on("owl.play", function(e, o) {
                    t.options.autoPlay = o, t.play(), t.hoverStatus = "play"
                }), t.$elem.on("owl.stop", function() {
                    t.stop(), t.hoverStatus = "stop"
                }), t.$elem.on("owl.goTo", function(e, o) {
                    t.goTo(o)
                }), t.$elem.on("owl.jumpTo", function(e, o) {
                    t.jumpTo(o)
                })
            },
            stopOnHover: function() {
                var t = this;
                t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function() {
                    t.stop()
                }), t.$elem.on("mouseout", function() {
                    "stop" !== t.hoverStatus && t.play()
                }))
            },
            lazyLoad: function() {
                var e, o, i, n, s, a = this;
                if (a.options.lazyLoad === !1) return !1;
                for (e = 0; e < a.itemsAmount; e += 1) o = t(a.$owlItems[e]), "loaded" !== o.data("owl-loaded") && (i = o.data("owl-item"), n = o.find(".lazyOwl"), "string" == typeof n.data("src") ? (void 0 === o.data("owl-loaded") && (n.hide(), o.addClass("loading").data("owl-loaded", "checked")), s = a.options.lazyFollow === !0 ? i >= a.currentItem : !0, s && i < a.currentItem + a.options.items && n.length && a.lazyPreload(o, n)) : o.data("owl-loaded", "loaded"))
            },
            lazyPreload: function(t, o) {
                function i() {
                    t.data("owl-loaded", "loaded").removeClass("loading"), o.removeAttr("data-src"), "fade" === a.options.lazyEffect ? o.fadeIn(400) : o.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
                }

                function n() {
                    r += 1, a.completeImg(o.get(0)) || s === !0 ? i() : 100 >= r ? e.setTimeout(n, 100) : i()
                }
                var s, a = this,
                    r = 0;
                "DIV" === o.prop("tagName") ? (o.css("background-image", "url(" + o.data("src") + ")"), s = !0) : o[0].src = o.data("src"), n()
            },
            autoHeight: function() {
                function o() {
                    var o = t(s.$owlItems[s.currentItem]).height();
                    s.wrapperOuter.css("height", o + "px"), s.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function() {
                        s.wrapperOuter.addClass("autoHeight")
                    }, 0)
                }

                function i() {
                    n += 1, s.completeImg(a.get(0)) ? o() : 100 >= n ? e.setTimeout(i, 100) : s.wrapperOuter.css("height", "")
                }
                var n, s = this,
                    a = t(s.$owlItems[s.currentItem]).find("img");
                void 0 !== a.get(0) ? (n = 0, i()) : o()
            },
            completeImg: function(t) {
                var e;
                return t.complete ? (e = typeof t.naturalWidth, "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1
            },
            onVisibleItems: function() {
                var e, o = this;
                for (o.options.addClassActive === !0 && o.$owlItems.removeClass("active"), o.visibleItems = [], e = o.currentItem; e < o.currentItem + o.options.items; e += 1) o.visibleItems.push(e), o.options.addClassActive === !0 && t(o.$owlItems[e]).addClass("active");
                o.owl.visibleItems = o.visibleItems
            },
            transitionTypes: function(t) {
                var e = this;
                e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
            },
            singleItemTransition: function() {
                function t(t) {
                    return {
                        position: "relative",
                        left: t + "px"
                    }
                }
                var e = this,
                    o = e.outClass,
                    i = e.inClass,
                    n = e.$owlItems.eq(e.currentItem),
                    s = e.$owlItems.eq(e.prevItem),
                    a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
                    r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
                    l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
                e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
                    "-webkit-transform-origin": r + "px",
                    "-moz-perspective-origin": r + "px",
                    "perspective-origin": r + "px"
                }), s.css(t(a, 10)).addClass(o).on(l, function() {
                    e.endPrev = !0, s.off(l), e.clearTransStyle(s, o)
                }), n.addClass(i).on(l, function() {
                    e.endCurrent = !0, n.off(l), e.clearTransStyle(n, i)
                })
            },
            clearTransStyle: function(t, e) {
                var o = this;
                t.css({
                    position: "",
                    left: ""
                }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), o.endPrev = !1, o.endCurrent = !1, o.isTransition = !1)
            },
            owlStatus: function() {
                var t = this;
                t.owl = {
                    userOptions: t.userOptions,
                    baseElement: t.$elem,
                    userItems: t.$userItems,
                    owlItems: t.$owlItems,
                    currentItem: t.currentItem,
                    prevItem: t.prevItem,
                    visibleItems: t.visibleItems,
                    isTouch: t.browser.isTouch,
                    browser: t.browser,
                    dragDirection: t.dragDirection
                }
            },
            clearEvents: function() {
                var i = this;
                i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer)
            },
            unWrap: function() {
                var t = this;
                0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr("style", t.$elem.data("owl-originalStyles") || "").attr("class", t.$elem.data("owl-originalClasses"))
            },
            destroy: function() {
                var t = this;
                t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
            },
            reinit: function(e) {
                var o = this,
                    i = t.extend({}, o.userOptions, e);
                o.unWrap(), o.init(i, o.$elem)
            },
            addItem: function(t, e) {
                var o, i = this;
                return t ? 0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), o = void 0 === e || -1 === e ? -1 : e, o >= i.$userItems.length || -1 === o ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(o).before(t), void i.setVars()) : !1
            },
            removeItem: function(t) {
                var e, o = this;
                return 0 === o.$elem.children().length ? !1 : (e = void 0 === t || -1 === t ? -1 : t, o.unWrap(), o.$userItems.eq(e).remove(), void o.setVars())
            }
        };
        t.fn.owlCarousel = function(e) {
            return this.each(function() {
                if (t(this).data("owl-init") === !0) return !1;
                t(this).data("owl-init", !0);
                var o = Object.create(i);
                o.init(e, this), t.data(this, "owlCarousel", o)
            })
        }, t.fn.owlCarousel.options = {
            items: 5,
            itemsCustom: !1,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: !1,
            itemsMobile: [479, 1],
            singleItem: !1,
            itemsScaleUp: !1,
            slideSpeed: 200,
            paginationSpeed: 800,
            rewindSpeed: 1e3,
            autoPlay: !1,
            stopOnHover: !1,
            navigation: !1,
            navigationText: ["prev", "next"],
            rewindNav: !0,
            scrollPerPage: !1,
            pagination: !0,
            paginationNumbers: !1,
            responsive: !0,
            responsiveRefreshRate: 200,
            responsiveBaseWidth: e,
            baseClass: "owl-carousel",
            theme: "owl-theme",
            lazyLoad: !1,
            lazyFollow: !0,
            lazyEffect: "fade",
            autoHeight: !1,
            jsonPath: !1,
            jsonSuccess: !1,
            dragBeforeAnimFinish: !0,
            mouseDrag: !0,
            touchDrag: !0,
            addClassActive: !1,
            transitionStyle: !1,
            beforeUpdate: !1,
            afterUpdate: !1,
            beforeInit: !1,
            afterInit: !1,
            beforeMove: !1,
            afterMove: !1,
            afterAction: !1,
            startDragging: !1,
            afterLazyLoad: !1
        }
    }(jQuery, window, document);
