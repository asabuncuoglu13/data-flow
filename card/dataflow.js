var _emptyPopUp = {
    question: "",
    title: "",
    explanation: "",
    style:"",
    detailButton: "",
};

// Content Cards
// 1
var _locationPopUp = {
    question: "How do I see this content?",
    title: "Most Viewed Videos in Your Area (Istanbul)",
    explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
    style:"location",
    detailButton: "./detail/recommendation.html",
};
// 2
var _recommendationPopUp = {
    question: "Why do I see this content?",
    title: "Interest Groups Shapes the Recommendations",
    explanation: "The algorithm behind this system records the data when you like, watch, or search for content. The system fits your interest data with a similar group to better categorize their content.",
    style:"recommendation",
    detailButton: "./detail/recommendation.html",
};
// 3
var _controlRecommendationsPopUp = {
    question: "Can you control your recommendations?",
    title: "You can Control Your Recommendations",
    explanation: "Deleting the history and liking the content can shape your recommendations.",
    style:"control-recommendations",
    detailButton: "./detail/recommendation.html"
};
// 4
var _baitContentPopUp = {
    question: "Is it a clickbait content?",
    title: "The Thumbnail Images can be Misleading",
    explanation: "It is called “clickbait.” The content creator tries to grab your attention with misleading images and content.",
    style:"bait-content",
    detailButton: "./detail/bait.html",
};
// 5
var _baitTitlePopUp = {
    question: "Is it a clikbait title?",
    title: "Content Creator Know the Basic Mechanism of the Recommendation Algorithm",
    explanation: "They can use bait images or titles ın their videos  as bait to get more videos and become more trending.",
    style:"bait-title",
    detailButton: "./detail/bait.html",
};
// 6
var _baitAdsPopUp = {
    question: "",
    title: "Most Viewed Videos in Your Area (Istanbul)",
    explanation: "Based on your internet provider (Turk Telekom) info, we know that you are in Istanbul. According to our data scientists, you will be 80% likely to watch these recommended videos similar to your neighbours. this is why you are viewing this content now.",
    style:"bait-ads",
    detailButton: "./detail/bait.html",
};
// 7
var _fakeContentPopUp = {
    question: "Is it real?",
    title: "Content can be Fake",
    explanation: "AI models become more successful on generating fake but realistic content. images can be photoshopped.",
    style:"fake",
    detailButton: "./detail/valid.html",
};
// 8
var _cherryPickingPopUp = {
    question: "Does the content cherry picking?",
    title: "Search Other Resources to Hear the Whole Story",
    explanation: "Some content can pick the information that provide profit to them",
    style:"cherry-pick",
    detailButton: "./detail/valid.html",
};
// 9
var _verificationPopUp = {
    question: "Is the information valid?",
    title: "Becoming Online does not Indicate Validness",
    explanation: "Most people tend to believe information when they see the info on online, but anyone can create a web page.",
    style:"verification",
    detailButton: "./detail/valid.html",
};
// 10
var _commonSensePopUp = {
    question: "What does your common sense say?",
    title: "Follow your common sense when in doubt",
    explanation: "Ask questions like 'Who can benefit from this disinformation?', 'What are the benefits and risks of clicking on it?' and use your common sense.",
    style:"common-sense",
    detailButton: "./detail/valid.html",
};

// Security
// 1
var _twoFactorPopUp = {
    question: "Should I use two factor authentication?",
    title: "Use Two-Factor Authentication If It is Available",
    explanation: "It makes you more secure. The application will send a code to your personal smartphone to approve if it is really you!",
    style:"pass-twofactor",
    detailButton: "./detail/secure.html",
};
// 2
var _securePasswordPopUp = {
    question: "Can strong password protect my loved ones?",
    title: "Give Time to Create a Real Secure Password",
    explanation: "You might think that your data is not important but from your profile you put your friends and family in danger. Someone might behave like you in an online environment and your close ones can believe this attack!",
    style:"pass-secure",
    detailButton: "./detail/secure.html",
};

