# Gutenberg Block Boilerplate

How-to: https://developer.wordpress.org/block-editor/how-to-guides/javascript/js-build-setup/

# NPM COMMANDS
## 1. Initialize NPM
Open folder in terminal and run

	npm init

Edit CAPITAL_WORDS during the process with your info

	package name: (imm-gutenberg-boilerplate) PACKAGE_NAME
	version: (1.0.0) PACKAGE_VERSION
	description: PACKAGE_DESCRIPTION
	entry point: (index.js) build/index.js
	test command:
	git repository:
	keywords:
	author: immaginificio
	license: (ISC) GPL-3.0-or-later
		
	About to write to .../package.json:

	{
	  "name": "YOUR_PACKAGE_NAME",
	  "version": "YOUR_PACKAGE_VERSION",
	  "description": "YOUR_PACKAGE_DESCRIPTION",
	  "main": "build/index.js",
	  "scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	  },
	  "author": "immaginificio",
	  "license": "GPL-3.0-or-later"
	}

	Is this OK? (yes) yes

## Install packages
Now it's time to install necessary packages. Run
		
	npm install --save-dev --save-exact @wordpress/scripts @wordpress/i18n

## Setting up build and start scripts
The @wordpress/script package can compile your code using *build* just once, or you can use *start* to run a watcher in terminal. In order to use this scripts you have to edit the *package.json* file just generated

	...
		"scripts": {
			"start": "wp-scripts start",
			"build": "wp-scripts build"
		},
	...

To use the scripts just run 
	npm start
for development mode, or 
	npm build
for package build.

## Create the entrypoint
Now you can start writing your code editing [index.js](src/index.js) in src folder
	

