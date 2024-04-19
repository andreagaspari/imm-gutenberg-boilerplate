<?php
/**
 * Registers all block assets so that they can be enqueued through Gutenberg in
 * the corresponding context.
 *
 * Passes translations to JavaScript.
 */
add_action('init', function () {
	// Gutenberg is not active.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}
	
	// Register the block by passing the location of block.json to register_block_type.
	register_block_type( __DIR__ );

	// Setup translation management if available
	if ( function_exists( 'wp_set_script_translations' ) ) {
		$block = json_decode(file_get_contents( __DIR__ . '/block.json' ));
		wp_set_script_translations( str_replace('/', '-', $block->name).'-editor-script', LANG_DOMAIN );
	}
});