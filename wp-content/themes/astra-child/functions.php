<?php
/**
 * astra-child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package astra-child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );


// footer copyright year
function current_year_init() {
	function current_year_fn () {
		$year = date_i18n ('Y');
		return $year;
	}
	add_shortcode ('current_year', 'current_year_fn');
}
add_action('init', 'current_year_init');


/**
 * 
 * Change the breakpoint of the Astra Header Menus
 * 
 * @return int Screen width when the header should change to the mobile header.
 */
// function your_prefix_change_header_breakpoint() {
// 	return 1120;
// };
// add_filter( 'astra_header_break_point', 'your_prefix_change_header_breakpoint' );

// Update your custom tablet breakpoint below - like return 1120;
add_filter( 'astra_tablet_breakpoint', function() {
    return 1120;
});

// Update your custom mobile breakpoint below - like return 544;
// add_filter( 'astra_mobile_breakpoint', function() {
//     return 544;
// });
