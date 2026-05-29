const actualPlaces = [
    { "placeName": "Unassigned",
      "codes": [
          "210", "214",  "215", "217",
          "219", "259", "280", "281",
          "282", "283", "284", "285",
          "286", "287", "288", "289",
          "292", "293", "294", "295",
          "296", "384", "388", "422",
          "424", "425", "426", "427",
          "428", "429", "5995", "5998",
          "671", "684", "693", "694",
          "695", "696", "697", "698",
          "699", "801", "802", "803",
          "804", "805", "806", "807",
          "809", "830", "831", "832",
          "833", "834", "835", "836",
          "837", "838", "839", "851",
          "854", "857", "858", "859",
          "871", "872", "873", "874",
          "875", "876", "877", "878",
          "879", "884", "885", "887",
          "888", "889", "890", "891",
          "892", "893", "894", "895",
          "896", "897", "898", "899",
          "969", "978", "990", "991"]
    },
    { "placeName": "United States",
      "codes": ["1"],
      "subPlaces":
      [
          {
              // Canada
              "name": "Canada",
              "codes": ["780", "782", "825", "587", "403", "250", "604", "236", "672",
                        "778", "431", "204", "506", "428", "709", "867", "902", "807",
                        "905", "705", "647", "613", "548", "519", "437", "416", "365", "343", "289",
                        "249", "226", "902", "438", "450", "514", "418", "367", "819", "354",
                        "579", "873", "581", "306", "639", "867"],

          },
          // American states
          {"name":"Alabama (USA)","codes":["205","251","256","334","483","659","938"]},
          {"name":"Alaska (USA)","codes":["907"]},
          {"name":"Arizona (USA)","codes":["480","520","602","623","928"]},
          {"name":"Arkansas (USA)","codes":["327","479","501","870"]},
          {"name":"California (USA)","codes":["209","213","279","310","323","341","350","357","369","408","415","424","442","510","530","559","562","619","626","628","650","657","661","669","707","714","738","747","760","805","818","820","831","837","840","858","909","916","925","949","951"]},
          {"name":"Colorado (USA)","codes":["303","719","720","748","970","983"]},
          {"name":"Connecticut (USA)","codes":["203","475","860","959"]},
          {"name":"Delaware (USA)","codes":["302"]},
          {"name":"District of Columbia (USA)","codes":["202","771"]},
          {"name":"Florida (USA)","codes":["239","305","321","324","352","386","407","448","561","645","656","689","727","728","754","772","786","813","850","863","904","941","954"]},
          {"name":"Georgia (USA)","codes":["229","404","470","478","678","706","762","770","912","943"]},
          {"name":"Hawaii (USA)","codes":["808"]},
          {"name":"Idaho (USA)","codes":["208","986"]},
          {"name":"Illinois (USA)","codes":["217","224","309","312","331","447","464","618","630","708","730","773","779","815","847","861","872"]},
          {"name":"Indiana (USA)","codes":["219","260","317","463","574","765","812","930"]},
          {"name":"Iowa (USA)","codes":["319","515","563","641","712"]},
          {"name":"Kansas (USA)","codes":["316","620","785","913"]},
          {"name":"Kentucky (USA)","codes":["270","364","502","606","859"]},
          {"name":"Louisiana (USA)","codes":["225","318","337","457","504","985"]},
          {"name":"Maine (USA)","codes":["207"]},
          {"name":"Maryland (USA)","codes":["227","240","301","410","443","667"]},
          {"name":"Massachusetts (USA)","codes":["339","351","413","508","617","774","781","857","978"]},
          {"name":"Michigan (USA)","codes":["231","248","269","313","517","586","616","679","734","810","906","947","989"]},
          {"name":"Minnesota (USA)","codes":["218","320","507","612","651","763","924","952"]},
          {"name":"Mississippi (USA)","codes":["228","471","601","662","769"]},
          {"name":"Missouri (USA)","codes":["235","314","417","557","573","636","660","816","975"]},
          {"name":"Montana (USA)","codes":["406"]},
          {"name":"Nebraska (USA)","codes":["308","402","531"]},
          {"name":"Nevada (USA)","codes":["702","725","775"]},
          {"name":"New Hampshire (USA)","codes":["603"]},
          {"name":"New Jersey (USA)","codes":["201","551","609","640","732","848","856","862","908","973"]},
          {"name":"New Mexico (USA)","codes":["505","575"]},
          {"name":"New York (USA)","codes":["212","315","329","332","347","363","516","518","585","607","624","631","646","680","716","718","838","845","914","917","929","934"]},
          {"name":"North Carolina (USA)","codes":["252","336","472","704","743","828","910","919","980","984"]},
          {"name":"North Dakota (USA)","codes":["701"]},
          {"name":"Ohio (USA)","codes":["216","220","234","283","326","330","380","419","436","440","513","567","614","740","937"]},
          {"name":"Oklahoma (USA)","codes":["405","539","572","580","918"]},
          {"name":"Oregon (USA)","codes":["458","503","541","971"]},
          {"name":"Pennsylvania (USA)","codes":["215","223","267","272","412","445","484","570","582","610","717","724","814","835","878"]},
          {"name":"Rhode Island (USA)","codes":["401"]},
          {"name":"South Carolina (USA)","codes":["803","821","839","843","854","864"]},
          {"name":"South Dakota (USA)","codes":["605"]},
          {"name":"Tennessee (USA)","codes":["423","615","629","729","731","865","901","931"]},
          {"name":"Texas (USA)","codes":["210","214","254","281","325","346","361","409","430","432","469","512","621","682","713","726","737","806","817","830","832","903","915","936","940","945","956","972","979"]},
          {"name":"Utah (USA)","codes":["385","435","801"]},
          {"name":"Vermont (USA)","codes":["802"]},
          {"name":"Virginia (USA)","codes":["276","434","540","571","686","703","757","804","826","948"]},
          {"name":"Washington (USA)","codes":["206","253","360","425","509","564"]},
          {"name":"West Virginia (USA)","codes":["304","681"]},
          {"name":"Wisconsin (USA)","codes":["262","274","353","414","534","608","715","920"]},
          {"name":"Wyoming (USA)","codes":["307"]},
          {
              "name": "United States Virgin Islands",
              "codes": ["340"]
          },
          {
              "name": "Northern Mariana Islands",
              "codes": ["670"]
          },
          {
              "name": "Guam",
              "codes": ["671"]
          },
          {
              "name": "American Samoa",
              "codes": ["684"]
          },
          {
              "name": "Puerto Rico",
              "codes": ["787", "939"]
          },
          // Carribean nations, Dutch and British Overseas Territories
          { "name": "Bahamas", "codes": ["242"] },
          { "name": "Barbados", "codes": ["246"] },
          { "name": "Anguilla", "codes": ["264"] },
          { "name": "Antigua and Barbuda", "codes": ["268"] },
          { "name": "British Virgin Islands", "codes": ["284"] },
          { "name": "Cayman Islands", "codes": ["345"] },
          { "name": "Bermuda", "codes": ["441"] },
          { "name": "Grenada", "codes": ["473"] },
          { "name": "Turks and Caicos Islands", "codes": ["649"] },
          { "name": "Jamaica", "codes": ["658", "876"] },
          { "name": "Montserrat", "codes": ["664"] },
          { "name": "Sint Maarten", "codes": ["721"] },
          { "name": "Saint Lucia", "codes": ["758"] },
          { "name": "Dominica", "codes": ["767"] },
          { "name": "Saint Vincent and the Grenadines", "codes": ["784"] },
          { "name": "Dominican Republic", "codes": ["809", "829", "849"] },
          { "name": "Trinidad and Tobago", "codes": ["868"] },
          { "name": "Saint Kitts and Nevis", "codes": ["869"] }
      ]
    },
    {"placeName": "Egypt", "codes": ["20"] },
    {"placeName": "South Sudan", "codes": ["211"] },
    {"placeName": "Morocco", "codes": ["212"] },
    {"placeName": "Algeria", "codes": ["213"] },
    {"placeName": "Tunisia", "codes": ["216"] },
    {"placeName": "Libya", "codes": ["218"] },
    {"placeName": "Gambia", "codes": ["220"] },
    {"placeName": "Senegal", "codes": ["221"] },
    {"placeName": "Mauritania", "codes": ["222"] },
    {"placeName": "Mali", "codes": ["223"] },
    {"placeName": "Guinea", "codes": ["224"] },
    {"placeName": "Ivory Coast", "codes": ["225"] },
    {"placeName": "Burkina Faso", "codes": ["226"] },
    {"placeName": "Niger", "codes": ["227"] },
    {"placeName": "Togo", "codes": ["228"] },
    {"placeName": "Benin", "codes": ["229"] },
    {"placeName": "Mauritius", "codes": ["230"] },
    {"placeName": "Liberia", "codes": ["231"] },
    {"placeName": "Sierra Leone", "codes": ["232"] },
    {"placeName": "Ghana", "codes": ["233"] },
    {"placeName": "Nigeria", "codes": ["234"] },
    {"placeName": "Chad", "codes": ["235"] },
    {"placeName": "Central African Republic", "codes": ["236"] },
    {"placeName": "Cameroon", "codes": ["237"] },
    {"placeName": "Cape Verde", "codes": ["238"] },
    {"placeName": "São Tomé and Príncipe", "codes": ["239"] },
    {"placeName": "Equatorial Guinea", "codes": ["240"] },
    {"placeName": "Gabon", "codes": ["241"] },
    {"placeName": "Republic of the Congo", "codes": ["242"] },
    {"placeName": "Democratic Republic of the Congo", "codes": ["243"] },
    {"placeName": "Angola", "codes": ["244"] },
    {"placeName": "Guinea-Bissau", "codes": ["245"] },
    {"placeName": "British Indian Ocean Territory", "codes": ["246"] },
    {"placeName": "Ascension Island", "codes": ["247"] },
    {"placeName": "Seychelles", "codes": ["248"] },
    {"placeName": "Sudan", "codes": ["249"] },
    {"placeName": "Rwanda", "codes": ["250"] },
    {"placeName": "Ethiopia", "codes": ["251"] },
    {"placeName": "Somalia", "codes": ["252"] },
    {"placeName": "Djibouti", "codes": ["253"] },
    {"placeName": "Kenya", "codes": ["254"] },
    {"placeName":"Uganda","codes":["256"]},
    {"placeName":"Burundi","codes":["257"]},
    {"placeName":"Mozambique","codes":["258"]},
    {"placeName":"Zambia","codes":["260"]},
    {"placeName": "Madagascar", "codes": ["261"] },
    {"placeName":"Zimbabwe","codes":["263"]},
    {"placeName":"Namibia","codes":["264"]},
    {"placeName":"Malawi","codes":["265"]},
    {"placeName":"Lesotho","codes":["266"]},
    {"placeName":"Botswana","codes":["267"]},
    {"placeName":"Eswatini","codes":["268"]},
    {"placeName":"Comoros","codes":["269"]},
    {"placeName":"South Africa","codes":["27"]},
    {"placeName":"Eritrea","codes":["291"]},
    {"placeName":"Aruba","codes":["297"]},
    {"placeName":"Faroe Islands","codes":["298"]},
    {"placeName":"Greenland","codes":["299"]},
    {"placeName":"Greece","codes":["30"]},
    {"placeName":"Netherlands","codes":["31"]},
    {"placeName":"Belgium","codes":["32"]},
    {"placeName":"France","codes":["33"]},
    {"placeName":"Spain","codes":["34"]},
    {"placeName":"Gibraltar","codes":["350"]},
    {"placeName":"Portugal","codes":["351"]},
    {"placeName":"Luxembourg","codes":["352"]},
    {"placeName":"Ireland","codes":["353"]},
    {"placeName":"Iceland","codes":["354"]},
    {"placeName":"Albania","codes":["355"]},
    {"placeName":"Malta","codes":["356"]},
    {"placeName":"Cyprus","codes":["357"]},
    {"placeName":"Bulgaria","codes":["359"]},
    {"placeName":"Hungary","codes":["36"]},
    {"placeName":"Lithuania","codes":["370"]},
    {"placeName":"Latvia","codes":["371"]},
    {"placeName":"Estonia","codes":["372"]},
    {"placeName":"Armenia","codes":["374"]},
    {"placeName":"Belarus","codes":["375"]},
    {"placeName":"Andorra","codes":["376"]},
    {"placeName":"Monaco","codes":["377"]},
    {"placeName":"San Marino", "codes": ["378"]},
    {"placeName":"Vatican City", "codes": ["379"]},
    {"placeName":"Ukraine","codes":["380"]},
    {"placeName":"Serbia","codes":["381"]},
    {"placeName":"Montenegro","codes":["382"]},
    {"placeName":"Kosovo","codes":["383"]},
    {"placeName":"Croatia","codes":["385"]},
    {"placeName":"Slovenia","codes":["386"]},
    {"placeName":"Bosnia and Herzegovina","codes":["387"]},
    {"placeName":"North Macedonia","codes":["389"]},
    {"placeName":"Romania","codes":["40"]},
    {"placeName":"Czech Republic","codes":["420"]},
    {"placeName":"Slovakia","codes":["421"]},
    {"placeName":"Liechtenstein","codes":["423"]},
    {"placeName":"Austria","codes":["43"]},
    {"placeName":"Denmark","codes":["45"]},
    {"placeName":"Sweden","codes":["46"]},
    {"placeName":"Poland","codes":["48"]},
    {"placeName":"Germany","codes": ["49"]},
    {"placeName":"Falkland Islands","codes":["500"]}, // TODO
    {"placeName":"Belize","codes":["501"]},
    {"placeName":"Guatemala","codes":["502"]},
    {"placeName":"El Salvador","codes":["503"]},
    {"placeName":"Honduras","codes":["504"]},
    {"placeName":"Nicaragua","codes":["505"]},
    {"placeName":"Costa Rica","codes":["506"]},
    {"placeName":"Panama","codes":["507"]},
    {"placeName":"Saint-Pierre and Miquelon","codes":["508"]},
    {"placeName":"Haiti","codes":["509"]},
    {"placeName":"Peru","codes":["51"]},
    {"placeName":"Mexico","codes":["52"]},
    {"placeName":"Cuba","codes":["53"]},
    {"placeName":"Argentina","codes":["54"]},
    {"placeName":"Brazil","codes":["55"]},
    {"placeName":"Chile","codes":["56"]},
    {"placeName":"Colombia","codes":["57"]},
    {"placeName":"Venezuela","codes":["58"]},
    {"placeName":"Guadeloupe","codes":["590"]},
    {"placeName":"Bolivia","codes":["591"]},
    {"placeName":"Guyana","codes":["592"]},
    {"placeName":"Ecuador","codes":["593"]},
    {"placeName":"French Guiana","codes":["594"]},
    {"placeName":"Paraguay","codes":["595"]},
    {"placeName":"Martinique","codes":["596"]},
    {"placeName":"Suriname","codes":["597"]},
    {"placeName":"Uruguay","codes":["598"]},
    {"placeName":"Netherlands Antilles",
        "codes": ["599"],
        "subPlaces": [
            {
                "name": "Sint Eustatius",
                "codes": ["3"]
            },
            {
                "name": "Saba",
                "codes": ["4"]
            },
            {
                "name": "Bonaire",
                "codes": ["7"]
            },
            {
                "name": "Curaçao",
                "codes": ["9"]
            }
        ]
    },

    {"placeName":"Malaysia","codes":["60"]},
    {"placeName":"Indonesia","codes":["62"]},
    {"placeName":"Philippines","codes":["63"]},
    {"placeName":"New Zealand","codes":["64"]},
    {"placeName":"Singapore","codes":["65"]},
    {"placeName":"Thailand","codes":["66"]},
    {"placeName":"East Timor","codes":["670"]},
    {"placeName":"Brunei","codes":["673"]},
    {"placeName":"Nauru","codes":["674"]},
    {"placeName":"Papua New Guinea","codes":["675"]},
    {"placeName":"Tonga","codes":["676"]},
    {"placeName":"Solomon Islands","codes":["677"]},
    {"placeName":"Vanuatu","codes":["678"]},
    {"placeName":"Fiji","codes":["679"]},
    {"placeName":"Palau","codes":["680"]},
    {"placeName":"Wallis and Futuna","codes":["681"]},
    {"placeName":"Cook Islands","codes":["682"]},
    {"placeName":"Niue","codes":["683"]},
    {"placeName":"Samoa","codes":["685"]},
    {"placeName":"Kiribati","codes":["686"]},
    {"placeName":"New Caledonia","codes":["687"]},
    {"placeName":"Tuvalu","codes":["688"]},
    {"placeName":"French Polynesia","codes":["689"]},
    {"placeName":"Tokelau","codes":["690"]},
    {"placeName":"Federated States of Micronesia","codes":["691"]},
    {"placeName":"Marshall Islands","codes":["692"]},
    {"placeName":"Japan","codes":["81"]},
    {"placeName":"South Korea","codes":["82"]},
    {"placeName":"Vietnam","codes":["84"]},
    {"placeName":"North Korea","codes":["850"]},
    {"placeName":"Hong Kong","codes":["852"]},
    {"placeName":"Macau","codes":["853"]},
    {"placeName":"Cambodia","codes":["855"]},
    {"placeName":"Laos","codes":["856"]},
    {"placeName":"China","codes":["86"]},
    {"placeName":"Bangladesh","codes":["880"]},
    {"placeName":"Taiwan","codes":["886"]},
    {"placeName":"Afghanistan","codes":["93"]},
    {"placeName":"Sri Lanka","codes":["94"]},
    {"placeName":"Myanmar","codes":["95"]},
    {"placeName":"Maldives","codes":["960"]},
    {"placeName":"Lebanon","codes":["961"]},
    {"placeName":"Jordan","codes":["962"]},
    {"placeName":"Syria","codes":["963"]},
    {"placeName":"Iraq","codes":["964"]},
    {"placeName":"Kuwait","codes":["965"]},
    {"placeName":"Saudi Arabia","codes":["966"]},
    {"placeName":"Yemen","codes":["967"]},
    {"placeName":"Oman","codes":["968"]},
    {"placeName":"Israel and Palestine","codes":["970", "972"]},
    {"placeName":"United Arab Emirates","codes":["971", "979"]},
    {"placeName":"Bahrain","codes":["973"]},
    {"placeName":"Qatar","codes":["974"]},
    {"placeName":"Bhutan","codes":["975"]},
    {"placeName":"Mongolia","codes":["976"]},
    {"placeName":"Nepal","codes":["977"]},
    {"placeName":"Iran","codes":["98"]},
    {"placeName":"Tajikistan","codes":["992"]},
    {"placeName":"Turkmenistan","codes":["993"]},
    {"placeName":"Azerbaijan","codes":["994"]},
    {"placeName":"State of Georgia","codes":["995"]},
    {"placeName":"Kyrgyzstan","codes":["996"]},
    {"placeName":"Uzbekistan","codes":["998"]},

    { "placeName": "Tanzania",
        "codes": ["255"],
        "subPlaces": [
            { "name": "Zanzibar",
                "codes": ["24"]
            }
        ]
    },
    { "placeName": "Réunion",
        "codes": ["262"],
        "subPlaces": [
            { "name": "Mayotte",
                "codes": ["269", "639"]

            }
        ]
    },
    { "placeName": "Saint Helena",
        "codes": ["290"],
        "subPlaces": [
            { "name": "Tristan da Cunha",
                "codes": ["8"]
            }
        ]
    },
    { "placeName": "Finland",
        "codes": ["358"],
        "subPlaces": [
            {"name": "Åland",
                "codes": ["18"]
            }
        ]
    },
    { "placeName": "Italy",
        "codes": ["39"],
        "subPlaces": [
            {"name": "San Marino", // TODO: general place too
                "codes": ["0549"]
            },
            {"name": "Vatican City", // TODO: general place too
                "codes": ["06698"]
            },
        ]
    },
    { "placeName": "Moldova",
        "codes": ["373"],
        "subPlaces": [
            {"name": "Transnistria",
                "codes": ["2", "5"]
            }
        ]
    },
    { "placeName": "Switzerland",
        "codes": ["41"],
        "subPlaces": [
            {"name": "Campione d'Italia",
                "codes": ["91"]
            }
        ]
    },
    { "placeName": "United Kingdom",
        "codes": ["44"],
        "subPlaces": [
            {"name": "Guernsey",
                "codes": ["1481"]
            },
            {"name": "Jersey",
                "codes": ["1534"]
            },
            {"name": "Isle of Man",
                "codes": ["1624"]
            }
        ]
    },
    {"placeName": "Norway",
        "codes": ["47"],
        "subPlaces": [
            {"name": "Svalbard",
                "codes": ["79"]
            }
        ]
    },
    {"placeName": "Australia",
        "codes": ["61"],
        "subPlaces": [
            {"name": "Cocos Islands", // TODO missing flag
                "codes": ["89162"]
            },
            {"name": "Christmas Island",
                "codes": ["89164"]
            }
        ]
    },
    {"placeName": "Australian External Territories",
     "codes": ["672"],
     "subPlaces": [
         {"name": "Australian Antarctic Territory",
          "codes": ["1"]
         },
         {"name": "Norfolk Island",
          "codes": ["3"]
         }
     ]
    },
    // These are part of the Russian code prefix but do not follow
    // The 'code'-'subcode' format that all other places follow.
    //
    // But they still need to be tested first as they are more specific.
    // Since the regular expressions are tested in the order the places are
    // placed in this array of objects, we place these two places
    // before Russia so that they are searched first, before Russia,
    // even though they are not 'sub'-places.
    //
    // I think this is better than coding an additional check just for this
    // specific edge-case.
    {"placeName": "Abkhazia",
     "codes": ["7840", "7940"]
    },
    {"placeName": "South Ossetia",
     "codes": ["7850", "7929"]
    },
    {"placeName": "Russia",
     "codes": ["71", "72", "73", "74", "75", "78", "79"]},
    {"placeName":"Kazakhstan",  "codes": ["70", "76", "77"]},
    {"placeName": "Turkey", "codes": ["90"],
        "subPlaces": [
            {"name": "Northern Cyprus",
                "codes": ["392"]
            }
        ]
    },
    {"placeName": "India", "codes": ["91"],
    },
    {"placeName": "Pakistan", "codes": ["92"],
        "subPlaces":
            [
                {
                    "name": "Gilgit Baltistan",
                    "codes": ["581"]
                },
                {"name": "Azad Kashmir",
                    "codes": ["582"]
                }
            ]
    },
]

