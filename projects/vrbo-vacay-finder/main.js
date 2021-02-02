// -- Page Selectors --
var landingPage = 'page_4507129996603'
var resultPage  = 'page_1605796819397'

// -- Form Selectors --
var selectorForm      = 'sign_up_6857739858073'
var selectorQ1        = 'text_393694179548'
var selectorQ2        = 'text_4375090300170'
var selectorQ3        = 'text_9275789133583'
var selectorQ4        = 'text_7562505248672'
var selectorResult    = 'text_5630381687558'
var selectorURL       = 'text_7800833783472'
var selectorFirstName = 'first_3117806442273'
var selectorLastName  = 'last_8591412903347'
var selectorEmail     = 'email_address_798477509012'

// -- Tracking the user's journey --
window.userJourney = {
  'Q1: Region'      : '',
  'Q2: Season'      : '',
  'Q3: Setting'     : '',
  'Q4: Style'       : '',
  'Result'          : '',
  'User First Name' : '',
  'User Last Name'  : '',
  'User Email'      : '',
  'User Restart'    : false
}

// -- Result Bank --
var resultBank = {
  'Northeast ; Fall ; Beach ; Pure relaxation'           : 'Cape Cod, MA',
  'Northeast ; Fall ; Beach ; Non-stop activities'       : 'Ocean City, NJ',
  'Northeast ; Fall ; Beach ; A mix of both'             : 'Bar Harbor, ME',
  'Northeast ; Fall ; City ; Pure relaxation'            : 'Philadelphia, PA',
  'Northeast ; Fall ; City ; Non-stop activities'        : 'New York, NY',
  'Northeast ; Fall ; City ; A mix of both'              : 'Washington, DC',
  'Northeast ; Fall ; Lake ; Pure relaxation'            : 'Saratoga Springs, NY',
  'Northeast ; Fall ; Lake ; Non-stop activities'        : 'Pocono Mountains, PA',
  'Northeast ; Fall ; Lake ; A mix of both'              : 'Pocono Mountains, PA',
  'Northeast ; Fall ; Mountains ; Pure relaxation'       : 'White Mountains, NH',
  'Northeast ; Fall ; Mountains ; Non-stop activities'   : 'Pocono Mountains, PA',
  'Northeast ; Fall ; Mountains ; A mix of both'         : 'Pocono Mountains, PA',
  'Northeast ; Winter ; Beach ; Pure relaxation'         : 'Cape Cod, MA',
  'Northeast ; Winter ; Beach ; Non-stop activities'     : 'Ocean City, NJ',
  'Northeast ; Winter ; Beach ; A mix of both'           : 'Cape Cod, MA',
  'Northeast ; Winter ; City ; Pure relaxation'          : 'Annapolis, MD',
  'Northeast ; Winter ; City ; Non-stop activities'      : 'New York, NY',
  'Northeast ; Winter ; City ; A mix of both'            : 'Annapolis, MD',
  'Northeast ; Winter ; Lake ; Pure relaxation'          : 'Saratoga Springs, NY',
  'Northeast ; Winter ; Lake ; Non-stop activities'      : 'Pocono Mountains, PA',
  'Northeast ; Winter ; Lake ; A mix of both'            : 'Lake George,  NY',
  'Northeast ; Winter ; Mountains ; Pure relaxation'     : 'White Mountains, NH',
  'Northeast ; Winter ; Mountains ; Non-stop activities' : 'Pocono Mountains, PA',
  'Northeast ; Winter ; Mountains ; A mix of both'       : 'Pocono Mountains, PA',
  'Northeast ; Spring ; Beach ; Pure relaxation'         : 'Cape Cod, MA',
  'Northeast ; Spring ; Beach ; Non-stop activities'     : 'Ocean City, NJ',
  'Northeast ; Spring ; Beach ; A mix of both'           : 'Bar Harbor, ME',
  'Northeast ; Spring ; City ; Pure relaxation'          : 'Philadelphia, PA',
  'Northeast ; Spring ; City ; Non-stop activities'      : 'New York, NY',
  'Northeast ; Spring ; City ; A mix of both'            : 'Washington, DC',
  'Northeast ; Spring ; Lake ; Pure relaxation'          : 'Saratoga Springs, NY',
  'Northeast ; Spring ; Lake ; Non-stop activities'      : 'Pocono Mountains, PA',
  'Northeast ; Spring ; Lake ; A mix of both'            : 'Lake George,  NY',
  'Northeast ; Spring ; Mountains ; Pure relaxation'     : 'White Mountains, NH',
  'Northeast ; Spring ; Mountains ; Non-stop activities' : 'Pocono Mountains, PA',
  'Northeast ; Spring ; Mountains ; A mix of both'       : 'Pocono Mountains, PA',
  'Northeast ; Summer ; Beach ; Pure relaxation'         : 'Cape Cod, MA',
  'Northeast ; Summer ; Beach ; Non-stop activities'     : 'Ocean City, NJ',
  'Northeast ; Summer ; Beach ; A mix of both'           : 'Bar Harbor, ME',
  'Northeast ; Summer ; City ; Pure relaxation'          : 'Annapolis, MD',
  'Northeast ; Summer ; City ; Non-stop activities'      : 'Washington, DC',
  'Northeast ; Summer ; City ; A mix of both'            : 'Philadelphia, PA',
  'Northeast ; Summer ; Lake ; Pure relaxation'          : 'Saratoga Springs, NY',
  'Northeast ; Summer ; Lake ; Non-stop activities'      : 'Pocono Mountains, PA',
  'Northeast ; Summer ; Lake ; A mix of both'            : 'Lake George,  NY',
  'Northeast ; Summer ; Mountains ; Pure relaxation'     : 'White Mountains, NH',
  'Northeast ; Summer ; Mountains ; Non-stop activities' : 'Pocono Mountains, PA',
  'Northeast ; Summer ; Mountains ; A mix of both'       : 'Pocono Mountains, PA',
  'Southeast ; Fall ; Beach ; Pure relaxation'           : 'Miramar Beach, FL',
  'Southeast ; Fall ; Beach ; Non-stop activities'       : 'Rosemary Beach, FL',
  'Southeast ; Fall ; Beach ; A mix of both'             : 'Gulf Shores, AL',
  'Southeast ; Fall ; City ; Pure relaxation'            : 'Asheville, NC',
  'Southeast ; Fall ; City ; Non-stop activities'        : 'Nashville, TN',
  'Southeast ; Fall ; City ; A mix of both'              : 'New Orleans, LA',
  'Southeast ; Fall ; Lake ; Pure relaxation'            : 'Hot Springs, AR',
  'Southeast ; Fall ; Lake ; Non-stop activities'        : 'Seneca, SC',
  'Southeast ; Fall ; Lake ; A mix of both'              : 'Hot Springs, AR',
  'Southeast ; Fall ; Mountains ; Pure relaxation'       : 'Asheville, NC',
  'Southeast ; Fall ; Mountains ; Non-stop activities'   : 'Pigeon Forge, TN',
  'Southeast ; Fall ; Mountains ; A mix of both'         : 'Pigeon Forge, TN',
  'Southeast ; Winter ; Beach ; Pure relaxation'         : 'Panama City Beach, FL',
  'Southeast ; Winter ; Beach ; Non-stop activities'     : 'Charleston, SC',
  'Southeast ; Winter ; Beach ; A mix of both'           : 'Charleston, SC',
  'Southeast ; Winter ; City ; Pure relaxation'          : 'Charleston, SC',
  'Southeast ; Winter ; City ; Non-stop activities'      : 'New Orleans, LA',
  'Southeast ; Winter ; City ; A mix of both'            : 'Nashville, TN',
  'Southeast ; Winter ; Lake ; Pure relaxation'          : 'Hot Springs, AR',
  'Southeast ; Winter ; Lake ; Non-stop activities'      : 'Seneca, SC',
  'Southeast ; Winter ; Lake ; A mix of both'            : 'Hot Springs, AR',
  'Southeast ; Winter ; Mountains ; Pure relaxation'     : 'Asheville, NC',
  'Southeast ; Winter ; Mountains ; Non-stop activities' : 'Pigeon Forge, TN',
  'Southeast ; Winter ; Mountains ; A mix of both'       : 'Pigeon Forge, TN',
  'Southeast ; Spring ; Beach ; Pure relaxation'         : 'Myrtle Beach, SC',
  'Southeast ; Spring ; Beach ; Non-stop activities'     : 'Rosemary Beach, FL',
  'Southeast ; Spring ; Beach ; A mix of both'           : 'Gulf Shores, AL',
  'Southeast ; Spring ; City ; Pure relaxation'          : 'Charleston, SC',
  'Southeast ; Spring ; City ; Non-stop activities'      : 'New Orleans, LA',
  'Southeast ; Spring ; City ; A mix of both'            : 'Nashville, TN',
  'Southeast ; Spring ; Lake ; Pure relaxation'          : 'Hot Springs, AR',
  'Southeast ; Spring ; Lake ; Non-stop activities'      : 'Seneca, SC',
  'Southeast ; Spring ; Lake ; A mix of both'            : 'Hot Springs, AR',
  'Southeast ; Spring ; Mountains ; Pure relaxation'     : 'Asheville, NC',
  'Southeast ; Spring ; Mountains ; Non-stop activities' : 'Pigeon Forge, TN',
  'Southeast ; Spring ; Mountains ; A mix of both'       : 'Pigeon Forge, TN',
  'Southeast ; Summer ; Beach ; Pure relaxation'         : 'Myrtle Beach, SC',
  'Southeast ; Summer ; Beach ; Non-stop activities'     : 'Rosemary Beach, FL',
  'Southeast ; Summer ; Beach ; A mix of both'           : 'Gulf Shores, AL',
  'Southeast ; Summer ; City ; Pure relaxation'          : 'Asheville, NC',
  'Southeast ; Summer ; City ; Non-stop activities'      : 'Charleston, SC',
  'Southeast ; Summer ; City ; A mix of both'            : 'Asheville, NC',
  'Southeast ; Summer ; Lake ; Pure relaxation'          : 'Hot Springs, AR',
  'Southeast ; Summer ; Lake ; Non-stop activities'      : 'Seneca, SC',
  'Southeast ; Summer ; Lake ; A mix of both'            : 'Hot Springs, AR',
  'Southeast ; Summer ; Mountains ; Pure relaxation'     : 'Asheville, NC',
  'Southeast ; Summer ; Mountains ; Non-stop activities' : 'Pigeon Forge, TN',
  'Southeast ; Summer ; Mountains ; A mix of both'       : 'Pigeon Forge, TN',
  'Midwest ; Fall ; Beach ; Pure relaxation'             : 'Door County, WI',
  'Midwest ; Fall ; Beach ; Non-stop activities'         : 'Indian River, MI',
  'Midwest ; Fall ; Beach ; A mix of both'               : 'Indian River, MI',
  'Midwest ; Fall ; City ; Pure relaxation'              : 'Minneapolis, MN',
  'Midwest ; Fall ; City ; Non-stop activities'          : 'Chicago, IL',
  'Midwest ; Fall ; City ; A mix of both'                : 'Chicago, IL',
  'Midwest ; Fall ; Lake ; Pure relaxation'              : 'Nisswa, MN',
  'Midwest ; Fall ; Lake ; Non-stop activities'          : 'Lake of the Ozarks, MO',
  'Midwest ; Fall ; Lake ; A mix of both'                : 'Lake of the Ozarks, MO',
  'Midwest ; Fall ; Mountains ; Pure relaxation'         : 'Hocking Hills, OH',
  'Midwest ; Fall ; Mountains ; Non-stop activities'     : 'Lake of the Ozarks, MO',
  'Midwest ; Fall ; Mountains ; A mix of both'           : 'Hocking Hills, OH',
  'Midwest ; Winter ; Beach ; Pure relaxation'           : 'Door County, WI',
  'Midwest ; Winter ; Beach ; Non-stop activities'       : 'Traverse City, MI',
  'Midwest ; Winter ; Beach ; A mix of both'             : 'Door County, WI',
  'Midwest ; Winter ; City ; Pure relaxation'            : 'Minneapolis, MN',
  'Midwest ; Winter ; City ; Non-stop activities'        : 'Chicago, IL',
  'Midwest ; Winter ; City ; A mix of both'              : 'Chicago, IL',
  'Midwest ; Winter ; Lake ; Pure relaxation'            : 'Nisswa, MN',
  'Midwest ; Winter ; Lake ; Non-stop activities'        : 'Lake of the Ozarks, MO',
  'Midwest ; Winter ; Lake ; A mix of both'              : 'Lake of the Ozarks, MO',
  'Midwest ; Winter ; Mountains ; Pure relaxation'       : 'Hocking Hills, OH',
  'Midwest ; Winter ; Mountains ; Non-stop activities'   : 'Door County, WI',
  'Midwest ; Winter ; Mountains ; A mix of both'         : 'Door County, WI',
  'Midwest ; Spring ; Beach ; Pure relaxation'           : 'Door County, WI',
  'Midwest ; Spring ; Beach ; Non-stop activities'       : 'Traverse City, MI',
  'Midwest ; Spring ; Beach ; A mix of both'             : 'Traverse City, MI',
  'Midwest ; Spring ; City ; Pure relaxation'            : 'Minneapolis, MN',
  'Midwest ; Spring ; City ; Non-stop activities'        : 'Chicago, IL',
  'Midwest ; Spring ; City ; A mix of both'              : 'Chicago, IL',
  'Midwest ; Spring ; Lake ; Pure relaxation'            : 'Nisswa, MN',
  'Midwest ; Spring ; Lake ; Non-stop activities'        : 'Lake of the Ozarks, MO',
  'Midwest ; Spring ; Lake ; A mix of both'              : 'Lake of the Ozarks, MO',
  'Midwest ; Spring ; Mountains ; Pure relaxation'       : 'Hocking Hills, OH',
  'Midwest ; Spring ; Mountains ; Non-stop activities'   : 'Lake of the Ozarks, MO',
  'Midwest ; Spring ; Mountains ; A mix of both'         : 'Hocking Hills, OH',
  'Midwest ; Summer ; Beach ; Pure relaxation'           : 'Door County, WI',
  'Midwest ; Summer ; Beach ; Non-stop activities'       : 'Traverse City, MI',
  'Midwest ; Summer ; Beach ; A mix of both'             : 'Traverse City, MI',
  'Midwest ; Summer ; City ; Pure relaxation'            : 'Minneapolis, MN',
  'Midwest ; Summer ; City ; Non-stop activities'        : 'Chicago, IL',
  'Midwest ; Summer ; City ; A mix of both'              : 'Chicago, IL',
  'Midwest ; Summer ; Lake ; Pure relaxation'            : 'Nisswa, MN',
  'Midwest ; Summer ; Lake ; Non-stop activities'        : 'Lake of the Ozarks, MO',
  'Midwest ; Summer ; Lake ; A mix of both'              : 'Lake of the Ozarks, MO',
  'Midwest ; Summer ; Mountains ; Pure relaxation'       : 'Hocking Hills, OH',
  'Midwest ; Summer ; Mountains ; Non-stop activities'   : 'Lake of the Ozarks, MO',
  'Midwest ; Summer ; Mountains ; A mix of both'         : 'Hocking Hills, OH',
  'Southwest ; Fall ; Beach ; Pure relaxation'           : 'Galveston, TX',
  'Southwest ; Fall ; Beach ; Non-stop activities'       : 'South Padre Island, TX',
  'Southwest ; Fall ; Beach ; A mix of both'             : 'Galveston, TX',
  'Southwest ; Fall ; City ; Pure relaxation'            : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Fall ; City ; Non-stop activities'        : 'San Antonio, TX',
  'Southwest ; Fall ; City ; A mix of both'              : 'San Antonio, TX',
  'Southwest ; Fall ; Lake ; Pure relaxation'            : 'Broken Bow, OK',
  'Southwest ; Fall ; Lake ; Non-stop activities'        : 'Lake Travis, TX',
  'Southwest ; Fall ; Lake ; A mix of both'              : 'Lake Travis, TX',
  'Southwest ; Fall ; Mountains ; Pure relaxation'       : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Fall ; Mountains ; Non-stop activities'   : 'Flagstaff, AZ',
  'Southwest ; Fall ; Mountains ; A mix of both'         : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Winter ; Beach ; Pure relaxation'         : 'Galveston, TX',
  'Southwest ; Winter ; Beach ; Non-stop activities'     : 'South Padre Island, TX',
  'Southwest ; Winter ; Beach ; A mix of both'           : 'Galveston, TX',
  'Southwest ; Winter ; City ; Pure relaxation'          : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Winter ; City ; Non-stop activities'      : 'San Antonio, TX',
  'Southwest ; Winter ; City ; A mix of both'            : 'San Antonio, TX',
  'Southwest ; Winter ; Lake ; Pure relaxation'          : 'Broken Bow, OK',
  'Southwest ; Winter ; Lake ; Non-stop activities'      : 'Lake Travis, TX',
  'Southwest ; Winter ; Lake ; A mix of both'            : 'Lake Travis, TX',
  'Southwest ; Winter ; Mountains ; Pure relaxation'     : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Winter ; Mountains ; Non-stop activities' : 'Flagstaff, AZ',
  'Southwest ; Winter ; Mountains ; A mix of both'       : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Spring ; Beach ; Pure relaxation'         : 'Galveston, TX',
  'Southwest ; Spring ; Beach ; Non-stop activities'     : 'South Padre Island, TX',
  'Southwest ; Spring ; Beach ; A mix of both'           : 'Galveston, TX',
  'Southwest ; Spring ; City ; Pure relaxation'          : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Spring ; City ; Non-stop activities'      : 'San Antonio, TX',
  'Southwest ; Spring ; City ; A mix of both'            : 'Santa Fe, NM',
  'Southwest ; Spring ; Lake ; Pure relaxation'          : 'Broken Bow, OK',
  'Southwest ; Spring ; Lake ; Non-stop activities'      : 'Lake Travis, TX',
  'Southwest ; Spring ; Lake ; A mix of both'            : 'Lake Travis, TX',
  'Southwest ; Spring ; Mountains ; Pure relaxation'     : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Spring ; Mountains ; Non-stop activities' : 'Flagstaff, AZ',
  'Southwest ; Spring ; Mountains ; A mix of both'       : 'Phoenix & Scottsdale, AZ',
  'Southwest ; Summer ; Beach ; Pure relaxation'         : 'Galveston, TX',
  'Southwest ; Summer ; Beach ; Non-stop activities'     : 'South Padre Island, TX',
  'Southwest ; Summer ; Beach ; A mix of both'           : 'Galveston, TX',
  'Southwest ; Summer ; City ; Pure relaxation'          : 'Santa Fe, NM',
  'Southwest ; Summer ; City ; Non-stop activities'      : 'Santa Fe, NM',
  'Southwest ; Summer ; City ; A mix of both'            : 'Santa Fe, NM',
  'Southwest ; Summer ; Lake ; Pure relaxation'          : 'Broken Bow, OK',
  'Southwest ; Summer ; Lake ; Non-stop activities'      : 'Lake Travis, TX',
  'Southwest ; Summer ; Lake ; A mix of both'            : 'Lake Travis, TX',
  'Southwest ; Summer ; Mountains ; Pure relaxation'     : 'Flagstaff, AZ',
  'Southwest ; Summer ; Mountains ; Non-stop activities' : 'Flagstaff, AZ',
  'Southwest ; Summer ; Mountains ; A mix of both'       : 'Flagstaff, AZ',
  'West ; Fall ; Beach ; Pure relaxation'                : 'Monterey County, CA',
  'West ; Fall ; Beach ; Non-stop activities'            : 'Santa Cruz, CA',
  'West ; Fall ; Beach ; A mix of both'                  : 'San Luis Obispo, CA',
  'West ; Fall ; City ; Pure relaxation'                 : 'San Diego, CA',
  'West ; Fall ; City ; Non-stop activities'             : 'San Francisco, CA',
  'West ; Fall ; City ; A mix of both'                   : 'Seattle, WA',
  'West ; Fall ; Lake ; Pure relaxation'                 : 'Mammoth Lakes, CA',
  'West ; Fall ; Lake ; Non-stop activities'             : 'South Lake Tahoe, CA',
  'West ; Fall ; Lake ; A mix of both'                   : 'South Lake Tahoe, CA',
  'West ; Fall ; Mountains ; Pure relaxation'            : 'Mammoth Lakes, CA',
  'West ; Fall ; Mountains ; Non-stop activities'        : 'Breckenridge/Keystone/Copper Mountain',
  'West ; Fall ; Mountains ; A mix of both'              : 'South Lake Tahoe, CA',
  'West ; Winter ; Beach ; Pure relaxation'              : 'Monterey County, CA',
  'West ; Winter ; Beach ; Non-stop activities'          : 'Santa Cruz, CA',
  'West ; Winter ; Beach ; A mix of both'                : 'San Luis Obispo, CA',
  'West ; Winter ; City ; Pure relaxation'               : 'San Diego, CA',
  'West ; Winter ; City ; Non-stop activities'           : 'San Francisco, CA',
  'West ; Winter ; City ; A mix of both'                 : 'Las Vegas, NV',
  'West ; Winter ; Lake ; Pure relaxation'               : 'Mammoth Lakes, CA',
  'West ; Winter ; Lake ; Non-stop activities'           : 'South Lake Tahoe, CA',
  'West ; Winter ; Lake ; A mix of both'                 : 'South Lake Tahoe, CA',
  'West ; Winter ; Mountains ; Pure relaxation'          : 'Steamboat Springs, CO',
  'West ; Winter ; Mountains ; Non-stop activities'      : 'Breckenridge/Keystone/Copper Mountain',
  'West ; Winter ; Mountains ; A mix of both'            : 'Steamboat Springs, CO',
  'West ; Spring ; Beach ; Pure relaxation'              : 'Orange County, CA',
  'West ; Spring ; Beach ; Non-stop activities'          : 'San Diego, CA',
  'West ; Spring ; Beach ; A mix of both'                : 'Orange County, CA',
  'West ; Spring ; City ; Pure relaxation'               : 'Los Angeles, CA',
  'West ; Spring ; City ; Non-stop activities'           : 'San Francisco, CA',
  'West ; Spring ; City ; A mix of both'                 : 'Las Vegas, NV',
  'West ; Spring ; Lake ; Pure relaxation'               : 'Mammoth Lakes, CA',
  'West ; Spring ; Lake ; Non-stop activities'           : 'South Lake Tahoe, CA',
  'West ; Spring ; Lake ; A mix of both'                 : 'South Lake Tahoe, CA',
  'West ; Spring ; Mountains ; Pure relaxation'          : 'Bend, OR',
  'West ; Spring ; Mountains ; Non-stop activities'      : 'Breckenridge/Keystone/Copper Mountain',
  'West ; Spring ; Mountains ; A mix of both'            : 'South Lake Tahoe, CA',
  'West ; Summer ; Beach ; Pure relaxation'              : 'Monterey County, CA',
  'West ; Summer ; Beach ; Non-stop activities'          : 'Orange County, CA',
  'West ; Summer ; Beach ; A mix of both'                : 'Lincoln City, OR',
  'West ; Summer ; City ; Pure relaxation'               : 'Los Angeles, CA',
  'West ; Summer ; City ; Non-stop activities'           : 'San Francisco, CA',
  'West ; Summer ; City ; A mix of both'                 : 'Seattle, WA',
  'West ; Summer ; Lake ; Pure relaxation'               : 'Mammoth Lakes, CA',
  'West ; Summer ; Lake ; Non-stop activities'           : 'South Lake Tahoe, CA',
  'West ; Summer ; Lake ; A mix of both'                 : 'South Lake Tahoe, CA',
  'West ; Summer ; Mountains ; Pure relaxation'          : 'Bend, OR',
  'West ; Summer ; Mountains ; Non-stop activities'      : 'Breckenridge/Keystone/Copper Mountain',
  'West ; Summer ; Mountains ; A mix of both'            : 'Bend, OR'
}

