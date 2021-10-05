let chatShow = false;
function show_hide(){

    if(chatShow) {
        $('.chat-container').hide();
    } else {
        $('.chat-container').show();
    }

    chatShow = !chatShow;
}