// * helper functions


/**
 * Return the text node found at index 'targetIndex' starting from the 'root'
 * text node.
 *
 * @param {*} root - The root text node.
 * @param {*} targetIndex - The index at which to look for the text node.
 * @returns {*} - The text node found at that index from the root.
 */
function FindTextNodeAtIndex(root, targetIndex) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let currentIndex = 0;
    let node;

    while ((node = walker.nextNode())) {
        const nextIndex = currentIndex + node.nodeValue.length;
        if (targetIndex >= currentIndex && targetIndex <= nextIndex) {
            return node;
        }
        currentIndex = nextIndex;
    }

    return null;
}

/**
 * Given a 'root' text node, traverse its text until the 'targetNode' is found,
 * and return the index where 'targetNode' starts.
 *
 * @param {*} root - The 'root' text node.
 * @param {*} targetNode - The node to reach from the root and find its starting
 * index.
 * @returns {*} - The index where 'targetNode' starts from the 'root'.
 */
function GetTextNodeStartIndex(root, targetNode) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let currentIndex = 0;
    let node;

    while ((node = walker.nextNode())) {
        if (node === targetNode) {
            return currentIndex;
        }
        currentIndex += node.nodeValue.length;
    }

    return -1;
}

/**
 * Return whether the node is 'ignored', namely a 'script' 'style', 'noscript',
 * or 'svg' element. We ignore these nodes when processing.
 *
 * @param {*} node - Node to test.
 * @returns {boolean} - Whether it's ignored or not.
 */
