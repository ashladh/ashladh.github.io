$(function () {

    var navposition = $('#nav').position().top
    var scrollMargin = 200

    var sectionsPositions = {}
    $('#nav .scrolllink').each(function () {
        var link = $(this)
        var id = link.attr('href')
        var section = $(id)

        if (section.length > 0) {
            var position = section.offset().top - scrollMargin
            sectionsPositions[section.attr('id')] = position

            link.on('click', function (e) {
                e.preventDefault()
                $('html, body').animate({
                    scrollTop: position + 1
                })
            })
        }



    })

    $(document).on('scroll', updateScroll)


    function updateScroll () {
        var scroll = $(window).scrollTop()
        $('#wrapper').toggleClass('sticky', scroll > navposition)

        for (var key in sectionsPositions) {
            var position = sectionsPositions[key]

            if (scroll > position) {
                $('#nav .active').removeClass('active')
                $('#nav a[href="#' + key + '"]').addClass('active')
            }

        }
    }



    updateScroll()
})

