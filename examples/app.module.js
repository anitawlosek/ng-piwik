(function(angular) {
    'use strict';

    angular
        .module('myApp', ['ngMockE2E', 'clearcode.components.ngPiwik'])
        .run(function($httpBackend){

            var jsonRecentRealTimeData = [
                {
                    idSite: '7',
                    idVisit: '14274854',
                    visitIp: false,
                    visitorId: false,
                    goalConversions: 0,
                    siteCurrency: 'USD',
                    siteCurrencySymbol: '$',
                    serverDate: '2014-10-13',
                    visitServerHour: '13',
                    lastActionTimestamp: 1413207321,
                    lastActionDateTime: '2014-10-13 13:35:21',
                    userId: false,
                    visitorType: 'returning',
                    visitorTypeIcon: 'plugins/Live/images/returningVisitor.gif',
                    visitConverted: '0',
                    visitConvertedIcon: null,
                    visitCount: '4',
                    firstActionTimestamp: 1413207321,
                    visitEcommerceStatus: 'none',
                    visitEcommerceStatusIcon: null,
                    daysSinceFirstVisit: '0',
                    daysSinceLastEcommerceOrder: '0',
                    visitDuration: '1',
                    visitDurationPretty: '1s',
                    searches: '0',
                    actions: '2',
                    operatingSystem: 'Windows 8.1',
                    operatingSystemCode: 'W81',
                    operatingSystemShortName: 'W81',
                    operatingSystemIcon: 'plugins/UserSettings/images/os/W81.gif',
                    browserFamily: 'webkit',
                    browserFamilyDescription: 'WebKit (Safari, Chrome)',
                    browserName: 'Chrome 38.0',
                    browserIcon: 'plugins/UserSettings/images/browsers/CH.gif',
                    browserCode: 'CH',
                    browserVersion: '38.0',
                    screenType: 'wide',
                    resolution: '1440x900',
                    screenTypeIcon: 'plugins/UserSettings/images/screens/wide.gif',
                    plugins: 'pdf, flash, java, quicktime',
                    pluginsIcons: [],
                    continent: 'Europa',
                    continentCode: 'eur',
                    country: 'Francja',
                    countryCode: 'fr',
                    countryFlag: 'plugins/UserCountry/images/flags/fr.png',
                    region: 'Languedoc-Roussillon',
                    regionCode: 'A9',
                    city: 'Cournonterral',
                    location: 'Cournonterral, Languedoc-Roussillon, Francja',
                    latitude: '43.556999',
                    longitude: '3.718000',
                    visitLocalTime: '15:35:03',
                    visitLocalHour: '15',
                    provider: 'proxad.net',
                    providerName: 'Free',
                    providerUrl: 'http://www.proxad.net/',
                    daysSinceLastVisit: '0',
                    deviceType: 'Pulpit',
                    referrerType: 'search',
                    referrerTypeName: 'Wyszukiwarki',
                    referrerName: 'Google',
                    referrerKeyword: 'Słowo kluczowe nie zdefiniowany',
                    referrerKeywordPosition: null,
                    referrerUrl: 'http://piwik.org/faq/general/#faq_144',
                    referrerSearchEngineUrl: 'http://google.com',
                    referrerSearchEngineIcon: 'plugins/Referrers/images/searchEngines/google.com.png',
                    events: '0',
                    serverTimestamp: 1413207321,
                    serverTimePretty: '13:35:21',
                    serverDatePretty: 'Pon 13 X',
                    serverDatePrettyFirstAction: 'Pon 13 X',
                    serverTimePrettyFirstAction: '13:35:21'
                },
                {
                    idSite: '7',
                    idVisit: '14274782',
                    visitIp: false,
                    visitorId: false,
                    actionDetails: [],
                    goalConversions: 1,
                    siteCurrency: 'USD',
                    siteCurrencySymbol: '$',
                    serverDate: '2014-10-13',
                    visitServerHour: '13',
                    lastActionTimestamp: 1413207295,
                    lastActionDateTime: '2014-10-13 13:34:55',
                    userId: false,
                    visitorType: 'new',
                    visitorTypeIcon: null,
                    visitConverted: '1',
                    visitConvertedIcon: 'plugins/Morpheus/images/goal.png',
                    visitCount: '1',
                    firstActionTimestamp: 1413206979,
                    visitEcommerceStatus: 'none',
                    visitEcommerceStatusIcon: null,
                    daysSinceFirstVisit: '0',
                    daysSinceLastEcommerceOrder: '0',
                    visitDuration: '317',
                    visitDurationPretty: '5 min 17s',
                    searches: '2',
                    actions: '26',
                    operatingSystem: 'Windows 7',
                    operatingSystemCode: 'WI7',
                    operatingSystemShortName: 'Win 7',
                    operatingSystemIcon: 'plugins/UserSettings/images/os/WI7.gif',
                    browserFamily: 'gecko',
                    browserFamilyDescription: 'Gecko (Firefox)',
                    browserName: 'Firefox 32.0',
                    browserIcon: 'plugins/UserSettings/images/browsers/FF.gif',
                    browserCode: 'FF',
                    browserVersion: '32.0',
                    screenType: 'wide',
                    resolution: '1366x768',
                    screenTypeIcon: 'plugins/UserSettings/images/screens/wide.gif',
                    plugins: 'pdf, flash, java, quicktime, windowsmedia, silverlight',
                    continent: 'Europa',
                    continentCode: 'eur',
                    country: 'Wielka Brytania',
                    countryCode: 'gb',
                    countryFlag: 'plugins/UserCountry/images/flags/gb.png',
                    region: 'Glasgow City',
                    regionCode: 'V2',
                    city: 'Glasgow',
                    location: 'Glasgow, Glasgow City, Wielka Brytania',
                    latitude: '55.833000',
                    longitude: '-4.250000',
                    visitLocalTime: '14:29:42',
                    visitLocalHour: '14',
                    provider: 'Ip',
                    providerName: 'IP',
                    providerUrl: 'http://piwik.org/faq/general/#faq_52',
                    daysSinceLastVisit: '0',
                    deviceType: 'Pulpit',
                    referrerType: 'search',
                    referrerTypeName: 'Wyszukiwarki',
                    referrerName: 'Google',
                    referrerKeyword: 'Słowo kluczowe nie zdefiniowany',
                    referrerKeywordPosition: '1',
                    referrerUrl: 'http://piwik.org/faq/general/#faq_144',
                    referrerSearchEngineUrl: 'http://google.com',
                    referrerSearchEngineIcon: 'plugins/Referrers/images/searchEngines/google.com.png',
                    events: '0',
                    serverTimestamp: 1413207295,
                    serverTimePretty: '13:34:55',
                    serverDatePretty: 'Pon 13 X',
                    serverDatePrettyFirstAction: 'Pon 13 X',
                    serverTimePrettyFirstAction: '13:29:39'
                }
            ];

            $httpBackend.when('GET', 'http://demo.piwik.org/?module=API&format=JSON&token_auth=anonymous&method=Live.getLastVisitsDetails&idSite=7&period=day&date=today')
                .respond(function(){
                    return [200, jsonRecentRealTimeData, {}];
                });
        });

})(angular);