function isIgnoredNode(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return false;
    return !!node.closest('script, style, noscript, svg');
}

/**
 * Return whether element 'el' is visible or not.
 *
 * @param {*} el - Element to test.
 * @returns {boolean} - Is the element visible or not?
 */
function isVisibleElement(el) {
    if (!el || el.nodeType !== Node.ELEMENT_NODE) return false;

    const style = window.getComputedStyle(el);
    if (
        style.display === "none" ||
            style.visibility === "hidden" ||
            style.opacity === "0"
    ) {
        return false;
    }

    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return false;

    return true;
}

// * main functions


/**
 * Given a place name, return the file location pointing to that place's flag.
 *
 * @param {*} placeName - Name of the place.
 * @returns {string} - File location of the place's flag.
 */
function flagPath(placeName) {
    return "flags/" + placeName.replace(/\s+/g, "_") + ".png";
}

/**
 * Given a place with no 'sub'-places, construct a regexp that matches for
 * that place's country codes.
 *
 * @param {*} place - Place object to base the regexp on.
 * @returns {RegExp} - RegExp that matches phone numbers with that place's
 * country code.
 */
function BuildPlainRegExpForPlace(place) {
    return new RegExp(`^\\+?(?:${place.codes.join("|")})[0-9\\-\\s()]+$`);
    //return new RegExp(`^\\+?(?:${codes.join("|")})[0-9]+$`);
}

