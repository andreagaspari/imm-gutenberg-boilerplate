# imm-gutenberg-boilerplate
Gutenberg Block Boilerplate

# GIT COMMANDS

Setup:
	
	1. git init
	2. git remote add origin git@github.com:andreagaspari/REPO_NAME.git
	3. git pull origin main
	
Commits 
	
	1. git add *
	2. git tag -a v0.0.0 -m "VERSION_DESC"
	3. git commit -m "COMMIT_MESSAGE"
	4. git push -u origin main


# NPM COMMANDS

How-to: https://developer.wordpress.org/block-editor/how-to-guides/javascript/js-build-setup/

Steps:

	1: npm init

		package name: (myguten-block) myguten-block
		version: (1.0.0)
		description: Test block
		entry point: (index.js) build/index.js
		test command:
		git repository:
		keywords:
		author: immaginificio
		license: (ISC) GPL-2.0-only
		
		About to write to .../package.json:

		{
		  "name": "myguten-block",
		  "version": "1.0.0",
		  "description": "Test block",
		  "main": "build/index.js",
		  "scripts": {
			"test": "echo \"Error: no test specified\" && exit 1"
		  },
		  "author": "immaginificio",
		  "license": "GPL-2.0-only"
		}

		Is this OK? (yes) yes
		
	2: npm install --save-dev --save-exact @wordpress/scripts @wordpress/i18n

	3: edit package.json
		 ...
		 	"scripts": {
				"start": "wp-scripts start",
				"build": "wp-scripts build"
			  },
		 ...
		 
	4: create src/index.js as entrypoint
	
	5: For developement mode run "npm start"
	
	6: To build run "npm run build"
	

