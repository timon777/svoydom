$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).children().toggleClass('active')
    $('.drop-menu').toggleClass('active')
    $('body').toggleClass('active')
    return false
  })

  $('.header__city-header').click(function () {
    $(this).next().slideToggle(300)
    $(this).toggleClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__city-header, .header__city-drop').length) {
      $('.header__city-header').removeClass('active')
      $('.header__city-drop').slideUp(300)
    }
    e.stopPropagation()
  })

  $('.header__lang-header').click(function () {
    $(this).next().slideToggle(300)
    $(this).toggleClass('active')
  })

  $(document).on('click', function (e) {
    if (!$(e.target).closest('.header__lang-header, .header__lang-drop').length) {
      $('.header__lang-header').removeClass('active')
      $('.header__lang-drop').slideUp(300)
    }
    e.stopPropagation()
  })

  $('.t-dropdown-input').on('click', function () {
    $(this).parent().toggleClass('active')
    $(this).parent().next().slideToggle('fast')
    $(this).toggleClass('active')
  })

  $('.t-dropdown-input').width($('.t-dropdown-select').width() - $('.t-select-btn').width() - 13)

  $('.t-dropdown-list').width($('.t-dropdown-select').width())

  $('.t-dropdown-input').val('')

  $('li.t-dropdown-item').on('click', function () {
    var text = $(this).html()
    $(this).parent().parent().prev().find('.t-dropdown-input').val(text)
    $('.t-dropdown-list').slideUp('fast')
  })

  $(document).on('click', function (event) {
    if ($(event.target).closest('.t-dropdown-input, .t-select-btn, label').length) return
    $('.t-dropdown-list').slideUp('fast')
    $('.t-dropdown-select').removeClass('active')
    event.stopPropagation()
  })

  $('.range-price-from').ionRangeSlider({
    min: 0,
    max: 300000000,
    from: 75000000,
    prettify_enabled: true,
  })

  $('.range-price-to').ionRangeSlider({
    min: 0,
    max: 300000000,
    from: 75000000,
  })

  $('.range-squre-from').ionRangeSlider({
    min: 0,
    max: 200,
    from: 30,
  })

  $('.range-squre-to').ionRangeSlider({
    min: 0,
    max: 200,
    postfix: ' м2',
    from: 30,
  })

  $('.range-price-from').on('input', function () {
    $('#filter-price-from').val(this.value)
  })

  $('.range-price-to').on('input', function () {
    $('#filter-price-to').val(this.value)
  })

  $('.range-squre-from').on('input', function () {
    $('#filter-squre-from').val(this.value)
  })

  $('.range-squre-to').on('input', function () {
    $('#filter-squre-to').val(this.value)
  })

  if (window.matchMedia('(max-width: 767px)').matches) {
    $('#filter-squre-from').attr('placeholder', 'От')
    $('#filter-squre-to').attr('placeholder', 'До')
  }

  if (window.matchMedia('(max-width: 991px)').matches) {
    $('.map__header').click(function () {
      $(this).toggleClass('active')
      $(this).next().slideToggle(300)
    })
  }

  function responsive_slider(selector, size, options) {
    if ($(window).width() < size) {
      if (!$(selector).hasClass('slick-slider')) {
        $(selector).slick(options)
      }
    } else {
      if ($(selector).hasClass('slick-slider')) {
        $(selector).slick('destroy')
      }
    }
  }

  responsive_slider('.upgrade__grid', 767, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    cssEase: 'linear',
  })

  $(window).resize(function () {
    responsive_slider('.upgrade__grid', 767, {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      cssEase: 'linear',
    })
  })

  $('.opening__blocks').slick({
    slidesToShow:3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
        }
      ]
  });

  $('.description__header').click(function () {
    $(this).next().slideToggle()
    $(this).toggleClass('active')
  })
})