/**
 * Given a place and 'sub'-place, return a regular expression
 *  that matches any combination of 'place country code'+'sub-place area code'.
 *
 * @param {*} place - Place object.
 * @param {*} subPlace - 'Sub'-place object.
 * @returns {RegExp} - Regular expression that matches any of
 * 'place country code'+'sub-place area code'.
 */
function BuildRegExpForSubPlace(place, subPlace) {
    const placeCodes = place["codes"].join("|");
    const subPlaceCodes = subPlace["codes"].join("|");

    const regExpString = "^(?:\\+|00)?" +
        "(?:" + placeCodes + ")+" +
        // hyphens, parens, spaces
        "(?:" + subPlaceCodes + ")+" +
        "[0-9]+$";

    return new RegExp(regExpString);
}

/**
 * Given a 'regExpList' of regular expressions to test against and a phone
 * number 'string', return the first place that matches one of the regular
 * expressions.
 *
 * @param {*} regExpList - List of regular expressions testing for international
 * phone numbers.
 * @param {*} string - International phone number to test.
 * @returns {*} - The name of the place or 'sub'-place matching a regex.
 */
function ReturnFirstPlaceMatchingRegExp(regExpList, string) {

    // We first filter out anything extra
    const searchString = string.replace(/[\s()+-]/g, '').replace(/^00/g, '')

    for (const regExpObj of regExpList) {
        // iterate through subPlaces first
        if (Object.hasOwn(regExpObj, "subPlaceName")) {
            if (regExpObj.regExp.test(searchString)) {
                return regExpObj["subPlaceName"]
            }
            // if no subPlace, plain place code match
        } else if (!Object.hasOwn(regExpObj, "subPlaceName")) {
            if (regExpObj.regExp.test(searchString)) {
                return regExpObj["placeName"]
            }
        }
    }
}

