// ==UserScript==
// @name          Широкоэкранный Вконтакте
// @namespace 1
// @description	  Изменяет ширину страниц ВКонтакте. [FullHD]
// @version      0.0.2
// @author        Stive_99
// @homepage    https://github.com/BZHStudio/VkWideScreen
// @downloadUrl   https://raw.githubusercontent.com/BZHStudio/VkWideScreen/master/script.js
// @updateUrl     https://raw.githubusercontent.com/BZHStudio/VkWideScreen/master/script.js
// @include       https://vk.com/*
// @run-at        document-start
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

//---------- Ширина страницы ----------//

addGlobalStyle(' #page_header, #page_layout{ width: 85% !important; } ');
addGlobalStyle(' #page_body{ width: calc(100% - 170px) !important; } ');
addGlobalStyle(' #footer_wrap{"width: 100% !important; } ');

//---------- Раздел чата ----------//

addGlobalStyle(' .im-chat-input .im-chat-input--textarea{ width: calc(100% - 120px) !important; } ');

//---------- Раздел профиля пользователя ----------//

addGlobalStyle(' .page_module_upload{ padding: 28px 13px 28px 40% !important; } ');

//---------- Раздел приложений ----------//

addGlobalStyle(' .apps_recent_block{ width: calc(100% - 365px) !important; }  ');
addGlobalStyle(' .apps_featured_slider{ width: 100%; }  ');
addGlobalStyle(' #apps_before {width: 70 % !important; } ');

//---------- Раздел новостей ----------//

addGlobalStyle(' .wall_text{ overflow: hidden; } ');

//---------- Аудио раздел ----------//

addGlobalStyle(' .audio_page_layout .audio_friends_list_content { width: 100%; } ');
addGlobalStyle(' .audio_friends_list_wrap _audio_friends_list_wrap { width: 100%; } ');

//---------- Раздел видео ----------//

addGlobalStyle(' .videocat_row_ugc_popular, .videocat_featured_playlists, .video_items_list { width: 100%; } ');
addGlobalStyle(' .videocat_row{ width: auto; } ');
addGlobalStyle(' .videocat_featured_playlists { overflow: hidden; } ');
addGlobalStyle(' .videocat_featured_playlist{ width: calc(25% - 10px); margin: 5px !important; } ');
addGlobalStyle(' .videocat_featured_video { margin: 11px 11px 0 0 !important; } ');
addGlobalStyle(' .videocat_channel_subscribe .videocat_subscribe_btn{ margin: 0; } ');