var _passwordSecondPopUp = {
    question: "Is my password, okay?",
    title: "A Hacker can Crack This Password in Seconds",
    explanation: "This password is one of the most commonly used passwords. If hackers intend to hack your account, this is one of the first passwords they will try.",
    style:"password-second",
    detailButton: "./detail/secure.html",
};

var _passwordDayPopUp = {
    question: "Is my password, okay?",
    title: "A Hacker needs 2-3 days to crack this password",
    explanation: "This password is not easy to crack. After the occurrence of a potentıal securıty breach, you may have the chance to change your password.",
    style:"password-day",
    detailButton: "./detail/secure.html",
};

var _passwordMonthPopUp = {
    question: "Is my password, okay?",
    title: "A Hacker needs months to crack this password",
    explanation: "This password consists of more than 8 characters, including numbers and symbols. It is not easy to crack ıt.",
    style:"password-month",
    detailButton: "./detail/secure.html",
};
// Digital Footprint
// 1
var _watchHistoryPopUp = {
    question: "How does this visit affect my digital footprint?",
    title: "Your visiting history is your digital footprint",
    explanation: "The watching history is your unique identifier that defines your interest areas.",
    style:"watch-history",
    detailButton: "./detail/footprint.html",
};
// 2
var _interactionHistoryPopUp = {
    question: "How does this interaction affect my digital footprint?",
    title: "When You Like and Comment, This Interaction Becomes Your Digital Footprint",
    explanation: "The watching history is your unique identifier that defines your interest areas.",
    style:"interaction-history",
    detailButton: "./detail/footprint.html",
};
// 3
var _futureSelfPopUp = {
    question: "How can digital footprint affect my future?",
    title: "When You Upload a Video Everyone can Watch it, Forever",
    explanation: "Publishing a video online can result with your future boss, family and friends watching this video.",
    style:"futureself",
    detailButton: "./detail/footprint.html",
};
// 4
var _createVideoPopUp = {
    question: "How can creating a video reveal my identity?",
    title: "When You Create a New Video, It Becomes Your Digital Footprint",
    explanation: "Do not share personal identifiers like your home, school,  social security number, birth year etc.",
    style:"create-history",
    detailButton: "./detail/footprint.html",
};

var prepareTagContent = (_json) => {
    var tag = document.createElement("div");
    tag.innerHTML = _json.question;
    $(function () {
        tag.onclick = function (event) {
            $('<div id="dialog" class="card">\n' +
                '    <h2 id="title">' + _json.title + '</h2>\n' +
                '    <i id="detail" class="fas fa-arrow-right"></i>\n' +
                '    <p id="explanation">' + _json.explanation + '</p>\n' +
                '    <div class="pic ' + _json.style + '"></div>\n' +
                '    <div class="social">\n' +
                '        <i id="facebook" class="fab fa-facebook-f"></i>\n' +
                '        <i id="twitter" class="fab fa-twitter"></i>\n' +
                '        <i id="instagram" class="fab fa-instagram"></i>\n' +
                '        <i id="github" class="fab fa-github"></i>\n' +
                '    </div>\n' +
                '    <button>\n' +
                '    </button>\n' +
                '</div>').appendTo('body');
            event.preventDefault();

            $("#dialog").dialog({
                width: 600,
                modal: true,
                close: function (event, ui) {
                    $("#dialog").remove();
                }
            });
        } //close click
    });
    tag.className = "link";
    return tag;
};


var bindPopUpBeforeElementWithId = (_id, _json) => {
    document.getElementById(_id).parentNode.insertBefore(prepareTagContent(_json), document.getElementById(_id));
};

var bindPopUpInsideElementWithId = (_id, _json) => {
    document.getElementById(_id).innerHTML = prepareTagContent(_json);
};

var bindPopUpBeforeElement = (_el, _json) => {
    _el.parentNode.insertBefore(prepareTagContent(_json), _el);
};

var bindPopUpInsideElement = (_el, _json) => {
    _el.innerHTML = prepareTagContent(_json);
};