/**
 * Given an array of 'place' objects, construct a list of regular expressions
 * that match phone numbers starting with any place's country codes,
 * as well as, where applicable, each area code of 'sub'-places.
 *
 * As our ReturnFirstPlaceMatchingRegExp function only returns the first match,
 * We push regular expressions for 'sub'-places first as they are more specific
 * and more specific searches should be done first. Otherwise the search
 * would stop at the less specific match instead of the more specific.
 *
 * @param {*} places - Array of objects, where each object is a 'place'
 * (usually, but not always, a state) with an array of country 'codes' and
 * optional 'sub'-places with area/special 'codes'.
 * @returns {*} - A list of regular expressions matching all 'place's provided.
 */

function BuildAllRegExpsForPlaces(places) {
    let regExpList = []
    for (const place of places) {
        if (!Object.hasOwn(place, "subPlaces")) { // if no subPlaces just codes
            regExpList.push({
                placeName: place["placeName"],
                regExp: BuildPlainRegExpForPlace(place)
            })
        } else if (Object.hasOwn(place, "subPlaces")) {
            // push children
            for (const subPlace of place["subPlaces"]) {
                regExpList.push({
                    placeName: place["placeName"],
                    subPlaceName: subPlace["name"],
                    regExp: BuildRegExpForSubPlace(place, subPlace)
                })
            }
            // push parent last, so children are checked first
            // push parent
            regExpList.push({
                placeName: place["placeName"],
                regExp: BuildPlainRegExpForPlace(place)
            })
        }
    }
    return regExpList
}

