/*--------------------- Copyright (c) 2024 -----------------------
[Master Javascript]
Project: Medical Equipment
-------------------------------------------------------------------*/
(function ($) {
	"use strict";
	var eLearning = {
		initialised: false,
		version: 1.0,
		mobile: false,
		init: function () {
			if (!this.initialised) {
				this.initialised = true;
			}
			else {
				return;
			}
			/*-------------- eLearning Functions Calling ---------------------------------------------------
			------------------------------------------------------------------------------------------------*/

			this.wowtopbox();
			this.ToggleMenu();
			this.Select2();
			this.BottomTop();
			this.CategoriesSlider();
			this.TeamSlider();
			this.DatePicker();
			this.Section11Product();
			this.ProductSlider();			
			this.TestimonialsSlider();
			this.BlogSlider();
			this.CountdownTimer();
			this.product_gallary();			
			this.quantity();			
		},
		/*------------------------------------------------------
	/  WoW Js
	/------------------------------------------------------*/

		wowtopbox: function () {
			var wow = new WOW({
				boxClass: "wow", // default
				animateClass: "animated", // default
				offset: 100, // default
				mobile: true, // default
				live: true, // default
			});
			wow.init();

		},

		/*-------------- eLearning Functions Calling ---------------------------------------------------
		--------------------------------------------------------------------------------------------------*/


		// Toggle Menu
		ToggleMenu: function () {
			$(".el_toggle_btn").on("click", function (e) {
				e.stopPropagation();
				$(".met-header-right").toggleClass("el_menu_open");
			});

			$(".met-header-right").click(function (e) {
				e.stopPropagation();
			});

			$("body,html").click(function (e) {
				$(".met-header-right").removeClass("el_menu_open");
			});
		},
		// Toggle Menu

		// Select 2
		Select2: function () {
			$('.mySelect').select2({
				placeholder: 'Select an option',
				width: '100%',
				dropdownAutoWidth: true,
				minimumResultsForSearch: Infinity
			});
		},
		// Select 2

		// Bottom To Top
		BottomTop: function () {
			if ($('#button').length > 0) {
				var btn = $('#button');
				$(window).scroll(function () {
					if ($(window).scrollTop() > 300) {
						btn.addClass('show');
					} else {
						btn.removeClass('show');
					}
				});
				btn.on('click', function (e) {
					e.preventDefault();
					$('html, body').animate({ scrollTop: 0 }, '300');
				});
			}
		},
		// Bottom To Top	



		// categories Slider			
		CategoriesSlider: function () {
			var swiper = new Swiper(".met-categories-slider-parent", {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				navigation: {
					nextEl: ".categories-next",
					prevEl: ".categories-prev",
				},
				breakpoints: {
					1199: {
						slidesPerView: 6,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
			;
		},
		// Ccategories Slider

		// Team Slider			
		TeamSlider: function () {
			var swiper = new Swiper(".met-team-parent", {
				slidesPerView: 4,
				spaceBetween: 30,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				navigation: {
					nextEl: ".team-next",
					prevEl: ".team-prev",
				},
				breakpoints: {
					1199: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					576: {
						slidesPerView: 2,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
			;
		},
		// Team Slider

		// Date Picker
		DatePicker: function () {
			flatpickr("#datepicker", {
				dateFormat: "Y-m-d",
				minDate: "today",
				maxDate: new Date().fp_incr(60)
			});
		},
		// Date Picker

		// section11 slider			
		Section11Product: function () {
			var swiper = new Swiper(".section11-product", {
				slidesPerView: 2,
				spaceBetween: 30,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				slidesPerColumnFill: 'column',
				navigation: {
					nextEl: ".section11-next",
					prevEl: ".section11-prev",
				},
				breakpoints: {
					1199: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
			;
		},
		// section11 slider

		// product slider			
		ProductSlider: function () {
			var swiper = new Swiper(".section11-product-slider", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				slidesPerColumnFill: 'column',
				navigation: {
					nextEl: ".product-next",
					prevEl: ".product-prev",
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
			;
		},
		// section11 slider



		// Ccategories Slider			
		TestimonialsSlider: function () {
			var swiper = new Swiper(".met-testimonials-slider-parent", {
				slidesPerView: 3,
				spaceBetween: 30,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				navigation: {
					nextEl: ".testimonials-next",
					prevEl: ".testimonials-prev",
				},
				breakpoints: {
					1199: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					992: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					575: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					320: {
						slidesPerView: 1,
						spaceBetween: 15,
					},
					0: {
						slidesPerView: 1,
						spaceBetween: 15,
					}
				}
			});
			;
		},
		// Ccategories Slider

		// Blog Slider			
		BlogSlider: function () {
			var swiper = new Swiper(".met-blog-slider-parent", {
				direction: 'vertical',
				slidesPerView: 4,
				spaceBetween: 10,
				loop: false,
				autoplay: false,
				speed: 1000,
				effect: 'slide',
				navigation: {
					nextEl: ".blog-next",
					prevEl: ".blog-prev",
				},
			});
			;
		},
		// Blog Slider

		// CountdownTimer
		CountdownTimer: function () {

			if ($(".countdown-clock").length) {
				var Countdown = function (options) {
					this.options = {
						$elem: options.$elem || undefined,
						elemSelector: options.elemSelector || 'data-countdown',
						startDate: options.startDate || new Date(),
						endDate: options.endDate || new Date(new Date().getTime() + 60000),
						leadingZero: options.leadingZero !== undefined ? options.leadingZero : true,
						setCssProperties: options.setCssProperties !== undefined ? options.setCssProperties : true,
						separateDigits: options.separateDigits !== undefined ? options.separateDigits : true,
						nextDigits: options.nextDigits !== undefined ? options.nextDigits : true,
						labels: options.labels || {
							days: "Days",
							hours: "Hours",
							minutes: "Minutes",
							seconds: "Seconds",
						},
						ariaLabels: options.ariaLabels || {
							time: "%days, %hours, %minutes, and %seconds remaining",
							days: {
								zero: "%d days",
								single: "%d day",
								plural: "%d days",
							},
							hours: {
								zero: "%d hours",
								single: "%d hour",
								plural: "%d hours"
							},
							minutes: {
								zero: "%d minutes",
								single: "%d minute",
								plural: "%d minutes",
							},
							seconds: {
								zero: "%d seconds",
								single: "%d second",
								plural: "%d seconds",
							},
						}
					};

					// Initialise
					this.$elem = this.options.$elem || document.querySelector(options.elemSelector);
					this.startDate = new Date(this.options.startDate);
					this.endDate = new Date(this.options.endDate);
					this.ticker = 0;
					this.$elem.querySelector('.days .label').innerText = this.options.labels.days;
					this.$elem.querySelector('.hours .label').innerText = this.options.labels.hours;
					this.$elem.querySelector('.minutes .label').innerText = this.options.labels.minutes;
					this.$elem.querySelector('.seconds .label').innerText = this.options.labels.seconds;

					// Start ticker
					this.update();
					this.run();
				}

				Countdown.prototype.getLabel = function (labelSet, labelName, value) {
					if (["labels", "ariaLabels"].indexOf(labelSet) === -1) {
						throw new Error("Invalid labelSet given: must be labels or ariaLabels");
					}
					if (["days", "hours", "minutes", "seconds"].indexOf(labelName) === -1) {
						throw new Error("Invalid labelName given: must be days, hours, minutes or seconds");
					}
					var valueQuant = value === 0 ? "zero" : value === 1 ? "single" : "plural";
					return this.options[labelSet][labelName][valueQuant].replace("%d", value);
				}

				Countdown.prototype.leadingZero = function (value, length) {
					if (this.options.leadingZero && String(value).length < length) {
						var padLength = length - String(value).length;
						var output = String(value);
						for (var i = 0; i < padLength; i++) {
							output = '0' + output;
						}
						return output;
					}
					return value;
				}

				Countdown.prototype.separateDigits = function (value) {
					if (this.options.separateDigits && String(value).length) {
						var _value = String(value).split("");
						var output = '';
						for (var i = (_value.length - 1); i >= 0; i--) {
							var digit = parseInt(_value[i], 10);
							output = '<span class="digit digit-' + Math.pow(10, _value.length - 1 - i) + '"' +
								(this.options.nextDigits ?
									' data-countdown-next-digit="' + ((digit + 1) % 10) + '"' :
									'') +
								'>' + digit + '</span>' + output;
						}
						return output;
					} else {
						return value;
					}
				}

				Countdown.prototype.update = function () {
					var now = new Date();

					var diffSeconds = Math.floor((this.endDate.getTime() - now.getTime()) / 1000);
					var diffMinutes = Math.floor(diffSeconds / 60);
					var diffHours = Math.floor(diffSeconds / 3600);
					var diffDays = Math.floor(diffSeconds / 86400);

					var days = 0;
					var hours = 0;
					var minutes = 0;
					var seconds = 0;

					if (this.startDate <= now && this.endDate > now) {
						seconds = diffSeconds % 60;
						minutes = diffMinutes % 60;
						hours = diffHours % 24;
						days = diffDays;
					}

					// Update title/aria label
					var ariaLabel = this.options.ariaLabels.time
						.replace("%days", this.getLabel("ariaLabels", "days", days))
						.replace("%hours", this.getLabel("ariaLabels", "hours", hours))
						.replace("%minutes", this.getLabel("ariaLabels", "minutes", minutes))
						.replace("%seconds", this.getLabel("ariaLabels", "seconds", seconds));
					this.$elem.setAttribute("title", ariaLabel);
					this.$elem.setAttribute("aria-label", ariaLabel);

					// Update visible amounts
					this.$elem.querySelector('.seconds .amount').innerHTML = this.separateDigits(this.leadingZero(seconds, 2));
					this.$elem.querySelector('.minutes .amount').innerHTML = this.separateDigits(this.leadingZero(minutes, 2));
					this.$elem.querySelector('.hours .amount').innerHTML = this.separateDigits(this.leadingZero(hours, 2));
					this.$elem.querySelector('.days .amount').innerHTML = this.separateDigits(this.leadingZero(days, 2));

					// Next digits
					if (this.options.nextDigits) {
						this.$elem.querySelector('.seconds .amount')
							.setAttribute('data-countdown-next-digits', (seconds + 1) % 60);
						this.$elem.querySelector('.minutes .amount')
							.setAttribute('data-countdown-next-digits', (minutes + 1) % 60);
						this.$elem.querySelector('.hours .amount')
							.setAttribute('data-countdown-next-digits', (hours + 1) % 24);
						this.$elem.querySelector('.days .amount')
							.setAttribute('data-countdown-next-digits', days + 1);
					}

					// Update CSS properties
					if (this.options.setCssProperties) {
						var maxDiffSeconds = Math.floor((this.endDate.getTime() - this.startDate.getTime()) / 1000);
						var maxDiffMinutes = Math.floor(maxDiffSeconds / 60);
						var maxDiffHours = Math.floor(maxDiffSeconds / 3600);
						var maxDiffDays = Math.floor(maxDiffSeconds / 86400);

						this.$elem.style.setProperty("--countdown-percent", maxDiffSeconds > 0 ?
							diffSeconds / maxDiffSeconds : 0);
						this.$elem.style.setProperty("--countdown-percent-seconds", maxDiffSeconds > 0 ?
							diffSeconds / maxDiffSeconds : 0);
						this.$elem.style.setProperty("--countdown-percent-minutes", maxDiffMinutes > 0 ?
							diffMinutes / maxDiffMinutes : 0);
						this.$elem.style.setProperty("--countdown-percent-hours", maxDiffHours > 0 ?
							diffHours / maxDiffHours : 0);
						this.$elem.style.setProperty("--countdown-percent-days", maxDiffDays > 0 ?
							diffDays / maxDiffDays : 0);
					}
				}

				Countdown.prototype.run = function () {
					var self = this;
					var now = new Date();

					self.update();

					if (now < this.endDate) {
						self.ticker = setTimeout(function () {
							self.run()
						}, 1000);
					} else {
						clearTimeout(self.ticker);
						self.$elem.setAttribute('data-countdown-ended', true);
					}
				}

				/**
				 * Initialise countdowns on HTML elements
				 */
				var countdowns = document.querySelectorAll('[data-countdown]');
				if (countdowns.length > 0) {
					for (var i = 0; i < countdowns.length; i++) {
						var leadingZero = countdowns[i].getAttribute('data-countdown-option-leadingzero');
						var setCssProperties = countdowns[i].getAttribute('data-countdown-option-setcssproperties');
						var separateDigits = countdowns[i].getAttribute('data-countdown-option-separatedigits');
						var nextDigits = countdowns[i].getAttribute('data-countdown-option-nextdigits');

						leadingZero = leadingZero === true ||
							leadingZero === "true" ||
							leadingZero === "1" ||
							leadingZero === 1 ?
							true :
							false;

						setCssProperties = setCssProperties === true ||
							setCssProperties === "true" ||
							setCssProperties === "1" ||
							setCssProperties === 1 ?
							true :
							false;

						separateDigits = separateDigits === true ||
							separateDigits === "true" ||
							separateDigits === "1" ||
							separateDigits === 1 ?
							true :
							false;

						nextDigits = nextDigits === true ||
							nextDigits === "true" ||
							nextDigits === "1" ||
							nextDigits === 1 ?
							true :
							false;

						new Countdown({
							$elem: countdowns[i],
							startDate: countdowns[i].getAttribute('data-countdown-option-startdate'),
							endDate: countdowns[i].getAttribute('data-countdown'),
							leadingZero: leadingZero,
							setCssProperties: setCssProperties,
							separateDigits: separateDigits,
							nextDigits: nextDigits,
						});
					}
				}
			}

		},


		// product gallary start
		product_gallary: function () {
			jQuery(window).on("load", function() {
			if($('.met-team-gallery').length > 0){
				$('.met-team-shop').isotope({
					itemSelector: '.met-shop-inner',
					filter: '*'
				});
				$('.met-product-nav > ul > li').on( 'click', 'a', function() {
					// filter button click
					var filterValue = $( this ).attr('data-filter');
					$('.met-team-shop').isotope({ filter: filterValue });

					//active class added
					$('a').removeClass('met-product-active');
					$(this).addClass('met-product-active');
				});
			}
			});
		},


	// quantity start
	quantity: function () {
		$('.met-add').on('click',function(){
			if ($(this).prev().val() < 50000) {
				$(this).prev().val(+$(this).prev().val() + 1);
			}
		});
		$('.met-sub').on('click',function(){
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
			}
		});
	},
	// quantity end

	};
	eLearning.init();

}(jQuery));

// Contact Form Submission
function checkRequire(formId , targetResp){
    targetResp.html('');
    var email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    var url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
    var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
    var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
    var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
    var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
    var google_plus = /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
    var check = 0;
    $('#er_msg').remove();
    var target = (typeof formId == 'object')? $(formId):$('#'+formId);
    target.find('input , textarea , select').each(function(){
        if($(this).hasClass('require')){
            if($(this).val().trim() == ''){
                check = 1;
                $(this).focus();
                $(this).parent('div').addClass('form_error');
                targetResp.html('You missed out some fields.');
                $(this).addClass('error');
                return false;
            }else{
                $(this).removeClass('error');
                $(this).parent('div').removeClass('form_error');
            }
        }
        if($(this).val().trim() != ''){
            var valid = $(this).attr('data-valid');
            if(typeof valid != 'undefined'){
                if(!eval(valid).test($(this).val().trim())){
                    $(this).addClass('error');
                    $(this).focus();
                    check = 1;
                    targetResp.html($(this).attr('data-error'));
                    return false;
                }else{
                    $(this).removeClass('error');
                }
            }
        }
    });
    return check;
}
$(".submitForm").on('click', function() {
    var _this = $(this);
    var targetForm = _this.closest('form');
    var errroTarget = targetForm.find('.response');
    var check = checkRequire(targetForm , errroTarget);
    
    if(check == 0){
       var formDetail = new FormData(targetForm[0]);
        formDetail.append('form_type' , _this.attr('form-type'));
        $.ajax({
            method : 'post',
            url : 'ajaxmail.php',
            data:formDetail,
            cache:false,
            contentType: false,
            processData: false
        }).done(function(resp){
            console.log(resp);
            if(resp == 1){
                targetForm.find('input').val('');
                targetForm.find('textarea').val('');
                errroTarget.html('<p style="color:green;">Mail has been sent successfully.</p>');
            }else{
                errroTarget.html('<p style="color:red;">Something went wrong please try again latter.</p>');
            }
        });
    }
});

