<?php
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
 
function boilerplate_register_block() {
	if ( ! function_exists( 'register_block_type' ) ) {
		// Gutenberg is not active.
		return;
	}
	
	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ );

	// Setup translation management.
	if ( function_exists( 'wp_set_script_translations' ) ) {
		wp_set_script_translations( 'boilerplate', LANG_DOMAIN );
	}

}
add_action( 'init', 'boilerplate_register_block' );
