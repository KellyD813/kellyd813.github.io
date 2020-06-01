// -- Appending a CDN of jQuery to the <body> --
var script = document.createElement('script')
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js'
document.body.appendChild(script)

// -- Tracking the user's journey --
window.userJourney = {
  'Current Question' : 1,
  'Q1 - Hair Length' : '',
  'Q2 - Hair Type' : '',
  'Q3 - Hair Concern' : '',
  'Q4 - Hair Dye' : '',
  'Q5 - Hair Goal' : '',
  'Result - Shampoo' : '',
  'Result - Conditioner' : '',
  'Result - Intensive' : ''
}

// -- Product Details Bank --
var productDetailsBank = {
  'Shampoo' : {
    'Colour Protect Shampoo 400ml' : {
      'Product EAN' : '3600520433424',
      'Product URL' : 'https://www.superdrug.com/Hair-Care/Colour-Protect-Shampoo/L%27Oreal-Elvive-Colour-Protect-Shampoo-400ml/p/125547',
      'Product Image URL' : 'images/all_result-section_shampoo-colour-protect.jpg'
    },
    'Extraordinary Oil Shampoo 400ml' : {
      'Product EAN' : '3600522713203',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Conditioners/L%27Oreal-Elvive-Oil-Shampoo-for-Dry-Hair-400ml/p/250127',
      'Product Image URL' : 'images/all_result-section_shampoo-extraordinary-oil.jpg'
    },
    'Full Resist Shampoo 400ml' : {
      'Product EAN' : '3600523882229',
      'Product URL' : 'https://www.superdrug.com/Hair/Shampoo/Everyday-Shampoo/L%27Oreal-Paris-Elvive-Full-Resist-Shampoo-400ml/p/789751',
      'Product Image URL' : 'images/all_result-section_shampoo-full-resist.jpg'
    },
    'Fibrology Shampoo 400ml' : {
      'Product EAN' : '3600522497233',
      'Product URL' : 'https://www.superdrug.com/Hair/Shampoo/Everyday-Shampoo/L%27Oreal-Elvive-Fibrology-Thickening-Shampoo-400ml/p/886857',
      'Product Image URL' : 'images/all_result-section_shampoo-fibrology.jpg'
    },
    'Colour Protect Purple Shampoo 200ml' : {
      'Product EAN' : '3600523682768',
      'Product URL' : 'https://www.superdrug.com/Hair/Shampoo/Everyday-Shampoo/Elvive-Colour-Protect-Purple-Shampoo-200ml/p/772243',
      'Product Image URL' : 'images/all_result-section_shampoo-colour-protect-purple.jpg'
    },
    'Curl Nourishment Shampoo 400ml' : {
      'Product EAN' : '3600523905102',
      'Product URL' : 'https://www.superdrug.com/Hair/Shampoo/Everyday-Shampoo/L%27Oreal-Paris-Elvive-Curl-Nourishment-Shampoo-400ml/p/789748',
      'Product Image URL' : 'images/all_result-section_shampoo-curl-nourishment.jpg'
    },
    'Dream Lengths Shampoo 400ml' : {
      'Product EAN' : '3600523586370',
      'Product URL' : 'https://www.superdrug.com/Hair/Shampoo/Everyday-Shampoo/L%27Oreal-Elvive-Dream-Lengths-Long-Hair-Shampoo-400ml/p/750566',
      'Product Image URL' : 'images/all_result-section_shampoo-dream-lengths.jpg'
    },
  },
  'Conditioner' : {
    'Colour Protect Conditioner 400ml' : {
      'Product EAN' : '3600520433073',
      'Product URL' : 'https://www.superdrug.com/Hair-Care/Colour-Protect-Conditioner/L%27Oreal-Elvive-Colour-Protect-Conditioner-400ml/p/125792',
      'Product Image URL' : 'images/all_result-section_conditioner-colour-protect.jpg'
    },
    'Extraordinary Oil Conditioner 400ml' : {
      'Product EAN' : '3600522713203',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Conditioners/L%27Oreal-Elvive-Extraordinary-Oil-Conditioner-400ml/p/250125',
      'Product Image URL' : 'images/all_result-section_conditioner-extraordinary-oil.jpg'
    },
    'Full Resist Conditioner 400ml' : {
      'Product EAN' : '3600523882373',
      'Product URL' : 'https://www.superdrug.com/Hair/Everyday-Conditioner/L%27Oreal-Paris-Elvive-Full-Resist-Conditioner-400ml/p/789754',
      'Product Image URL' : 'images/all_result-section_conditioner-full-resist.jpg'
    },
    'Fibrology Conditioner 400ml' : {
      'Product EAN' : '3600522500728',
      'Product URL' : 'https://www.superdrug.com/Hair/Everyday-Conditioner/L%27Oreal-Elvive-Fibrology-Thickening-Conditioner-400ml/p/886758',
      'Product Image URL' : 'images/all_result-section_conditioner-fibrology.jpg'
    },
    'Colour Protect Purple Conditioner 150ml' : {
      'Product EAN' : '3600523682836',
      'Product URL' : ' https://www.superdrug.com/Hair/Everyday-Conditioner/Elvive-Colour-Protect-Purple-Conditioner-150ml/p/772242',
      'Product Image URL' : 'images/all_result-section_conditioner-colour-protect-purple.jpg'
    },
    'Curl Nourishment Conditioner 400ml' : {
      'Product EAN' : '5011408096613',
      'Product URL' : 'https://www.superdrug.com/Hair/Everyday-Conditioner/L%27Oreal-Paris-Elvive-Curl-Nourishment-Conditoner-400ml/p/790144',
      'Product Image URL' : 'images/all_result-section_conditioner-curl-nourishment.jpg'
    },
    'Dream Lengths Conditioner 400ml' : {
      'Product EAN' : '3600523586912',
      'Product URL' : 'https://www.superdrug.com/Hair/Everyday-Conditioner/L%27Oreal-Elvive-Dream-Lengths-Long-Hair-Conditioner-400ml/p/750559',
      'Product Image URL' : 'images/all_result-section_conditioner-dream-lengths.jpg'
    },
  },
  'Intensive' : {
    'Full Resist Mask 680ml' : {
      'Product EAN' : '3600523899906',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Treatments/Hair-Masks/L%27Oreal-Paris-Elvive-Full-Resist-Mask-680ml/p/789755',
      'Product Image URL' : 'images/all_result-section_intensive-full-resist-mask.jpg'
    },
    'Extraordinary Oil Colour 100ml' : {
      'Product EAN' : '3600522215172',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Treatments/Hair-Colour-Protection/L%27Oreal-Elvive-Extraordinary-Oil-Colour-100ml/p/461150',
      'Product Image URL' : 'images/all_result-section_intensive-extraordinary-oil-colour.jpg'
    },
    'Extraordinary Oil 100ml' : {
      'Product EAN' : '3600522215899',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Treatments/Hair-Care-Oils/L%27Oreal-Elvive-Extraordinary-Oil-100ml/p/461052',
      'Product Image URL' : 'images/all_result-section_intensive-extraordinary-oil.jpg'
    },
    'Frizz Killer Serum 100ml' : {
      'Product EAN' : '3600523800957',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Styling/Hair-Serum/L%27Oreal-Paris-Elvive-Dream-Lengths-Sleek-Serum-100ml/p/790143?singleResultSearchPage=true',
      'Product Image URL' : 'images/all_result-section_intensive-frizz-killer-serum.jpg'
    },
    'No Haircut Cream 200ml' : {
      'Product EAN' : '3600523587865',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Styling/Hair-Creams/L%27Oreal-Elvive-Dream-Lengths-No-Haircut-Cream-200ml/p/750678?singleResultSearchPage=true',
      'Product Image URL' : 'images/all_result-section_intensive-no-haircut-cream.jpg'
    },
    'Colour Protect Purple Intensive Mask' : {
      'Product EAN' : '3600523900701',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Treatments/Hair-Masks/L%27Oreal-Paris-Elvive-Colour-Protect-Purple-Intensive-Mask/p/790149',
      'Product Image URL' : 'images/all_result-section_intensive-colour-protect-purple-intensive-mask.jpg'
    },
    'Curl Nourishment Intensive 200ml' : {
      'Product EAN' : '3600523203819',
      'Product URL' : 'https://www.superdrug.com/Hair/Hair-Treatments/Hair-Care-Oils/L%27Oreal-Paris-Elvive-Curl-Nourishment-Intensive-200ml/p/789752',
      'Product Image URL' : 'images/all_result-section_intensive-curl-nourishment.jpg'
    },
  }
}

