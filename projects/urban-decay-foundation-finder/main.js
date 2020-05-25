// -- Appending a CDN of jQuery to the <body> --
var script = document.createElement('script')
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
document.body.appendChild(script)

// -- Scroll To Top Event --
var scrollToTop = function scrollToTop(elementToScrollTo) {
  var heightOfNavigation = $('.navigation.js_sticky').height()
  if (heightOfNavigation !== null) {
    $('html, body').animate({ scrollTop: $(elementToScrollTo).offset().top - heightOfNavigation}, 1000)
  }
}

// -- User Journey --
window.userJourney = {
  'Q1 - Skintone' : '',
  'Q2 - Undertone' : '',
  'Q3 - Finish' : '',
  'Q4 - Shade' : '',
  'Result' : ''
}

// -- Answer bank of Question 3 --
var question3AnswerBank = {
  'Fair ; Rarely Tans ; Glow'            : ['Te Le Teint BR05', 'Te Le Teint BR10', 'Te Le Teint BR20'],
  'Fair ; Rarely Tans ; Matte'           : ['All Hours BR05', 'All Hours BR10', 'All Hours BR20'],
  'Fair ; Tans Quite Easily ; Glow'      : ['Te Le Teint B10', 'Te Le Teint B20', 'Te Le Teint B30'],
  'Fair ; Tans Quite Easily ; Matte'     : ['All Hours B05', 'All Hours B10', 'All Hours B20', 'All Hours B25'],
  'Fair ; Tans Very Easily ; Glow'       : ['Te Le Teint BD10', 'Te Le Teint BD25', 'Te Le Teint BD30'],
  'Fair ; Tans Very Easily ; Matte'      : ['All Hours BD10', 'All Hours BD20', 'All Hours BD25', 'All Hours BD30' ],
  'Light ; Rarely Tans ; Glow'           : ['Te Le Teint BR20', 'Te Le Teint BR25', 'Te Le Teint BR30'],
  'Light ; Rarely Tans ; Matte'          : ['All Hours BR20', 'All Hours BR25' , 'All Hours BR30'],
  'Light ; Tans Quite Easily ; Glow'     : ['Te Le Teint B10', 'Te Le Teint B20' , 'Te Le Teint B30'],
  'Light ; Tans Quite Easily ; Matte'    : ['All Hours B20', 'All Hours B25' , 'All Hours B30'],
  'Light ; Tans Very Easily ; Glow'      : ['Te Le Teint BD10', 'Te Le Teint BD25' , 'Te Le Teint BD30'],
  'Light ; Tans Very Easily ; Matte'     : ['All Hours BD20', 'All Hours BD25' , 'All Hours BD30', 'All Hours BD35'],
  'Medium ; Rarely Tans ; Glow'          : ['Te Le Teint BR30', 'Te Le Teint BR40', 'Te Le Teint BR45', 'Te Le Teint BR50' , 'Te Le Teint BR60'],
  'Medium ; Rarely Tans ; Matte'         : ['All Hours BR30', 'All Hours BR40' , 'All Hours BR45', 'All Hours BR50' , 'All Hours BR65'],
  'Medium ; Tans Quite Easily ; Glow'    : ['Te Le Teint B40', 'Te Le Teint B45', 'Te Le Teint B50', 'Te Le Teint B60' , 'Te Le Teint B65'],
  'Medium ; Tans Quite Easily ; Matte'   : ['All Hours B40', 'All Hours B45', 'All Hours B50', 'All Hours B55' , 'All Hours BD60', 'All Hours B65'],
  'Medium ; Tans Very Easily ; Glow'     : ['Te Le Teint BD40', 'Te Le Teint BD50', 'Te Le Teint BD55', 'Te Le Teint BD60' , 'Te Le Teint BD65'],
  'Medium ; Tans Very Easily ; Matte'    : ['All Hours BD40', 'All Hours BD45', 'All Hours BD50', 'All Hours BD55' , 'All Hours BD60', 'All Hours BD65'],
  'Deep ; N/A ; Glow'                    : ['Te Le Teint B70', 'Te Le Teint BD70', 'Te Le Teint B75'],
  'Deep ; N/A ; Matte'                   : ['All Hours B70', 'All Hours BD70', 'All Hours B75', 'All Hours BR75'],
  'Very Deep ; N/A ; Glow'               : ['Te Le Teint B75', 'Te Le Teint B80', 'Te Le Teint B90'],
  'Very Deep ; N/A ; Matte'              : ['All Hours B80', 'All Hours B85', 'All Hours BD85', 'All Hours B90', 'All Hours BR90'],
}