/**
 * For each international phone number in 'phoneNumbers', prepend an image with
 * the flag corresponding to the phone number's country code.
 *
 * @param {*} phoneNumbers - Array of phone number objects with location info.
 * @returns {*} - Nothing.
 */
function PrependFlagToPhoneNumbers(phoneNumbers) {
    // Build the list once.
    const regExpList = BuildAllRegExpsForPlaces(actualPlaces);
    if (!Array.isArray(phoneNumbers)) return;

    phoneNumbers.forEach(({ phoneNumber, index, element }) => {
        if (!(element instanceof Element)) return;
        if (typeof index !== "number" || index < 0) return;

        const textNode = FindTextNodeAtIndex(element, index);
        if (!textNode) return;

        const offsetInNode = index - GetTextNodeStartIndex(element, textNode);

        // Split the text node right where the phone number is
        let afterNode = textNode.splitText(offsetInNode);

        const foundPlaceName = ReturnFirstPlaceMatchingRegExp(regExpList, phoneNumber);

        if (foundPlaceName !== undefined) {
            // Create tiny flag image
            let flagImg = document.createElement("img");
            flagImg.src = chrome.runtime.getURL(flagPath(foundPlaceName)); // adjust
            flagImg.alt = foundPlaceName;
            flagImg.style.cssText = `
            display: inline-block;
            height: 16px;
            width: 28px;
            margin-left: 4px;
            margin-right: 4px;
            border: 2px solid var(--color-background-pre, #ececec);
            vertical-align: middle;
            border-radius: 0px`;

            // Insert the flag element right before the phone number node
            afterNode.parentNode.insertBefore(flagImg, afterNode);
        }
    });
}