// -- Calculate Results -- 
var calculateResult = function calculateResult() {
  var Q1 = userJourney['Q1 - Hair Length']
  var Q2 = userJourney['Q2 - Hair Type']
  var Q3 = userJourney['Q3 - Hair Concern']
  var Q4 = userJourney['Q4 - Hair Dye']
  var Q5 = userJourney['Q5 - Hair Goal']
  var shampoo
  var conditioner
  var intensive

  // Result: Shampoo and Conditioner
  if (Q2 === 'Curly') {
    userJourney['Result - Shampoo'] = 'Curl Nourishment Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Curl Nourishment Conditioner 400ml'
  } else if (Q3 === 'Damaged') {
    userJourney['Result - Shampoo'] = 'Full Resist Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Full Resist Conditioner 400ml'
  } else if (Q4 === "Yes, Blonde or Silver") {
    userJourney['Result - Shampoo'] = 'Colour Protect Purple Shampoo 200ml'
    userJourney['Result - Conditioner'] = 'Colour Protect Purple Conditioner 150ml'
  } else if (Q4 === "Yes, Other" || Q3 === "Colour Fading") {
    userJourney['Result - Shampoo'] = 'Colour Protect Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Colour Protect Conditioner 400ml'
  } else if (Q3 === "Dry or Dull") {
    userJourney['Result - Shampoo'] = 'Extraordinary Oil Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Extraordinary Oil Conditioner 400ml'
  } else if (Q3 === "Thinning Hair") {
    userJourney['Result - Shampoo'] = 'Fibrology Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Fibrology Conditioner 400ml'
  } else if ((Q1 === "Long" || Q1 === "Mid-Length") && Q3 === "Breakage") {
    userJourney['Result - Shampoo'] = 'Dream Lengths Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Dream Lengths Conditioner 400ml'
  } else {
    userJourney['Result - Shampoo'] = 'Full Resist Shampoo 400ml'
    userJourney['Result - Conditioner'] = 'Full Resist Conditioner 400ml'
  }

  // Result: Intensive
  if (Q2 === 'Curly') {
    userJourney['Result - Intensive'] = 'Curl Nourishment Intensive 200ml'
  } else if (Q4 === 'Yes, Blonde or Silver') {
    userJourney['Result - Intensive'] = 'Colour Protect Purple Intensive Mask'
  } else if (Q5 === 'Bouncy Defined Curls' || Q5 === 'Sleek') {
    userJourney['Result - Intensive'] = 'Frizz Killer Serum 100ml'
  } else if (Q5 === 'Shine & Nourishment') {
    userJourney['Result - Intensive'] = 'Extraordinary Oil 100ml'
  } else if (Q5 === 'Sealed Split Ends') {
    userJourney['Result - Intensive'] = 'No Haircut Cream 200ml'
  } else if (Q5 === 'Colour Radiance') {
    userJourney['Result - Intensive'] = 'Extraordinary Oil Colour 100ml'
  } else if (Q5 === 'Stronger and More Resistant' || Q5 === 'Extra Volume') {
    userJourney['Result - Intensive'] = 'Full Resist Mask 680ml'
  }

  // Update Shampoo, Conditioner, and Intensive on the result page
  shampoo = userJourney['Result - Shampoo']
  conditioner = userJourney['Result - Conditioner']
  intensive = userJourney['Result - Intensive']
  var shampooName = shampoo
  var shampooURL = productDetailsBank['Shampoo'][shampoo]['Product URL']
  var shampooImageURL = productDetailsBank['Shampoo'][shampoo]['Product Image URL']
  var conditionerName = conditioner
  var conditionerURL = productDetailsBank['Conditioner'][conditioner]['Product URL']
  var conditionerImageURL = productDetailsBank['Conditioner'][conditioner]['Product Image URL']
  var intensiveName = intensive
  var intensiveURL = productDetailsBank['Intensive'][intensive]['Product URL']
  var intensiveImageURL = productDetailsBank['Intensive'][intensive]['Product Image URL']

  $('[data-product="Shampoo"] .product-image-url').attr('src', shampooImageURL)
  $('[data-product="Shampoo"] .product-name').text(shampooName)
  $('[data-product="Shampoo"] .product-url').attr('href', shampooURL)
  $('[data-product="Conditioner"] .product-image-url').attr('src', conditionerImageURL)
  $('[data-product="Conditioner"] .product-name').text(conditionerName)
  $('[data-product="Conditioner"] .product-url').attr('href', conditionerURL)
  $('[data-product="Intensive"] .product-image-url').attr('src', intensiveImageURL)
  $('[data-product="Intensive"] .product-name').text(intensiveName)
  $('[data-product="Intensive"] .product-url').attr('href', intensiveURL)
}