// -- Result Hex Code Bank --
var resultHexCodeBank = {
  'Te Le Teint B10'  : '#DDB68F',
  'Te Le Teint BD10' : '#DDB790',
  'Te Le Teint BR10' : '#DAB691',
  'Te Le Teint B20'  : '#E2BB94',
  'Te Le Teint BD25' : '#E0B491',
  'Te Le Teint BR20' : '#E1BC92',
  'Te Le Teint B30'  : '#D9AE83',
  'Te Le Teint BD30' : '#DCB081',
  'Te Le Teint BR30' : '#D2A785',
  'Te Le Teint B40'  : '#CB9F7C',
  'Te Le Teint BD40' : '#B68B68',
  'Te Le Teint BR40' : '#CA9D7C',
  'Te Le Teint B45'  : '#D6AA79',
  'Te Le Teint BR45' : '#CC9E7A',
  'Te Le Teint B50'  : '#CBA380',
  'Te Le Teint BD50' : '#BD9067',
  'Te Le Teint BR50' : '#CC9873',
  'Te Le Teint B60'  : '#C49875',
  'Te Le Teint BD60' : '#C49875',
  'Te Le Teint B70'  : '#C08559',
  'Te Le Teint B80'  : '#B57640',
  'Te Le Teint B90'  : '#874721',
  'Te Le Teint BR05' : '#EBBB95',
  'Te Le Teint BR25' : '#D5A388',
  'Te Le Teint BR60' : '#C8946F',
  'Te Le Teint BD55' : '#C3935E',
  'Te Le Teint B65'  : '#B07846',
  'Te Le Teint BD65' : '#A16F3D',
  'Te Le Teint BD70' : '#925D29',
  'Te Le Teint B75'  : '#BC7D47',
  'All Hours B05'    : '#F0C6A8',
  'All Hours BR05'   : '#EFC1A1',
  'All Hours B10'    : '#E8CFBA',
  'All Hours BD10'   : '#F3CE9A',
  'All Hours BR10'   : '#E8C3A8',
  'All Hours B20'    : '#E1BCA1',
  'All Hours BD20'   : '#DFB698',
  'All Hours BR20'   : '#E2C5B0',
  'All Hours B25'    : '#DFAB7C',
  'All Hours BD25'   : '#D8AF91',
  'All Hours BR25'   : '#FABA92',
  'All Hours B30'    : '#E4BB9D',
  'All Hours BD30'   : '#E9BE9B',
  'All Hours BR30'   : '#E1C0AD',
  'All Hours BD35'   : '#D8AE88',
  'All Hours B40'    : '#D9AE8D',
  'All Hours BD40'   : '#D5A982',
  'All Hours BR40'   : '#CEA587',
  'All Hours B45'    : '#D5AD8A',
  'All Hours BD45'   : '#D0A37C',
  'All Hours BR45'   : '#BE907B',
  'All Hours B50'    : '#D5A887',
  'All Hours BD50'   : '#D09E79',
  'All Hours BR50'   : '#CB9974',
  'All Hours B55'    : '#C08E60',
  'All Hours BD55'   : '#D0925E',
  'All Hours B60'    : '#D3A081',
  'All Hours BD60'   : '#C58651',
  'All Hours B65'    : '#BE8D64',
  'All Hours BD65'   : '#C68A55',
  'All Hours BR65'   : '#D3A07C',
  'All Hours B70'    : '#C8946F',
  'All Hours BD70'   : '#B2753C',
  'All Hours B75'    : '#AE7946',
  'All Hours BR75'   : '#B88256',
  'All Hours B80'    : '#A56839',
  'All Hours B85'    : '#955526',
  'All Hours BD85'   : '#9A6942',
  'All Hours B90'    : '#854E2E',
  'All Hours BR90'   : '#82492E'
}

