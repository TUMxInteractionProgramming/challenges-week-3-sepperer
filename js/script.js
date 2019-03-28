/* #6 JavaScript is working */
console.log('app is alive');

/**
 * #6 switch channel name and location in right app bar
 * @param channelName
 */
function switchChannel(channelName) {
    console.log('Tuning into channel: ' + channelName);
    document.getElementById('channel-name').innerHTML = channelName;

    adress = 'upgrading.never.helps';
    $('#channel-location').html('by <strong><a href="http://w3w.co/' + adress + '" target="_blank">' + adress + '</a></strong>');

    /* #6 like channel */
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

/* #6 like channel */
function star() {
    $('#channel-star').attr('src', 'http://ip.lfe.mw.tum.de/sections/star.png');
}

/**
 * #6 switch between tab buttons
 * @param tabId
 */
function selectTab(tabId) {
    $('#tab-bar button').removeClass('selected');
    $(tabId).addClass('selected');
    console.log('Changing to tab: ' + tabId);
}

/**
 * #6 toggle emojis
 */
function toggleEmojis() {
    $('#emojis').toggle();
}