// -- Result Details Bank --
var resultDetailsBank = {
  'Bar Harbor, ME' : {
    'Headline'        : 'Make a break for the Maine coast!',
    'Description'     : 'The seashore along Maine’s fabled Frenchman Bay is yours to explore. Next door to Acadia National Park, this idyllic town on Mount Desert Island is a haven for outdoor enthusiasts craving ocean and mountain views. Once a summer playground for fancy 1900s folk, Bar Harbor has become a beacon for all families looking for a little R&R to go alongside their museum visits, boat rides, and nature hikes.',
    'Image'           : 'images/result-images/all_barharbor.jpg',
    'Tags'            : [ "Northeast", "Fall", "Spring", "Summer", "Beach", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/maine/acadia/mount-desert-island/bar-harbor',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:bar-harbor-maine-united-states-of-america?adultsCount=4&petIncluded=false'
  },
  'Saratoga Springs, NY' : {
    'Headline'        : 'Giddy up to Saratoga Springs!',
    'Description'     : 'Race off to this leafy hamlet at the base of the Adirondacks. The draw is no longer just the famous horse-racing scene or the healing hot springs, but the community of artists who’ve made it a lively creative hub. Hike until your heart’s content or just absorb the dreamy landscape. When you’ve gotten a healthy dose of fresh air, set off for an art gallery, a theater, or an excellent local eatery.',
    'Image'           : 'images/result-images/all_saratogasprings.jpg',
    'Tags'            : [ "Northeast", "Fall", "Winter", "Spring", "Summer", "Lake", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-york/capital-saratoga/saratoga-springs',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:saratoga-springs-new-york-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Pocono Mountains, PA' : {
    'Headline'        : 'Get pumped for the Poconos!',
    'Description'     : 'The great outdoors is yours. This picture-perfect escape among the mountains, valleys, waterfalls, lakes, and rivers of northeastern Pennsylvania is ideal for families who love to be outside. Biking, hiking, fly fishing, horseback riding, skiing, whitewater rafting, you name it, it’s possible in this neck of the woods. There are also year-round festivals, concerts, and casinos if you’re feeling lucky.',
    'Image'           : 'images/result-images/all_poconomountains.jpg',
    'Tags'            : [ "Northeast", "Fall", "Winter", "Spring", "Summer", "Lake", "Mountains", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/pennsylvania/northeastern-mountains/poconos',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:pocono-mountain-lake-bushkill-pennsylvania-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'White Mountains, NH' : {
    'Headline'        : 'Take a trek up the White Mountains!',
    'Description'     : 'The natural wonders of New Hampshire’s rugged mountain range are calling. Just soak up the scenery — caves, gorges, flumes, oh my! — or dabble in all the outdoorsy offerings. Zipline, anyone? If your crew wants more action, there’s plenty to entertain, including Story Land children’s theme park and a chance to choo-choo through these stunning peaks on the historic Mount Washington Cog Railway.',
    'Image'           : 'images/result-images/all_whitemountains.jpg',
    'Tags'            : [ "Northeast", "Fall", "Winter", "Spring", "Summer", "Lake", "Mountains", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-hampshire/white-mountains',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:white-mountains-new-hampshire-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Lake George,  NY' : {
    'Headline'        : 'Take a break in Lake George!',
    'Description'     : 'Sister town to Saratoga Springs, this multi-island village nestled in the Adirondacks is a favorite escape for New Yorkers. The mountain peaks and the crystalline lake, along with the historic charm, make it a natural getaway for families seeking serenity and activity at the same time. Think adventure courses, biking, hiking, parasailing, steamboat cruises, theme parks, military sites, and more.',
    'Image'           : 'images/result-images/all_lakegeorge.jpg',
    'Tags'            : [ "Northeast", "Winter", "Spring", "Summer", "Lake", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-york/adirondack-mountains/lake-george',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:lake-george-(and-vicinity)-new-york-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Cape Cod, MA' : {
    'Headline'        : 'Cape Cod is calling!',
    'Description'     : 'Pack your bags for Massachusetts’ delightfully craggy coastline. With character to spare, and enough rustic charm to please the saltiest of sailors, the Cape boasts awesome beaches, fun cultural activities, and famously glorious fried fish. Every season on this peninsula is scenic, even cozy winter landscapes are a dream, but spring and summer are wicked picturesque.',
    'Image'           : 'images/result-images/all_capecod.jpg',
    'Tags'            : [ "Northeast", "Spring", "Summer", "Beach", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/massachusetts/cape-cod',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:cape-cod-massachusetts-united-states-of-america/filter:27?adultsCount=4&petIncluded=true'
  },
  'Ocean City, NJ' : {
    'Headline'        : 'Head for the Jersey Shore!',
    'Description'     : 'This storied New Jersey beach town is just the ticket. Think children frolicking along the famous boardwalk, not MTV teens gone wild. From the buzz of theme park-style amusements and watersport options lining the beachfront and bayfront to golf, tennis, biking, and shopping, there’s something for everyone. Summer is a classic time to visit, but Ocean City is open for fun-seeking families year-round.',
    'Image'           : 'images/result-images/all_oceancity.jpg',
    'Tags'            : [ "Northeast", "Spring", "Summer", "Beach", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-jersey/southern-shore/ocean-city',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:ocean-city-new-jersey-united-states-of-america/filter:27?adultsCount=4&petIncluded=true'
  },
  'Miramar Beach, FL' : {
    'Headline'        : 'Make waves in Miramar Beach!',
    'Description'     : '30A all the way. South Walton County, aka Florida’s Emerald Coast, is one of the country’s top destinations for laid-back family beach vacays. And the Miramar Beach neighborhood is no exception. There’s certainly plenty of action: shopping, golf, tennis, swimming, jet-ski riding, and, of course, beach volleyball. But let’s be honest, you’re here to lounge in the sun and help build amazing sandcastles.',
    'Image'           : 'images/result-images/all_miramarbeach.jpg',
    'Tags'            : [ "Southeast", "Fall", "Beach", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/florida/north-west/destin/scenic-gulf-dr-east/miramar-beach',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:miramar-beach-florida-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Rosemary Beach, FL' : {
    'Headline'        : 'Shine on in Rosemary Beach!',
    'Description'     : '30A all the way. South Walton County, aka Florida’s Emerald Coast, is one of the country’s dreamiest destinations for beach vacays. And Rosemary Beach is the jewel in the crown. Known for being exceptionally family-friendly and well-designed, it’s lined with pastel-toned houses, ghost-white sand, crystalline waters, and chic restaurants and shops. Families can’t help but love this Sunshine State sparkler.',
    'Image'           : 'images/result-images/all_rosemarybeach.jpg',
    'Tags'            : [ "Southeast", "Fall", "Spring", "Summer", "Beach", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/florida/north-west/beaches-of-south-walton/rosemary-beach',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:rosemary-beach-panama-city-beach-walton-county-florida-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Gulf Shores, AL' : {
    'Headline'        : 'Gulf Shores is all yours!',
    'Description'     : 'Alabama’s premiere stretch of shoreline is calling. Think white sand, blue water, and tons of options if you’re looking for entertainment and outdoor activities — from dolphin cruises, deep-sea diving, and parasailing to golf, shopping, and nightlife. But there are also miles and miles of pristine beach just waiting for families looking to simply power down, lounge in the sun, and watch the tides roll in.',
    'Image'           : 'images/result-images/all_gulfshores.jpg',
    'Tags'            : [ "Southeast", "Fall", "Spring", "Summer", "Beach", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/alabama/gulf-shores',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:gulf-shores-alabama-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Hot Springs, AR' : {
    'Headline'        : 'Chill out in Hot Springs!',
    'Description'     : 'Let the vacation healing begin. Travelers have flocked to this mountain hamlet to soak in its ancient thermal waters since the mid-1800s. Arkansas’ Hot Springs National Park is a gorgeous natural oasis, now boasting bathhouses and historic sites mixed in with pocket art parks, epic mountain vistas, and, of course, modern spas — the perfect accent to a family hike through a forest or a fishing expedition.',
    'Image'           : 'images/result-images/all_hotsprings.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "Summer", "Lake", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/arkansas/hot-springs',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:hot-springs-arkansas-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Seneca, SC' : {
    'Headline'        : 'Next stop: Seneca, SC!',
    'Description'     : 'What started as a hopping railroad outpost in the foothills of Blue Ridge Mountains is now a charming South Carolina city known for boating, sailing, fishing, kayaking, paddleboarding, picnicking, and more, on scenic Lake Keowee. If your crew tires of water sports, the downtown historic district counts Ram Cat Alley, a block of fun restaurants and shops, and the Blue Ridge Arts Center among its amusements.',
    'Image'           : 'images/result-images/all_seneca.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "Summer", "Lake", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/south-carolina/upcountry/lake-keowee/seneca',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:seneca-south-carolina-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Asheville, NC' : {
    'Headline'        : 'Awesome luck! Asheville it is.',
    'Description'     : 'The darling of North Carolina’s Blue Ridge Mountains should be your fam’s next hop. Asheville is one of the coolest and most versatile locales anywhere in the U.S. This scenery-packed city is known for its artistic community, craft beer, booming restaurant scene, live music fests, and epic mountain living. It’s also known for just being super-chill. Bonus: Summers here are temperate relative to other regional hot spots.',
    'Image'           : 'images/result-images/all_asheville.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "Summer", "City", "Mountains", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/north-carolina/smoky-mountains/asheville',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:asheville-north-carolina-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Pigeon Forge, TN' : {
    'Headline'        : 'Pack your bags for Pigeon Forge!',
    'Description'     : 'Your getaway spot happens to be the gateway to Tennessee’s Great Smoky Mountains. Fresh mountain air, staggeringly beautiful landscapes, and a hot tub for every picture-perfect cabin all make this crazy-relaxing setting feel like heaven. Pigeon Forge is also a place with lots of activities! Think hiking, mini-golfing, go-karting, and whitewater rafting, to name a few. And you’ll always love Dollywood.',
    'Image'           : 'images/result-images/all_pigeonforge.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "Summer", "Mountains", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/tennessee/east/pigeon-forge',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:pigeon-forge-tennessee-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Panama City Beach, FL' : {
    'Headline'        : 'Panama City Beach or BUST!',
    'Description'     : 'Florida’s favorite beach is calling your family’s name. PCB is so much more than spring breakers on the loose. It’s an awesome spot for all ages, with plenty of family-friendly activities and entertainment. Explore two state parks, go paddleboarding, tour Ripley’s Believe It or Not!, take advantage of the wide range of restaurants, or simply build sandcastles together before catching an incredible sunset.',
    'Image'           : 'images/result-images/all_panamacitybeach.jpg',
    'Tags'            : [ "Southeast", "Winter", "Beach", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/florida/north-west/panama-city-beach',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:panama-city-beach-florida-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Charleston, SC' : {
    'Headline'        : 'Go fall in love with Charleston!',
    'Description'     : 'Welcome to Southern Charm Central. We do declare, South Carolina’s lovely port city is a hot travel spot for good reasons: the food scene rules, the art and music scenes rock, the scenery itself is gorgeous, the people are friendly, and it’s packed with historic sites. Whether your crew wants to beach it and chill or hit the cobblestone streets for some laid-back fun, the whole family will swoon.',
    'Image'           : 'images/result-images/all_charleston.jpg',
    'Tags'            : [ "Southeast", "Winter", "Spring", "Summer", "Beach", "City", "Pure relaxation", "Non-Stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/south-carolina/charleston-area/charleston',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:charleston-south-carolina-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Myrtle Beach, SC' : {
    'Headline'        : 'Make a break for Myrtle Beach!',
    'Description'     : 'You’re bound for South Carolina’s storied coastline. With 60 miles of white sandy beaches, celebrity-designed golf courses aplenty, a buzzing boardwalk with the tallest Ferris wheel on the East Coast, shows, restaurants, and shops, there’s definitely action if that’s what your family’s into. But it’s also the perfect place to just lounge by the shore. Maybe throw a Frisbee around? Maybe not.',
    'Image'           : 'images/result-images/all_myrtlebeach.jpg',
    'Tags'            : [ "Southeast", "Spring", "Summer", "Beach", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/south-carolina/myrtle-beach/myrtle-beach/south/myrtle-beach-resort',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:myrtle-beach-south-carolina-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Door County, WI' : {
    'Headline'        : 'Time to explore DoCo!',
    'Description'     : 'Your getaway spot is one of the greatest in the Great Lakes. A 70-mile-long peninsula, flanked by Lake Michigan and Green Bay, Door County includes 34 islands, each with their own flavor. The mix is magnificent: jagged cliffs, beaches, crystal-clear water, parks, lighthouses, chapels, and vineyards all line the landscape. Go see all the sights, or kick back somewhere and take in the scenery. You can’t go wrong.',
    'Image'           : 'images/result-images/all_doorcounty.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "Beach", "Mountains", "Pure relaxation", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/wisconsin/wi-north-east/door-county',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:door-county-wisconsin-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Indian River, MI' : {
    'Headline'        : 'Head for Indian River!',
    'Description'     : 'The center of Northern Michigan’s celebrated Inland Waterway route is your next stop. Heaven for families who love outdoor fun — from boating, fishing, canoeing, kayaking, rafting, and tubing to awesome hiking and biking trails — Indian River is home to practically every watersport and land sport. Nearby cross-country ski trails beckon during the wintertime, and there’s fantastic wildlife viewing year-round.',
    'Image'           : 'images/result-images/all_indianriver.jpg',
    'Tags'            : [ "Midwest", "Fall", "Beach", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/michigan/northeast/burt-lake/indian-river',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:indian-river-michigan-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Nisswa, MN' : {
    'Headline'        : 'Next stop: Nisswa!',
    'Description'     : 'A small-town getaway is just the thing. Central Minnesota’s beautiful Brainerd Lakes area is ideal for families looking for great fishing, boating, hiking, and winter snow sports. Nisswa is also known for its golf courses, and bikers will love that the 100-mile-long Paul Bunyan Trail passes right through it. Be sure to visit the Ye Old Pickle Factory bar or see the Nisswa Turtle Races while you’re there.',
    'Image'           : 'images/result-images/all_nisswa.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "Lake", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/minnesota/central-mn/gull-lake/nisswa',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:nisswa-minnesota-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Lake of the Ozarks, MO' : {
    'Headline'        : 'Go big in Lake of the Ozarks!',
    'Description'     : 'Get set for big family fun on the Lake. Missouri’s rockin’ recreational retreat area borders two state parks, Lake of the Ozarks and Ha Ha Honka, and spans 17,000 acres that include woodland hiking trails and 80 miles of lakefront with popular beaches. There are tons of awesome campgrounds, caverns, natural wonders, waterparks, theme parks, museums, and restaurants surrounding this splashy town in the Ozarks.',
    'Image'           : 'images/result-images/all_lakeoftheozarks.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "Lake", "Mountains", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/missouri/lake-of-the-ozarks/lake-ozark',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:lake-of-the-ozarks-camdenton-missouri-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Hocking Hills, OH' : {
    'Headline'        : 'Head for Hocking Hills!',
    'Description'     : 'Your family will love Ohio’s magical forest. Hocking Hills State Park covers 10,000 acres of woodlands complete with caves, gorges, epic hiking trails, waterfalls, the works. When you’re not simply reveling in the great outdoors, you can take your pick of activities like archery, bird watching, canoeing, fishing, hiking, horseback riding, kayaking, rappelling, rock climbing, sledding, and ziplining.',
    'Image'           : 'images/result-images/all_hockinghills.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "Mountains", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/ohio/hocking-hills',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:the-hocking-hills-ohio-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Traverse City, MI' : {
    'Headline'        : 'Take a trip to Traverse City!',
    'Description'     : 'Get ready for greatness. This Michigan gem has won awards for its fantastic food scene and wineries, stunning scenery, and small-town livability. And the year-round outdoor activities in Traverse City are endless. Sleeping Bear Dunes National Lakeshore is famous for its breathtaking vistas, but there’s plenty of biking, hiking, fishing, snowshoeing, snowboarding, you name it, to go around all over town.',
    'Image'           : 'images/result-images/all_traversecity.jpg',
    'Tags'            : [ "Midwest", "Winter", "Spring", "Summer", "Beach", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/michigan/northwest/traverse-city',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:traverse-city-michigan-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Galveston, TX' : {
    'Headline'        : 'Follow the fun to Galveston!',
    'Description'     : 'Get ready for some beachy family fun. Texas’ historic island is hopping and laid-back at the same time, so it suits anyone’s version of a Gulf Coast vacay. Cruise along the Seawall, build sandcastles galore, jump on a ride at the Pleasure Pier, shop-stroll along the Strand, tour kid-friendly museums, visit Moody Gardens, and dine on fine fare or tasty carry-out. There’s an amusement (or two) for everyone.',
    'Image'           : 'images/result-images/all_galveston.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "Summer", "Beach", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/texas/gulf-coast/galveston',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:galveston-texas-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'South Padre Island, TX' : {
    'Headline'        : 'Soak up the fun in South Padre!',
    'Description'     : 'Woo hoo! South Padre Island is calling your crew’s name. While it’s known as a spring break hot spot, this Texas beach favorite offers super-fun activities for all ages. Some will want to go fishing, kitesurfing, wind boarding, jet skiing, horseback riding, scuba diving, or surfing, while others will be more into hitting a spa, shopping, grabbing a bite, going on a dolphin watch, or birdwatching on the bay.',
    'Image'           : 'images/result-images/all_southpadreisland.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "Summer", "Beach", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/texas/gulf-coast/south-padre-island',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:south-padre-island-texas-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Broken Bow, OK' : {
    'Headline'        : 'Break away in Broken Bow!',
    'Description'     : 'Get back to nature with a trip to southeastern Oklahoma’s piney forest. Broken Bow is known for its next-level parks and rec. Take a hike through Beavers Bend State Park, fish the Lower Fork River, boat on Broken Bow Lake, go horseback riding or hiking along the David Boren Hiking Trail, or simply peace out by amid scenic vistas filled with woodland creatures. The outdoors are great here any time of year.',
    'Image'           : 'images/result-images/all_brokenbow.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "Summer", "Lake", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/oklahoma/broken-bow',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:broken-bow-oklahoma-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Lake Travis, TX' : {
    'Headline'        : 'Ahoy there! Lake Travis awaits.',
    'Description'     : 'You should be on a boat. The jewel of the Central Texas lakefront makes for a super-cool family escape. It’s a good thing there’s plenty of Lake Travis to go around (64 miles!) for jet skiing, wake surfing, sailing, ziplining, you name it, because this freshwater spot is hot. The crystal-blue waters must enchant, and the land activities must delight, because locals and tourists alike love this splashy spot.',
    'Image'           : 'images/result-images/all_laketravis.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "Summer", "Lake", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/en-ca/vacation-rentals/united-states/texas/travis-county/lake-travis',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:lake-travis-texas-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Phoenix & Scottsdale, AZ' : {
    'Headline'        : 'The Arizona desert awaits!',
    'Description'     : 'Can you already feel those powerful desert vibes? Arizona’s sister cities, Phoenix and Scottsdale, are so close, you can experience both in one great getaway. Families looking for a blend of outdoor fun and R&R need look no further than the sunny Southwest, where golfing and hiking are right up there with spa-ing and shopping. Whether you want to zone out or get in your zone, it’s all right here for you.',
    'Image'           : 'images/result-images/all_phoenix.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "City", "Mountains", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/arizona/phoenix-area/scottsdale',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:phoenix-arizona-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Flagstaff, AZ' : {
    'Headline'        : 'Gear up for Flagstaff!',
    'Description'     : 'The gateway to the Grand Canyon is your next stop. Flagstaff may be the closest city to the park entrance, but proximity to a geological wonder isn’t all this Arizona desert fave has to offer. With a cool mountain climate that sets it apart from so many others in the region, and starry night skies that attract travelers from all over, it’s an all-season winner for any family seeking Americana, adventure, and R&R.',
    'Image'           : 'images/result-images/all_flagstaff.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "Summer", "Mountains", "Pure relaxation", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/arizona/canyon-country-northeast/flagstaff',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:flagstaff-arizona-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Monterey County, CA' : {
    'Headline'        : 'Make a break for Monterey County!',
    'Description'     : 'California’s dreamy coastline is calling. This slice of heaven on the Pacific is the perfect place for powering down and taking in the stunning scenery, one deep breath at a time. There’s plenty to see and do, but why not take advantage of one of the prettiest parts of the country and just reset together? Beach breezes, marine life, stunning forests, and blue water are all you need for serenity now.',
    'Image'           : 'images/result-images/all_montereycounty.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Summer", "Beach", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/monterey-county',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:monterey-county-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Santa Cruz, CA' : {
    'Headline'        : 'Set off for Santa Cruz!',
    'Description'     : 'Get ready for one of Northern California’s coolest family escapes. Santa Cruz offers the best of bustling beach city life around these parts, from classic seaside amusements along the legendary boardwalk and super-cool cultural offerings (it is a university town after all) to hiking around the neighboring mountains and magical Redwood forests. Active group getaways don’t get much better than this.',
    'Image'           : 'images/result-images/all_santacruz.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Beach", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/central-coast/santa-cruz',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:santa-cruz-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'San Luis Obispo, CA' : {
    'Headline'        : 'Time to go to San Luis Obispo!',
    'Description'     : 'SLO CAL it is. This city at the heart of California’s Central Coast has so much to offer travelers seeking vacation action at a chill pace. You can tour wineries, missions, museums, and galleries, surf big waves, or stroll along the sprawling beaches. You can dig into the local food scene, shop farmer’s markets, hike, bike, and, of course, recharge at one of San Luis Obispo’s spas. All at your own speed.',
    'Image'           : 'images/result-images/all_sanluisobispo.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Beach", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/central-coast/san-luis-obispo',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:san-luis-obispo-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Mammoth Lakes, CA' : {
    'Headline'        : 'Live it up in Mammoth Lakes!',
    'Description'     : 'California’s mighty Sierra Nevadas are calling. Mammoth is a dream destination any time of year. Even though it’s a draw for serious skiers and snowboarders seeking fresh powder, it’s still super-welcoming during the winter season. Fall, spring, and summer are great times to explore its beautiful valleys, crystal-clear mountain lakes, and all the natural wonders nearby, including Yosemite National Park.',
    'Image'           : 'images/result-images/all_mammothlakes.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Spring", "Summer", "Lake", "Mountains", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/gold-country-high-sierra/mammoth-mountain/mammoth-lakes',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:mammoth-lakes-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'South Lake Tahoe, CA' : {
    'Headline'        : 'Get ready for South Lake Tahoe!',
    'Description'     : 'California’s perennially hot lakefront in the Sierra Nevadas is calling. Families craving a mix of fun and R&R flock to this heavenly spot because it offers such a wide range of activities. Skiing, hiking, boating, biking, fishing, snowmobiling, sleigh-riding, shopping, spa-ing, you name it. And there’s always the buzzing restaurant-and-nightlife scene for parents who want to let their hair down a little.',
    'Image'           : 'images/result-images/all_southlaketahoe.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Spring", "Summer", "Lake", "Mountains", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/lake-tahoe-ca/south-shore/south-lake-tahoe',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:south-lake-tahoe-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Breckenridge/Keystone/Copper Mountain' : {
    'Headline'        : 'Retreat to Colorado’s Rocky Mountains!',
    'Description'     : 'Whether you’re making a break for Breck, Keystone, or Copper, rest assured these beloved ski retreats in the Colorado Rockies are fun year-round. Winter is bustling on and off the slopes with beginners, daredevils, pros, and people just there for the après-ski scene. But summer is a hot time for hikers, bikers, and all types of outdoors fans. Your family can’t go wrong any time in these magic mountains.',
    'Image'           : 'images/result-images/all_breckenridge.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Spring", "Summer", "Mountains", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/colorado/northwest/breckenridge',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:breckenridge-colorado-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Steamboat Springs, CO' : {
    'Headline'        : 'You’re headed for Steamboat Springs!',
    'Description'     : 'One of Colorado’s most magical winter wonderlands awaits. Pack your fam’s fuzzy sweaters and prepare to ski, snowboard, snowmobile, snowshoe, and hit the hot springs! This historic Rocky Mountain retreat town offers the best mix of both worlds — go-time fun on its famously fluffy powder (these slopes are skied by Olympians in training) and chill-time relaxation in the healing geothermal waters.',
    'Image'           : 'images/result-images/all_steamboatsprings.jpg',
    'Tags'            : [ "West", "Winter", "Mountains", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/colorado/northwest/steamboat-springs',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:steamboat-springs-colorado-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Orange County, CA' : {
    'Headline'        : 'The OC! You’re Cali-bound.',
    'Description'     : 'SoCal’s sunny shores are all yours. Whether your family is full of big-wave surfers or big-time loungers, everyone will be happy in Orange County. Famous for its swanky shops, Knott’s Berry Farm, and a certain theme park in inland Anaheim, it’s really along the prime stretches of California beachfront that The OC shines. So gear up for water sports, or plant yourself in the sand, but expect a sweet escape.',
    'Image'           : 'images/result-images/all_orangecounty.jpg',
    'Tags'            : [ "West", "Spring", "Summer", "Beach", "Pure relaxation", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/orange-county',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:orange-county-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'San Diego, CA' : {
    'Headline'        : 'Make a splash in San Diego!',
    'Description'     : 'Get ready for classic fun in the California sun. SoCal’s quintessentially laid-back beach city, the one with the best weather ever, is also packed with activities beyond the outdoors variety. Picture a thriving foodie culture, craft beer scene, museums, naval history-themed museums, and, oh yeah, the San Diego Zoo. But being outside still rules here, so grab the volleyballs and the surf boards and hit the beach.',
    'Image'           : 'images/result-images/all_sandiego.jpg',
    'Tags'            : [ "West", "Spring", "Beach", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/san-diego-county/san-diego',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:san-diego-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Bend, OR' : {
    'Headline'        : 'Break away in Bend!',
    'Description'     : 'This picture-perfect Oregon mountain town is truly tops. Bend is hugely popular, and it’s easy to see why. With the Cascade Mountains and the high desert landscape as the backdrop, the scenery itself is worth the trip, and the weather is fantastic. But its bodies of water, like the Deschutes River, have also put this cool town on the map for primo standup paddleboarding, kayaking, and whitewater rafting.',
    'Image'           : 'images/result-images/all_bend.jpg',
    'Tags'            : [ "West", "Spring", "Summer", "Mountains", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/oregon/central-oregon/bend',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:bend-oregon-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Lincoln City, OR' : {
    'Headline'        : 'Get ready for Lincoln City!',
    'Description'     : 'Oregon’s Central Coast is calling. The PNW is home to many rugged gems, but this particular shoreline really rocks. And not just because kite-flying festivals and glassblowing are some of Lincoln City’s popular pastimes. (Alongside surfing, kayaking, paddleboarding, and hiking.) This family-friendly city also boasts great gardens, birdwatching, restaurants, shopping, arts, and community events.',
    'Image'           : 'images/result-images/all_lincolncity.jpg',
    'Tags'            : [ "West", "Summer", "Beach", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/en-ca/vacation-rentals/united-states/oregon/lincoln-county/lincoln-city',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:lincoln-city-oregon-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Philadelphia, PA' : {
    'Headline'        : 'Pack your bags for Philly!',
    'Description'     : 'The City of Brotherly Love is calling. Sure, Philadelphia is a thriving cultural center with hugely significant historic sites, but it’s also pretty chill for a metropolis. You can see the Liberty Bell and conquer the Rocky steps in the same day. Famous foodie haunts and sleek museums coexist with cozy BYOB eateries and intimate neighborhood arts attractions, so the vibe is always warm. Even in the wintertime.',
    'Image'           : 'images/result-images/all_philadelphia.jpg',
    'Tags'            : [ "Northeast", "Fall", "Spring", "Summer", "City", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/pennsylvania/philadelphia-area/philadelphia',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:philadelphia-pennsylvania-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'New York, NY' : {
    'Headline'        : 'NYC, here you come!',
    'Description'     : 'Bright lights, big city, Lady Liberty, they’re all waiting for you. There’s nothing like fall in New York. Or spring in New York. Heck, even winter is white-hot in NYC. This town is whatever you make of it. Tour avant-garde museums, experience positively electric theater, eat phenomenal food, or just a stroll around the glory that is Central Park to see the ducks. You can truly choose your own adventure.',
    'Image'           : 'images/result-images/all_newyork.jpg',
    'Tags'            : [ "Northeast", "Fall", "Winter", "Spring", "City", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-york/new-york-city',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:new-york-new-york-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Washington, DC' : {
    'Headline'        : 'Set your sights on Washington, DC!',
    'Description'     : 'Ready for a Capitol adventure? Whether your crew tours every single Smithsonian, the White House, and the National Mall with gusto, or simply stops to reflect peacefully at the Lincoln Memorial, Washington always makes for a worthwhile family excursion. Fall is fantastically colorful, and spring springs with the city’s cherished cherry blossoms, but there’s certainly not a bad time to visit the District.',
    'Image'           : 'images/result-images/all_washingtondc.jpg',
    'Tags'            : [ "Northeast", "Fall", "Spring", "Summer", "City", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/district-of-columbia-dc',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:downtown-washington-dc-washington-district-of-columbia-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Annapolis, MD' : {
    'Headline'        : 'Annapolis is where you’re at!',
    'Description'     : 'Super-close to the bustle of Baltimore, and with just enough buzz of its own, this Chesapeake Bay gem is the sweet spot for families craving a slice of city life with a side of chill. It’s all about the waterfront during the warmer months, but it’s also a great escape in the wintertime, when there are plenty of cultural activities, events, and historic sites within easy walking distance of downtown.',
    'Image'           : 'images/result-images/all_annapolis.jpg',
    'Tags'            : [ "Northeast", "Winter", "Summer", "City", "Pure relaxation", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/maryland/central/annapolis',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:annapolis-maryland-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Nashville, TN' : {
    'Headline'        : 'Make your way to Music City!',
    'Description'     : 'Tennessee’s country music mecca is also a lively family destination with stellar eateries, shops, museums, scenery, and an artistic edge not everyone saw coming. Jack White set up shop here! Visit the Grand Ole Opry, take in a Titans game, see a live performance on Music Row, tour the Country Music Hall of Fame, or go for a hike in a leafy city park … there’s entertainment everywhere in Nashville.',
    'Image'           : 'images/result-images/all_nashville.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "City", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/tennessee/middle/nashville',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:nashville-tennessee-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'New Orleans, LA' : {
    'Headline'        : 'Let the good times roll in NOLA!',
    'Description'     : 'The Crescent City is where it’s at. New Orleans is everyone’s idea of a party, but it’s also surprisingly family-friendly. Yes, the other-worldly restaurant scene is sophisticated, but there are tons of unpretentious outposts for next-level beignets, po-boys, and red beans and rice. And while the galleries, museums, and shops will charm parents, the zoo, the street performers, and the streetcars will thrill kids.',
    'Image'           : 'images/result-images/all_neworleans.jpg',
    'Tags'            : [ "Southeast", "Fall", "Winter", "Spring", "City", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/louisiana/new-orleans',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:new-orleans-louisiana-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Minneapolis, MN' : {
    'Headline'        : 'Get excited for Minneapolis!',
    'Description'     : '“The City of Lakes” is just the ticket for families seeking a cool Midwestern city escape. With a dynamic art scene and the museums to match, great international eats, music and theater, Minneapolis is clearly a thriving cultural center. But leisure is also big here. Think friendly folks, farmer’s markets, and all the fun ways to take advantage of all those lakes and public parks, even in the wintertime.',
    'Image'           : 'images/result-images/all_minneapolis.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "City", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/minnesota/metro-mn/minneapolis',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:minneapolis-minnesota-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Chicago, IL' : {
    'Headline'        : 'You’re bound for Chi-Town!',
    'Description'     : 'The Windy City rules. There’s so much cool stuff to do! And it’s all so manageable! Seeing the sights here is a snap, which is good, because Chicago is packed with amazing architecture, art, music, food, greenspaces, monuments, parks, sporting events, and shopping. But don’t forget the stars of the show — the river running through it and the blue lakefront that turns into Beachtown USA every summer.',
    'Image'           : 'images/result-images/all_chicago.jpg',
    'Tags'            : [ "Midwest", "Fall", "Winter", "Spring", "Summer", "City", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/illinois/chicago',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:chicago-illinois-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'San Antonio, TX' : {
    'Headline'        : 'Steal away to San Antonio!',
    'Description'     : 'The Alamo City awaits. One of the Lone Star State’s top spots for tourists, San Antonio has always been considered a great family escape. And it just keeps getting better. From the lively River Walk and the funky Arts District to Six Flags Fiesta Texas, the historic Alamo, and the Missions National Park, there’s so much culture to take in. And so much legendary Tex-Mex fare to try! You’ll want to stay forever.',
    'Image'           : 'images/result-images/all_sanantonio.jpg',
    'Tags'            : [ "Southwest", "Fall", "Winter", "Spring", "City", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/texas/south-texas-plains/san-antonio',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:san-antonio-texas-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Santa Fe, NM' : {
    'Headline'        : 'Santa Fe, all day!',
    'Description'     : 'Destination desert star. Travelers flock to New Mexico’s most stylish city for its amazing art, food, events, galleries, scenery, and shopping. Not to mention those iconic adobes. But there are so many awesome outdoor activities, historic sites, renowned spas (hello, Ten Thousand Waves!), and distinctive cultural vibes circling this vortex that there’s something for every family member to enjoy year-round.',
    'Image'           : 'images/result-images/all_santafe.jpg',
    'Tags'            : [ "Southwest", "Spring", "Summer", "City", "Pure relaxation", "Non-stop activities", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/new-mexico/santa-fe',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:santa-fe-new-mexico-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'San Francisco, CA' : {
    'Headline'        : 'Leave your hearts in San Fran!',
    'Description'     : 'The City by the Bay is the place for an epic family adventure any time of year. There are so many sweeping views of Golden Gate Bridge, and so many parks, museums, landmarks, and neighborhoods to explore. Not to mention cable car rides, ferry rides, and hikes around breathtaking natural wonders like Land’s End. And don’t forget the next-level food scene destined to please even the pickiest eaters of your bunch.',
    'Image'           : 'images/result-images/all_sanfrancisco.jpg',
    'Tags'            : [ "West", "Fall", "Winter", "Spring", "Summer", "City", "Non-stop activities" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/san-francisco-bay-ar/san-francisco',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:san-francisco-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Seattle, WA' : {
    'Headline'        : 'Sail away in Seattle!',
    'Description'     : 'Pack your bags for the Pacific Northwest’s dynamic hub. Seattle is a jewel of a place on Puget Sound, packed with magical parks and greenspaces. The views of Lake Union and Mount Rainier make it feel like a legit urban paradise. There are also the legendary music and tech scenes, incredible restaurants and markets, museums, shops, and picturesque islands like Bainbridge and Whidbey just a ferry ride away.',
    'Image'           : 'images/result-images/all_seattle.jpg',
    'Tags'            : [ "West", "Fall", "Summer", "City", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/washington/puget-sound/seattle',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:seattle-washington-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Las Vegas, NV' : {
    'Headline'        : 'Let loose in Las Vegas!',
    'Description'     : 'Wait … what? Yes! Vegas is just the place for your crew’s next getaway. Of course, this Nevada desert destination is known for decadence and pre-wedding parties, but Sin City caters to family travelers big time. Think of the jillions of pools, theme park-style rides, crazy buffets, and amazing mainstream musicals and shows. It’s also a welcome winter escape for so many flocks of snowbirds fleeing frigid temps.',
    'Image'           : 'images/result-images/all_lasvegas.jpg',
    'Tags'            : [ "West", "Winter", "Spring", "City", "A mix of both" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/nevada/las-vegas',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:las-vegas-nevada-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  },
  'Los Angeles, CA' : {
    'Headline'        : 'Lights, camera, Los Angeles!',
    'Description'     : 'Yes, the City of Angels is a flashy place with an amazing entertainment scene and a zillion other cultural offerings. But the pace is so laid-back, and the weather is so temperate, you can tailor your trip to fit whatever your fam wants. From beach bumming in Venice and lounging al fresco in Los Feliz to sauntering around downtown and hiking in the Hills (all at a very easy clip), it’s the spot for choosing your own chill adventure.',
    'Image'           : 'images/result-images/all_losangeles.jpg',
    'Tags'            : [ "West", "Spring", "Summer", "City", "Pure relaxation" ],
    'Link'            : 'https://www.vrbo.com/vacation-rentals/usa/california/los-angeles-county/los-angeles',
    'Trip Board Link' : 'https://www.vrbo.com/search/keywords:los-angeles-california-united-states-of-america/minNightlyPrice/0?filterByTotalPrice=false&petIncluded=false&ssr=true&adultsCount=4'
  }
}

// -- Calculating result --
function calculateResult() {
  // Grabbing the user's answers
  var Q1 = userJourney['Q1: Region']
  var Q2 = userJourney['Q2: Season']
  var Q3 = userJourney['Q3: Setting'].replace('Surprise Me - ', '')
  var Q4 = userJourney['Q4: Style']
  var combinedAnswers = Q1 + ' ; ' + Q2 + ' ; ' + Q3 + ' ; ' + Q4

  // Storing the result
  userJourney['Result'] = resultBank[combinedAnswers]
}

// -- Scroll to Section --
function scrollToSection(sectionSelector, duration) {
  // IF user is not at the top of the target element >> Scroll them to the target element
  if ($(window).scrollTop() !== $(sectionSelector).offset().top - 25) {
    $('html, body').animate({scrollTop: $(sectionSelector).offset().top - 25}, duration)
  }
}

// -- Dynamically Updating Wyng Form Fields --
function updatingWyngFormFields(formFieldSelector, formFieldValue) {
  wyng.dispatchCampaignAction({
    componentId: selectorForm,
    actionType: 'setAndValidateFormField',
    fieldComponentId: formFieldSelector,
    fieldValue: formFieldValue
  })
}

// -- Populate Hidden Form fields --
function populateHiddenFormFields() {
  updatingWyngFormFields(selectorQ1, userJourney['Q1: Region'])
  updatingWyngFormFields(selectorQ2, userJourney['Q2: Season'])
  updatingWyngFormFields(selectorQ3, userJourney['Q3: Setting'])
  updatingWyngFormFields(selectorQ4, userJourney['Q4: Style'])
  updatingWyngFormFields(selectorResult, userJourney['Result'])
  updatingWyngFormFields(selectorURL, window.location.href)
}

// -- Populate Visible Form fields --
function populateVisibleFormFields() {
  updatingWyngFormFields(selectorFirstName, userJourney['User First Name'])
  updatingWyngFormFields(selectorLastName, userJourney['User Last Name'])
  updatingWyngFormFields(selectorEmail, userJourney['User Email'])
}

// -- Determining what is next for the user --
function whatIsNextForUser() {
  // Assess what has been answered in the quiz
  var question1           = '.question[data-question-id="1"]'
  var question2           = '.question[data-question-id="2"]'
  var question3           = '.question[data-question-id="3"]'
  var question4           = '.question[data-question-id="4"]'
  var form                = '.SignUpComponent'
  var skip                = '.skip-section'
  var isQuestion1Answered = $(question1).find('.answer').hasClass('selected')
  var isQuestion2Answered = $(question2).find('.answer').hasClass('selected')
  var isQuestion3Answered = $(question3).find('.answer').hasClass('selected')
  var isQuestion4Answered = $(question4).find('.answer').hasClass('selected')

  // Scroll to next question not answered
  if (!isQuestion1Answered) {
    scrollToSection(question1, 600)
  } else if (!isQuestion2Answered) {
    scrollToSection(question2, 600)
  } else if (!isQuestion3Answered) {
    scrollToSection(question3, 600)
  } else if (!isQuestion4Answered) {
    scrollToSection(question4, 600)
  } else {
    calculateResult()
    populateHiddenFormFields()

    // IF the user has already submitted the form >> Scroll them to the "skip" button
    // ELSE >> Scroll them to the form
    if (userJourney['User Restart'] === true) {
      scrollToSection(skip, 600)
    } else {
      scrollToSection(form, 600)
    }
  }
}

// -- Reset Gallery --
function resetGallery() {
  // Reset gallery items
  $('.error-message-container--js').removeClass('visible')
  $('.result-tags--js li').removeClass('selected')
  $('.clear-filters-trigger--js').removeClass('active')
  $('.gallery-section').removeClass('wrap-5 wrap-11 wrap-17 wrap-23 wrap-29 wrap-35 wrap-41 wrap-47 wrap-53')
  $('.gallery-item').removeClass('active')
  $('.gallery-item').removeAttr('data-position')
  $('.select-filter-trigger--js').removeClass('selected')
  $('.load-more-trigger--js').removeClass('hide')

  // Loop over gallery items
  $('.gallery-item').each(function (index, item) {
    var counter         = index + 1
    var activeClass     = 'active'

    // Add flag to tell position
    $(item).attr('data-position', counter)

    // Only reveal first 9 items (3 rows) of gallery items
    if (counter < 10) {
      $(item).addClass(activeClass)
    }
  })
}

// -- Filter Gallery --
function filterGallery(listOfSelectedFilters) {
  // IF no filters are selected >> Reset the gallery
  // ELSE >> Filter gallery
  if (!listOfSelectedFilters) {
    resetGallery()
  } else {
    // Reveal the "clear all filters" button
    $('.clear-filters-trigger--js').addClass('active')

    // Remove all visible items + Strip out helpful position flag
    $('.gallery-item').removeClass('active')
    $('.gallery-item').removeAttr('data-position')

    // IF filter at the top of the page is no longer valid >> Remove
    var tagSelected = $('.result-tags--js li.selected').attr('data-filter-value')
    if (listOfSelectedFilters.indexOf(tagSelected) === -1) {
      $('.result-tags--js li').removeClass('selected')
    }

    // Keep count of the selected answers
    var selectedAnswerCounter = 0

    // Filter out gallery items to show
    var galleryItemsToShow = $('.gallery-item').filter(listOfSelectedFilters)

    // Loop over gallery items
    $(galleryItemsToShow).each(function(index, item) {
      // Add one to the counter
      selectedAnswerCounter = selectedAnswerCounter + 1

      // Update position flag
      $(item).attr('data-position', selectedAnswerCounter)

      // Only reveal first 9 items (3 rows) of gallery items
      if (selectedAnswerCounter < 10) {
        $(item).addClass('active')
      }
    })

    // IF there are gallery items to show >> Hide error message
    // ELSE >> Show error message
    if (galleryItemsToShow.length) {
      $('.clear-filters-trigger--js').removeClass('error')
      $('.error-message-container--js').removeClass('visible')
    } else {
      $('.clear-filters-trigger--js').addClass('error')
      $('.error-message-container--js').addClass('visible')
    }

    // If there are only 2 small gallery items in a row >> Update display (show them next to each other, rather than stacked)
    var galleryItemsToShowTotal = $('.gallery-item[data-position]').length
    if (galleryItemsToShowTotal == 5) {
      $('.gallery-section').addClass('wrap-5')
    } else if (galleryItemsToShowTotal == 11) {
      $('.gallery-section').addClass('wrap-11')
    } else if (galleryItemsToShowTotal == 17) {
      $('.gallery-section').addClass('wrap-17')
    } else if (galleryItemsToShowTotal == 23) {
      $('.gallery-section').addClass('wrap-23')
    } else if (galleryItemsToShowTotal == 29) {
      $('.gallery-section').addClass('wrap-29')
    } else if (galleryItemsToShowTotal == 35) {
      $('.gallery-section').addClass('wrap-35')
    } else if (galleryItemsToShowTotal == 41) {
      $('.gallery-section').addClass('wrap-41')
    } else if (galleryItemsToShowTotal == 47) {
      $('.gallery-section').addClass('wrap-47')
    } else if (galleryItemsToShowTotal == 53 ) {
      $('.gallery-section').addClass('wrap-53')
    }

    displayLoadMoreButtonChecker()
  }
}

// -- Display gallery's load more button --
function displayLoadMoreButtonChecker() {
  // Grabbing some indicators
  var loadMoreSelector              = '.load-more-trigger--js'
  var numberOfVisibleGalleryItems   = $('.gallery-item.active').length
  var numberOfAvailableGalleryItems

  // Loop over gallery to determine last viable gallery item
  $('.gallery-item').each(function(index, item) {
    if ($(item).attr('data-position')) {
      numberOfAvailableGalleryItems = $(item).attr('data-position')
    }
  })

  // IF there are no more gallery items to show >> Hide load more CTA
  // ELSE >> Show load more CTA
  if (numberOfAvailableGalleryItems > numberOfVisibleGalleryItems) {
    $(loadMoreSelector).removeClass('hide')
  } else {
    $(loadMoreSelector).addClass('hide')
  }
}

// -- Form Submit is successful --
function formSubmitSuccessful(event) {
  fbq('track', 'Lead')
}

// -- Page code: Result --
function resultPageCode() {
  // On page load > Update name + Result information
  var personalizedTitleSelector = '.personalized-title--js'
  var resultTitleSelector       = '.result-title--js'
  var resultImageSelector       = '.result-image--js'
  var resultTagsSelector        = '.result-tags--js'
  var resultDescriptionSelector = '.result-description--js'
  var resultLinkSelector        = '.result-link--js'
  var tripBoardLinkSelector     = '.trip-board-link--js'

  var result            = userJourney['Result']
  var userName          = userJourney['User First Name']
  var resultTitle       = resultDetailsBank[result]['Headline']
  var resultImage       = resultDetailsBank[result]['Image']
  var resultTags        = resultDetailsBank[result]['Tags']
  var resultDescription = resultDetailsBank[result]['Description']
  var resultLink        = resultDetailsBank[result]['Link']
  var tripBoardLink     = resultDetailsBank[result]['Trip Board Link']

  $(resultTitleSelector).text(resultTitle)
  $(resultImageSelector).attr('src', resultImage)
  $(resultImageSelector).attr('alt', resultTitle)
  $(resultDescriptionSelector).text(resultDescription)
  $(resultLinkSelector).attr('href', resultLink)
  $(tripBoardLinkSelector).attr('href', tripBoardLink)

  if (userName) {
    $(personalizedTitleSelector).html('Yay, <span class="user-name">' + userName + '</span>! You\'re on your way to an amazing vacay.')
  } else {
    $(personalizedTitleSelector).html('Yay! You\'re on your way to an amazing vacay.')
  }

  // Creating Tags
  $(resultTags).each(function(index, tag) {
    // Create a new element
    var tagElement = $('<li>')
    
    // Determing what the data filter value will be
    var dataFilterValue = tag.toLowerCase()

    if (dataFilterValue === 'non-stop activities') {
      dataFilterValue = 'activities'
    } else if (dataFilterValue === 'a mix of both') {
      dataFilterValue = 'both'
    } else if (dataFilterValue === 'pure relaxation') {
      dataFilterValue = 'relaxing'
    }

    $(tagElement).attr('data-filter-value', dataFilterValue)

    // Update the text that is shown
    $(tagElement).text(tag)

    // Append to page
    $(tagElement).appendTo(resultTagsSelector)
  })

  // On page load > Disperse "position" for the grid items
  resetGallery()

  // Questions component > Trigger a click on the result to cue up dynamic share
  $('.answer-content:contains("' + result + '")').trigger('click')

  // Mobile > User clicks on chevron
  $('.go-to-result-trigger--js').on('click', function () {
    scrollToSection('.destination-guide-section', 600)
  })

  // User clicks on result tags at the top of the page
  $('.destination-guide-section').on('click', '.result-tags li', function () {
    resetGallery()

    // Reset mobile filters
    $('.ps-mobile .filter-container li').removeClass('selected')

    // Visually highlight tag in result section
    $('.result-tags li').removeClass('selected')
    $(this).addClass('selected')

    // Simulate a click on the filter to sort the gallery
    var tagSelected = $(this).attr('data-filter-value')
    $('.select-filter-trigger--js[data-filter-value="' + tagSelected +'"]').click()

    // Visually select in the mobile nav
    $('.ps-mobile .filter li[data-filter-value="' + tagSelected + '"]').addClass('selected')

    setTimeout(function () {
      // Scroll to gallery (length varies depending on breakpoint)
      if (window.innerWidth < 600) {
        scrollToSection('.gallery-section', 1500)
      } else {
        scrollToSection('.gallery-section', 500)
      }
    }, 500)
  })
  
  // Share Section > User clicks on share buttons (copy)
  $('.share-section').on('click', '.social-copy--js', function () {
    $('.copyShareButton img').trigger('click')

    // Show "copied!" message
    $('.copied-message').addClass('visible')

    // Wait 2 seconds >> Hide again
    setTimeout(function () {
      $('.copied-message').removeClass('visible')
    }, 1500)
  })

  // Share Section > User clicks on share buttons (facebook)
  $('.share-section').on('click', '.social-facebook--js', function () {
    $('.facebookShareButton img').trigger('click')
  })

  // Share Section > User clicks on share buttons (twitter)
  $('.share-section').on('click', '.social-twitter--js', function () {
    $('.twitterShareButton img').trigger('click')
  })

  // Share Section > User clicks on share buttons (linkedIn)
  $('.share-section').on('click', '.social-linkedin--js', function () {
    $('.linkedInShareButton img').trigger('click')
  })

  // Mobile > User clicks on "filters" to open
  $('.gallery-section').on('click', '.see-filters-trigger--js', function () {
    $('.filters-modal-view').addClass('active')
    $('body').addClass('no-scroll')
  })

  // Mobile > User clicks to close "filters"
  $('.gallery-section').on('click', '.close-filters-menu-trigger--js', function () {
    $('.see-filtered-content-mobile-trigger--js').trigger('click')
  })

  // Mobile > User clicks on filters in filters modal
  $('.gallery-section').on('click', '.ps-mobile .filter li', function () {
    // Visually update selected filters
    $(this).toggleClass('selected')
  })

  // Mobile > User clicks "see results" on filters modal
  $('.gallery-section').on('click', '.see-filtered-content-mobile-trigger--js', function () {
    $('body').removeClass('no-scroll')
    scrollToSection('.gallery-section', 0)
    
    resetGallery()

    // Determine list of filters
    var listOfSelectedFilters
    $('.filters-modal-view li.selected').each(function(index, filter) {
      var filterValue = $(filter).attr('data-filter-value')
      if (index === 0) {
        listOfSelectedFilters = '.' + filterValue
      } else {
        listOfSelectedFilters = listOfSelectedFilters + '.' + filterValue
      }
    })

    filterGallery(listOfSelectedFilters)

    $('.filters-modal-view').removeClass('active')
  })

  // Desktop > User hovers into on filter dropdown
  $('.gallery-section').on('mouseover', '.open-filter-list-trigger--js', function () {
    $('.filter').removeClass('selected')
    $(this).addClass('selected')
  })

  // Desktop > User hovers off of filter dropdown
  $('.gallery-section').on('mouseout', '.open-filter-list-trigger--js', function () {
    $('.filter').removeClass('selected')
  })

  // Desktop > User clicks on a value in the filter dropdown
  $('.gallery-section').on('click', '.select-filter-trigger--js', function () {
    // Visually update selected filters
    $(this).toggleClass('selected')

    // Determine list of filters
    var listOfSelectedFilters
    $('.select-filter-trigger--js.selected').each(function(index, filter) {
      var filterValue = $(filter).attr('data-filter-value')
      if (index === 0) {
        listOfSelectedFilters = '.' + filterValue
      } else {
        listOfSelectedFilters = listOfSelectedFilters + '.' + filterValue
      }
    })
    
    filterGallery(listOfSelectedFilters)

    if (window.innerWidth >= 600) {
      scrollToSection('.gallery-section', 1000)
    }
  })

  // User clears filters
  $('.gallery-section').on('click', '.clear-filters-trigger--js', function () {
    resetGallery()

    // Reset mobile filters
    $('.ps-mobile .filter-container li').removeClass('selected')

    scrollToSection('.gallery-section', 300)
  })

  // Expanded view > User opens
  var expandedView = false
  $('.gallery-section').on('click', '.gallery-item.active', function () {
    $(this).find('.expanded-view').addClass('open-modal')
    $('.ps-overlay').addClass('active')
    
    // IF on mobile >> apply no scroll to body
    if (window.innerWidth < 600) {
      $('body').addClass('no-scroll')
    }

    if (!expandedView) {
      expandedView = true
    }
  })

  // Expanded view > User clicks on a tag
  $('.gallery-section').on('click', '.result-tags li', function () {
    var selectedFilter = this

    // Visually highlight tag in result section
    $('.result-tags li').removeClass('selected')
    $(selectedFilter).addClass('selected')

    // Wait for visual highlighting to be seen >> Close modal + Scroll to top of gallery
    setTimeout(function () {
      // IF on mobile >> remove no scroll to body
      if (window.innerWidth < 600) {
        $('body').removeClass('no-scroll')
        scrollToSection('.gallery-section', 0)
      }

      setTimeout(function () {
        $('.gallery-item .expanded-view').removeClass('open-modal')
        $('.ps-overlay').removeClass('active')
      }, 100)

      resetGallery()

      // Reset mobile filters
      $('.ps-mobile .filter-container li').removeClass('selected')

      // Simulate a click on the filter to sort the gallery
      var tagSelected = $(selectedFilter).attr('data-filter-value')
      $('.select-filter-trigger--js[data-filter-value="' + tagSelected +'"]').click()

      // Visually select in the mobile nav
      $('.ps-mobile .filter li[data-filter-value="' + tagSelected + '"]').addClass('selected')
    }, 300)
  })

  // Expanded view > User closes ("x" or overlay)
  $('.html-container').on('click', '.close-expanded-view-trigger--js', function () {   
    expandedView = false 
    // IF on mobile >> remove no scroll to body
    if (window.innerWidth < 600) {
      $('body').removeClass('no-scroll')
      scrollToSection('.gallery-section', 0)
    }

    setTimeout(function () {
      $('.gallery-item .expanded-view').removeClass('open-modal')
      $('.ps-overlay').removeClass('active')
    }, 200)
  })

  // User clicks on load more Gallery CTA
  $('.gallery-section').on('click', '.load-more-trigger--js', function() {
    // Grab amount of gallery items visible + add 6 more items (2 rows)
    var currentCountOfVisibleItems = $('.gallery-item.active').length
    var updatedCountOfVisibleItems = currentCountOfVisibleItems + 6
    var nextAvailableItem          = currentCountOfVisibleItems + 1

    // IF gallery item is in the filtered set
    $('.gallery-item').each(function(index, item) {
      var positionValue = $(item).attr('data-position')
      if (positionValue && positionValue <= updatedCountOfVisibleItems) {
        $(item).addClass('active')
      }
    })
  
    scrollToSection('.gallery-item[data-position="' + nextAvailableItem + '"]', 600)
    displayLoadMoreButtonChecker()
  })

  // User clicks on restart CTA
  $('.gallery-section').on('click', '.restart-quiz-trigger--js', function() {
    $('.components-container').css('opacity', '0')

    setTimeout(function () {
      wyng.dispatchCampaignAction({
        actionType: 'setPage',
        pageId: landingPage
      })
    }, 200)

    setTimeout(function () {
      $('.components-container').css('opacity', '1')
    }, 400)

    // Reset User's Journey
    window.userJourney['Q1: Region']       = ''
    window.userJourney['Q2: Season']       = ''
    window.userJourney['Q3: Setting']      = ''
    window.userJourney['Q4: Style']        = ''
    window.userJourney['Result']           = ''
    window.userJourney['User Restart']     = true
  })
}

// -- Page code: Landing --
function landingPageCode() {
  // On page load > If user has already taken the quiz >> Populate form fields
  if (userJourney['User Restart'] === true) {
    $('.SignUpComponent').addClass('hide')
    $('.skip-section').addClass('reveal')
    populateVisibleFormFields()
  }

  // On page load > Add custom error message fields to Form component
  var firstNameSelector = '.first_name'
  var lastNameSelector  = '.last_name'
  var emailSelector     = '.email'

  var errorSvgElement  = '<svg viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Mockups" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Vrbo-Vacay-Finder---form-error-states" transform="translate(-173.000000, -45.000000)"><g id="Group" transform="translate(171.000000, 43.000000)"><g id="Info" transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) translate(2.000000, 2.000000)"><path d="M9,5.958 C9,5.406 9.448,4.958 10,4.958 C10.553,4.958 11,5.406 11,5.958 C11,6.511 10.553,6.958 10,6.958 C9.448,6.958 9,6.511 9,5.958" id="Fill-1" fill="#D43626"></path><line x1="10" y1="14.2168" x2="10" y2="9.1038" id="Stroke-3" stroke="#D43626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></line><path d="M0.75,10 C0.75,4.892 4.892,0.75 10,0.75 C15.108,0.75 19.25,4.892 19.25,10 C19.25,15.108 15.108,19.25 10,19.25 C4.892,19.25 0.75,15.108 0.75,10 Z" id="Stroke-5" stroke="#D43626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></g></g></g></g></svg>'
  var firstNameElement = '<div class="custom-error-field">' + errorSvgElement + '<p>Don\'t forget your first name.</p></div>'
  var lastNameElement  = '<div class="custom-error-field">' + errorSvgElement +'<p>Don\'t forget your last name.</p></div>'
  var emailElement     = '<div class="custom-error-field">' + errorSvgElement +'<p>Did you forget part of your email address?</p></div>'

  if (!$('.first_name .ps-custom-error').length) {
    $(firstNameElement).appendTo(firstNameSelector)
    $(lastNameElement).appendTo(lastNameSelector)
    $(emailElement).appendTo(emailSelector)
  }

  // Mobile > User clicks on chevron
  $('.go-to-quiz-trigger--js').on('click', function () {
    scrollToSection('.question-section', 600)
  })

  // User clicks on an answer
  $('.question-section').on('click', '.answer', function () {
    // Grab selected answer information
    var currentQuestionID       = $(this).attr('data-question-id')
    var currentQuestionValue    = $(this).attr('data-question-value')
    var selectedAnswerValue     = $(this).attr('data-answer-value')
    var currentQuestionSelector = '.question[data-question-value="' + currentQuestionValue + '"]'

    // Update userjourney object
    userJourney[currentQuestionValue] = selectedAnswerValue

    // Add flag to question to denote it's been answered
    $(currentQuestionSelector).addClass('is-answered')

    // Remove warning notation on this question (if applicable)
    $(currentQuestionSelector).find('.question-warning').removeClass('active')

    // Visually select the answer
    $(this).siblings().removeClass('selected')
    $(this).addClass('selected')

    if (currentQuestionID == '1') {
      $('.answer[data-question-id="1"]').removeClass('selected')
      $('svg .answer[data-answer-value="' + selectedAnswerValue + '"]').addClass('selected')
    }

    if (currentQuestionID == '3') {
      // IF user clicked "Surprise Me" >> Pick a random setting for them
      if (selectedAnswerValue === 'Surprise Me') {
        // Choose a random location
        var settingList   = [ 'Beach', 'City', 'Lake', 'Mountains' ]
        var randomSetting = settingList[Math.floor(Math.random()*settingList.length)]

        // Update helpers
        userJourney['Q3: Setting'] = 'Surprise Me - ' + randomSetting
      }
    }

    // Wait 1 second (to allow animation to be seen)
    setTimeout(function () {
      whatIsNextForUser()
    }, 300)
  })

  // Storing the user's first name
  $('.first_name input').on('change', function () {
    userJourney['User First Name'] = $(this).val()
  })

  // Storing the user's last name
  $('.last_name input').on('change', function () {
    userJourney['User Last Name'] = $(this).val()
  })

  // Storing the user's email
  $('.email input').on('change', function () {
    userJourney['User Email'] = $(this).val()
  })

  // User clicks on form CTA
  $('.sign-up-submit').on('click', function () {
    // Wait for error messages to be available (200 milliseconds is arbitrary)
    setTimeout(function () {
      // Determining what is left for the user to fill out
      var isFirstNameInputted = $('.first_name').hasClass('full') && !$('.first_name').hasClass('error')
      var isLastNameInputted  = $('.last_name').hasClass('full') && !$('.last_name').hasClass('error')
      var isEmailInputted     = $('.email').hasClass('full') && !$('.email').hasClass('error')

      // IF user has filled out form 
      if (isFirstNameInputted && isLastNameInputted && isEmailInputted) {
        whatIsNextForUser()
        $('.question:not(.is-answered)').find('.question-warning').addClass('active')
      }
    }, 200)
  })

  // User clicks on skip CTA (Form is not visible at this point)
  $('.HtmlComponent').on('click', '.skip-form-trigger--js', function () {
    // IF user has not answered all 4 question >> Determine which question they see next
    // ELSE >> Calculate result + Submit hidden form
    if ($('.question.is-answered').length !== 4) {
      whatIsNextForUser()
      $('.question:not(.is-answered)').find('.question-warning').addClass('active')
    } else {
      calculateResult()
      $('.sign-up-submit').trigger('click')
    }
  })
}

// -- Deciding which page code to run --
function determineWhichPageCodeToRun(event) {
  // Run landing page code
  if (event.pageId === landingPage) {
    landingPageCode()
  }

  // Run result page code
  if (event.pageId === resultPage) {
    resultPageCode()
  }
}

// -- Listening for page changes --
// window.wyng.addEventListener('page_loaded', determineWhichPageCodeToRun)

// -- Listening for the Form component to successfully submit --
// window.wyng.addEventListener('form_submit_success', formSubmitSuccessful)

// -- Waiting for jQuery to exist, then run Microexperience Code --
function waitForJQuery() {
  if (!window.jQuery) {
    return setTimeout(waitForJQuery, 50)
  } else {
    landingPageCode()
  }
}
waitForJQuery()