// -- Microexperience Code --
var microexperienceCode = function microexperienceCode() {
  // Update Current Question
  $('body').attr('data-current-question', 'Landing')

  // User clicks on "Landing Section" CTA
  $('.landing-section button').on('click', function () {
    // Hide "Landing Section" + Reveal "Question Section"
    $('.landing-section').removeClass('active')
    $('.question-section').addClass('active')
    $('.progress-bar-section .steps-container').addClass('active')

    // Adding transition
    $('[data-question="Q1 - Skintone"] .answer').addClass('active')

    // Update Current Question
    $('body').attr('data-current-question', 'Q1 - Skintone')

    // Scroll to top of microexperience
    scrollToTop('body')
  })

  // User clicks on Question 1 answer
  $('[data-question="Q1 - Skintone"] .answer').on('click', function () {
    // Storing answer
    window.userJourney['Q1 - Skintone'] = $(this).attr('data-answer')

    // Update Progress Bar
    $('.progress-bar-section [data-question="Q1 - Skintone"] .chosen-answer').text(window.userJourney['Q1 - Skintone'])
    $('.progress-bar-section [data-question="Q1 - Skintone"]').addClass('active')
    $('.progress-bar-section [data-question="Q2 - Undertone"]').addClass('checkpoint')

    // IF user choose "Deep" or "Very Deep" in Question 1 >> Skip to Question 3
    // ELSE >> Go to Question 2
    if (window.userJourney['Q1 - Skintone'] === 'Deep' || window.userJourney['Q1 - Skintone'] === 'Very Deep') {
      // Update answer information for the skipped question (Question 2)
      window.userJourney['Q2 - Undertone'] = 'N/A'

      // Adding transition
      $('[data-question="Q3 - Finish"] .answer').addClass('active')

      // Update Progress Bar
      $('.progress-bar-section [data-question="Q2 - Undertone"] .chosen-answer').text('None')
      $('.progress-bar-section [data-question="Q2 - Undertone"]').addClass('active')
      $('.progress-bar-section [data-question="Q3 - Finish"]').addClass('checkpoint')

      // Hide Question 1 + Reveal Question 3
      $('.question.current[data-question="Q1 - Skintone"]').removeClass('current').addClass('previous')
      setTimeout(function () {
        $('body').attr('data-current-question', 'Q3 - Finish')
        $('.question.next[data-question="Q3 - Finish"]').removeClass('next').addClass('current')
        // Scroll to top of microexperience
        scrollToTop('body')
      }, 400)
    } else {
      // Adding transition
      $('[data-question="Q2 - Undertone"] .answer').addClass('active')

      // Hide Question 1 + Reveal Question 2
      $('.question.current[data-question="Q1 - Skintone"]').removeClass('current').addClass('previous')
      setTimeout(function () {
        $('.question.next[data-question="Q2 - Undertone"]').removeClass('next').addClass('current')
        $('body').attr('data-current-question', 'Q2 - Undertone')
        // Scroll to top of microexperience
        scrollToTop('body')
      }, 400)
    }
  })

  // User clicks on Question 2 answer
  $('[data-question="Q2 - Undertone"] .answer').on('click', function () {
    // Storing answer
    window.userJourney['Q2 - Undertone'] = $(this).attr('data-answer')

    // Adding transition
    $('[data-question="Q3 - Finish"] .answer').addClass('active')

    // Update Progress Bar
    $('.progress-bar-section [data-question="Q2 - Undertone"] .chosen-answer').text(window.userJourney['Q2 - Undertone'])
    $('.progress-bar-section [data-question="Q2 - Undertone"]').addClass('active')
    $('.progress-bar-section [data-question="Q3 - Finish"]').addClass('checkpoint')

    // Hide Question 2 + Reveal Question 3
    $('.question.current[data-question="Q2 - Undertone"]').removeClass('current').addClass('previous')
    $('.question.next[data-question="Q3 - Finish"]').removeClass('next').addClass('current')
    $('body').attr('data-current-question', 'Q3 - Finish')

    // Scroll to top of microexperience
    scrollToTop('body')
  })

  // User clicks on Question 3 answer
  $('[data-question="Q3 - Finish"] .answer').on('click', function () {
    // Storing answer
    window.userJourney['Q3 - Finish'] = $(this).attr('data-answer')

    // Update Progress Bar
    $('.progress-bar-section [data-question="Q3 - Finish"] .chosen-answer').text(window.userJourney['Q3 - Finish'])
    $('.progress-bar-section [data-question="Q3 - Finish"]').addClass('active')
    $('.progress-bar-section [data-question="Q4 - Shade"]').addClass('checkpoint')

    // Determine which answers are revealed in Question 4
    var assembledUserJourney = window.userJourney['Q1 - Skintone'] + ' ; ' + window.userJourney['Q2 - Undertone'] + ' ; ' + window.userJourney['Q3 - Finish']
    var question3AnswersCollection = question3AnswerBank[assembledUserJourney]

    // Populate answers on page + reveal
    for (var answer = 0; answer < question3AnswersCollection.length; answer++) {
      var answerOnPage = $($('.question[data-question="Q4 - Shade"] .answer')[answer])

      // Updating data-answer attribute
      answerOnPage.attr('data-answer', question3AnswersCollection[answer])

      // Updating background image based on whether mobile or desktop
      var fileSnippet = question3AnswersCollection[answer].toLowerCase().replace(/\s+/g, '-')
      var constructedMobileImage = 'url("https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/mobile_question-section_question-4-' + fileSnippet + '.jpg")'
      var constructedDesktopImage = 'url("https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/desktop_question-section_question-4-' + fileSnippet + '.jpg")'
      if (window.innerWidth < 800) {
        answerOnPage.css('background-image', constructedMobileImage)
      } else {
        answerOnPage.css('background-image', constructedDesktopImage)
      }

      // Update text of answer
      var answerCopy = question3AnswersCollection[answer].replace(/Te Le Teint /g, '').replace(/All Hours /g, '')
      answerOnPage.find('.shade').text(answerCopy)
    }

    // Make answers visible
    $('[data-question="Q4 - Shade"] .' + question3AnswersCollection.length).addClass('active')

    // Hide Question 3 + Reveal Question 4 (and answers)
    $('.question.current[data-question="Q3 - Finish"]').removeClass('current').addClass('previous')

    // Set width and height of question container/answers
    if (question3AnswersCollection.length === 3) {
      $('body').attr('data-current-sub-question', 'Three')
    } else if (question3AnswersCollection.length === 4) {
      $('body').attr('data-current-sub-question', 'Four')
    } else if (question3AnswersCollection.length === 5) {
      $('body').attr('data-current-sub-question', 'Five')
    } else if (question3AnswersCollection.length === 6) {
      $('body').attr('data-current-sub-question', 'Six')
    }

    $('.question.next[data-question="Q4 - Shade"]').removeClass('next').addClass('current')
    $('body').attr('data-current-question', 'Q4 - Shade')

    // Scroll to top of microexperience
    scrollToTop('body')
  })

  // User clicks on Question 4 answer
  $('[data-question="Q4 - Shade"] .answer').on('click', function () {
    // Storing answer + result
    window.userJourney['Q4 - Shade'] = $(this).attr('data-answer')
    window.userJourney['Result'] = window.userJourney['Q1 - Skintone'] + ' ; ' + window.userJourney['Q2 - Undertone'] + ' ; ' + window.userJourney['Q3 - Finish'] + ' ; ' + window.userJourney['Q4 - Shade'] 

    // Update Progress Bar
    $('.progress-bar-section .steps-container').removeClass('active')
    $('.progress-bar-section [data-question="Q4 - Shade"] .chosen-answer').text(window.userJourney['Q4 - Shade'])
    $('.progress-bar-section [data-question="Q4 - Shade"]').addClass('active')
    setTimeout(function () {
      $('.progress-bar-section .share-results-container').addClass('active')
    }, 300)

    // Grabbing result information
    var resultFaceFileSnippet = window.userJourney['Q4 - Shade'].toLowerCase().replace(/\s+/g, '-')
    var resultHexCode = resultHexCodeBank[window.userJourney['Q4 - Shade']]
    var resultProductNameMain
    var resultProductNameSub
    var resultProductDescription
    var resultProductType = window.userJourney['Q4 - Shade'].replace(/Te Le Teint /g, '').replace(/All Hours /g, '').toLowerCase()
    var resultProductFullName = window.userJourney['Q4 - Shade'].replace(/Te Le Teint /g, 'te-le-teint-').replace(/All Hours /g, 'all-hours-').toLowerCase()
    var resultFoundationSwatchImage = 'https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/all_result-section_foundation-swatch-' + resultProductFullName + '.png'
    var resultProductReviewLink
    var resultFinishType = window.userJourney['Q3 - Finish'].toLowerCase()
    var resultMarbleBackground = 'url("https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/all_question-section_question-3-marble-' + resultFinishType + '.jpg")'
    var resultProductImage = 'https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/all_result-section_product-image-' + resultProductFullName + '.png'
    var resultFaceImage

    if (window.innerWidth < 800) {
      resultFaceImage = 'url("https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/mobile_question-section_question-4-' + resultFaceFileSnippet + '.jpg")'
    } else {
      resultFaceImage = 'url("https://proserve-microexperiences.s3.amazonaws.com/loreal/ysl/foundation-finder/images/desktop_question-section_question-4-' + resultFaceFileSnippet + '.jpg")'
    }

    if (window.userJourney['Q3 - Finish'] === 'Matte') {
      resultProductNameMain = 'ALL HOURS'
      resultProductNameSub = 'LIQUID FOUNDATION'
      resultProductDescription = '24HR FULL COVERAGE. FLAWLESS MATTE.'
      var productTypeURL = window.userJourney['Q4 - Shade'].replace(/All Hours /g, '')
      resultProductReviewLink = 'https://www.yslbeauty.co.uk/makeup/complexion/foundation/all-hours-foundation-spf20/WW-21201YSL.html?dwvar_WW-21201YSL_color=' + productTypeURL
    } else if (window.userJourney['Q3 - Finish'] === 'Glow') {
      resultProductNameMain = 'TOUCHE ÉCLAT'
      resultProductNameSub = 'LE TEINT FOUNDATION'
      resultProductDescription = '24HR BREATHABLE COVERAGE. NATURAL HEALTHY GLOW.'
      var productTypeURL = window.userJourney['Q4 - Shade'].replace(/Te Le Teint /g, '').replace(/B/g, 'Beige%20').replace(/R/g,'Rose%20').replace(/D/g,'Dore%20')
      resultProductReviewLink = 'https://www.yslbeauty.co.uk/makeup/complexion/touche-eclat/touche-eclat-le-teint-foundation-spf22/WW-20350YSL.html?dwvar_WW-20350YSL_color=' + productTypeURL
    }

    // Updating result elements
    $('body').attr('data-current-question', 'Result')
    $('.result-section .face-container').css('background-image', resultFaceImage)
    $('.result-section .details-container').css('background-color', resultHexCode)
    $('.result-section .details-container .product-name-main').text(resultProductNameMain)
    $('.result-section .details-container .product-name-sub').text(resultProductNameSub)
    $('.result-section .details-container .product-description').text(resultProductDescription)
    $('.result-section .details-container .product-type').text(resultProductType)
    $('.result-section .details-container .foundation-swatch').attr('src', resultFoundationSwatchImage)
    $('.result-section .details-container .product-additional-information').attr('href', resultProductReviewLink)
    $('.result-section .product-container').css('background-image', resultMarbleBackground)
    $('.result-section .product-container .product-image').attr('src', resultProductImage)

    // Updating form elements
    $('.first_name input').attr('placeholder', 'Your First Name')
    $('.last_name input').attr('placeholder', 'Your Last Name')
    $('.email input').attr('placeholder', 'Your Email')

    // Hide Question 4 + Reveal Result
    $('.question.current[data-question="Q4 - Shade"]').removeClass('current').addClass('previous')
    $('.question-section').removeClass('active')
    $('.result-section').addClass('active')

    // Wait until fade in is complete + Scroll to top of microexperience
    setTimeout(function () {
      scrollToTop('body')
    }, 500)
  })

  // User clicks on "Previous" button
  $('.previous-trigger--js').on('click', function () {
    var currentQuestion = $('body').attr('data-current-question')

    if (currentQuestion === 'Q1 - Skintone') {
      $('.question-section').removeClass('active')
      $('.landing-section').addClass('active')
      $('.progress-bar-section .steps-container').addClass('active')
      $('body').attr('data-current-question', 'Landing')
    } else if (currentQuestion === 'Q2 - Undertone') {
      $('.question[data-question="Q2 - Undertone"]').removeClass('current').addClass('next')
      $('.step[data-question="Q2 - Undertone"]').removeClass('checkpoint active')
      $('body').attr('data-current-question', 'Q1 - Skintone')
      $('.question[data-question="Q1 - Skintone"]').removeClass('previous').addClass('current')
      $('.progress-bar-section .steps-container .step[data-question="Q2 - Undertone"] .chosen-answer.ps-mobile').text('-')
      $('.progress-bar-section .steps-container .step[data-question="Q2 - Undertone"] .chosen-answer.ps-desktop').text('')
    } else if (currentQuestion === 'Q3 - Finish') {
      if (window.userJourney['Q1 - Skintone'] === 'Deep' || window.userJourney['Q1 - Skintone'] === 'Very Deep') {
        $('.question[data-question="Q2 - Undertone"], .question[data-question="Q3 - Finish"]').removeClass('current').addClass('next')
        $('.step[data-question="Q2 - Undertone"], .step[data-question="Q3 - Finish"]').removeClass('checkpoint active')
        $('body').attr('data-current-question', 'Q1 - Skintone')
        $('.question[data-question="Q1 - Skintone"]').removeClass('previous').addClass('current')
        $('.progress-bar-section .steps-container .step[data-question="Q2 - Undertone"] .chosen-answer.ps-mobile').text('-')
        $('.progress-bar-section .steps-container .step[data-question="Q2 - Undertone"] .chosen-answer.ps-desktop').text('')
        $('.progress-bar-section .steps-container .step[data-question="Q3 - Finish"] .chosen-answer.ps-mobile').text('-')
        $('.progress-bar-section .steps-container .step[data-question="Q3 - Finish"] .chosen-answer.ps-desktop').text('')
      } else {
        $('.question[data-question="Q3 - Finish"]').removeClass('current').addClass('next')
        $('.step[data-question="Q3 - Finish"]').removeClass('checkpoint active')
        $('body').attr('data-current-question', 'Q2 - Undertone')
        $('.question[data-question="Q2 - Undertone"]').removeClass('previous').addClass('current')
        $('.progress-bar-section .steps-container .step[data-question="Q3 - Finish"] .chosen-answer.ps-mobile').text('-')
        $('.progress-bar-section .steps-container .step[data-question="Q3 - Finish"] .chosen-answer.ps-desktop').text('')
      }
    } else if (currentQuestion === 'Q4 - Shade') {
      $('.question[data-question="Q4 - Shade"]').removeClass('current').addClass('next')
      $('.step[data-question="Q4 - Shade"]').removeClass('checkpoint active')
      $('body').attr('data-current-question', 'Q3 - Finish')
      $('.question[data-question="Q3 - Finish"]').removeClass('previous').addClass('current')
      $('[data-question="Q4 - Shade"] .answer').removeClass('active')
      $('[data-question="Q4 - Shade"] .answer').attr('data-answer', '')
      $('[data-question="Q4 - Shade"] .answer').css('background-image', '')
    }

    // Scroll to top of microexperience
    scrollToTop('body')
  })

  // User clicks on "Start Over" button
  $('.start-over-trigger--js').on('click', function () {
    // Reset User Journey object
    window.userJourney = {
      'Q1 - Skintone' : '',
      'Q2 - Undertone' : '',
      'Q3 - Finish' : '',
      'Q4 - Shade' : '',
      'Result' : ''
    }

    // Reset elements
    $('.answer').removeClass('active')
    $('.result-section').removeClass('active')
    $('.progress-bar-section .steps-container').addClass('active')
    $('.progress-bar-section .share-results-container').removeClass('active')
    $('.progress-bar-section .steps-container .step').removeClass('active checkpoint')
    $('.progress-bar-section .steps-container .step[data-question="Q1 - Skintone"]').addClass('checkpoint')
    $('.progress-bar-section .steps-container .chosen-answer.ps-mobile').text('-')
    $('.progress-bar-section .steps-container .chosen-answer.ps-desktop').text('')
    $('.question-section').addClass('active')
    $('body').attr('data-current-question', 'Q1 - Skintone')
    $('.question-container .question').removeClass('previous')
    $('.question-container .question[data-question="Q1 - Skintone"]').addClass('current')
    $('.question-container .question[data-question="Q2 - Undertone"]').addClass('next')
    $('.question-container .question[data-question="Q3 - Finish"]').addClass('next')
    $('.question-container .question[data-question="Q4 - Shade"]').addClass('next')
    $('.question-container .question[data-question="Q4 - Shade"] .answer').removeClass('active')
    $('.question-container .question[data-question="Q4 - Shade"] .answer').attr('data-answer', '')
    $('.question-container .question[data-question="Q4 - Shade"] .answer').css('background-image', '')
    $('.result-section .product-container .product-image').attr('src', '')
    $('.sign_up_6435643146839').removeClass('active')
    setTimeout(function () {
      $('[data-question="Q1 - Skintone"] .answer').addClass('active')
    }, 100)

    // Scroll to top of microexperience
    scrollToTop('body')
  })

  // User clicks on "Scroll down to save your shade" text 
  $('.scroll-to-form-trigger--js').on('click', function () {
    if (window.innerWidth < 800) {
      $('html, body').animate({ scrollTop: $('.progress-bar-section').offset().top }, 1000)
    } else {
      $('html, body').animate({ scrollTop: $('.above-swatch-container').offset().top }, 1000)
    }
  })
}

// -- Waiting for jQuery to exist, then run Microexperience Code --
var waitForJQuery = function waitForJQuery() {
  if (!window.jQuery) {
    return setTimeout(waitForJQuery, 50)
  } else {
    microexperienceCode()
  }
}
waitForJQuery()