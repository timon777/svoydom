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
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  })

  $('.description__header').click(function () {
    $(this).next().slideToggle()
    $(this).toggleClass('active')
  })

  $('.sdacha__items').slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    loop: false,
    infinite: false,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          rows: 4,
          slidesToShow: 1,
        },
      },
    ],
  })

  let list_appart__block = $('.room__block')
  list_appart__block.on('click', function () {
    list_appart__block.removeClass('active')
    $(this).addClass('active')

    let img = $(this).find('img').attr('src')
    $('.room__right-image').find('img').attr('src', img)
    $('.print').attr('src', img)
    $('.room__download').attr('src', img)
    $('.room__download').attr('download', img)
  })

  $('[data-tabs-number]').on('click', function () {
    if (!$(this).hasClass('active')) {
      var index = $(this).index()
      $(this).addClass('active').siblings().removeClass('active')
      let current = $('[data-tabs-plancontent]').hide().eq(index)
      current.fadeIn()
      let appart__block = current.find('.room__block')
      if (appart__block.length) {
        $(appart__block[0]).trigger('click')
      }
    }
    return false
  })

  $('.room__content').each(function () {
    let valueRoom = $(this).find('.room__block').length
    if (valueRoom > 34) {
      $(this).children().removeClass('active')
    } else {
      $(this).children().addClass('active')
    }
    if (window.matchMedia('(max-width: 767px)').matches) {
      if (valueRoom > 20) {
        $(this).children().removeClass('active')
      } else {
        $(this).children().addClass('active')
      }
    }
  })

  $('.room__more').click(function () {
    $(this).parent().addClass('active')
  })

  $('.image-lightbox').magnificPopup({ type: 'image' })
})
