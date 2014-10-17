#!/usr/bin/env coffee

# Node Modules
SimpleHTTPServer    = require 'simple-http-server-lc'
commander           = require 'commander'
colors				= require 'colors'


# Commander Setup
commander
	.version('0.0.1')
	.option('-c, --cache <cache>', 'Set the cache time in seconds. Defaults to 3600 (1 hour).', Number, 3600)
	.option('-d, --directory <directory>', 'The directory you would like to serve. Defaults to the current directory.', String, './')
	.option('-p, --port <port>', 'The port you would like to use. Defaults to 8080.', Number, 8080)
	.option('-v, --verbose', 'Turns verbose output on.')
	.parse(process.argv)

# Arguments
port    = commander.port
path    = commander.directory
verbose = Boolean commander.verbose
cache   = commander.cache


# Server
server = SimpleHTTPServer.createServer({
	port: port
	verbose: verbose
	cache: cache
	root: path
})


# Start Listening
server.listen port

console.log 'Simple HTTP Server Started on Port %d and is serving files in %s'.green, port, path
console.log 'Verbose %s', verbose
console.log 'cache %s Seconds', cache