// -- Reveal Result --
var revealResult = function revealResult() {
  $('.progress-bar-section, .question-section').removeClass('active')
  $('.result-section').addClass('active')
}

// -- Microexperience Code --
var microexperienceCode = function microexperienceCode() {
  // User clicks on CTA button to start quiz >> Reveal question Section
  $('.start-quiz-trigger--js').on('click', function () {
    $('.landing-section').removeClass('active')
    $('body').css('background-color', '#F7DFD4')
    $('.progress-bar-section, .question-section, .navigation-section').addClass('active')
    $('body').attr('data-current-question', '1')
  })

  // User clicks on an answer
  $('.answer').on('click', function () {
    // Visually highlight the answer
    $(this).addClass('selected')

    // Capture the user's answer selection
    var currentQuestion = $('body').attr('data-current-question')
    var currentQuestionCopy = $(this).attr('data-question-copy')
    var currentChosenAnswerCopy = $(this).attr('data-answer-copy')
    
    // Store the user's answer
    userJourney[currentQuestionCopy] = currentChosenAnswerCopy

    // Hide current question
    $('.question[data-question-id="' + currentQuestion + '"]').removeClass('active')

    // Update current question
    userJourney['Current Question'] = parseInt(currentQuestion) + 1

    // Update helper on the DOM
    $('body').attr('data-current-question', userJourney['Current Question'])

    // Reveal next question
    $('.question[data-question-id="' + userJourney['Current Question'] + '"]').addClass('active')

    // Scroll user is not scrolled to top >> Scroll them to the top
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({scrollTop: 0}, 250)
    }

    // IF user has answered questions >> Calculate result + Populate the Form component + Reveal result
    if (userJourney['Current Question'] === 6) {
      userJourney['Current Question'] = 'Result'
      $('body').attr('data-current-question', userJourney['Current Question'])
      calculateResult()
      revealResult()
    }
  })

  // User clicks on "previous" button
  $('.navigation-section').on('click', '.previous-question-trigger--js', function () {
    // Grab current question
    var currentQuestion = $('body').attr('data-current-question')

    // Unselect current question's answer
    $('.question[data-question-id="' + userJourney['Current Question'] + '"] .answer.selected').removeClass('active')

    // Hide current question
    $('.question[data-question-id="' + currentQuestion + '"]').removeClass('active')

    // Update current question
    userJourney['Current Question'] = parseInt(currentQuestion) - 1

    // Update helper on the DOM
    $('body').attr('data-current-question', userJourney['Current Question'])

    // Reveal next question
    $('.question[data-question-id="' + userJourney['Current Question'] + '"]').addClass('active')

    // Scroll user is not scrolled to top >> Scroll them to the top
    if ($(window).scrollTop() !== 0) {
      $('html, body').animate({scrollTop: 0}, 250)
    }

    // IF user goes back multiple questions >> Reset skipped answers
    $('.question .answer.selected').each(function(index, selectedAnswer) {
      var selectedAnswersQuestion = parseInt($(selectedAnswer).attr('data-question-id'))
      if (window.userJourney['Current Question'] < selectedAnswersQuestion) { 
        $(selectedAnswer).removeClass('selected')
      }
    })
  })

  // User clicks on "restart" button
  $('.navigation-section').on('click', '.restart-quiz-trigger--js', function () {
    // Reset the user's journey
    window.userJourney = {
      'Current Question' : 1,
      'Q1 - Hair Length' : '',
      'Q2 - Hair Type' : '',
      'Q3 - Hair Concern' : '',
      'Q4 - Hair Dye' : '',
      'Q5 - Hair Goal' : '',
      'Result - Shampoo' : '',
      'Result - Conditioner' : '',
      'Result - Intensive' : ''
    }

    $('.result-section').removeClass('active')
    $('.answer').removeClass('selected')
    $('body').attr('data-current-question', '1')
    $('.question-section').addClass('active')
    $('.question').removeClass('active')
    $('.question[data-question-id="1"]').addClass('active')
    $('.progress-bar-section').addClass('active')
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