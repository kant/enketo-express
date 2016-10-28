if ( typeof exports === 'object' && typeof exports.nodeName !== 'string' && typeof define !== 'function' ) {
    var define = function( factory ) {
        'use strict';
        factory( require, exports, module );
    };
}

define( function( require, exports, module ) {
    'use strict';
    var widgets = [
        require( '../../../widget/select-random/selectrandomizer' ),
        require( '../../../widget/unga-header/header' ),
        require( '../../../../node_modules/enketo-core/src/widget/horizontal-choices/horizontalchoices' ),
        require( '../../../widget/select-unga/select-unga' ),
        require( '../../../widget/select-unga-collapse/select-unga-collapse' ),
        require( '../../../widget/select-unga-placeholder/select-unga-placeholder' ),
        require( '../../../widget/unga-slider/unga-slider' ),
        require( '../../../widget/unga-placeholder/unga-placeholder' ),
    ];

    module.exports = widgets;
} );

// CUSTOM UNGA REDIRECT CODE

var $ = require( 'jquery' );
function getQueryStringValue( key ) {
    return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(key).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
}

var partner = getQueryStringValue( "partner" );

$( document ).on( "submissionsuccess", function( evt, result ) {
    var iid = result.instanceId || '';
    if ( partner != 'GALOBBY180716' ) {
        window.location = "http://data.myworld2030.org/?instanceid=" + iid ;
    }
});

// END CUSTOM UNGA REDIRECT CODE