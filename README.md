online-bdd
==========

Create tests and run them through a web interface

I put together this basic website for a client so that he can create/edit features online (without fit,ftp,..) and have immediate feedback.

There are 2 parts in this project:

The client
----------
elFinder with a custom "test" command that run the test and display the output.

elFinder uses the ace editor for gherkin syntax highlighting.


The server
----------
Using silex framework for basic security and routes and elFinder as the connector.

Default credentials: `admin:tester`

Do not forget to change the files/ permissions so it is writable by the web server. Eg: `chmod a+w files` or `chown www-data files`