/**
 * Find sections of elements of the DOM that contain a phone number.
 * Construct an array of objects, each with a phone number and details of its
 * location.
 * Phone number rules:
 * - Optional leading +
 * - 8 to 15 digits total
 * - May contain spaces, hyphen, parentheses
 *
 * @returns {Element[]} Array of phone number objects with location info.
 *
 */
function FindPhoneNumbers() {


    const PHONE_REGEX = /(?:\+|00)?(?:[()\s.-]*\d){8,15}(?:[()\s./-]*)/g;

    // Ignore the following formats:
    // Years in between parens (N{1,4}-N{1,4})
    // Dates: (N{1,2}-N{1,2}-N{2})
    //
    // \(\d{4}-\d{4}\) matches (year-year) (optionally with parens)
    // \(\d{2}[-/]\d{2}[-/]\d{4}\) matches (date-month-year) (optionally with parens)
    const DATE_OR_YEAR_REGEX = /(?:\d{1,2}-\d{1,2}-\d{1,4}|\(?\d{4}[-/]\d{4}\)?)/

    let results = [];
    let seen = new Set();

    // Walk through, and accept, only the accepted nodes:
    // Visible, non-code, non-script.

    let walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode(node) {
                // See if element is not visible
                const parent = node.parentElement;
                if (!parent || !isVisibleElement(parent)) {
                    return NodeFilter.FILTER_REJECT;
                }
                // See if there's no text inside the element
                const text = node.nodeValue;
                if (!text || !text.trim()) return NodeFilter.FILTER_REJECT;

                // Ignore anything inside code-like elements
                if (parent.closest("code, pre, kbd, samp")) {
                    return NodeFilter.FILTER_REJECT;
                }

                console.log("Matching %s", node.textContent)
                // Ignore if matches (year-year) or (date) format
                if (DATE_OR_YEAR_REGEX.test(text)) {
                    console.log("DATE_OR_YEAR matched.")
                    return NodeFilter.FILTER_REJECT;
                }

                // see if the node is an ignored node (script, style, svg etc.)
                if (isIgnoredNode(node.parentElement)) {
                    return NodeFilter.FILTER_REJECT;
                }

                PHONE_REGEX.lastIndex = 0;
                return PHONE_REGEX.test(text)
                    ? NodeFilter.FILTER_ACCEPT // Accept containing phone numbers
                    : NodeFilter.FILTER_REJECT;
            }
        }
    );

    let textNode;
    while ((textNode = walker.nextNode())) {
        const element = textNode.parentElement;
        if (!element || seen.has(element)) continue;

        const text = element.textContent || "";
        PHONE_REGEX.lastIndex = 0;

        let match;
        // for each regex match (array)
        while ((match = PHONE_REGEX.exec(text)) !== null) {
            results.push({
                // push the match
                // but trim it of spaces, hyphens, leading 00s for easier search
                phoneNumber: match[0],
                index: match.index, // index of the match in the nodeText
                element // the containing element
            });
        }
        seen.add(element);
    }
    return results;
}

let timer;

function init() {
    PrependFlagToPhoneNumbers(FindPhoneNumbers());
}

// We wait until DOM stops changing for 400ms
const observer = new MutationObserver(() => {
    clearTimeout(timer);
    timer = setTimeout(() => {
        observer.disconnect();
        init();
    }, 400); //
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
});

module.exports = {
    actualPlaces,
    BuildPlainRegExpForPlace,
    BuildRegExpForSubPlace,
    BuildAllRegExpsForPlaces,
    ReturnFirstPlaceMatchingRegExp
};
