		
	"use strict";

function _classCallCheck(t, e) {
	if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}
var _slicedToArray = function () {
		function t(t, e) {
			var i = [],
				a = !0,
				s = !1,
				n = undefined;
			try {
				for (var r, o = t[Symbol.iterator](); !(a = (r = o.next()).done) && (i.push(r.value), !e || i.length !== e); a = !0);
			} catch (l) {
				s = !0, n = l
			} finally {
				try {
					!a && o["return"] && o["return"]()
				} finally {
					if (s) throw n
				}
			}
			return i
		}
		return function (e, i) {
			if (Array.isArray(e)) return e;
			if (Symbol.iterator in Object(e)) return t(e, i);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}(),
	_createClass = function () {
		function t(t, e) {
			for (var i = 0; i < e.length; i++) {
				var a = e[i];
				a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
			}
		}
		return function (e, i, a) {
			return i && t(e.prototype, i), a && t(e, a), e
		}
	}();
! function (t, e) {
	function i(t) {
		var i = e[t];
		e[t] = function (t) {
			return s(i(t))
		}
	}

	function a(e, i, a) {
		return (a = this).attachEvent("on" + e, function (e) {
			(e = e || t.event).preventDefault = e.preventDefault || function () {
				e.returnValue = !1
			}, e.stopPropagation = e.stopPropagation || function () {
				e.cancelBubble = !0
			}, i.call(a, e)
		})
	}

	function s(t, e) {
		if (e = t.length)
			for (; e--;) t[e].addEventListener = a;
		else t.addEventListener = a;
		return t
	}
	t.addEventListener || (s([e, t]), "Element" in t ? t.Element.prototype.addEventListener = a : (e.attachEvent("onreadystatechange", function () {
		s(e.all)
	}), i("getElementsByTagName"), i("getElementById"), i("createElement"), s(e.all)))
}(window, document), "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (t) {
		if ("Element" in t) {
			var e = "classList",
				i = "prototype",
				a = t.Element[i],
				s = Object,
				n = String[i].trim || function () {
					return this.replace(/^\s+|\s+$/g, "")
				},
				r = Array[i].indexOf || function (t) {
					for (var e = 0, i = this.length; e < i; e++)
						if (e in this && this[e] === t) return e;
					return -1
				},
				o = function (t, e) {
					this.name = t, this.code = DOMException[t], this.message = e
				},
				l = function (t, e) {
					if ("" === e) throw new o("SYNTAX_ERR", "An invalid or illegal string was specified");
					if (/\s/.test(e)) throw new o("INVALID_CHARACTER_ERR", "String contains an invalid character");
					return r.call(t, e)
				},
				c = function (t) {
					for (var e = n.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], a = 0, s = i.length; a < s; a++) this.push(i[a]);
					this._updateClassName = function () {
						t.setAttribute("class", this.toString())
					}
				},
				h = c[i] = [],
				u = function () {
					return new c(this)
				};
			if (o[i] = Error[i], h.item = function (t) {
					return this[t] || null
				}, h.contains = function (t) {
					return -1 !== l(this, t += "")
				}, h.add = function () {
					var t, e = arguments,
						i = 0,
						a = e.length,
						s = !1;
					do {
						t = e[i] + "", -1 === l(this, t) && (this.push(t), s = !0)
					} while (++i < a);
					s && this._updateClassName()
				}, h.remove = function () {
					var t, e, i = arguments,
						a = 0,
						s = i.length,
						n = !1;
					do {
						for (t = i[a] + "", e = l(this, t); - 1 !== e;) this.splice(e, 1), n = !0, e = l(this, t)
					} while (++a < s);
					n && this._updateClassName()
				}, h.toggle = function (t, e) {
					t += "";
					var i = this.contains(t),
						a = i ? !0 !== e && "remove" : !1 !== e && "add";
					return a && this[a](t), !0 === e || !1 === e ? e : !i
				}, h.toString = function () {
					return this.join(" ")
				}, s.defineProperty) {
				var d = {
					get: u,
					enumerable: !0,
					configurable: !0
				};
				try {
					s.defineProperty(a, e, d)
				} catch (p) {
					p.number !== undefined && -2146823252 !== p.number || (d.enumerable = !1, s.defineProperty(a, e, d))
				}
			} else s[i].__defineGetter__ && a.__defineGetter__(e, u)
		}
	}(self)), String.prototype.trim || (String.prototype.trim = function () {
		return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
	}), String.prototype.includes || (String.prototype.includes = function () {
		return -1 !== String.prototype.indexOf.apply(this, arguments)
	}), Array.prototype.includes || (Array.prototype.includes = function () {
		return -1 !== Array.prototype.indexOf.apply(this, arguments)
	}), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach), Object.entries || (Object.entries = function (t) {
		for (var e = Object.keys(t), i = e.length, a = new Array(i); i--;) a[i] = [e[i], t[e[i]]];
		return a
	}), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (t) {
		var e = this;
		do {
			if (e.matches(t)) return e;
			e = e.parentElement || e.parentNode
		} while (null !== e && 1 === e.nodeType);
		return null
	}), "function" != typeof Object.assign && (Object.assign = function (t) {
		if (null == t) throw new TypeError("Cannot convert undefined or null to object");
		t = Object(t);
		for (var e = 1; e < arguments.length; e++) {
			var i = arguments[e];
			if (null != i)
				for (var a in i) Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a])
		}
		return t
	}),
	function () {
		function t() {
			(l = new w).getEnableStatus() && (o = new p("products", window.document, null)), i = 0, a = 10, s = !1, n = 0, r = 0, c = 0, h = !1
		}

		function e(t) {
			var e = window.location.pathname.replace(/\/$/, "");
			return ("undefined" == typeof window[t] || window[t] != e) && (window[t] = e, !0)
		}
		var i = undefined,
			a = undefined,
			s = undefined,
			n = undefined,
			r = undefined,
			o = undefined,
			l = undefined,
			c = undefined,
			h = undefined,
			u = undefined,
			d = undefined,
			p = function () {
				function t(e, i, a) {
					_classCallCheck(this, t), this.instanceType = e, this.currentDocument = i, this.storeID = 17542, this.hasOnlyDefaultVariant = !1, this.eventsRegistered = !1, this.multiLingualInfo = null, this.untranslatedData = null, this.untranslatedFetchStatus = "none", this.instanceSubType = this.instanceType, a && "undefined" != typeof a.instance_sub_type && (this.instanceSubType = a.instance_sub_type), this.setInstanceGlobals(), this.fetchInformationFromJs()
				}
				return _createClass(t, [{
					key: "setInstanceGlobals",
					value: function () {
						this.productInfoTree = new g, this.clientSpecs = new w, this.uiElements = new v(this.instanceType, this.clientSpecs), this.themeCode = "common", this.themeSupportConfig = {}, this.selectionAllowed = !1, this.doNotSelectAnOption = this.clientSpecs.getDoNotSelectAnOption(), this.doNotSelectAnOption.count = 0, this.selectedProductGroup = null
					}
				}, {
					key: "dispatchEvent",
					value: function (t, e) {
						var i = document.createEvent("HTMLEvents");
						i.initEvent(t, !0, !1), m(["Event Dispatched!!!", t, e]), e.dispatchEvent(i)
					}
				}, {
					key: "dispatchCustomEvent",
					value: function (t, e, i) {
						if (window.CustomEvent) {
							var a = document.createEvent("CustomEvent");
							a.initCustomEvent("vsk:" + e, !0, !1, i), t.dispatchEvent(a)
						}
					}
				}, {
					key: "isInstanceTypeProduct",
					value: function () {
						return "products" == this.instanceType
					}
				}, {
					key: "isInstanceTypeCollection",
					value: function () {
						return "collections" == this.instanceType
					}
				}, {
					key: "isEventTrusted",
					value: function (t, e) {
						return "undefined" != typeof t.isTrusted && "undefined" != typeof t.screenX && "undefined" != typeof t.screenY && 0 == t.isTrusted && 0 != t.screenX && 0 != t.screenY || ("undefined" != typeof t.isTrusted ? t.isTrusted : "undefined" != typeof t.screenX && "undefined" != typeof t.screenY ? 0 != t.screenX && 0 != t.screenY : e)
					}
				}, {
					key: "isClickEvent",
					value: function (t) {
						return "click" == t
					}
				}, {
					key: "extractViewType",
					value: function (t) {
						var e = t.split(" / ");
						return this.isInstanceTypeProduct() ? e = e[0] : this.isInstanceTypeCollection() && (e = e.length > 1 ? e[1] : e[0]), e
					}
				}, {
					key: "extractProductHandle",
					value: function (t) {
						var e = t.split("/");
						return (e = (e = e[e.length - 1]).split(RegExp("\\?|\\#", "gi")))[0]
					}
				}, {
					key: "setSelectMinWidth",
					value: function (t) {
						var e = 250;
						t.style.minWidth && ((e = parseInt(t.style.minWidth.split("px")[0])) || (e = 250)), t.offsetWidth > e && (e = t.offsetWidth), t.style.minWidth = e + "px"
					}
				}, {
					key: "scrollSwatchSlider",
					value: function (t, e) {
						var i = t.getAttribute("data-navigation"),
							a = t.closest(".swatch-navigable"),
							s = a.querySelector('[data-navigation="left"]'),
							n = a.querySelector('[data-navigation="right"]'),
							r = a.querySelector("ul.swatch-view"),
							o = r.querySelectorAll("li.swatch-view-item:not(.hidden)");
						a.style.paddingLeft = "0", a.style.paddingRight = "0";
						var l = 5,
							c = r.scrollWidth - r.clientWidth,
							h = 20;
						if (c <= l) return s.style.display = "none", void(n.style.display = "none");
						if (a.style.paddingLeft = "", a.style.paddingRight = "", s.style.display = "", n.style.display = "", !e) {
							if ("undefined" != typeof r.offsetLeft) {
								for (var u = 0; u < o.length; u++) {
									var d = o[u].offsetLeft - r.offsetLeft;
									d > r.offsetWidth || (h = d)
								}
								0 == h && (h = r.offsetWidth)
							}
							var p = r.scrollLeft;
							"left" == i ? (p -= h, r.scrollLeft = p, a.style.paddingRight = "", n.style.display = "") : "right" == i && (p += h, r.scrollLeft = p, a.style.paddingLeft = "", s.style.display = ""), p <= l ? (a.style.paddingLeft = "0px", s.style.display = "none") : c - p <= l && (a.style.paddingRight = "0px", n.style.display = "none")
						}
					}
				}, {
					key: "getCorrectSwatchRoot",
					value: function () {
						var t = null;
						if (this.isInstanceTypeProduct()) {
							var e = this.clientSpecs.getSelectors().swatch_root.selector;
							!(t = this.currentDocument.querySelector(e)) && this.currentDocument.matches && this.currentDocument.matches(e) && (t = this.currentDocument)
						} else if (this.isInstanceTypeCollection()) {
							var i = this.getInstanceConfig().swatch_display_selector;
							t = this.currentDocument, "" != i && (t = this.currentDocument.querySelector(i)), t || (t = this.currentDocument)
						}
						return t
					}
				}, {
					key: "setProductGroupsObject",
					value: function () {
						u || (u = [], d = {})
					}
				}, {
					key: "getProductsGroups",
					value: function (t) {
						for (var e = [], i = 0; i < t.length; i++) {
							var a = t[i];
							e.push(u[a])
						}
						return e
					}
				}, {
					key: "getProductGroupIndexes",
					value: function (t) {
						this.setProductGroupsObject();
						var e = [],
							i = d[t];
						return i || e
					}
				}, {
					key: "getGroupSwatchImageURL",
					value: function (t, e) {
						return "https://starappsstudio.s3.amazonaws.com/cdn/apps/vsk" + "/s" + this.storeID + "/swatch_images/" + t + "/" + e
					}
				}, {
					key: "generateProductGroups",
					value: function () {
						var t = this;
						if (this.uiElements.getIsSwatchRootDisplayed() || this.hasOnlyDefaultVariant) {
							var e = this.getProductGroupIndexes(this.productInfoTree.getProductInfo().handle),
								i = this.getProductsGroups(e);
							this.uiElements.getIsSwatchRootDisplayed() || (this.isInstanceTypeProduct() ? this.uiElements.renderSwatchRoot(this.uiElements.getSwatchRoot([]), this.getCorrectSwatchRoot(), "top" == this.clientSpecs.getSelectors().swatch_root.position) : this.isInstanceTypeCollection() && this.uiElements.renderSwatchRoot(this.uiElements.getSwatchRoot([]), this.getCorrectSwatchRoot(), "top" == this.getInstanceConfig().swatch_position));
							var a = this.currentDocument.querySelector(".swatches.swatches-type-" + this.instanceType),
								s = {
									top: 0,
									bottom: 0
								},
								n = {
									top: [],
									bottom: []
								};
							Object.entries(i).forEach(function (e) {
								var i = _slicedToArray(e, 2),
									r = i[0],
									o = i[1],
									l = "group" + o.id;
								if ("length" != r) {
									for (var c = 0; c < n[o.display_position].length; c++) {
										var h = n[o.display_position][c];
										if (o.group_name.toString() < h.group_name.toString()) {
											s[o.display_position] = c;
											break
										}
										"top" == o.display_position ? s[o.display_position] = c + 1 : "bottom" == o.display_position && (s[o.display_position] = -1)
									}
									t.selectedProductGroup && t.selectedProductGroup == l || t.generateProductGroupsUI(s, a, l, o), n[o.display_position].push(o)
								}
							})
						} else setTimeout(this.generateProductGroups.bind(this), 250)
					}
				}, {
					key: "generateProductGroupsUI",
					value: function (t, e, i, a) {
						var s = !1,
							n = a.option_name ? a.option_name : "",
							r = {
								available_count: 0,
								name: this.getTranslation(n),
								untranslated_name: n,
								view_type: this.extractViewType(a.view_type),
								drop_down_type: a.drop_down_type,
								is_product_group: !0,
								data: []
							},
							o = 0,
							l = this.isInstanceTypeCollection() ? this.getSwatchMinifiedCount("groups") : null;
						if ("hidden" != r.view_type)
							for (var c = 0; c < a.option_values.length; c++) {
								var h = a.option_values[c],
									u = h.title,
									d = h.image,
									p = this.productInfoTree.getProductInfo().handle == h.handle;
								if (null != l) {
									if (l <= 1 && !p) {
										o++;
										continue
									}
									p || l--
								}
								if ("undefined" == typeof h.available && (h.available = !0), d || (d = {
										src: "none"
									}), "object" != typeof d && (d = {
										src: d
									}), "secondary_image" == a.variant_image_type && h.secondary_image ? d.src = h.secondary_image : "last_image" == a.variant_image_type && h.last_image && (d.src = h.last_image), ("undefined" == typeof h.published || h.published) && "" != h.handle) {
									h.option_value && "" != h.option_value.trim() && (u = this.getTranslation(h.option_value));
									var g = window.location.protocol + "//" + window.location.host;
									g += this.getCurrentLanguageSlug() + "/products/" + h.handle, ("custom_image" == r.view_type || "drop_down" == r.view_type && "with_custom_image" == r.drop_down_type) && (d = {
										src: this.getGroupSwatchImageURL(i, h.handle)
									}), r.data.push({
										value: u,
										original_value: u,
										featured_image: d,
										available: h.available,
										url: g,
										selected: p
									}), h.available && (r.available_count += 1), p && (s = !0)
								}
							}
						var w = "";
						if (w = "<div " + (this.isInstanceTypeProduct() ? 'id="swatch-' + i + '" ' : "") + 'option-name="' + ("" != r.untranslated_name.trim() ? r.untranslated_name : "empty") + '" option-target="' + i + '" type-group="true">', w += s ? this.uiElements.getViewByType(r.view_type).getView(i, r) : '<input type="hidden" value="Product group hidden or current product not present."/>', w += "</div>", "top" == a.display_position) e.insertBefore(this.uiElements.parseHTML(w)[0], e.children[t.top]);
						else {
							var v = e.children.length - 1 - t.bottom; - 1 != t.bottom && e.children[v] && e.children[v].hasAttribute("type-group") ? e.insertBefore(this.uiElements.parseHTML(w)[0], e.children[v]) : e.append(this.uiElements.parseHTML(w)[0])
						}
						s && this.generateProductGroupsUIHelper(r.view_type, i, e, o)
					}
				}, {
					key: "generateProductGroupsUIHelper",
					value: function (t, e, i, a) {
						var s = i.querySelector('[option-target="' + e + '"] .swatch-group-selector[current-product]');
						if (s) {
							if (0 != a) {
								var n = s.closest("[option-name]").getAttribute("option-name"),
									r = this.uiElements.getMinifiedHTML(n, a, this.productInfoTree.getProductInfo());
								s.closest("ul.swatch-view").appendChild(r)
							}
							if (this.uiElements.selectSwatch(e, s, s.getAttribute("orig-value")), "select_value" == s.getAttribute("type")) {
								var o = s.closest("div.swatch-drop-down-inner").querySelector('div[type="select"]');
								o.style.minWidth && "0px" != o.style.minWidth || this.setSelectMinWidth(o), o.innerHTML = s.innerHTML, s.parentNode.classList.add("swatch-hide")
							}
							if ("image" == s.getAttribute("type")) {
								var l = s.getAttribute("data-value"),
									c = s.closest("[option-target]"),
									h = c.querySelector("span.swatch-variant-name"),
									u = c.getAttribute("option-name");
								h && u && "empty" != u.trim() && "none" != l && (h.innerHTML = ' <span class="swatch-split-symbol">-</span> ' + l)
							}
							if ("slide" == this.clientSpecs.getSwatchPresentation(this.instanceType).style) {
								var d = s.closest(".swatch-navigable");
								if (d) {
									var p = d.querySelector(".swatch-navigation");
									p && p.click()
								}
							}
						}
					}
				}, {
					key: "getInstanceConfig",
					value: function () {
						return this.isInstanceTypeCollection() ? this.clientSpecs.getCollectionConfig() : null
					}
				}, {
					key: "removeElement",
					value: function (t) {
						t.parentNode.removeChild(t)
					}
				}, {
					key: "generateUIForQuickView",
					value: function () {
						var e = this,
							i = null,
							a = 0,
							s = !1,
							n = !1,
							r = this.currentDocument.getAttribute("swatch-generated");
						if ("none" == r) {
							var o = this.currentDocument.querySelector('a[href*="/products/"], [data-href]');
							o && (o.hasAttribute("href") ? r = o.getAttribute("href") : o.hasAttribute("data-href") && (r = o.getAttribute("data-href")), r = this.extractProductHandle(r))
						}
						var l = setInterval(function () {
							if (a >= 10 && (s = !0), s) y(l);
							else if (null == i) {
								var o = document.querySelector(e.clientSpecs.getQuickViewConfig().dynamic_content_selector);
								if (o) {
									var c = o.getAttribute("swatch-generated");
									if (c) {
										if (c == r) return m("Quick view swatches already present"), void(s = !0);
										m("Quick view swatches already present for different product! Destroying..."), o.removeAttribute("swatch-generated");
										var h = o.querySelector("div.swatches.swatches-type-products");
										h && h.parentNode.removeChild(h)
									}
									if ("" != e.clientSpecs.getSelectors().json_data_selector) o.querySelector(e.clientSpecs.getSelectors().json_data_selector) && (n = !0);
									o.setAttribute("swatch-generated", r), i = new t("products", o, {
										instance_sub_type: "quick_view"
									})
								}
							} else {
								if (!i.readyToInit() && !n) return m(["QuickView", "Requesting data for product handle: " + r]), e.executeFetch({
									url: e.getCurrentLanguageSlug() + "/collections/all/products/" + r + ".js",
									path_name: null,
									allow_processing: !1,
									callback: function (t) {
										i.processJSONInformation(t)
									},
									translation_request: !1
								}), void(n = !0);
								try {
									(i.readyToInit() || i.hasOnlyDefaultVariant) && (m(["QuickView", "Init swatches generation for product: " + r]), i.detectAndInitialize(), s = !0)
								} catch (u) {
									a++, m(["QuickView", u]), "SelectorNotFoundException" != u && (s = !0)
								}
							}
						}, 100)
					}
				}, {
					key: "generateImageURL",
					value: function (t, e) {
						var i = /\.(?:jpg|png|jpeg|gif|tiff|bmp)(?:\?|\s|$)/gm,
							a = /(?:_\d*x\d*|_medium|_large|_small)(?:_crop_[a-zA-Z]{3,6}){0,1}(?=\.(?:jpg|png|jpeg|gif|tiff|bmp))/gm.exec(t),
							s = i.exec(e);
						return a && s && (e = e.replace(s[0], a[0] + s[0])), e
					}
				}, {
					key: "updateVariantImage",
					value: function (t, e, i) {
						var a = !1;
						if (i && e.featured_image ? a = !0 : !i && e.featured_image && e.featured_image.secondary_src && (a = !0), t && a)
							if ("IMG" == t.tagName) {
								var s = t.getAttribute("src");
								if (t.currentSrc && (s = t.currentSrc), !s && t.hasAttribute("data-srcset")) {
									var n = t.getAttribute("data-srcset");
									if ((n = n.split(",")).length > 1) s = n[parseInt((n.length - 1) / 2)].trim().split(" ")[0];
									else if (1 == n.length) {
										s = n[0].trim().split(" ")[0]
									}
								}
								t.hasAttribute("img-orig-src") || t.setAttribute("img-orig-src", s);
								var r = null;
								r = i ? this.generateImageURL(s, e.featured_image.src) : this.generateImageURL(s, e.featured_image.secondary_src), t.setAttribute("src", r), t.setAttribute("srcset", r), t.setAttribute("data-srcset", r)
							} else {
								var o = /url\((\S*)\)/gm;
								(s = t.style.backgroundImage) || (s = t.style.background);
								var l = o.exec(s);
								if (l) {
									s = (s = l[1]).trim(), t.hasAttribute("img-orig-src") || t.setAttribute("img-orig-src", s);
									r = null;
									r = i ? this.generateImageURL(s, e.featured_image.src) : this.generateImageURL(s, e.featured_image.secondary_src), t.setAttribute("data-bgset", r), t.style.backgroundImage ? t.style.backgroundImage = "url(" + r + ")" : t.style.background = "url(" + r + ")"
								}
							}
						else if (t)
							if ("IMG" == t.tagName && t.hasAttribute("img-orig-src")) {
								r = t.getAttribute("img-orig-src");
								t.setAttribute("src", r), t.setAttribute("srcset", r), t.setAttribute("data-srcset", r)
							} else if (t.hasAttribute("img-orig-src")) {
							r = t.getAttribute("img-orig-src");
							t.setAttribute("data-bgset", r), t.style.backgroundImage ? t.style.backgroundImage = "url(" + r + ")" : t.style.background = "url(" + r + ")"
						}
						t && t.className.includes("lazyload") && (t.classList.remove("lazyload"), t.classList.remove("lazyloading"), t.classList.remove("lazyloaded"), t.classList.add("lazyload"))
					}
				}, {
					key: "formatDefaultOption",
					value: function (t, e) {
						return void 0 === t ? e : t
					}
				}, {
					key: "formatWithDelimiters",
					value: function (t, e, i, a) {
						e = this.formatDefaultOption(e, 2), i = this.formatDefaultOption(i, ","), a = this.formatDefaultOption(a, ".");
						var s = this.getInstanceConfig().price_trailing_zeroes ? a + "00" : "";
						if (isNaN(t) || null == t) return 0;
						var n = (t = (t / 100).toFixed(e)).split(".");
						return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + i) + (n[1] && "00" != n[1] ? a + n[1] : s)
					}
				}, {
					key: "updateSKU",
					value: function (t, e) {
						if (t && e.sku) {
							var i = this.getInstanceConfig().sku_template;
							i = i.replace(/{sku}/gm, e.sku), t.innerHTML = i
						}
					}
				}, {
					key: "updatePrice",
					value: function (t, e) {
						var i = {
							MAD: "MAD"
						};
						if (t && e.price) {
							var a = this.getInstanceConfig().price_template,
								s = Shopify.currency.active,
								n = e.price,
								r = e.compare_at_price,
								o = this.productInfoTree.getProductInfo().id;
							if ("undefined" != typeof i[s] && (s = i[s]), a = (a = (a = (a = (a = a.replace(/{price_token}/gm, s)).replace(/{price_code}/gm, Shopify.currency.active)).replace(/{price_amount_actual}/gm, n)).replace(/{price_amount}/gm, this.formatWithDelimiters(n))).replace(/{product_id}/gm, o), null != r && r > n) {
								var l = Math.floor(n / r * 100);
								l = 100 - l, a = (a = (a = (a = (a = (a = a.replace(/{(?:compare_at_display|display_on_sale)}/gm, "")).replace(/{hide_on_sale}/gm, 'style="display:none;"')).replace(/{compare_at_price_actual}/gm, r)).replace(/{compare_at_price}/gm, this.formatWithDelimiters(r))).replace(/{price_difference}/gm, this.formatWithDelimiters(r - n))).replace(/{percentage_difference}/gm, l), t.classList.add("sa-variant-on-sale")
							} else t.classList.remove("sa-variant-on-sale"), a = (a = a.replace(/{(?:compare_at_display|display_on_sale)}/gm, 'style="display:none;"')).replace(/{hide_on_sale}/gm, "");
							a = a.replace(/{(?:unavailable_display|display_on_sold_out)}/gm, e.available ? 'style="display:none;"' : ""), t.innerHTML = a
						}
					}
				}, {
					key: "productChangeRestructure",
					value: function (t, e) {
						if (this.readyToInit() || this.hasOnlyDefaultVariant) {
							for (var i = "top", a = !1, s = t.querySelectorAll("[option-target]"), n = 0; n < s.length; n++) {
								var r = !1,
									o = s[n];
								if (!a) {
									var l = o.getAttribute("option-target");
									o.hasAttribute("type-group") ? l == e ? (a = !0, r = !0) : 0 : (0, i = "bottom")
								}
								r || this.removeElement(o)
							}
							if (this.selectedProductGroup = e, !this.hasOnlyDefaultVariant)
								for (var c = this.uiElements.getSwatchRoot(this.productInfoTree.getOptions()), h = this.uiElements.parseHTML(c)[0], u = t.firstChild; h.children.length > 0;) {
									var d = h.children[0];
									"bottom" == i ? t.insertBefore(d, u) : t.appendChild(d)
								}
							m("Generating restructured swatch UI..."), this.generateUISwitch()(), this.generateProductGroups()
						} else setTimeout(this.productChangeRestructure.bind(this, t, e), 100)
					}
				}, {
					key: "productChangeOperations",
					value: function (t, e, i) {
						var a = e.getAttribute("option-target"),
							s = e.parentNode,
							n = t.variants[0];
						this.currentDocument.removeAttribute("swatch-current-variant"), this.currentDocument.hasAttribute("swatch-default-variant") && this.currentDocument.setAttribute("swatch-default-variant", n.id), this.currentDocument.setAttribute("swatch-generated", t.handle), this.productChangeRestructure(s, a), this.dispatchCustomEvent(this.currentDocument, "product:changed", {
							productID: "" + t.id,
							previousProductID: i
						});
						var r = this.getInstanceConfig().data_selectors,
							o = null,
							l = null,
							c = {
								id: t.id,
								handle: t.handle,
								title: t.title,
								url: t.url,
								price: n.price,
								compare_at_price: n.compare_at_price,
								variant_id: n.id,
								sku: n.sku,
								featured_image: {
									src: null,
									secondary_src: null
								}
							};
						t.featured_image ? (c.featured_image.src = t.featured_image, c.featured_image.secondary_src = t.featured_image) : t.images && t.images.length >= 1 && (c.featured_image.src = t.images[0], c.featured_image.secondary_src = t.images[0]), t.images && t.images.length >= 2 && (c.featured_image.secondary_src = t.images[1]), "" != r.title && (l = this.currentDocument.querySelectorAll(r.title), Object.entries(l).forEach(function (t) {
							var e = _slicedToArray(t, 2),
								i = e[0],
								a = e[1];
							"length" != i && (a.innerHTML = c.title)
						})), "" != r.price && Shopify && Shopify.currency && (o = this.currentDocument.querySelector(r.price), this.updatePrice(o, c)), "" != r.sku && (o = this.currentDocument.querySelector(r.sku), this.updateSKU(o, c)), "" != r.featured_image && (o = this.currentDocument.querySelector(r.featured_image), this.updateVariantImage(o, c, !0)), "" != r.featured_image && "" != r.secondary_image && (o = this.currentDocument.querySelector(r.secondary_image), this.updateVariantImage(o, c, !1)), "" != r.url && (l = this.currentDocument.querySelectorAll(r.url), Object.entries(l).forEach(function (t) {
							var e = _slicedToArray(t, 2),
								i = e[0],
								a = e[1];
							if ("length" != i) {
								if (a.hasAttribute("href") && a.setAttribute("href", c.url), a.hasAttribute("data-href") && a.setAttribute("data-href", c.url), "" != r.link_pid_attribute) {
									var s = r.link_pid_attribute;
									a.hasAttribute(s) && a.setAttribute(s, c.id)
								}
								if ("" != r.link_vid_attribute) {
									var n = r.link_vid_attribute;
									a.hasAttribute(n) && a.setAttribute(n, c.variant_id)
								}
							}
						}));
						var h = this.clientSpecs.getQuickViewConfig(),
							u = this.currentDocument.querySelectorAll(h.button_selector),
							d = h.product_handle_attribute;
						Object.entries(u).forEach(function (t) {
							var e = _slicedToArray(t, 2),
								i = e[0],
								a = e[1];
							if ("length" != i && a.hasAttribute(d)) {
								var s = a.getAttribute(d),
									n = c.handle;
								s.includes("/products/") && (n = c.url), a.setAttribute(d, n)
							}
						})
					}
				}, {
					key: "getSwatchMinifiedCount",
					value: function (t) {
						var e = this.clientSpecs.getSwatchPresentation("collections");
						if ("general" == t && e.minified || "groups" == t && e.minified_products) {
							var i = e.minified_display_count,
								a = Math.ceil(1920 / i.length),
								s = Math.floor(window.screen.width / a);
							return s >= i.length && (s = i.length - 1), i[s]
						}
						return null
					}
				}, {
					key: "generateUIForCollection",
					value: function (t) {
						var e = this,
							i = null,
							a = null,
							s = null,
							n = {},
							r = {},
							o = null,
							l = !!t && "mouseover" == t.type,
							c = !!t && "mouseout" == t.type,
							h = l || c,
							u = undefined;
						if (t) {
							if ("LI" == (u = t.target).tagName && u.hasAttribute("orig-value") && u.children && (u = u.children[0]), "keyup" == t.type && 13 !== t.keyCode) return;
							for (; u.hasAttribute("swatch-inside") || "FONT" == u.tagName || "SVG" == u.tagName || "I" == u.tagName;) u = u.parentNode;
							if (this.isClickEvent(t.type) && u.hasAttribute("data-navigation")) return void this.scrollSwatchSlider(u);
							if (!u.hasAttribute("swatch-option")) return;
							if ("SELECT" == u.tagName && "change" != t.type) return
						}
						if (h) return this.selectionAllowed = !0, void u.click();
						if (t && u.hasAttribute("swatch-url")) {
							var d = function () {
								if (u.hasAttribute("current-product")) return {
									v: undefined
								};
								if ("SELECT" != u.tagName) {
									var t = u.getAttribute("swatch-option");
									e.uiElements.selectSwatch(t, u, u.getAttribute("orig-value"))
								}
								e.resetMultiLingualData();
								var i = u.closest("[option-target]"),
									a = e.productInfoTree.getProductInfo().id,
									s = "SELECT" == u.tagName ? u.value : u.getAttribute("swatch-url");
								return e.selectionAllowed = !1, e.hasOnlyDefaultVariant = !1, e.executeFetch({
									url: s + ".js",
									path_name: null,
									allow_processing: !0,
									callback: function (t) {
										e.productChangeOperations(t, i, a)
									},
									translation_request: !1
								}), {
									v: undefined
								}
							}();
							if ("object" == typeof d) return d.v
						}
						if (!(t && "SELECT" == u.tagName && u.options && u.options.length > 1 && this.isClickEvent(t.type)))
							if (t && "select" == u.getAttribute("type")) {
								u.parentNode.querySelector("ul.swatch-drop-down-list").classList.toggle("swatch-hide")
							} else {
								if (t && "select_value" == u.getAttribute("type")) {
									var p = u.closest("div.swatch-drop-down-inner").querySelector('div[type="select"]');
									p.style.minWidth && "0px" != p.style.minWidth || this.setSelectMinWidth(p), p.innerHTML = u.innerHTML, u.parentNode.classList.add("swatch-hide")
								}
								if (t && u.hasAttribute("swatch-option")) {
									if (s = u.getAttribute("swatch-option"), i = s, this.uiElements.isDropDown(u.tagName)) u.hasAttribute("data-selected") && (u.remove(0), u.removeAttribute("data-selected")), a = u.value;
									else {
										a = u.getAttribute("orig-value");
										var g = u.closest("[option-target]").querySelector(".swatch-variant-name");
										g && "null" != a && (g.innerHTML = ' <span class="swatch-split-symbol">-</span> ' + a)
									}
									if (t && this.currentDocument.hasAttribute("swatch-default-variant")) {
										var w = "option" + this.productInfoTree.getOptions().length;
										this.uiElements.selectSwatch(s, u, a), w == s && this.currentDocument.removeAttribute("swatch-default-variant")
									}
									if (this.selectionAllowed || this.isEventTrusted(t, !0)) {
										this.selectionAllowed = !0, this.uiElements.selectSwatch(s, u, a), n = this.getCurrentOptionForCollection(), o = this.productInfoTree.getVariantInfoFromOptions(n);
										var v = !0,
											f = this.currentDocument.getAttribute("swatch-current-variant");
										f || (f = "0"), o && (this.currentDocument.setAttribute("swatch-current-variant", o.id), this.dispatchCustomEvent(this.currentDocument, "variant:changed", {
											productID: "" + this.productInfoTree.getProductInfo().id,
											variant: "" + o.id,
											previousVariant: f,
											variantInformation: JSON.stringify(o)
										})), (o && f == o.id || this.currentDocument.hasAttribute("sa-manual-update")) && (v = !1), o && v && (y = e.getInstanceConfig().data_selectors, b = null, _ = null, "" != y.featured_image && (_ = e.currentDocument.querySelector(y.featured_image), e.updateVariantImage(_, o, !0)), "" != y.featured_image && "" != y.secondary_image && (_ = e.currentDocument.querySelector(y.secondary_image), e.updateVariantImage(_, o, !1)), "" != y.url && function () {
											b = e.currentDocument.querySelectorAll(y.url);
											var t = /(?:variant=)[0-9]*/gm;
											Object.entries(b).forEach(function (e) {
												var i = _slicedToArray(e, 2),
													a = i[0],
													s = i[1];
												if ("length" != a && s && o.id) {
													var n = s.getAttribute("href"),
														r = t.exec(n),
														l = "variant=" + o.id;
													if (r || (r = t.exec(n.toString())), r ? n = n.replace(r[0], l) : n.includes("?") ? n += "&" + l : n += "?" + l, s.hasAttribute("href") && s.setAttribute("href", n), s.hasAttribute("data-href") && s.setAttribute("data-href", n), "" != y.link_vid_attribute) {
														var c = y.link_vid_attribute;
														s.hasAttribute(c) && s.setAttribute(c, o.id)
													}
												}
											})
										}(), "" != y.price && Shopify && Shopify.currency && (_ = e.currentDocument.querySelector(y.price), e.updatePrice(_, o)), "" != y.sku && (_ = e.currentDocument.querySelector(y.sku), e.updateSKU(_, o)), y.form_input && "" != y.form_input && (_ = e.currentDocument.querySelector(y.form_input)) && (_.value = o.id, e.dispatchEvent("change", _)))
									}
								}
								var y, b, _;
								this.readyToInit() ? (this.uiElements.getIsSwatchRootDisplayed() || this.uiElements.renderSwatchRoot(this.uiElements.getSwatchRoot(this.productInfoTree.getOptions()), this.getCorrectSwatchRoot(), "top" == this.getInstanceConfig().swatch_position), n = this.getCurrentOptionForCollection(), r = this.productInfoTree.getNodeByOptions(n), Object.entries(r).forEach(function (t) {
									var a = _slicedToArray(t, 2),
										s = a[0],
										r = a[1];
									if (null == i) {
										var o = e.uiElements.getViewByType(r.view_type).getView(s, r),
											l = e.uiElements.renderNormal(s, o, e.currentDocument);
										1 == r.data.length && "null" == r.data[0].value && l.length > 0 && l[0].closest && (l[0].closest("div.swatch-single").style.display = "none"), m("Generated UI for - " + s);
										var c = n[s],
											h = !1,
											u = e.getSwatchMinifiedCount("general");
										Object.entries(l).forEach(function (t) {
											var a = _slicedToArray(t, 2),
												s = a[0],
												n = a[1];
											if ("length" != s) {
												if (null != u && ("variant_image" == r.view_type || "custom_image" == r.view_type || "button" == r.view_type) && s >= u) {
													var o = n.closest("li.swatch-view-item");
													o && (o.classList.add("hidden"), o.style.display = "none")
												}
												var d = null;
												if (setTimeout(function () {
														var t = "swatch-allow-animation";
														n.classList.add(t)
													}, 128), e.uiElements.isDropDown(n.tagName)) {
													d = n.value;
													for (var p = n.querySelectorAll("option"), g = 0; g < p.length; g++) p[g].getAttribute("value") == c && (d = c, n.value = c)
												} else d = n.getAttribute("orig-value");
												if (d == c && (h = !0, e.uiElements.isDropDown(n.tagName) ? e.dispatchEvent("change", n) : e.dispatchEvent("virtual_click", n)), s == l.length - 1) {
													if (null != u && ("variant_image" == r.view_type || "custom_image" == r.view_type || "button" == r.view_type)) {
														var w = l.length - u;
														if (w > 0) {
															var v = n.closest("[option-name]").getAttribute("option-name"),
																m = e.uiElements.getMinifiedHTML(v, w, e.productInfoTree.getProductInfo());
															n.closest("ul.swatch-view").appendChild(m)
														}
													}
													if ("slide" == e.clientSpecs.getSwatchPresentation("collections").style) {
														var f = n.closest(".swatch-navigable");
														if (f) {
															var y = f.querySelector(".swatch-navigation");
															y && y.click()
														}
													}
													if (!e.selectionAllowed && "SELECT" == n.tagName) {
														var b = n.closest("[option-name]").getAttribute("option-name"),
															_ = e.doNotSelectAnOption.text.replace(/{option_name}/gm, b),
															S = document.createElement("option");
														S.value = n.value, S.innerHTML = _, n.insertBefore(S, n.options[0]), n.selectedIndex = 0, n.setAttribute("data-selected", !1)
													}
													i = "None", h || (e.uiElements.isDropDown(l[0].tagName) ? e.dispatchEvent("change", l[0]) : e.dispatchEvent("virtual_click", l[0]))
												}
											}
										})
									} else i == s && (i = null)
								})) : this.hasOnlyDefaultVariant || setTimeout(this.generateUIForCollection.bind(this, t), 100)
							}
					}
				}, {
					key: "getCurrentOptionForCollection",
					value: function () {
						if (this.currentDocument.hasAttribute("swatch-default-variant")) {
							for (var t = this.currentDocument.getAttribute("swatch-default-variant"), e = this.productInfoTree.getVariants()[t], i = {}, a = 0; a < e.options.length; a++) {
								i[c = "option" + (a + 1)] = e.options[a]
							}
							return i
						}
						var s = this.currentDocument.querySelectorAll(".swatches .swatch-selector"),
							n = this.productInfoTree.getOptions(),
							r = {},
							o = {},
							l = null;
						for (a = 0; a < s.length; a++) {
							var c = s[a].getAttribute("swatch-option");
							null == l && (l = c), "undefined" == typeof o[c] && (o[c] = a), s[a].classList.contains("swatch-selected") && (r[c] = s[a].getAttribute("orig-value"), this.uiElements.isDropDown(s[a].tagName) && (r[c] = s[a].value)), l == c || r[l] || (r[l] = s[o[l]].getAttribute("orig-value"), this.uiElements.isDropDown(s[o[l]].tagName) && (r[l] = s[o[l]].value)), l = c
						}
						var h = {};
						for (a = 0; a < n.length; a++) {
							r[c = "option" + (a + 1)] || (r[c] = n[a].values[0], "object" == typeof r[c] && r[c].title && (r[c] = r[c].title)), h[c] = r[c]
						}
						return h
					}
				}, {
					key: "resetMultiLingualData",
					value: function () {
						this.multiLingualInfo = null, this.untranslatedData = null, this.untranslatedFetchStatus = "none"
					}
				}, {
					key: "getMultiLingualInfo",
					value: function () {
						if (null == this.multiLingualInfo) {
							var t = document.querySelector("[sa-language-info]");
							if (t) {
								var e = JSON.parse(t.innerHTML);
								this.multiLingualInfo = e, this.multiLingualInfo.translation_status = this.multiLingualInfo.current_language != this.multiLingualInfo.default_language;
								var i = window.location.pathname.split("/");
								if (this.multiLingualInfo.is_sub_domain = this.multiLingualInfo.translation_status && i[1] != this.multiLingualInfo.current_language, this.multiLingualInfo.is_sub_domain) {
									var a = document.querySelector('link[hreflang="x-default"][href]').getAttribute("href").split("://")[1];
									a = a.split("/")[0], this.multiLingualInfo.default_url = a
								}
								m(["Found language information in DOM", this.multiLingualInfo])
							} else this.multiLingualInfo = {
								current_language: "en",
								default_language: "en",
								is_sub_domain: !1,
								translation_status: !1
							}, m("cannot find any language information in DOM; Providing default")
						}
						return this.multiLingualInfo
					}
				}, {
					key: "getCurrentLanguageSlug",
					value: function () {
						var t = this.getMultiLingualInfo();
						return t.translation_status && !t.is_sub_domain ? "/" + t.current_language : ""
					}
				}, {
					key: "fetchUntranslatedOptions",
					value: function (t) {
						var e = this,
							i = this.getMultiLingualInfo();
						if (i.translation_status) {
							if (this.untranslatedFetchStatus = "pending", i.is_sub_domain) {
								var a = window.location.protocol + "//" + i.default_url + "/";
								t = t.replace(RegExp("\\S*\\/(?=products|collections)", "i"), a)
							} else t = t.replace(RegExp("\\/" + i.current_language + "\\/(?=products|collections)", "gi"), "/");
							this.executeFetch({
								url: t,
								path_name: null,
								allow_processing: !1,
								translation_request: !0,
								callback: function (t) {
									var i = t.options;
									t.options_with_values && (i = t.options_with_values), e.untranslatedData = {
										options: i,
										variants: t.variants
									}, e.untranslatedFetchStatus = "completed"
								}
							})
						}
					}
				}, {
					key: "getUntranslatedFetchStatus",
					value: function () {
						return this.untranslatedFetchStatus
					}
				}, {
					key: "getUntranslatedData",
					value: function () {
						return this.untranslatedData
					}
				}, {
					key: "getTranslation",
					value: function (t) {
						var e = this.getMultiLingualInfo();
						if (e.translation_status) {
							var i = this.clientSpecs.getLocalizedStrings()[t];
							if (i && (i = i[e.current_language]) && i.trim().length > 0) return i
						}
						return t
					}
				}, {
					key: "getHandleFromURL",
					value: function (t) {
						var e = t.split("/");
						return e[e.length - 1].replace(".js", "")
					}
				}, {
					key: "getSessionStorageKey",
					value: function (t, e, i) {
						if (window.sessionStorage) {
							var a = e ? this.getHandleFromURL(t) : t,
								s = this.getMultiLingualInfo();
							return "starapps_" + a + "_" + (i ? s.default_language : s.current_language)
						}
						return null
					}
				}, {
					key: "getDataFromSessionStorage",
					value: function (t) {
						if (window.sessionStorage && "string" == typeof t) {
							var e = sessionStorage.getItem(t);
							if (e) return JSON.parse(e)
						}
						return null
					}
				}, {
					key: "setDataToSessionStorage",
					value: function (t, e) {
						return !(!window.sessionStorage || "string" != typeof t || "object" != typeof e) && (setTimeout(function () {
							sessionStorage.setItem(t, JSON.stringify(e))
						}, 0), !0)
					}
				}, {
					key: "removeDataToSessionStorage",
					value: function (t) {
						return !(!window.sessionStorage || "string" != typeof t) && (sessionStorage.removeItem(t), !0)
					}
				}, {
					key: "disableAdd2CartButton",
					value: function (t, e) {
						var i = this,
							a = this.currentDocument.querySelectorAll(this.clientSpecs.getSelectors().add_to_cart_selector);
						Object.entries(a).forEach(function (a) {
							var s = _slicedToArray(a, 2),
								n = s[0],
								r = s[1];
							if ("length" != n)
								if (r.setAttribute("disabled", "disabled"), "" != e.trim() && (r.className = e), "INPUT" == r.tagName) r.hasAttribute("original-text") || r.setAttribute("original-text", r.value), r.value = t;
								else if ("BUTTON" == r.tagName) {
								var o = r.querySelector(i.clientSpecs.getSelectors().add_to_cart_text_selector);
								o && (o.hasAttribute("original-text") || o.setAttribute("original-text", o.innerHTML), o.innerHTML = t)
							}
						})
					}
				}, {
					key: "restoreAddToCart",
					value: function () {
						var t = this,
							e = this.currentDocument.querySelectorAll(this.clientSpecs.getSelectors().add_to_cart_selector);
						Object.entries(e).forEach(function (e) {
							var i = _slicedToArray(e, 2),
								a = i[0],
								s = i[1];
							if ("length" != a)
								if (s.removeAttribute("disabled"), t.clientSpecs.getSelectors().add_to_cart_enabled_classes && "" != t.clientSpecs.getSelectors().add_to_cart_enabled_classes.trim() && (s.className = t.clientSpecs.getSelectors().add_to_cart_enabled_classes), "INPUT" == s.tagName && s.hasAttribute("original-text")) {
									var n = s.getAttribute("original-text");
									s.removeAttribute("original-text"), s.value = n
								} else if ("BUTTON" == s.tagName) {
								var r = s.querySelector(t.clientSpecs.getSelectors().add_to_cart_text_selector);
								if (r && r.hasAttribute("original-text")) {
									n = r.getAttribute("original-text");
									r.removeAttribute("original-text"), r.innerHTML = n
								}
							}
						})
					}
				}, {
					key: "getOptionIndexKey",
					value: function (t, e) {
						var i = this.clientSpecs.getSelectors().option_index_attributes,
							a = e;
						if ("undefined" == typeof this.themeSupportConfig.attribute_name || "none" != this.themeSupportConfig.attribute_name && t.hasAttribute(this.themeSupportConfig.attribute_name)) {
							for (var s = 0; s < i.length; s++)
								if (t.hasAttribute(i[s])) {
									var n = t.getAttribute(i[s]);
									if (n.match(RegExp("option\\d+", "gi"))) {
										a = n, this.themeSupportConfig.attribute_name = i[s];
										break
									}
								}
							"undefined" == typeof this.themeSupportConfig.attribute_name && (this.themeSupportConfig.attribute_name = "none")
						} else "none" != this.themeSupportConfig.attribute_name && t.hasAttribute(this.themeSupportConfig.attribute_name) && (a = t.getAttribute(this.themeSupportConfig.attribute_name));
						return a
					}
				}, {
					key: "getCurrentOption",
					value: function () {
						for (var t = {}, e = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), i = 0; i < e.length; i++) {
							var a = "option" + (i + 1),
								s = e[i].value;
							if (a = this.getOptionIndexKey(e[i], a), e[i].hasAttribute("orig-value")) s = e[i].options[e[i].selectedIndex].getAttribute("orig-value");
							t[a] = s
						}
						return t
					}
				}, {
					key: "getCurrentOptionBrooklyn",
					value: function () {
						for (var t = {}, e = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), i = 0; i < e.length; i++)
							if (e[i].checked) {
								var a = e[i].getAttribute(this.themeSupportConfig.attribute_name),
									s = e[i].value;
								(a = RegExp("(?:(?:option[^\\d\\s]*)(\\d+))|(^\\d+$)", "gi").exec(a)) && a[1] ? a = a[1] : a && a[2] && (a = a[2]), t[a = "type0" == this.themeSupportConfig.strategy ? "option" + ((a = parseInt(a)) + 1) : "option" + a] = s
							}
						return t
					}
				}, {
					key: "sortObjectByKeys",
					value: function (t) {
						for (var e = {}, i = 1, a = "option" + i;
							"undefined" != typeof t[a];) e[a] = t[a], a = "option" + (i += 1);
						return e
					}
				}, {
					key: "getCurrentOptionPrestige",
					value: function () {
						for (var t = {}, e = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), i = 0; i < e.length; i++)
							if (e[i].classList.contains("is-selected") || 1 == e[i].checked) {
								var a = "option" + (i + 1),
									s = e[i].value;
								if ("button" == e[i].getAttribute("type") && (s = e[i].getAttribute("data-value")), e[i].hasAttribute("data-option-value") && (s = e[i].getAttribute("data-option-value")), e[i].hasAttribute("data-option-position")) {
									var n = e[i].getAttribute("data-option-position");
									a = "option" + n, n.includes("option") && (a = n)
								}
								t[a] = s
							}
						return t = this.sortObjectByKeys(t)
					}
				}, {
					key: "getCurrentOptionEmpire",
					value: function () {
						for (var t = {}, e = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), i = 0; i < e.length; i++) {
							var a = "option" + (i + 1),
								s = e[i].value;
							if (e[i].hasAttribute("data-product-option")) a = "option" + (parseInt(e[i].getAttribute("data-product-option")) + 1);
							t[a] = s
						}
						return t
					}
				}, {
					key: "getCurrentOptionMotion",
					value: function () {
						var t = {},
							e = this.currentDocument.querySelector(this.themeSupportConfig.option_selector),
							i = 0,
							a = e.value;
						this.productInfoTree.getVariantsKeys();
						"" == a && (this.themeSupportConfig.last_variant_id || (this.themeSupportConfig.last_variant_id = f()), a = this.themeSupportConfig.last_variant_id);
						for (var s = this.productInfoTree.getVariants()[a]; e;) {
							var n = "option" + (i + 1);
							if (!s[n]) break;
							t[n] = s[n], i++
						}
						return t
					}
				}, {
					key: "currentOptionSwitch",
					value: function (t) {
						switch (t) {
							case "common":
								return {
									get: this.getCurrentOption.bind(this)
								};
							case "brooklyn":
								return {
									get: this.getCurrentOptionBrooklyn.bind(this)
								};
							case "prestige":
								return {
									get: this.getCurrentOptionPrestige.bind(this)
								};
							case "motion":
								return {
									get: this.getCurrentOptionMotion.bind(this)
								};
							case "empire":
								return {
									get: this.getCurrentOptionEmpire.bind(this)
								}
						}
					}
				}, {
					key: "triggerChange",
					value: function (t, e) {
						for (var i = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), a = 0; a < i.length; a++) {
							var s = "option" + (a + 1);
							if ((s = this.getOptionIndexKey(i[a], s)) == t) {
								if (i[a].hasAttribute("orig-value"))
									for (var n = i[a].options, r = 0; r < n.length; r++) {
										var o = n[r];
										if (o.hasAttribute("orig-value") && o.getAttribute("orig-value") == e) {
											e = o.getAttribute("value");
											break
										}
									}
								var l = i[a].value != e;
								this.doNotSelectAnOption.status && this.doNotSelectAnOption.trusted_event_detected && (l = !0), l && (i[a].value = e, this.dispatchEvent("change", i[a]));
								break
							}
						}
					}
				}, {
					key: "triggerChangeBrooklyn",
					value: function (t, e) {
						for (var i = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), a = 0; a < i.length; a++) {
							var s = i[a].getAttribute(this.themeSupportConfig.attribute_name),
								n = i[a].value;
							(s = RegExp("(?:(?:option[^\\d\\s]*)(\\d+))|(^\\d+$)", "gi").exec(s)) && s[1] ? s = s[1] : s && s[2] && (s = s[2]), s = "type0" == this.themeSupportConfig.strategy ? "option" + ((s = parseInt(s)) + 1) : "option" + s;
							var r = !i[a].checked;
							if (this.doNotSelectAnOption.status && this.doNotSelectAnOption.trusted_event_detected && (r = !0), r && s == t && n == e) {
								i[a].hasAttribute("disabled") && i[a].removeAttribute("disabled"), i[a].click();
								break
							}
						}
					}
				}, {
					key: "triggerChangePrestige",
					value: function (t, e) {
						for (var i = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), a = 0; a < i.length; a++) {
							var s = "option" + (a + 1),
								n = i[a].value;
							if ("button" == i[a].getAttribute("type") && (n = i[a].getAttribute("data-value")), i[a].hasAttribute("data-option-value") && (n = i[a].getAttribute("data-option-value")), i[a].hasAttribute("data-option-position")) {
								var r = i[a].getAttribute("data-option-position");
								s = "option" + r, r.includes("option") && (s = r)
							}
							var o = !i[a].classList.contains("is-selected") && !i[a].checked;
							if (this.doNotSelectAnOption.status && this.doNotSelectAnOption.trusted_event_detected && (o = !0), o && s == t && n == e) {
								i[a].click();
								break
							}
						}
					}
				}, {
					key: "triggerChangeEmpire",
					value: function (t, e) {
						for (var i = this.currentDocument.querySelectorAll(this.themeSupportConfig.option_selector), a = 0; a < i.length; a++) {
							var s = "option" + (a + 1);
							if (i[a].hasAttribute("data-product-option")) s = "option" + (parseInt(i[a].getAttribute("data-product-option")) + 1);
							var n = i[a].value != e;
							if (this.doNotSelectAnOption.status && this.doNotSelectAnOption.trusted_event_detected && (n = !0), n && s == t) {
								i[a].value = e, this.dispatchEvent("change", i[a]);
								break
							}
						}
					}
				}, {
					key: "triggerChangeMotion",
					value: function (t, e) {
						var i = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2],
							a = i;
						i || (a = this.currentDocument.querySelector(this.themeSupportConfig.option_selector));
						var s = this.productInfoTree.getVariants(),
							n = this.productInfoTree.getVariantsKeys(),
							r = a.value,
							o = [];
						"" == r && (this.themeSupportConfig.last_variant_id || (this.themeSupportConfig.last_variant_id = f()), r = this.themeSupportConfig.last_variant_id);
						for (var l = s[r], c = 0; c < n.length; c++) {
							for (var h = s[n[c]], u = null, d = 0; null == u || 1 == u;) {
								var p = "option" + (d + 1);
								if (!h[p] || !l[p]) break;
								var g = l[p];
								p == t && (g = e), h[p] != g ? u = !1 : (u = !0, o.push(h)), d++
							}!u && o.length > 0 && c == n.length - 1 && (u = !0, h = o[0]);
							var w = u && a.value != h.id;
							if (u && this.doNotSelectAnOption.status && this.doNotSelectAnOption.trusted_event_detected && (w = !0), w) {
								this.themeSupportConfig.last_variant_id = h.id, a.value = h.id, this.dispatchEvent("change", a);
								var v = a.closest("[data-section-type]");
								v && this.dispatchEvent("variantChange", v);
								var m = this.currentDocument.querySelector(this.clientSpecs.getSelectors().add_to_cart_selector);
								m && ("" == a.value ? m.setAttribute("disabled", !0) : m.removeAttribute("disabled"));
								break
							}
							if (!w && u) break
						}
					}
				}, {
					key: "changeSwitch",
					value: function (t) {
						switch (t) {
							case "common":
								return {
									change: this.triggerChange.bind(this)
								};
							case "brooklyn":
								return {
									change: this.triggerChangeBrooklyn.bind(this)
								};
							case "prestige":
								return {
									change: this.triggerChangePrestige.bind(this)
								};
							case "motion":
								return {
									change: this.triggerChangeMotion.bind(this)
								};
							case "empire":
								return {
									change: this.triggerChangeEmpire.bind(this)
								}
						}
					}
				}, {
					key: "generateUISwitch",
					value: function () {
						return 2 == c ? function () {} : this.isInstanceTypeCollection() ? this.generateUIForCollection.bind(this) : this.generateUI.bind(this)
					}
				}, {
					key: "generateUI",
					value: function (t) {
						var e = this,
							i = null,
							a = null,
							s = null,
							n = {},
							r = {},
							o = !1,
							l = undefined;
						if (t) {
							if ("LI" == (l = t.target).tagName && l.hasAttribute("orig-value") && l.children && (l = l.children[0]), "keyup" == t.type && 13 !== t.keyCode) return;
							for (; l.hasAttribute("swatch-inside") || "FONT" == l.tagName || "SVG" == l.tagName || "I" == l.tagName;) l = l.parentNode;
							if (this.isClickEvent(t.type) && l.hasAttribute("data-navigation")) return void this.scrollSwatchSlider(l, !1);
							if (!l.hasAttribute("swatch-option")) return;
							if ("SELECT" == l.tagName && "change" != t.type) return
						}
						if (t && l.hasAttribute("swatch-url") && this.isEventTrusted(t, !0) && window.encodeURIComponent && (this.isClickEvent(t.type) && "SELECT" != l.tagName || "change" == t.type && "SELECT" == l.tagName)) {
							if (l.hasAttribute("current-product")) return;
							var c = this.currentOptionSwitch(this.themeCode).get(),
								h = Object.keys(c),
								u = "";
							if (this.clientSpecs.getPersistGroupVariant()) {
								for (var d = 0; d < h.length; d++) {
									var p = h[d],
										g = c[p];
									u += "&" + p + "=" + encodeURIComponent(g)
								}
								"" != u && (u = u.replace(RegExp("^&", "gi"), "?"))
							}
							var w = l.getAttribute("swatch-url");
							"SELECT" == l.tagName && (w = l.value);
							var v = w + u;
							window.location.replace ? window.location.replace(v) : window.location.href = v
						} else if (t && "select" == l.getAttribute("type")) {
							l.parentNode.querySelector("ul.swatch-drop-down-list").classList.toggle("swatch-hide")
						} else {
							if (t && "select_value" == l.getAttribute("type")) {
								var f = l.closest("div.swatch-drop-down-inner").querySelector('div[type="select"]');
								f.style.minWidth && "0px" != f.style.minWidth || this.setSelectMinWidth(f), f.innerHTML = l.innerHTML, l.parentNode.classList.add("swatch-hide")
							}
							if (t && this.doNotSelectAnOption.status) {
								var y = l.getAttribute("swatch-option"),
									b = parseInt(y[6]) - 1,
									_ = l.closest("div[option-target]").getAttribute("option-name"),
									S = this.clientSpecs.getTriggerActionByOptionName(_),
									k = this.productInfoTree.getOptions()[b].values,
									x = "virtual_click" == t.type || "change" == t.type && !this.isEventTrusted(t, !0);
								if (this.doNotSelectAnOption.option_name = _, this.doNotSelectAnOption.trusted_event_detected = !1, "manual" == S && k.length > 1) {
									if (!this.doNotSelectAnOption[y] && x) {
										var A = this.doNotSelectAnOption.text.replace(/{option_name}/gm, _),
											D = l.closest("div.swatch-single").querySelector("label.swatch-label");
										if (this.uiElements.isDropDown(l.tagName)) {
											var C = document.createElement("option");
											C.value = k[0], C.innerHTML = A, l.insertBefore(C, l.options[0]), l.selectedIndex = 0
										} else if ("select_value" == l.getAttribute("type")) {
											var I = l.closest(".swatch-drop-down-inner");
											if (I)(I = I.querySelector('[type="select"]')).querySelector("span").innerHTML = A, this.setSelectMinWidth(I)
										} else D.hasAttribute("original-text") || D.setAttribute("original-text", D.innerHTML), D.innerHTML = A;
										if (!this.doNotSelectAnOption.allow_virtual_trigger) {
											if (this.doNotSelectAnOption.control_add_to_cart) {
												var T = this.doNotSelectAnOption.make_a_selection_text.replace(/{option_name}/gm, this.doNotSelectAnOption.option_name);
												this.disableAdd2CartButton(T, this.clientSpecs.getSelectors().add_to_cart_disabled_classes)
											}
											return
										}
										o = !0
									} else if (!x) {
										this.doNotSelectAnOption.trusted_event_detected = !0, this.restoreAddToCart();
										var F = (D = l.closest("div.swatch-single").querySelector("label.swatch-label")).getAttribute("original-text");
										F && (D.removeAttribute("original-text"), D.innerHTML = F), this.uiElements.isDropDown(l.tagName) && !this.doNotSelectAnOption[y] && l.remove(0), this.doNotSelectAnOption[y] || (this.doNotSelectAnOption.count += 1, this.doNotSelectAnOption[y] = !0)
									}
								} else this.doNotSelectAnOption[y] || (this.doNotSelectAnOption.count += 1, this.doNotSelectAnOption[y] = !0)
							}
							if (!(t && this.uiElements.isDropDown(l.tagName) && l.options && l.options.length > 1 && this.isClickEvent(t.type))) {
								if (t && l.hasAttribute("swatch-option")) {
									if (s = l.getAttribute("swatch-option"), i = s, this.uiElements.isDropDown(l.tagName)) a = l.value;
									else {
										a = l.getAttribute("orig-value");
										var E = l.closest("[option-target]").querySelector(".swatch-variant-name"),
											L = l.getAttribute("data-value");
										E && "null" != a && "none" != L && (E.innerHTML = ' <span class="swatch-split-symbol">-</span> ' + L)
									}
									if (o || this.uiElements.selectSwatch(s, l, a), this.changeSwitch(this.themeCode).change(s, a), o && this.doNotSelectAnOption.control_add_to_cart) {
										T = this.doNotSelectAnOption.make_a_selection_text.replace(/{option_name}/gm, this.doNotSelectAnOption.option_name);
										this.disableAdd2CartButton(T, this.clientSpecs.getSelectors().add_to_cart_disabled_classes)
									}
								}
								if (this.readyToInit()) {
									this.doNotSelectAnOption.status && this.doNotSelectAnOption.count >= this.productInfoTree.getOptions().length && (this.doNotSelectAnOption.status = !1);
									var O = this.getCorrectSwatchRoot();
									if (this.uiElements.getIsSwatchRootDisplayed() || this.uiElements.renderSwatchRoot(this.uiElements.getSwatchRoot(this.productInfoTree.getOptions()), O, "top" == this.clientSpecs.getSelectors().swatch_root.position), n = this.currentOptionSwitch(this.themeCode).get(), m(n), "undefined" == typeof n.option1) {
										m("currentOption was not properly formed!");
										for (var N = this.productInfoTree.getOptions(), z = 0; z < N.length; z++) {
											var q = "option" + (z + 1),
												M = this.currentDocument.querySelector('[swatch-option="' + q + '"].swatch-selected');
											n[q] = "", M && (this.uiElements.isDropDown(M.tagName) ? n[q] = M.value : n[q] = M.getAttribute("orig-value"))
										}
									}
									if (!t && this.clientSpecs.getPersistGroupVariant() && window.decodeURIComponent && window.location.href.includes("option1=") && !window.location.href.includes("variant="))
										for (var V = /option\d=[^\&]*/gm, R = window.location.href, P = null; null !== (P = V.exec(R));) {
											P.index === V.lastIndex && V.lastIndex++;
											var j = P[0].split("="),
												H = (y = j[0], decodeURIComponent(j[1]));
											n[y] = H, this.changeSwitch(this.themeCode).change(y, H)
										}
									r = this.productInfoTree.getNodeByOptions(n), m(r), Object.entries(r).forEach(function (t) {
										var a = _slicedToArray(t, 2),
											s = a[0],
											r = a[1];
										if (null == i)
											if (o) {
												for (var l = n[s], c = 0; c < r.data.length; c++) {
													if (l == r.data[c].value) {
														e.changeSwitch(e.themeCode).change(s, r.data[c].value);
														break
													}
													if (c == r.data.length - 1) {
														e.changeSwitch(e.themeCode).change(s, r.data[0].value);
														break
													}
												}
												if (e.doNotSelectAnOption.control_add_to_cart) {
													var h = e.doNotSelectAnOption.make_a_selection_text.replace(/{option_name}/gm, e.doNotSelectAnOption.option_name);
													e.disableAdd2CartButton(h, e.clientSpecs.getSelectors().add_to_cart_disabled_classes)
												}
											} else {
												var u = e.uiElements.getViewByType(r.view_type).getView(s, r),
													d = e.uiElements.renderNormal(s, u, O);
												1 == r.data.length && "null" == r.data[0].value && d.length > 0 && d[0].closest && (d[0].closest("div.swatch-single").style.display = "none"), m("Generated UI for - " + s);
												var p = n[s],
													g = !1;
												Object.entries(d).forEach(function (t) {
													var a = _slicedToArray(t, 2),
														s = a[0],
														n = a[1];
													if ("length" != s) {
														var r = null;
														if (setTimeout(function () {
																var t = "swatch-allow-animation";
																n.classList.add(t)
															}, 128), e.uiElements.isDropDown(n.tagName)) {
															r = n.value;
															for (var o = n.querySelectorAll("option"), l = 0; l < o.length; l++) o[l].getAttribute("value") == p && (r = p, n.value = p)
														} else r = n.getAttribute("orig-value");
														if (r == p && (g = !0, e.uiElements.isDropDown(n.tagName) ? e.dispatchEvent("change", n) : e.dispatchEvent("virtual_click", n)), s == d.length - 1) {
															if ("slide" == e.clientSpecs.getSwatchPresentation("products").style) {
																var c = n.closest(".swatch-navigable");
																if (c) {
																	var h = c.querySelector(".swatch-navigation");
																	h && h.click()
																}
															}
															i = "None", g || (e.uiElements.isDropDown(d[0].tagName) ? e.dispatchEvent("change", d[0]) : e.dispatchEvent("virtual_click", d[0]))
														}
													}
												})
											}
										else i == s && (i = null)
									})
								}
							}
						}
					}
				}, {
					key: "morphValues",
					value: function (t) {
						return this.clientSpecs.getHandleize() ? t = (t = (t = (t = t.toLowerCase()).replace(RegExp("[^a-z0-9_]+", "gi"), "-")).replace(RegExp("-+", "gi"), "-")).replace(RegExp("^-|-$", "gi"), "") : t
					}
				}, {
					key: "processJSONInformation",
					value: function (t) {
						var e = this,
							i = t.options,
							a = t.variants,
							s = t.images,
							n = {},
							o = {};
						t.options_with_values && (i = t.options_with_values), this.productInfoTree.setProductInfo({
							id: t.id,
							handle: t.handle
						});
						var l = {},
							c = l;
						if (null != i && i != undefined && null != a && a != undefined) {
							if (this.isInstanceTypeProduct() && "undefined" != typeof t.tags && "all" != this.clientSpecs.getAppExecutionStrategy()) {
								var h = this.clientSpecs.getAppExecutionStrategy();
								if ("enabled_except" == h && t.tags.includes("vsk_disable")) return void m("App won't run as vsk_disable is present in product tags with strategy enabled_except");
								if ("disabled_except" == h && !t.tags.includes("vsk_enable")) return void m("App won't run as vsk_enable is not present in product tags with strategy disabled_except")
							}
							if (1 == a.length && "Default Title" == a[0].title && ("Default Title" == a[0].option1 || "default title" == a[0].option1)) return this.hasOnlyDefaultVariant = !0, "undefined" == typeof a[0].merged_options && this.setDataToSessionStorage(this.getSessionStorageKey(t.handle, !1, !1), t), void this.initialize();
							if (this.getMultiLingualInfo().translation_status && null == this.getUntranslatedData()) {
								if ("none" == this.getUntranslatedFetchStatus()) {
									var u = window.location.protocol + "//" + window.location.host;
									u += this.getCurrentLanguageSlug() + "/products/" + t.handle + ".js", this.fetchUntranslatedOptions(u)
								}
								setTimeout(function () {
									e.processJSONInformation(t)
								}, 200)
							} else {
								a.length > 0 && "undefined" == typeof a[0].merged_options && this.setDataToSessionStorage(this.getSessionStorageKey(t.handle, !1, !1), t);
								for (var d = this.getUntranslatedData(), p = 0; p < i.length; p++) {
									t.options_with_values && i[p].label && (i[p].name = i[p].label);
									var g = null;
									null != d ? (i[p].untranslated_name = d.options[p].name, g = this.clientSpecs.getViewTypeByOptionName(d.options[p].name)) : g = this.clientSpecs.getViewTypeByOptionName(i[p].name), g.view_type = this.extractViewType(g.view_type), "default" == g.view_type ? i[p].view_type = this.clientSpecs.getViewDefault() : i[p].view_type = g.view_type, i[p].variant_image_type = g.variant_image_type, i[p].drop_down_type = g.drop_down_type
								}
								for (var w = null, v = null, f = 0; f < s.length; f++) {
									for (var y = f + 1, b = 0; b < a.length; b++) {
										var _ = a[b],
											S = _.featured_image;
										if (!S && _.image && (S = _.image), S) {
											var k = parseInt(S.position);
											if (y == k) {
												w = _.id, v = y;
												break
											}
											null != w && v == k && (o[_.id] = o[w])
										}
									}
									if (null != w) {
										"undefined" == typeof o[w] && (o[w] = []);
										var x = s[f];
										"object" == typeof x && (x = x.src), o[w].push(x)
									}
								}
								for (p = 0; p < a.length; p++) {
									0 == r && a[p].available ? r = a[p].id : p == a.length - 1 && 0 == r && (r = a[0].id), n[a[p].id] = a[p], l = c;
									for (var A = null, D = 0; D < i.length; D++) {
										var C = "option" + (D + 1),
											I = i[D].name,
											T = i[D].view_type,
											F = a[p].id,
											E = a[p][C];
										a[p][C] = this.morphValues(a[p][C]), l[C] == undefined && (l[C] = []);
										for (var L = !1, O = 1, N = l[C].length, z = N - 1; z >= 0; z--) {
											var q = l[C][z];
											if (q != undefined && (L = q.name == I && q.value == a[p][C])) {
												O = N - z;
												break
											}
										}
										if (L) null != A && a[p].available && (A.available = a[p].available);
										else {
											var M = {};
											if (M.name = I, M.untranslated_name = i[D].untranslated_name, M.value = a[p][C], M.original_value = E, M.view_type = T, M.variant_image_type = i[D].variant_image_type, M.drop_down_type = i[D].drop_down_type, M.available = !1, null != d && (M.untranslated_value = d.variants[p][C]), ("variant_image" == T || "custom_image" == T || "drop_down" == T && "normal" != i[D].drop_down_type) && (M.featured_image = a[p].featured_image, !M.featured_image && a[p].image && (M.featured_image = a[p].image), M.featured_image)) {
												M.featured_image.secondary_src = M.featured_image.src, M.featured_image.last_src = M.featured_image.src;
												var V = o[a[p].id];
												void 0 !== V && V.length > 1 && (M.featured_image.secondary_src = V[1], M.featured_image.last_src = V[V.length - 1])
											}
											null != A && a[p].available && (A.available = a[p].available), D == i.length - 1 && (M.variant_id = F, M.available = a[p].available), l[C].push(M)
										}
										A = l = l[C][l[C].length - O]
									}
								}
								var R = t.featured_image;
								!R && t.images && t.images.length > 0 && (R = t.images[0]), R && "object" == typeof R && (R = R.src), this.uiElements.setDefaultFeaturedImage(R), this.productInfoTree.setValues(c, i, n), m(["Processed JS data structure", this.productInfoTree])
							}
						} else t.handle && "" != t.handle && this.executeFetch({
							url: this.getCurrentLanguageSlug() + "/collections/all/products/" + t.handle + ".js",
							path_name: null,
							allow_processing: !1,
							callback: function (t) {
								e.processJSONInformation(t)
							},
							translation_request: !1
						})
					}
				}, {
					key: "hideFormElements",
					value: function (t, e) {
						e && this.currentDocument.querySelectorAll(t).forEach(function (t) {
							t.parentNode.style.display = "none"
						});
						this.uiElements.hideElementStyles(t)
					}
				}, {
					key: "retryFetchInformationFromJs",
					value: function (t) {
						var e = this;
						setTimeout(function () {
							e.fetchInformationFromJs()
						}, t)
					}
				}, {
					key: "fetchInformationFromJs",
					value: function () {
						var t = this;
						if (this.isInstanceTypeCollection()) {
							if (r = this.currentDocument.querySelector(this.getInstanceConfig().json_data_selector)) try {
								var e = JSON.parse(r.innerHTML);
								this.processJSONInformation(e), this.currentDocument.setAttribute("swatch-generated", e.handle)
							} catch (l) {
								m(l), this.retryFetchInformationFromJs(100)
							} else if (this.getInstanceConfig().json_data_from_api) {
								var i = this.currentDocument.querySelector('a[href*="/products/"], [data-href]');
								if (i) {
									var a = null;
									i.hasAttribute("href") ? a = i.getAttribute("href") : i.hasAttribute("data-href") && (a = i.getAttribute("data-href")), a && (a = this.extractProductHandle(a), this.processJSONInformation({
										id: 0,
										title: "",
										handle: a
									}), this.currentDocument.setAttribute("swatch-generated", a))
								}
							}
						} else {
							var s = window.location.pathname.replace(/\/$/, ""),
								n = s.includes("/products");
							if ("" != this.clientSpecs.getSelectors().json_data_selector) {
								var r;
								if (r = this.currentDocument.querySelector(this.clientSpecs.getSelectors().json_data_selector)) {
									try {
										e = JSON.parse(r.innerHTML);
										this.processJSONInformation(e)
									} catch (l) {
										m(l), this.retryFetchInformationFromJs(100)
									}
									return
								}
								if (!n && !b()) return
							}
							if ("quick_view" != this.instanceSubType)
								if ("pending" != window.starAppsStudioJSDataRequest)
									if ("undefined" == typeof window.starAppsStudioJSData || window.starAppsStudioJSDataURL != s)
										if (window.starAppsStudioJSDataRequest = "pending", n) {
											var o = window.location.protocol + "//" + window.location.hostname + s + ".js";
											m("JS data fetch request initiated"), this.executeFetch({
												url: o,
												path_name: s,
												allow_processing: !0,
												callback: null,
												translation_request: !1
											})
										} else window.starAppsStudioJSDataRequest = "rejected";
							else setTimeout(function () {
								window.starAppsStudioJSDataRequest = "complete", t.processJSONInformation(window.starAppsStudioJSData)
							}, 100);
							else this.retryFetchInformationFromJs(100)
						}
					}
				}, {
					key: "executeFetch",
					value: function (t) {
						var e, i = this,
							a = t.url,
							s = t.path_name,
							n = t.allow_processing,
							r = t.callback,
							o = t.translation_request,
							l = this.getDataFromSessionStorage(this.getSessionStorageKey(a, !0, o));
						if (l) return s && (window.starAppsStudioJSDataRequest = "complete", window.starAppsStudioJSDataURL = s, window.starAppsStudioJSData = l), n && (this.processJSONInformation(l), m("JS data fetch request finished")), void(r && r.call(this, l));
						o || this.fetchUntranslatedOptions(a), window.fetch ? fetch(a).then(function (t) {
							return t.json()
						}).then(function (t) {
							s && (window.starAppsStudioJSDataRequest = "complete", window.starAppsStudioJSDataURL = s, window.starAppsStudioJSData = t), n && (i.processJSONInformation(t), m("JS data fetch request finished")), r && r.call(i, t)
						}) : ((e = new XMLHttpRequest).open("GET", a, !0), e.onload = function () {
							if (e.status >= 200 && e.status < 400) {
								var t = JSON.parse(e.responseText);
								s && (window.starAppsStudioJSDataRequest = "complete", window.starAppsStudioJSDataURL = s, window.starAppsStudioJSData = t), n && (this.processJSONInformation(t), m("JS data fetch request finished")), r && r.call(this, t)
							}
						}.bind(i), e.send())
					}
				}, {
					key: "initialize",
					value: function () {
						var t = this;
						if (m("Hey! I have started working with setting - " + this.themeCode), !this.eventsRegistered) {
							var e = !0,
								i = ["click", "change", "virtual_click", "keyup"];
							if (this.isInstanceTypeCollection() && this.getInstanceConfig().switch_on_hover && i.push("mouseover"), Object.entries(i).forEach(function (i) {
									var a = _slicedToArray(i, 2),
										s = a[0],
										n = a[1];
									if ("length" != s)
										if (t.isInstanceTypeProduct()) {
											var r = t.getCorrectSwatchRoot();
											r ? r.addEventListener(n, t.generateUISwitch()) : e = !1
										} else t.currentDocument.addEventListener(n, t.generateUISwitch())
								}), e) {
								if (this.eventsRegistered = !0, this.isInstanceTypeCollection()) {
									var a = this.clientSpecs.getQuickViewConfig();
									if (a.enable) {
										var s = this.currentDocument.querySelectorAll(a.button_selector);
										Object.entries(s).forEach(function (e) {
											var i = _slicedToArray(e, 2),
												a = i[0],
												s = i[1];
											"length" != a && s.addEventListener("click", function (e) {
												t.isEventTrusted(e, !0) && setTimeout(function () {
													t.generateUIForQuickView()
												}, 0)
											})
										})
									}
								}
								this.generateProductGroups()
							} else setTimeout(this.initialize.bind(this), 250)
						}
						h || (this.isInstanceTypeCollection() && this.hideFormElements(this.getInstanceConfig().selectors_to_hide, !1), window.onresize = function () {
							var t = this,
								e = document.querySelectorAll('[data-navigation="left"]');
							Object.entries(e).forEach(function (e) {
								var i = _slicedToArray(e, 2),
									a = i[0],
									s = i[1];
								"length" != a && t.scrollSwatchSlider(s, !0)
							})
						}.bind(this), window.document.addEventListener("click", function (t) {
							var e = t.target;
							e.hasAttribute("swatch-inside") && (e = e.parentNode);
							for (var i = document.querySelectorAll("ul.swatch-drop-down-list:not(.swatch-hide)"), a = 0; a < i.length; a++) {
								e != i[a].parentNode.querySelector('[type="select"]') && i[a].classList.add("swatch-hide")
							}
						}), h = !0), m("Generating swatch UI..."), this.generateUISwitch()()
					}
				}, {
					key: "readyToInit",
					value: function () {
						return null != this.productInfoTree.getTree()
					}
				}, {
					key: "detectAndInitialize",
					value: function () {
						var t = null,
							e = null;
						this.clientSpecs.getThemeType() && "" != this.clientSpecs.getThemeType() && (t = this.clientSpecs.getThemeType()), this.clientSpecs.getSelectors().option_selectors && "" != this.clientSpecs.getSelectors().option_selectors.trim() && (e = this.clientSpecs.getSelectors().option_selectors);
						var i = [{
								theme_type: "common",
								option_selector: 'select[class*="single-option-selector"]',
								hide_elements: 'select.single-option-selector, select[id*="SingleOptionSelector"]'
							}, {
								theme_type: "common",
								option_selector: 'select[id*="SingleOptionSelector"]',
								hide_elements: 'select.single-option-selector, select[id*="SingleOptionSelector"]'
							}, {
								theme_type: "common",
								option_selector: ".option-selectors select",
								hide_elements: ".option-selectors"
							}, {
								theme_type: "common",
								option_selector: ".option-values select",
								hide_elements: ".option-values.option-values-select .form-element-wrapper"
							}, {
								theme_type: "brooklyn",
								option_selector: ".single-option-radio input.single-option-selector__radio",
								hide_elements: ".radio-wrapper.js"
							}, {
								theme_type: "brooklyn",
								option_selector: ".single-option-radio input.single-option-selector-product-template",
								hide_elements: ".radio-wrapper.js"
							}, {
								theme_type: "brooklyn",
								option_selector: 'form[action*="/cart/add"] input[type="radio"][class*="variant__input"]',
								hide_elements: 'form[action*="/cart/add"] .variant-wrapper.variant-wrapper--button.js'
							}, {
								theme_type: "prestige",
								option_selector: 'input[data-option-position][type="radio"], button[data-option-position][type="button"], div[data-option-position][data-option-value]',
								hide_elements: 'form[action*="/cart/add"] .ProductForm__Option'
							}, {
								theme_type: "empire",
								option_selector: 'form[action*="/cart/add"] .form-options .form-field-select[data-product-option]',
								hide_elements: 'form[action*="/cart/add"] .form-field.form-options'
							}, {
								theme_type: "motion",
								option_selector: "select.product-single__variants",
								hide_elements: "noelement"
							}],
							a = null,
							s = !!t;
						if (!!e) {
							if (!this.currentDocument.querySelector(e)) throw m("option_selectors is defined and selector was not found!"), "SelectorNotFoundException";
							a = {
								theme_type: s ? t : "common",
								option_selector: e,
								hide_elements: "noelement"
							}
						} else
							for (var n = 0; n < i.length; n++) {
								var r = i[n];
								if (s) {
									if (r.theme_type != t) continue;
									m("theme_type(" + t + ") is defined, Looking for its selector...")
								}
								if (this.currentDocument.querySelector(r.option_selector)) {
									a = r;
									break
								}
								if (n == i.length - 1) throw "SelectorNotFoundException"
							}
						if (!a) throw "SelectorNotFoundException";
						if (this.getCorrectSwatchRoot()) {
							if (this.themeSupportConfig = {
									option_selector: a.option_selector,
									hide_elements: a.hide_elements + ", " + a.option_selector,
									deferred: !!a.deferred
								}, this.clientSpecs.getSelectors().init_deferred && (this.themeSupportConfig.deferred = this.clientSpecs.getSelectors().init_deferred), this.themeCode = a.theme_type, "brooklyn" == this.themeCode || "impulse" == this.themeCode) {
								this.themeCode = "brooklyn";
								var o = this.currentDocument.querySelector(this.themeSupportConfig.option_selector),
									l = this.clientSpecs.getSelectors().option_index_attributes;
								this.themeSupportConfig.strategy = "type1";
								for (var c = 0; c < l.length; c++)
									if (o.hasAttribute(l[c])) {
										var h = o.getAttribute(l[c]);
										if ((h = RegExp("(?:(?:option[^\\d\\s]*)(\\d+))|(^\\d+$)", "gi").exec(h)) && h[1] ? h = h[1] : h && h[2] && (h = h[2]), "option0" == (h = "option" + h)) {
											this.themeSupportConfig.attribute_name = l[c], this.themeSupportConfig.strategy = "type0";
											break
										}
										if ("option1" == h) {
											this.themeSupportConfig.attribute_name = l[c];
											break
										}
									}
								m(this.themeSupportConfig), "undefined" == typeof this.themeSupportConfig.attribute_name && console.log("Variant Swatch King:", "Theme type doesn't have a attribute_name")
							}
							"" != this.clientSpecs.getSelectors().selectors_to_hide_override ? this.hideFormElements(this.clientSpecs.getSelectors().selectors_to_hide_override, !1) : (this.hideFormElements(this.themeSupportConfig.hide_elements, "common" == this.themeCode), this.hideFormElements(this.clientSpecs.getSelectors().selectors_to_hide, !1)), this.preInitialize()
						} else console.log("Variant Swatch King:", "We cannot find any swatch display location, please get in touch with us at support@starapps.studio")
					}
				}, {
					key: "preInitialize",
					value: function () {
						!this.themeSupportConfig.deferred || b() ? this.initialize() : setTimeout(this.preInitialize.bind(this), 250)
					}
				}]), t
			}(),
			g = function () {
				function t() {
					_classCallCheck(this, t), this.tree = null, this.options = null, this.variants = null, this.variantsKeys = null, this.productInfo = null
				}
				return _createClass(t, [{
					key: "getVariantInfoFromOptions",
					value: function (t) {
						for (var e = Object.keys(t), i = this.getVariantsKeys(), a = this.getVariants(), s = 0; s < i.length; s++) {
							for (var n = a[i[s]], r = !0, o = 0; o < e.length; o++) {
								if (t[e[o]] != n.options[o]) {
									r = !1;
									break
								}
							}
							if (r) return n
						}
						return null
					}
				}, {
					key: "getNodeByOptions",
					value: function (t) {
						for (var e = this.tree, i = null, a = {}, s = Object.keys(t), n = 0; n < s.length; n++) {
							var r = s[n],
								o = !1;
							if (e[r] != undefined) {
								e = e[r];
								for (var l = 0; l < e.length; l++) {
									a[r] == undefined && (a[r] = {
										available_count: 0,
										data: [],
										name: e[l].name,
										untranslated_name: e[l].untranslated_name,
										view_type: e[l].view_type,
										variant_image_type: e[l].variant_image_type,
										drop_down_type: e[l].drop_down_type
									});
									var c = {
										value: e[l].value,
										original_value: e[l].original_value,
										untranslated_value: e[l].untranslated_value
									};
									e[l].featured_image != undefined && (c.featured_image = e[l].featured_image), e[l].available != undefined && (c.available = e[l].available, c.available && (a[r].available_count += 1)), a[r].data.push(c), e[l].value == t[r] ? (i = e[l], o = !0) : o || l != e.length - 1 || (i = e[0])
								}
								e = i
							}
						}
						return a
					}
				}, {
					key: "getTree",
					value: function () {
						return this.tree
					}
				}, {
					key: "getOptions",
					value: function () {
						return this.options
					}
				}, {
					key: "getOptionNameByKey",
					value: function (t) {
						for (var e = 0; e < this.options.length; e++) {
							if ("option" + (e + 1) == t) return this.options[e].name
						}
						return ""
					}
				}, {
					key: "getVariants",
					value: function () {
						return this.variants
					}
				}, {
					key: "getVariantsKeys",
					value: function () {
						return this.variantsKeys
					}
				}, {
					key: "getProductInfo",
					value: function () {
						return this.productInfo
					}
				}, {
					key: "setProductInfo",
					value: function (t) {
						this.productInfo = t
					}
				}, {
					key: "setValues",
					value: function (t, e, i) {
						this.tree = t, this.options = e, this.variants = i, this.variantsKeys = Object.keys(i)
					}
				}]), t
			}(),
			w = function () {
				function t() {
					_classCallCheck(this, t), this.app_setting = {
						styles: {
							button: {
								size: "lg",
								text: "capitalize",
								border: "type1",
								radius: "type2",
								on_hover_3d: "shadow",
								on_hover_scale: "light_inverse",
								font_color_selected: "FFFFFF",
								border_color_selected: "000000",
								font_color_unselected: "C2C2C2",
								border_color_unselected: "42FF42",
								background_color_selected: "000000",
								background_color_unselected: "FFFFFF"
							},
							"default": "button",
							drop_down: {},
							custom_image: {
								size: "md",
								scale: "type1",
								shape: "landscape",
								border: "type3",
								radius: "type2",
								position: "top",
								dimension: {
									width: "128px",
									height: "80px"
								},
								on_hover_3d: "glow",
								on_hover_size: "light_inverse",
								on_hover_scale: "normal",
								border_color_selected: "FF6666",
								border_color_unselected: "DDDDDD"
							},
							variant_image: {
								size: "md",
								scale: "type1",
								shape: "landscape",
								border: "type3",
								radius: "type2",
								position: "top",
								dimension: {
									width: "128px",
									height: "80px"
								},
								on_hover_3d: "glow",
								on_hover_size: "light_inverse",
								on_hover_scale: "normal",
								border_color_selected: "FF6666",
								border_color_unselected: "DDDDDD"
							},
							products_swatch_presentation: {
								style: "stack",
								swatch_sizes: {
									circle: {
										lg: {
											width: "120px",
											height: "120px"
										},
										md: {
											width: "80px",
											height: "80px"
										},
										sm: {
											width: "40px",
											height: "40px"
										}
									},
									square: {
										lg: {
											width: "120px",
											height: "120px"
										},
										md: {
											width: "80px",
											height: "80px"
										},
										sm: {
											width: "40px",
											height: "40px"
										}
									},
									portrait: {
										lg: {
											width: "120px",
											height: "192px"
										},
										md: {
											width: "80px",
											height: "128px"
										},
										sm: {
											width: "40px",
											height: "64px"
										}
									},
									landscape: {
										lg: {
											width: "192px",
											height: "120px"
										},
										md: {
											width: "128px",
											height: "80px"
										},
										sm: {
											width: "64px",
											height: "40px"
										}
									}
								},
								slide_left_button_svg: "",
								allow_slide_for_button: !1,
								slide_right_button_svg: "",
								hide_single_value_option: !1
							},
							collections_swatch_presentation: {
								style: "slide",
								minified: !1,
								minified_products: !1,
								minified_template: "+{count}",
								slide_left_button_svg: "",
								allow_slide_for_button: !1,
								minified_display_count: [3, 6],
								slide_right_button_svg: "",
								hide_single_value_option: !1
							}
						},
						configurations: {
							stock_out: {
								display: "none"
							},
							request_sent: {},
							flexible_swatch: !1,
							app_execution_strategy: "all",
							do_not_select_an_option: {
								text: "Select a {option_name}",
								status: !0,
								control_add_to_cart: !0,
								allow_virtual_trigger: !0,
								make_a_selection_text: "Select a {option_name}",
								auto_select_options_list: []
							}
						},
						localized_strings: {},
						display_logs: !1
					}, this.theme_setting = {
						configurations: {
							products: {
								enable: !0,
								handleize: !1,
								theme_type: "",
								swatch_root: {
									position: "top",
									selector: 'form[action*="/cart/add"]',
									section_selector: "#shopify-section-product-template, #shopify-section-page-product, #shopify-section-static-product, #shopify-section-product, #shopify-section-static-product-pages"
								},
								init_deferred: !1,
								option_selectors: "",
								selectors_to_hide: [".swatch_options", 'form[action="/cart/add"] .product__variants', 'form[action="/cart/add"] .form__row div.selector-wrapper', "form .swatch.clearfix"],
								json_data_selector: "",
								add_to_cart_selector: '[name="add"]',
								persist_group_variant: !0,
								option_index_attributes: ["data-object", "data-index", "data-product-option", "data-option-index", "name", "data-option-position"],
								add_to_cart_text_selector: '[name="add"]>span',
								selectors_to_hide_override: "",
								add_to_cart_enabled_classes: "",
								add_to_cart_disabled_classes: ""
							},
							collections: {
								enable: !1,
								alignment: "center",
								quick_view: {
									enable: !1,
									button_selector: "[data-handle]",
									dynamic_content_selector: ".quick-shop .js-product-form .product_form",
									product_handle_attribute: "data-handle"
								},
								layer_index: 12,
								sku_template: "SKU: {sku}",
								display_label: !1,
								data_selectors: {
									sku: ".variant-sku",
									url: "a",
									price: "[data-price]",
									title: ".product-card__title",
									form_input: 'input[name="id"]',
									featured_image: "img",
									secondary_image: "img.secondary",
									link_pid_attribute: "",
									link_vid_attribute: ""
								},
								price_template: "{price_token}. {price_amount}",
								swatch_position: "bottom",
								switch_on_hover: !1,
								continuous_lookup: 3e3,
								selectors_to_hide: [],
								json_data_from_api: !1,
								json_data_selector: "[sa-swatch-json]",
								swatch_root_selector: "[sa-swatch-root]",
								price_trailing_zeroes: !1,
								swatch_display_selector: ""
							}
						},
						custom_css: ""
					}, this.options = [{
						id: 117015,
						name: "Color",
						view_type: "variant_image / variant_image",
						trigger_action: "auto",
						variant_image_type: "featured_image",
						drop_down_type: "normal"
					}, {
						id: 117014,
						name: "Size",
						view_type: "default / hidden",
						trigger_action: "auto",
						variant_image_type: "featured_image",
						drop_down_type: "normal"
					}, {
						id: 117013,
						name: "Title",
						view_type: "default / hidden",
						trigger_action: "auto",
						variant_image_type: "featured_image",
						drop_down_type: "normal"
					}], this.optionsMap = {}, this.localized_strings = this.app_setting.localized_strings
				}
				return _createClass(t, [{
					key: "getEnableStatus",
					value: function () {
						return this.theme_setting.configurations.products.enable
					}
				}, {
					key: "getSwatchPresentation",
					value: function (t) {
						return this.app_setting.styles[t + "_swatch_presentation"]
					}
				}, {
					key: "getViewTypes",
					value: function () {
						return ["variant_image", "drop_down", "button", "custom_image"]
					}
				}, {
					key: "getViewStyle",
					value: function (t) {
						return this.app_setting.styles[t]
					}
				}, {
					key: "getViewDefault",
					value: function () {
						return this.app_setting.styles["default"]
					}
				}, {
					key: "getSelectors",
					value: function () {
						return this.theme_setting.configurations.products
					}
				}, {
					key: "getFlexibleSwatch",
					value: function () {
						return this.app_setting.configurations.flexible_swatch
					}
				}, {
					key: "getHandleize",
					value: function () {
						return this.theme_setting.configurations.products.handleize
					}
				}, {
					key: "getThemeType",
					value: function () {
						return this.theme_setting.configurations.products.theme_type
					}
				}, {
					key: "getStyles",
					value: function () {
						return this.app_setting.styles
					}
				}, {
					key: "getViewTypeByOptionName",
					value: function (t) {
						if ("undefined" != typeof this.optionsMap[t]) return this.optionsMap[t];
						for (var e = 0; e < this.options.length; e++)
							if (this.optionsMap[this.options[e].name] = this.options[e], this.options[e].name == t) return this.options[e];
						return {
							view_type: "default / hidden",
							variant_image_type: "featured_image",
							drop_down_type: "normal"
						}
					}
				}, {
					key: "getTriggerActionByOptionName",
					value: function (t) {
						if ("undefined" != typeof this.optionsMap[t]) return this.optionsMap[t].trigger_action;
						for (var e = 0; e < this.options.length; e++)
							if (this.optionsMap[this.options[e].name] = this.options[e], this.options[e].name == t) return this.options[e].trigger_action;
						return "auto"
					}
				}, {
					key: "getOptions",
					value: function () {
						return this.options
					}
				}, {
					key: "getCustomStyle",
					value: function () {
						if ("" != this.theme_setting.custom_css && !document.querySelector('style[app="vsk"][role="custom"]')) return '<style type="text/css" app="vsk" role="custom">' + this.theme_setting.custom_css + "</style>"
					}
				}, {
					key: "getStockOut",
					value: function () {
						return this.app_setting.configurations.stock_out
					}
				}, {
					key: "getDoNotSelectAnOption",
					value: function () {
						return this.app_setting.configurations.do_not_select_an_option
					}
				}, {
					key: "getDisplayLogs",
					value: function () {
						return this.app_setting.display_logs
					}
				}, {
					key: "getCollectionConfig",
					value: function () {
						return this.theme_setting.configurations.collections
					}
				}, {
					key: "getQuickViewConfig",
					value: function () {
						return this.theme_setting.configurations.collections.quick_view
					}
				}, {
					key: "getAppExecutionStrategy",
					value: function () {
						return this.app_setting.configurations.app_execution_strategy
					}
				}, {
					key: "getPersistGroupVariant",
					value: function () {
						return this.theme_setting.configurations.products.persist_group_variant
					}
				}, {
					key: "getLocalizedStrings",
					value: function () {
						return this.localized_strings
					}
				}]), t
			}(),
			v = function () {
				function t(e, i) {
					_classCallCheck(this, t), this.instanceType = e, this.clientSpecs = i, this.storeID = 17542, this.defaultFeaturedImage = null, this.viewTypes = null, this.isSwatchRootDisplayed = !1, this.selectedSwatches = {}, this.styleClasses = {
						variant_image: {
							shape: {
								square: "star-set-image-sq",
								portrait: "star-set-image-rec-port",
								landscape: "star-set-image-rec-land",
								circle: "star-set-image-sq star-set-image-rad-50"
							},
							size: {
								sm: "star-size-sm",
								md: "star-size-md",
								lg: "star-size-lg"
							},
							scale: {
								type1: ["star-set-image-scale-1", "background-size: cover;"],
								type2: ["star-set-image-scale-2", "background-size: 200%;"],
								type3: ["star-set-image-scale-3", "background-size: 300%;"]
							},
							position: {
								center: "star-set-image-position-center",
								top: "star-set-image-position-top",
								right: "star-set-image-position-right",
								bottom: "star-set-image-position-bottom",
								left: "star-set-image-position-left"
							},
							radius: {
								type1: "star-set-image-rad-0",
								type2: "star-set-image-rad-10"
							},
							border: {
								type1: "star-image-border-1",
								type2: "star-image-border-2",
								type3: "star-image-border-3"
							},
							on_hover_3d: {
								glow: "star-hover-glow",
								shadow: "star-hover-shadow"
							},
							on_hover_scale: {
								normal: "star-hover-light-scale",
								strong: "star-hover-strong-scale"
							},
							option_value_display: {
								adjacent: "star-option-value-adjacent"
							},
							on_hover_size_prevented: {
								light: "star-hover-img-grow-light",
								light_inverse: "star-hover-img-shrink-light",
								strong: "star-hover-img-grow-strong",
								strong_inverse: "star-hover-img-shrink-strong"
							}
						},
						custom_image: {
							shape: {
								square: "star-set-image-sq",
								portrait: "star-set-image-rec-port",
								landscape: "star-set-image-rec-land",
								circle: "star-set-image-sq star-set-image-rad-50"
							},
							size: {
								sm: "star-size-sm",
								md: "star-size-md",
								lg: "star-size-lg"
							},
							scale: {
								type1: ["star-set-image-scale-1", "background-size: cover;"],
								type2: ["star-set-image-scale-2", "background-size: 200%;"],
								type3: ["star-set-image-scale-3", "background-size: 300%;"]
							},
							position: {
								center: "star-set-image-position-center",
								top: "star-set-image-position-top",
								right: "star-set-image-position-right",
								bottom: "star-set-image-position-bottom",
								left: "star-set-image-position-left"
							},
							radius: {
								type1: "star-set-image-rad-0",
								type2: "star-set-image-rad-10"
							},
							border: {
								type1: "star-image-border-1",
								type2: "star-image-border-2",
								type3: "star-image-border-3"
							},
							on_hover_3d: {
								glow: "star-hover-glow",
								shadow: "star-hover-shadow"
							},
							on_hover_scale: {
								normal: "star-hover-light-scale",
								strong: "star-hover-strong-scale"
							},
							option_value_display: {
								adjacent: "star-option-value-adjacent"
							},
							on_hover_size_prevented: {
								light: "star-hover-img-grow-light",
								light_inverse: "star-hover-img-shrink-light",
								strong: "star-hover-img-grow-strong",
								strong_inverse: "star-hover-img-shrink-strong"
							}
						},
						button: {
							size: {
								xs: "star-btn-size-xs",
								sm: "star-btn-size-sm",
								md: "star-btn-size-md",
								lg: "star-btn-size-lg"
							},
							border: {
								type1: "star-btn-border-1",
								type2: "star-btn-border-2",
								type3: "star-btn-border-3"
							},
							radius: {
								type1: "star-set-btn-rad-0",
								type2: "star-set-btn-rad-10"
							},
							text: {
								lowercase: "star-btn-text-lower",
								uppercase: "star-btn-text-upper",
								capitalize: "star-btn-text-cap"
							},
							on_hover_3d: {
								glow: "star-hover-glow",
								shadow: "star-hover-shadow"
							},
							on_hover_scale: {
								light: "star-hover-btn-grow-light",
								light_inverse: "star-hover-btn-shrink-light",
								strong: "star-hover-btn-grow-strong",
								strong_inverse: "star-hover-btn-shrink-strong"
							}
						},
						drop_down: {
							size: {
								xs: "star-btn-size-xs",
								sm: "star-btn-size-sm",
								md: "star-btn-size-md",
								lg: "star-btn-size-lg"
							},
							radius: {
								type1: "star-set-btn-rad-0",
								type2: "star-set-btn-rad-10"
							},
							text: {
								lowercase: "star-btn-text-lower",
								uppercase: "star-btn-text-upper",
								capitalize: "star-btn-text-cap"
							}
						}
					}
				}
				return _createClass(t, [{
					key: "isInstanceTypeProduct",
					value: function () {
						return "products" == this.instanceType
					}
				}, {
					key: "isInstanceTypeCollection",
					value: function () {
						return "collections" == this.instanceType
					}
				}, {
					key: "displayTooltip",
					value: function (t) {
						return !!this.isInstanceTypeProduct() && "tooltip" == this.clientSpecs.getViewStyle(t).option_value_display
					}
				}, {
					key: "displayAdjacentText",
					value: function (t) {
						return !!this.isInstanceTypeProduct() && "adjacent" == this.clientSpecs.getViewStyle(t).option_value_display
					}
				}, {
					key: "getHeadClasses",
					value: function (t) {
						for (var e = "", i = [{
								key: "border",
								value: "type3",
								return_class: "star-image-border-3-head"
							}, {
								key: "on_hover_3d",
								value: "glow",
								return_class: "star-hover-glow-head"
							}, {
								key: "shape",
								value: "circle",
								return_class: "star-set-image-rad-50-head"
							}, {
								key: "radius",
								value: "type2",
								return_class: "star-set-image-rad-10-head"
							}, {
								key: "option_value_display",
								value: "adjacent",
								return_class: "star-option-value-adjacent-head"
							}], a = this.clientSpecs.getViewStyle(t), s = 0; s < i.length; s++) {
							var n = i[s];
							"undefined" != typeof a[n.key] && a[n.key] == n.value && (e += " " + n.return_class)
						}
						return e
					}
				}, {
					key: "getScaleOnHoverClass",
					value: function (t) {
						var e = this.clientSpecs.getViewStyle(t).on_hover_size;
						return void 0 !== e && "undefined" != typeof this.styleClasses[t].on_hover_size_prevented[e] ? " " + this.styleClasses[t].on_hover_size_prevented[e] : ""
					}
				}, {
					key: "getSwatchPresentation",
					value: function () {
						return this.isInstanceTypeProduct() ? this.clientSpecs.getSwatchPresentation("products") : this.isInstanceTypeCollection() ? this.clientSpecs.getSwatchPresentation("collections") : void 0
					}
				}, {
					key: "isSwatchPresentationStyle",
					value: function (t) {
						return this.getSwatchPresentation().style == t
					}
				}, {
					key: "getSwatchSlideStyleHTML",
					value: function (t) {
						return '<div class="swatch-navigation" data-navigation="' + t + '" tabindex="0">\n        ' + ("left" == t ? this.getLeftNavigationSVG() : this.getRightNavigationSVG()) + "\n        </div>"
					}
				}, {
					key: "getRightNavigationSVG",
					value: function () {
						return "" != this.getSwatchPresentation().slide_right_button_svg ? this.getSwatchPresentation().slide_right_button_svg.replace(RegExp("<[a-z]+", "gi"), ' swatch-inside="true"') : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" swatch-inside="true" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g swatch-inside="true"> <path swatch-inside="true" d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5 c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z "/></g></svg>'
					}
				}, {
					key: "getLeftNavigationSVG",
					value: function () {
						return "" != this.getSwatchPresentation().slide_left_button_svg ? this.getSwatchPresentation().slide_left_button_svg.replace(RegExp("<[a-z]+", "gi"), ' swatch-inside="true"') : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" swatch-inside="true" x="0px" y="0px" viewBox="0 0 477.175 477.175" style="enable-background:new 0 0 477.175 477.175;" xml:space="preserve"> <g swatch-inside="true"> <path swatch-inside="true" d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225 c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
					}
				}, {
					key: "getMinifiedHTML",
					value: function (t, e, i) {
						t = this.cvt2HTMLEntities(t);
						var a = this.clientSpecs.getSwatchPresentation("collections").minified_template;
						return a = (a = (a = (a = a.replace(RegExp("{count}", "gi"), e)).replace(RegExp("{option_name}", "gi"), t)).replace(RegExp("{product_id}", "gi"), i.id)).replace(RegExp("{product_handle}", "gi"), i.handle), this.parseHTML('<li class="swatch-view-item swatch-minified-text" orig-value="' + t + '">' + a + "</li>")[0]
					}
				}, {
					key: "getSwatchPresentationClass",
					value: function () {
						return "swatch-view-" + this.getSwatchPresentation().style
					}
				}, {
					key: "parseStyleString",
					value: function (t) {
						for (var e = {}, i = t.split(";"), a = 0; a < i.length; a++) {
							var s = i[a];
							if ("" != s.trim()) {
								var n = (s = s.split(":"))[0].replace("-", "_"),
									r = s[1].trim();
								e[n] = r
							}
						}
						return e
					}
				}, {
					key: "parseHTML",
					value: function (t) {
						var e = document.implementation.createHTMLDocument("");
						return e.body.innerHTML = t, e.body.children
					}
				}, {
					key: "setDefaultFeaturedImage",
					value: function (t) {
						this.defaultFeaturedImage = t
					}
				}, {
					key: "hideElementStyles",
					value: function (t) {
						var e = document.querySelector('style[app="vsk"][role="hide_elements"]'),
							i = "";
						if ("object" == typeof t || "array" == typeof t)
							for (var a = 0; a < t.length; a++) i += t[a], a < t.length - 1 && (i += ",");
						else "string" == typeof t && (i = t);
						"" != i.trim() && (e ? e.innerHTML.includes(i) || (e.innerHTML += i + "{display: none!important;}") : (i = '<style type="text/css" app="vsk" role="hide_elements">' + i + "{display: none!important;}</style>", document.querySelector("head").appendChild(this.parseHTML(i)[0])))
					}
				}, {
					key: "setStyles",
					value: function () {
						if (!document.querySelector('style[app="vsk"][role="main"]')) {
							var t = '<style type="text/css" app="vsk" role="main">.star-set-btn{position:relative;display:inline-block;height:auto;width:auto;font-weight:400;font-style:normal;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;background-image:none;background-color:#FFFFFF;color:#C2C2C2;-webkit-appearance:none !important;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}div.swatch-allow-animation,div.swatch-allow-animation div.star-set-image,div[option-target][type-group] div.swatch-image,div[option-target][type-group] div.swatch-custom-image,div[option-target][type-group] div.star-set-image,div[option-target][type-group] .swatch-button,.swatch-img-text{-webkit-transition:0.3s all ease-in-out !important;transition:0.3s all ease-in-out !important}.star-btn-size-lg{padding:0px 12px;min-width:48px;font-size:16px;line-height:48px;height:48px}.star-btn-size-md{padding:0px 10px;min-width:40px;font-size:13px;line-height:40px;height:40px}.star-btn-size-sm{padding:0px 8px;min-width:32px;font-size:10px;line-height:32px;height:32px}.star-btn-size-xs{padding:0px 6px;min-width:24px;font-size:8px;line-height:24px;height:24px}.star-btn-text-none{text-transform:initial}.star-btn-text-lower{text-transform:lowercase}.star-btn-text-upper{text-transform:uppercase}.star-btn-text-cap{text-transform:capitalize}.star-btn-border-1{border:0px solid #42FF42}.star-btn-border-2{border:1px solid #42FF42}.star-btn-border-3{border:1px solid #42FF42;border-bottom-width:4px !important;border-right-width:4px !important}.star-set-btn-rad-0{border-radius:0}.star-set-btn-rad-10{border-radius:10px}.star-image-border-1{border:0px solid #DDDDDD}.star-image-border-2{border:1px solid #DDDDDD}.star-image-border-3{border:1px solid #DDDDDD}.star-image-border-3-head{border:1px solid #DDDDDD;line-height:0px}.swatches-type-products .star-image-border-3-head{padding:0.25rem}.swatches-type-products .star-image-border-3-head .swatch-tool-tip{padding:0.25rem}.swatches-type-collections .star-image-border-3-head{padding:0.1rem}.swatches-type-collections .star-image-border-3-head .swatch-tool-tip{padding:0.1rem}.star-list{list-style:none;text-align:center;padding:0 !important}.star-list-item{position:relative;display:inline-block;vertical-align:bottom;margin:0 1rem;padding:2px;background-color:#fff}.star-set-image-sq.star-size-lg{height:120px;width:120px}.star-set-image-sq.star-size-md{height:80px;width:80px}.star-set-image-sq.star-size-sm{height:40px;width:40px}.star-set-image-rad-50{border-radius:50% !important}.star-set-image-rad-0{border-radius:0}.star-set-image-rad-10,.star-set-image-rad-10-head{border-radius:10px}.star-set-image-rec-port.star-size-lg{height:192px;width:120px}.star-set-image-rec-port.star-size-md{height:128px;width:80px}.star-set-image-rec-port.star-size-sm{height:64px;width:40px}.star-set-image-rec-land.star-size-lg{height:120px;width:192px}.star-set-image-rec-land.star-size-md{height:80px;width:128px}.star-set-image-rec-land.star-size-sm{height:40px;width:64px}.star-set-image-scale-1{background-size:cover !important}.star-set-image-scale-2{background-size:200% !important}.star-set-image-scale-3{background-size:300% !important}.star-set-image-position-center{background-position:center !important}.star-set-image-position-top{background-position:top !important}.star-set-image-position-right{background-position:right !important}.star-set-image-position-bottom{background-position:bottom !important}.star-set-image-position-left{background-position:left !important}.star-set-image{position:relative;display:inline-block;vertical-align:middle;background-position:center;background-size:cover;background-repeat:no-repeat;white-space:nowrap;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;text-transform:uppercase;margin:-0.2px}.swatch-unavailable,.swatch-unavailable-go{display:block;position:absolute;left:-1px;right:-1px;top:-1px;bottom:-1px;margin:auto;border:inherit;border-width:inherit;border-color:inherit;border-radius:inherit;opacity:inherit}.swatch-unavailable-go{opacity:0.75;background-color:#f5f5f5}.swatch-image .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #DDDDDD 50%, #DDDDDD 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #DDDDDD 50%, #DDDDDD 52%, transparent 50%)}.swatch-custom-image .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #DDDDDD 50%, #DDDDDD 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #DDDDDD 50%, #DDDDDD 52%, transparent 50%)}.swatch-button .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #C2C2C2 50%, #C2C2C2 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #C2C2C2 50%, #C2C2C2 52%, transparent 50%)}.swatch-tool-tip-wrapper{margin-bottom:32px}.swatch-tool-tip{display:block;position:absolute;cursor:pointer;width:100%;opacity:0;color:#DDDDDD;border:1px solid #DDDDDD;background-color:#FFFFFF;text-align:center;border-radius:3px;left:0;top:110%;padding:2px 5px;font-size:10px;pointer-events:none !important;-webkit-transition:0.3s all ease-in-out !important;transition:0.3s all ease-in-out !important}li.swatch-view-item:hover .swatch-tool-tip,li.swatch-view-item:focus .swatch-tool-tip{opacity:1;pointer-events:all !important}.swatch-tool-tip-text{display:block;max-width:100%;overflow:hidden;color:inherit;height:auto !important;padding:0px !important;line-height:125% !important;white-space:normal}.swatch-tool-tip::after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent #DDDDDD transparent}.swatches{margin-top:10px;margin-bottom:10px;max-width:100%}.swatch-single{margin-bottom:10px}.swatch-view{margin:10px 0px}ul.swatch-view{padding:0px;list-style:none !important}ul.swatch-view li{position:relative;display:inline-block;list-style:none !important;margin:0.5rem 1.0rem 0.5rem 0;outline:none}ul.swatch-view li::before,ul.swatch-view li::after{content:none !important}.swatch-image,.swatch-custom-image{position:relative;-webkit-appearance:none !important;background-color:inherit}.swatch-image,.swatch-custom-image,.swatch-button{cursor:pointer}.swatch-img-text{position:absolute;display:table;height:100%;width:100%;font-weight:400;font-style:normal;top:0;bottom:0;margin:auto;text-align:center;z-index:-1;white-space:normal}.swatch-label{font-weight:600;font-style:normal}.swatch-variant-name{font-weight:400;font-style:inherit}.swatch-img-text p{display:table-cell;vertical-align:middle;font-style:inherit;font-size:100%}.swatch-drop-down-wrapper{display:block}.swatch-drop-down-inner{position:relative;display:inline-block;max-width:100%}.swatch-drop-down{display:block;cursor:pointer;background-color:#FFFFFF;background-image:none;color:#C2C2C2;border:1px solid #42FF42;font-style:normal;font-weight:400;margin:10px 0px;padding:4px 16px 4px 4px;-moz-appearance:none;-webkit-appearance:none}@media only screen and (min-color-index: 0) and (-webkit-min-device-pixel-ratio: 0) and (max-width: 768px){select.swatch-drop-down,select.swatch-drop-down:focus{font-size:16px !important}.swatch-single.swatch-view-slide ul.swatch-view{overflow-x:auto !important}}.swatch-drop-down-svg{position:absolute;fill:#C2C2C2;pointer-events:none;top:0;bottom:0;right:6px;margin:auto;width:10px;stroke:currentColor;stroke-width:10}.swatch-drop-down-custom .swatch-drop-down-svg{transform:rotate(180deg);-webkit-transition:0.3s all ease-in-out !important;transition:0.3s all ease-in-out !important}.swatch-hide ~ .swatch-drop-down-svg{transform:rotate(0deg)}.swatch-drop-down-custom [type="select"]{position:relative}.swatch-drop-down-custom [type="select"] .swatch-unavailable{display:none}.swatch-drop-down-custom .swatch-drop-down-inner{margin:10px 0px;text-align:left}.swatch-drop-down-custom .swatch-drop-down{margin:0px}.swatch-drop-down-custom .swatch-drop-down span{margin-left:8px;color:inherit;font-style:inherit;font-weight:inherit;white-space:pre-wrap}.swatch-drop-down-custom .swatch-drop-down-list{position:absolute;cursor:pointer;background-image:none;box-shadow:0 3px 6px 0 rgba(0,0,0,0.15);font-style:normal;font-weight:400;margin:0px;padding:0px;top:100%;left:0;right:0;z-index:12}.swatch-drop-down-custom .swatch-drop-down-list .swatch-drop-down-list-item{position:relative;padding:4px 16px 4px 4px;background-color:#FFFFFF;color:#C2C2C2;border:1px solid #42FF42;border-top-width:0px;z-index:16;overflow:hidden;-webkit-transition:0.3s all linear !important;transition:0.3s all linear !important;list-style:none !important}.swatch-drop-down-custom .swatch-drop-down-list .swatch-drop-down-list-item span{margin-left:8px;color:inherit;font-style:inherit;font-weight:inherit;white-space:pre-wrap}.swatch-drop-down-custom .swatch-drop-down-list .swatch-drop-down-list-item:hover,.swatch-drop-down-custom .swatch-drop-down-list .swatch-drop-down-list-item:focus{background-color:#000000;color:#FFFFFF}.swatch-drop-down-custom .swatch-drop-down-list .swatch-drop-down-list-item.swatch-selected{background-color:#000000;color:#FFFFFF;border:1px solid #000000}.swatch-drop-down-custom .swatch-drop-down-list.swatch-hide{display:none}.swatch-drop-down-custom .swatch-drop-down-list-item.swatch-selected .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #FFFFFF 50%, #FFFFFF 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #FFFFFF 50%, #FFFFFF 52%, transparent 50%)}.swatch-drop-down-custom .swatch-drop-down-list-item .swatch-unavailable,.swatch-drop-down-custom [type="select"] .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #C2C2C2 50%, #C2C2C2 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #C2C2C2 50%, #C2C2C2 52%, transparent 50%)}div.swatches-type-collections{position:relative}div.swatches-type-collections div[option-target]{position:relative}div.swatches-type-collections .swatch-align-left{text-align:left}div.swatches-type-collections .swatch-align-center{text-align:center}div.swatches-type-collections .swatch-align-right{text-align:right}div.swatches-type-collections .star-btn-size-xs,div.swatches-type-collections .star-btn-size-sm,div.swatches-type-collections .star-btn-size-md,div.swatches-type-collections .star-btn-size-lg{padding:0px 6px;min-width:25px;font-size:13px;line-height:25px;height:25px}div.swatches-type-collections .swatch-drop-down{font-weight:100;padding:4px 16px 4px 4px}.swatches-type-products .swatch-view-slide .swatch-navigable{padding:0px 24px 0px 28px}.swatches-type-products .swatch-view-slide .swatch-navigable .swatch-navigation{width:24px;height:24px}.swatches-type-collections .swatch-view-slide .swatch-navigable{padding:0px 28px 0px 28px}.swatches-type-collections .swatch-view-slide .swatch-navigable .swatch-navigation{width:16px;height:16px}.swatches-type-collections .swatch-view-slide .swatch-navigable ul.swatch-view li{margin:0.25rem 0.5rem 0.25rem 0}.swatch-single.swatch-view-slide ul.swatch-view{overflow:hidden;white-space:nowrap;scroll-behavior:smooth}.swatch-single.swatch-view-slide .swatch-navigable{position:relative}.swatch-single.swatch-view-slide .swatch-navigable .swatch-navigation{position:absolute;display:inline-block;top:0;bottom:0;margin:auto;overflow:hidden;padding:2px;border-radius:50%;cursor:pointer}.swatch-single.swatch-view-slide .swatch-navigable .swatch-navigation svg{width:auto !important;height:auto !important;vertical-align:top}.swatch-single.swatch-view-slide .swatch-navigable .swatch-navigation:hover,.swatch-single.swatch-view-slide .swatch-navigable .swatch-navigation:focus{opacity:0.6}.swatch-single.swatch-view-slide .swatch-navigation[data-navigation="right"]{right:0px}.swatch-single.swatch-view-slide .swatch-navigation[data-navigation="left"]{left:0px}.swatch-single.swatch-view-slide .swatch-label-button ~ .swatch-navigation svg,.swatch-single.swatch-view-slide .swatch-label-drop-down ~ .swatch-navigation svg{fill:#000000}.swatch-single.swatch-view-slide .swatch-label-image ~ .swatch-navigation svg,.swatch-single.swatch-view-slide .swatch-label-custom-image ~ .swatch-navigation svg{fill:#FF6666}.swatch-minified-text{top:2px;vertical-align:middle;font-size:0.75rem;line-height:0.75rem;margin-bottom:0px !important}.star-hover-light-scale.star-set-image-scale-1,.star-hover-strong-scale.star-set-image-scale-1{background-size:100% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-shadow.star-set-image,li.swatch-view-item:focus .star-hover-shadow.star-set-image{box-shadow:0 10px 10px -10px #FF6666}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-shadow.star-set-btn,li.swatch-view-item:focus .star-hover-shadow.star-set-btn{box-shadow:0 10px 10px -10px #000000}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-glow-head.star-image-border-3-head,li.swatch-view-item:focus .star-hover-glow-head.star-image-border-3-head{box-shadow:0 0 10px 1px #FF6666}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-glow.star-set-image.star-image-border-1,.swatches.hover-enabled li.swatch-view-item:hover .star-hover-glow.star-set-image.star-image-border-2,.swatches.hover-enabled li.swatch-view-item:hover .star-hover-glow.star-set-image.star-image-border-3:before,li.swatch-view-item:focus .star-hover-glow.star-set-image.star-image-border-1,li.swatch-view-item:focus .star-hover-glow.star-set-image.star-image-border-2,li.swatch-view-item:focus .star-hover-glow.star-set-image.star-image-border-3:before{box-shadow:0 0 10px 1px #FF6666}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-glow.star-set-btn,li.swatch-view-item:focus .star-hover-glow.star-set-btn{box-shadow:0 0 10px 1px #000000}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-light-scale.star-set-image-scale-1,li.swatch-view-item:focus .star-hover-light-scale.star-set-image-scale-1{background-size:125% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-light-scale.star-set-image-scale-2,li.swatch-view-item:focus .star-hover-light-scale.star-set-image-scale-2{background-size:225% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-light-scale.star-set-image-scale-3,li.swatch-view-item:focus .star-hover-light-scale.star-set-image-scale-3{background-size:325% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-strong-scale.star-set-image-scale-1,li.swatch-view-item:focus .star-hover-strong-scale.star-set-image-scale-1{background-size:150% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-strong-scale.star-set-image-scale-2,li.swatch-view-item:focus .star-hover-strong-scale.star-set-image-scale-2{background-size:250% !important}.swatches.hover-enabled li.swatch-view-item:hover .star-hover-strong-scale.star-set-image-scale-3,li.swatch-view-item:focus .star-hover-strong-scale.star-set-image-scale-3{background-size:350% !important}.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-grow-light,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-grow-strong,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-shrink-light,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-shrink-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-grow-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-grow-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-shrink-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-shrink-strong{background-color:#fff}.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-btn-grow-light,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-grow-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-btn-grow-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-grow-light{z-index:12;transform:scale(1.2)}.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-btn-grow-strong,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-grow-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-btn-grow-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-grow-strong{z-index:12;transform:scale(1.25)}.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-btn-shrink-light,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-shrink-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-btn-shrink-light,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-shrink-light{z-index:12;transform:scale(0.8)}.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-btn-shrink-strong,.swatch-view-stack .swatches.hover-enabled li.swatch-view-item:hover .star-hover-img-shrink-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-btn-shrink-strong,.swatch-view-stack li.swatch-view-item:focus .star-hover-img-shrink-strong{z-index:12;transform:scale(0.75)}.swatches-type-products .star-option-value-adjacent ~ .swatch-img-text{position:relative !important;display:inline-block !important;z-index:inherit !important;width:auto !important;line-height:100%;vertical-align:middle;padding:2px}.swatches-type-products .star-option-value-adjacent ~ .swatch-img-text p{color:#DDDDDD}.swatches-type-products .star-option-value-adjacent-head.star-image-border-3-head.star-set-image-rad-50-head{border-radius:512px !important}.star-image-border-3-head.star-set-image-rad-50-head:not(.star-option-value-adjacent-head),.swatches-type-collections .star-image-border-3-head.star-set-image-rad-50-head{border-radius:50%}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-btn-border-1,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-btn-border-1,li.swatch-view-item:focus .swatch-selector .star-btn-border-1,li.swatch-view-item:focus .swatch-group-selector .star-btn-border-1,.swatch-selected .star-btn-border-1{border:0px solid #000000 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.star-btn-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.star-btn-border-3,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.star-btn-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.star-btn-border-3,li.swatch-view-item:focus .swatch-selector.star-btn-border-2,li.swatch-view-item:focus .swatch-selector.star-btn-border-3,li.swatch-view-item:focus .swatch-group-selector.star-btn-border-2,li.swatch-view-item:focus .swatch-group-selector.star-btn-border-3,.swatch-selected.star-btn-border-2,.swatch-selected.star-btn-border-3{border-color:#000000 !important;background-color:#000000 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-btn-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-btn-border-3,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-btn-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-btn-border-3,li.swatch-view-item:focus .swatch-selector .star-btn-border-2,li.swatch-view-item:focus .swatch-selector .star-btn-border-3,li.swatch-view-item:focus .swatch-group-selector .star-btn-border-2,li.swatch-view-item:focus .swatch-group-selector .star-btn-border-3,.swatch-selected .star-btn-border-2,.swatch-selected .star-btn-border-3{border-color:#000000 !important;background-color:#000000 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.star-set-btn,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.star-set-btn,li.swatch-view-item:focus .swatch-selector.star-set-btn,li.swatch-view-item:focus .swatch-group-selector.star-set-btn,.swatch-selected.star-set-btn{background-color:#000000 !important;color:#FFFFFF !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-set-btn,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-set-btn,li.swatch-view-item:focus .swatch-selector .star-set-btn,li.swatch-view-item:focus .swatch-group-selector .star-set-btn,.swatch-selected .star-set-btn{background-color:#000000 !important;color:#FFFFFF !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-image-border-1,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-image-border-1,li.swatch-view-item:focus .swatch-selector .star-image-border-1,li.swatch-view-item:focus .swatch-group-selector .star-image-border-1,.swatch-selected .star-image-border-1{border:0px solid #FF6666 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.star-image-border-3-head,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.star-image-border-3-head,li.swatch-view-item:focus .swatch-selector.star-image-border-3-head,li.swatch-view-item:focus .swatch-group-selector.star-image-border-3-head,.swatch-selected.star-image-border-3-head{border:1px solid #FF6666 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-image-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-image-border-3:before,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-image-border-2,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-image-border-3:before,li.swatch-view-item:focus .swatch-selector .star-image-border-2,li.swatch-view-item:focus .swatch-selector .star-image-border-3:before,li.swatch-view-item:focus .swatch-group-selector .star-image-border-2,li.swatch-view-item:focus .swatch-group-selector .star-image-border-3:before,.swatch-selected .star-image-border-2,.swatch-selected .star-image-border-3:before{border:1px solid #FF6666 !important}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.swatch-image .swatch-unavailable,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.swatch-image .swatch-unavailable,li.swatch-view-item:focus .swatch-selector.swatch-image .swatch-unavailable,li.swatch-view-item:focus .swatch-group-selector.swatch-image .swatch-unavailable,.swatch-selected.swatch-image .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #FF6666 50%, #FF6666 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #FF6666 50%, #FF6666 52%, transparent 50%)}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.swatch-custom-image .swatch-unavailable,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.swatch-custom-image .swatch-unavailable,li.swatch-view-item:focus .swatch-selector.swatch-custom-image .swatch-unavailable,li.swatch-view-item:focus .swatch-group-selector.swatch-custom-image .swatch-unavailable,.swatch-selected.swatch-custom-image .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #FF6666 50%, #FF6666 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #FF6666 50%, #FF6666 52%, transparent 50%)}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector.swatch-button .swatch-unavailable,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector.swatch-button .swatch-unavailable,li.swatch-view-item:focus .swatch-selector.swatch-button .swatch-unavailable,li.swatch-view-item:focus .swatch-group-selector.swatch-button .swatch-unavailable,.swatch-selected.swatch-button .swatch-unavailable{background-image:linear-gradient(to bottom left, transparent 50%, #FFFFFF 50%, #FFFFFF 52%, transparent 50%),linear-gradient(to bottom right, transparent 50%, #FFFFFF 50%, #FFFFFF 52%, transparent 50%)}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .swatch-tool-tip,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .swatch-tool-tip,li.swatch-view-item:focus .swatch-selector .swatch-tool-tip,li.swatch-view-item:focus .swatch-group-selector .swatch-tool-tip,.swatch-selected .swatch-tool-tip{color:#FF6666;border:1px solid #FF6666}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .swatch-tool-tip:after,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .swatch-tool-tip:after,li.swatch-view-item:focus .swatch-selector .swatch-tool-tip:after,li.swatch-view-item:focus .swatch-group-selector .swatch-tool-tip:after,.swatch-selected .swatch-tool-tip:after{border-color:transparent transparent #FF6666 transparent}.swatches.hover-enabled li.swatch-view-item:hover .swatch-selector .star-option-value-adjacent ~ .swatch-img-text p,.swatches.hover-enabled li.swatch-view-item:hover .swatch-group-selector .star-option-value-adjacent ~ .swatch-img-text p,li.swatch-view-item:focus .swatch-selector .star-option-value-adjacent ~ .swatch-img-text p,li.swatch-view-item:focus .swatch-group-selector .star-option-value-adjacent ~ .swatch-img-text p,.swatch-selected .star-option-value-adjacent ~ .swatch-img-text p{color:#FF6666}div.option-single-value[option-target]{display:none}\n</style>',
								e = this.clientSpecs.getCustomStyle(),
								i = document.querySelector("head");
							e && i.appendChild(this.parseHTML(e)[0]), i.appendChild(this.parseHTML(t)[0])
						}
					}
				}, {
					key: "getLayerIndex",
					value: function () {
						return this.isInstanceTypeCollection() ? ' style="z-index:' + this.clientSpecs.getCollectionConfig().layer_index + ';"' : ""
					}
				}, {
					key: "getSwatchRoot",
					value: function (t) {
						for (var e = "undefined" == typeof window.matchMedia || window.matchMedia("(hover: hover)").matches, i = '<div class="swatches swatches-type-' + this.instanceType + " " + (e ? "hover-enabled" : "hover-disabled") + '"' + this.getLayerIndex() + ">", a = 0; a < t.length; a++) {
							var s = this.isInstanceTypeProduct() ? 'id="swatch-option' + (a + 1) + '"' : "",
								n = t[a].untranslated_name ? t[a].untranslated_name : t[a].name;
							i += "<div " + s + ' option-name="' + (n = this.cvt2HTMLEntities(n.trim())) + '" option-target="option' + (a + 1) + '"' + (this.getSwatchPresentation().hide_single_value_option && t[a].values.length <= 1 ? ' class="option-single-value"' : "") + "></div>"
						}
						return i
					}
				}, {
					key: "renderSwatchRoot",
					value: function (t, e, i) {
						if (!this.isSwatchRootDisplayed) {
							var a = e.querySelector(".swatches.swatches-type-" + this.instanceType);
							a && a.querySelector("[option-target]") && a.parentNode.removeChild(a);
							var s = e;
							this.setStyles(), i ? s.insertBefore(this.parseHTML(t)[0], s.firstChild) : s.appendChild(this.parseHTML(t)[0]), this.isSwatchRootDisplayed = !0
						}
					}
				}, {
					key: "getStyleClasses",
					value: function (t) {
						var e = this.styleClasses[t],
							i = Object.keys(e),
							a = this.clientSpecs.getStyles()[t],
							s = "",
							n = "";
						if ("drop_down" == t) {
							a = this.clientSpecs.getStyles().button;
							var r = Object.assign({}, a);
							r != a && (r.size = "null", a = r)
						}
						a.dimension && (n += "width:" + a.dimension.width + ";height: " + a.dimension.height + ";");
						for (var o = 0; o < i.length; o++) {
							var l = i[o],
								c = a[l],
								h = e[l][c];
							void 0 !== h && ("object" == typeof h ? (s += " " + h[0], n += h[1]) : s += " " + h)
						}
						return {
							classes: s,
							styleAttributes: n
						}
					}
				}, {
					key: "renderNormal",
					value: function (t, e, i) {
						var a = i.querySelector('[option-target="' + t + '"]');
						return a.innerHTML = e, a.querySelectorAll(".swatch-selector")
					}
				}, {
					key: "getFlexibleSize",
					value: function (t) {
						t = parseInt(t.replace("px", ""));
						var e = window.innerWidth,
							i = e / 500;
						return e >= 992 && (i = .4 * e / 500), i = Math.max(i, .75), t * (i = Math.min(i, 1.25)) + "px"
					}
				}, {
					key: "getLazyResolution",
					value: function (t, e, i) {
						"cover" != i && "contain" != i || (i = "100%"), i = parseInt(i.replace("%", "")), i *= 2;
						var a = parseInt(e[0].replace("px", "")),
							s = parseInt(e[1].replace("px", "")),
							n = "center";
						this.clientSpecs.getStyles().variant_image.position && (n = this.clientSpecs.getStyles().variant_image.position);
						var r = "&format=pjpg",
							o = "width=" + a * (i / 100) + "&height=" + s * (i / 100) + "&crop=" + n;
						return o = t.includes("?") ? "&" + o : "?" + o, t.match(/(\.jpg)(?=$|\?)/gm) && (o += r), t + o
					}
				}, {
					key: "getViewByType",
					value: function (t) {
						switch (t) {
							case "variant_image":
								return {
									getView: this.getVariantImageView.bind(this)
								};
							case "drop_down":
								return {
									getView: this.getDropDownViewSwitch.bind(this)
								};
							case "button":
								return {
									getView: this.getButtonView.bind(this)
								};
							case "custom_image":
								return {
									getView: this.getCustomImageView.bind(this)
								};
							case "hidden":
								return {
									getView: this.getHiddenView.bind(this)
								}
						}
					}
				}, {
					key: "cvt2HTMLEntities",
					value: function (t) {
						return t.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;")
					}
				}, {
					key: "displayLabel",
					value: function () {
						return !this.isInstanceTypeCollection() || this.clientSpecs.getCollectionConfig().display_label
					}
				}, {
					key: "isValueMorphed",
					value: function () {
						return !!this.clientSpecs.getHandleize()
					}
				}, {
					key: "displayAlignment",
					value: function () {
						return this.isInstanceTypeCollection() ? " swatch-align-" + this.clientSpecs.getCollectionConfig().alignment : ""
					}
				}, {
					key: "getVariantImageView",
					value: function (t, e) {
						var i = "undefined" != typeof e.is_product_group,
							a = '<div class="swatch-single ' + this.getSwatchPresentationClass() + '">';
						this.displayLabel() && (a += '<label class="swatch-label swatch-label-image"><span class="swatch-option-name">' + e.name + '</span><span class="swatch-variant-name"></span></label>'), this.isSwatchPresentationStyle("slide") && (a += '<div class="swatch-navigable">', a += this.getSwatchSlideStyleHTML("left")), a += '<ul class="swatch-view swatch-view-image' + this.displayAlignment() + '">';
						var s = "variant_image",
							n = this.getStyleClasses(s),
							r = this.parseStyleString(n.styleAttributes);
						r.actual_width = r.width, r.actual_height = r.height, this.isInstanceTypeCollection() ? (r.width = "32px", r.height = "32px") : this.clientSpecs.getFlexibleSwatch() && (r.width = this.getFlexibleSize(r.width), r.height = this.getFlexibleSize(r.height)), n.styleAttributes = "width:" + r.width + ";height: " + r.height + ";background-size: " + r.background_size + ";";
						for (var o = this.getScaleOnHoverClass(s), l = this.getHeadClasses(s), c = this.displayTooltip(s), h = this.getStyleClasses("drop_down").classes, u = 0; u < e.data.length; u++) {
							var d = this.cvt2HTMLEntities(e.data[u].value),
								p = d;
							this.isValueMorphed() && (p = this.cvt2HTMLEntities(e.data[u].original_value));
							var g = this.getAvailabilityInfo(e.data[u].available);
							if (!g.skip || 0 == e.available_count) {
								a += '<li class="swatch-view-item' + (g.status ? "" : " swatch-item-unavailable") + '" orig-value="' + d + '" tabindex="0">', a += '<div class="swatch-image ' + (i ? "swatch-group-selector" : "swatch-selector") + (c ? " swatch-tool-tip-wrapper" : "") + o + l + '" type="image" data-value="' + p + '" orig-value="' + d + '" ' + (i ? 'swatch-url="' + e.data[u].url + '" ' : "") + 'swatch-option="' + t + '"' + (i && e.data[u].selected ? ' current-product="true"' : "") + ">";
								var w = e.data[u].featured_image == undefined || e.data[u].featured_image.src == undefined ? this.defaultFeaturedImage : e.data[u].featured_image.src;
								"secondary_image" == e.variant_image_type && e.data[u].featured_image != undefined && e.data[u].featured_image.secondary_src != undefined ? w = e.data[u].featured_image.secondary_src : "last_image" == e.variant_image_type && e.data[u].featured_image != undefined && e.data[u].featured_image.last_src != undefined && (w = e.data[u].featured_image.last_src);
								var v = w && "none" != w;
								v && (m("Requested background image with URL(" + w + ")"), w = this.getLazyResolution(w, [r.actual_width, r.actual_height], r.background_size)), a += '<div style="' + n.styleAttributes + "background-image:url(" + w + ');" class="star-set-image' + n.classes + '" swatch-inside="true">', g.status || (a += '<div class="' + g["class"] + '" swatch-inside="true"></div>'), a += "</div>", a += '<div class="swatch-img-text' + h + '"' + (v ? ' style="z-index:-1;display:none;"' : "") + ' swatch-inside="true"><p swatch-inside="true">' + p + "</p></div>", c && (a += '<div class="swatch-tool-tip" swatch-inside="true"><span class="swatch-tool-tip-text' + h + '" swatch-inside="true">' + p + "</span></div>"), a += "</div></li>"
							}
						}
						return a += "</ul>", this.isSwatchPresentationStyle("slide") && (a += this.getSwatchSlideStyleHTML("right"), a += "</div>"), a += "</div>"
					}
				}, {
					key: "generateChecksum",
					value: function (t) {
						var e = t.length,
							i = undefined,
							a = "";
						if (0 === e) return 0;
						for (t = t.replace(new RegExp("\n\ts"), ""), i = 0; i < e; i++) a += t.charCodeAt(i) + "";
						return a
					}
				}, {
					key: "getSwatchImageURL",
					value: function (t, e) {
						return "https://starappsstudio.s3.amazonaws.com/cdn/apps/vsk" + "/s" + this.storeID + "/swatch_images/n" + this.generateChecksum(t) + "/v" + this.generateChecksum(e)
					}
				}, {
					key: "getCustomImageView",
					value: function (t, e) {
						var i = "undefined" != typeof e.is_product_group,
							a = '<div class="swatch-single ' + this.getSwatchPresentationClass() + '">';
						this.displayLabel() && (a += '<label class="swatch-label swatch-label-custom-image"><span class="swatch-option-name">' + e.name + '</span><span class="swatch-variant-name"></span></label>'), this.isSwatchPresentationStyle("slide") && (a += '<div class="swatch-navigable">', a += this.getSwatchSlideStyleHTML("left")),
							a += '<ul class="swatch-view swatch-view-custom-image' + this.displayAlignment() + '">';
						var s = "custom_image",
							n = this.getStyleClasses(s),
							r = this.parseStyleString(n.styleAttributes);
						r.actual_width = r.width, r.actual_height = r.height, this.isInstanceTypeCollection() ? (r.width = "32px", r.height = "32px") : this.clientSpecs.getFlexibleSwatch() && (r.width = this.getFlexibleSize(r.width), r.height = this.getFlexibleSize(r.height)), n.styleAttributes = "width:" + r.width + ";height: " + r.height + ";background-size: " + r.background_size + ";";
						for (var o = this.getScaleOnHoverClass(s), l = this.getHeadClasses(s), c = this.displayTooltip(s), h = this.getStyleClasses("drop_down").classes, u = 0; u < e.data.length; u++) {
							var d = e.data[u].value,
								p = this.cvt2HTMLEntities(d),
								g = p;
							this.isValueMorphed() && (d = e.data[u].original_value, g = this.cvt2HTMLEntities(d));
							var w = this.getAvailabilityInfo(e.data[u].available);
							if (!w.skip || 0 == e.available_count) {
								a += '<li class="swatch-view-item' + (w.status ? "" : " swatch-item-unavailable") + '" orig-value="' + p + '" tabindex="0">', a += '<div class="swatch-custom-image ' + (i ? "swatch-group-selector" : "swatch-selector") + (c ? " swatch-tool-tip-wrapper" : "") + o + l + '" type="image" data-value="' + g + '" orig-value="' + p + '" ' + (i ? 'swatch-url="' + e.data[u].url + '" ' : "") + 'swatch-option="' + t + '"' + (i && e.data[u].selected ? ' current-product="true"' : "") + ">";
								var v = null;
								if (i) i && (v = e.data[u].featured_image.src);
								else {
									var m = e.untranslated_name ? e.untranslated_name : e.name,
										f = e.data[u].untranslated_value ? e.data[u].untranslated_value : d;
									v = this.getSwatchImageURL(m, f)
								}
								a += '<div style="background-image: url(' + v + ");" + n.styleAttributes + '" class="star-set-image' + n.classes + '" swatch-inside="true">', w.status || (a += '<div class="' + w["class"] + '" swatch-inside="true"></div>'), a += "</div>", a += '<div style="display: none;" class="swatch-img-text' + h + '" swatch-inside="true"><p swatch-inside="true">' + g + "</p></div>", c && (a += '<div class="swatch-tool-tip" swatch-inside="true"><span class="swatch-tool-tip-text' + h + '" swatch-inside="true">' + g + "</span></div>"), a += "</div></li>"
							}
						}
						return a += "</ul>", this.isSwatchPresentationStyle("slide") && (a += this.getSwatchSlideStyleHTML("right"), a += "</div>"), a += "</div>"
					}
				}, {
					key: "getButtonView",
					value: function (t, e) {
						var i = "undefined" != typeof e.is_product_group,
							a = this.isSwatchPresentationStyle("slide") && this.getSwatchPresentation().allow_slide_for_button,
							s = '<div class="swatch-single ' + (a ? "swatch-view-slide" : "swatch-view-stack") + '">';
						this.displayLabel() && (s += '<label class="swatch-label swatch-label-button">' + e.name + "</label>"), a && (s += '<div class="swatch-navigable">', s += this.getSwatchSlideStyleHTML("left")), s += '<ul class="swatch-view swatch-view-button' + this.displayAlignment() + '">';
						for (var n = this.getStyleClasses("button"), r = 0; r < e.data.length; r++) {
							var o = this.cvt2HTMLEntities(e.data[r].value),
								l = o;
							this.isValueMorphed() && (l = this.cvt2HTMLEntities(e.data[r].original_value));
							var c = this.getAvailabilityInfo(e.data[r].available);
							c.skip && 0 != e.available_count || (s += '<li class="swatch-view-item' + (c.status ? "" : " swatch-item-unavailable") + '" orig-value="' + o + '" tabindex="0">', s += '<div class="swatch-button ' + (i ? "swatch-group-selector" : "swatch-selector") + " star-set-btn " + n.classes + '" style="' + n.styleAttributes + '" swatch-option="' + t + '" type="swatch-button" ' + (i ? 'swatch-url="' + e.data[r].url + '" ' : "") + 'orig-value="' + o + '"' + (i && e.data[r].selected ? ' current-product="true"' : "") + '><span swatch-inside="true">' + l + "</span>", c.status || (s += '<div class="' + c["class"] + '" swatch-inside="true"></div>'), s += "</div>", s += "</li>")
						}
						return s += "</ul>", a && (s += this.getSwatchSlideStyleHTML("right"), s += "</div>"), s += "</div>"
					}
				}, {
					key: "getDropDownViewSwitch",
					value: function (t, e) {
						if (this.isInstanceTypeCollection()) return this.getDropDownView(t, e);
						switch (e.drop_down_type) {
							case "with_variant_image":
								return this.getDropDownViewCustom(t, e, "variant_image");
							case "with_custom_image":
								return this.getDropDownViewCustom(t, e, "custom_image");
							default:
								return this.getDropDownView(t, e)
						}
					}
				}, {
					key: "getDropDownView",
					value: function (t, e) {
						var i = "undefined" != typeof e.is_product_group,
							a = this.getStyleClasses("drop_down"),
							s = '<div class="swatch-single swatch-view-stack">';
						this.displayLabel() && (s += '<label class="swatch-label swatch-label-drop-down">' + e.name + "</label>"), s += '<div class="swatch-drop-down-wrapper' + this.displayAlignment() + '">', s += '<div class="swatch-drop-down-inner">', s += '<select class="swatch-view ' + (i ? "swatch-group-selector" : "swatch-selector") + " swatch-drop-down " + a.classes + '" ' + (i ? 'swatch-url="true" ' : "") + 'swatch-option="' + t + '" tabindex="0">';
						for (var n = 0; n < e.data.length; n++) {
							var r = this.cvt2HTMLEntities(e.data[n].value),
								o = r;
							this.isValueMorphed() && (o = this.cvt2HTMLEntities(e.data[n].original_value)), (this.getAvailabilityInfo(e.data[n].available).status || 0 == e.available_count) && (s += '<option value="' + (i ? e.data[n].url : r) + '"' + (i && e.data[n].selected ? ' selected="selected"' : "") + ">", s += o, s += "</option>")
						}
						return s += "</select>", s += '<svg class="swatch-drop-down-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>', s += "</div>", s += "</div>", s += "</div>"
					}
				}, {
					key: "getDropDownViewCustom",
					value: function (t, e, i) {
						var a = "undefined" != typeof e.is_product_group,
							s = this.getStyleClasses("drop_down"),
							n = null,
							r = null,
							o = '<div class="swatch-single swatch-view-stack">',
							l = "",
							c = "";
						this.displayLabel() && (o += '<label class="swatch-label swatch-label-drop-down">' + e.name + "</label>"), n = this.getStyleClasses(i), (r = this.parseStyleString(n.styleAttributes)).width = "48px", r.height = "48px", n.styleAttributes = "width:" + r.width + ";height: " + r.height + ";background-size: " + r.background_size + ";", o += '<div class="swatch-drop-down-wrapper' + this.displayAlignment() + ' swatch-drop-down-custom">', o += '<div class="swatch-drop-down-inner">', o += '<div type="select" class="swatch-view swatch-drop-down ' + s.classes + '" swatch-option="' + t + '" tabindex="0">{option_value}</div>', o += '<ul class="swatch-drop-down-list">';
						for (var h = 0; h < e.data.length; h++) {
							var u = e.data[h].value,
								d = this.cvt2HTMLEntities(u),
								p = d;
							this.isValueMorphed() && (u = e.data[h].original_value, p = this.cvt2HTMLEntities(u));
							var g = this.getAvailabilityInfo(e.data[h].available),
								w = null;
							if ("custom_image" != i || a) "custom_image" == i && a ? w = e.data[h].featured_image.src : "variant_image" == i && "" != (w = e.data[h].featured_image == undefined || e.data[h].featured_image.src == undefined ? this.defaultFeaturedImage : e.data[h].featured_image.src) && "none" != w && "null" != w && "undefined" != w && (w = this.getLazyResolution(w, [r.width, r.height], r.background_size));
							else {
								var v = e.untranslated_name ? e.untranslated_name : e.name,
									m = e.data[h].untranslated_value ? e.data[h].untranslated_value : u;
								w = this.getSwatchImageURL(v, m)
							}
							var f = '<div style="' + n.styleAttributes + "background-image:url(" + w + ');" class="star-set-image' + n.classes + '" swatch-inside="true"></div>';
							p.length > l.length && (c = f + '<span swatch-inside="true">' + (l = p) + "</span>"), g.skip && 0 != e.available_count || (o += '<li type="select_value" class="' + (a ? "swatch-group-selector" : "swatch-selector") + " swatch-drop-down-list-item" + (g.status ? "" : " swatch-item-unavailable") + " " + s.classes + '" orig-value="' + d + '" ' + (a ? 'swatch-url="' + e.data[h].url + '" ' : "") + 'swatch-option="' + t + '"' + (a && e.data[h].selected ? ' current-product="true"' : "") + ' tabindex="0">', o += f, o += '<span swatch-inside="true">' + p + "</span>", o += "</li>")
						}
						return o += "</ul>", o += '<svg class="swatch-drop-down-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129"><g><path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z"/></g></svg>', o += "</div>", o += "</div>", o = (o += "</div>").replace("{option_value}", c)
					}
				}, {
					key: "getHiddenView",
					value: function (t, e) {
						var i = e.data[0].value,
							a = this.cvt2HTMLEntities(i);
						return '<div class="swatch-single swatch-view-stack">\n            <input type="hidden" class="swatch-selector" value="' + a + '" swatch-option="' + t + '" orig-value="' + a + '" />\n        </div>'
					}
				}, {
					key: "getAvailabilityInfo",
					value: function (t) {
						var e = "none";
						return this.clientSpecs.getStockOut() && this.clientSpecs.getStockOut().display && (e = this.clientSpecs.getStockOut().display), t == undefined || t || "cross-out" != e ? t == undefined || t || "grey-out" != e ? t == undefined || t || "invisible" != e ? {
							"class": "swatch-available",
							status: !0,
							skip: !1
						} : {
							"class": "swatch-unavailable",
							status: !1,
							skip: !0
						} : {
							"class": "swatch-unavailable-go",
							status: !1,
							skip: !1
						} : {
							"class": "swatch-unavailable",
							status: !1,
							skip: !1
						}
					}
				}, {
					key: "selectSwatch",
					value: function (t, e, i) {
						var a = "swatch-selected";
						if ("undefined" != typeof this.selectedSwatches[t]) {
							var s = this.selectedSwatches[t];
							s.classList.remove(a), s.removeAttribute("current-product")
						}
						this.isDropDown(e.tagName) && (e.value = i), e.classList.add(a), this.selectedSwatches[t] = e
					}
				}, {
					key: "isDropDown",
					value: function (t) {
						return "SELECT" == t
					}
				}, {
					key: "getIsSwatchRootDisplayed",
					value: function () {
						return this.isSwatchRootDisplayed
					}
				}, {
					key: "setIsSwatchRootDisplayed",
					value: function (t) {
						this.isSwatchRootDisplayed = t
					}
				}]), t
			}(),
			m = function (t) {
				if (l && l.getDisplayLogs()) {
					var e = Date(Date.now());
					console.log("<-------------- START ---------------->"), console.log("Variant Swatch King:", t), console.log("Variant Swatch King:", "Timestamp", e.toString()), console.log("<--------------- END ----------------->")
				}
			},
			f = function () {
				var t = null,
					e = {};
				if (document.location.search.substr(1).split("&").forEach(function (t) {
						var i = t.split("=");
						try {
							e[i[0].toString()] = i[1].toString()
						} catch (a) {}
					}), isNaN(e.variant)) {
					var i = undefined;
					(i = document.querySelector('[name="id"]')) && (t = i.value)
				} else if (e.variant) t = e.variant;
				else {
					var a = undefined;
					(a = document.querySelector("select option[value='" + default_variant + "']")) && (t = a.parentNode.value)
				}
				return t || r
			},
			y = function (t) {
				clearInterval(parseInt(t)), m(["Interval Removed...", t])
			},
			b = function () {
				return "complete" === document.readyState || "loaded" === document.readyState
			},
			_ = function () {
				if (1e3 == (i += 1) && (i = a + 1), "undefined" != typeof window.Shopify && 0 == c) {
					for (var r = "1161041014950107105110103461091211151041111121051021214699111109", l = "", h = window.Shopify["chor".replace("c", "s").replace("r", "p")], u = 0; u < h.length; u++) l += h.charCodeAt(u) + "";
					c = l != r ? 2 : 1
				}
				if (e("VariantSwatchKing") && (t(), S(), document.addEventListener("vsk:product:refresh", function () {
						setTimeout(function () {
							if (!document.querySelector("div.swatches.swatches-type-products")) {
								var e = n;
								o = null, t(), i = a - 1, n = e, m("Refreshing product swatch lookup complete.")
							}
						}, 0)
					})), o)
					if (o.readyToInit()) {
						if (i <= a) try {
							m("Starting operations..."), o.detectAndInitialize(), i = a + 1
						} catch (d) {
							i = a - 1, m(["Loading Failed... Retrying.", d]), b() && s ? i = a + 1 : b() && "SelectorNotFoundException" == d && (s = !0)
						}
					} else i -= 1
			};
		n = setInterval(function () {
			_(n)
		}, 200);
		var S = function () {
				l || (l = new w);
				var t = l.getCollectionConfig();
				t.enable && k(t, !0), document.addEventListener("vsk:render:swatches", function () {
					setTimeout(function () {
						k(t, !1)
					}, 0)
				})
			},
			k = function x(t, e) {
				var i = document.querySelectorAll(t.swatch_root_selector);
				Object.entries(i).forEach(function (t) {
					var e = _slicedToArray(t, 2),
						i = e[0],
						a = e[1];
					"length" != i && (a.hasAttribute("swatch-generated") || (a.setAttribute("swatch-generated", "none"), new p("collections", a, null).initialize()))
				}), e && t.continuous_lookup > 0 && setTimeout(function () {
					x(t, !0)
				}, t.continuous_lookup)
			}
	}();
