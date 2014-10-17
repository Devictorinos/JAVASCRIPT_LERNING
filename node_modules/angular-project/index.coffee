#!/usr/bin/env coffee

###
	Angular JS Project

	Allows you to generate all of the basic parts for a project.
###


# Node Modules
fs          = require 'fs-extra'
colors      = require 'colors'
commander   = require 'commander'
promptly	= require 'promptly'
async		= require 'async'
sys			= require 'sys'
exec		= require('child_process').exec


# Commander Setup
commander
	.version('0.0.1')
	.parse(process.argv)


# Functions
askForName = (cb)->
	promptly.prompt 'Projects Name: ', (err, name)->
		if err then throw err

		cb null, name

confirmProject = (name, cb)->
	promptly.confirm 'Your application will create a project at '+process.cwd()+'/'+name+'. Is this correct?', (err, correct)->
		if err then throw err

		if correct then cb null, process.cwd()+'/'+name


generateProject = (err, destination)->
	fs.copy __dirname + '/files', destination, (err)->
		if err then throw err

		console.log 'Finishing building the project.....'.yellow

		exec 'cd ' + destination + " && npm install && grunt build", (error, stdout, stderr)->
			sys.puts stdout
			console.log "Your project has been setup successfully \r\n".green


# Start
async.waterfall [askForName, confirmProject], generateProject