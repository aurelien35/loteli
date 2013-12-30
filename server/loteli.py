import os
import logging.handlers
import cherrypy

class Root(object):
	@cherrypy.expose
	def index(self):
		pass

# Chemins du client et du serveur
loteliRootPath = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
loteliRootClientPath = os.path.join(loteliRootPath, 'client')
loteliRootServerPath = os.path.join(loteliRootPath, 'server')

# Configuration de l'application
config = {
	'/':{
		'tools.staticdir.root': loteliRootClientPath,
		'tools.staticdir.on': True,
		'tools.staticdir.dir': ''
	}
}

# Creation de l'application
application = cherrypy.tree.mount(Root(), '/', config = config)

# Configuration des logs
log = application.log
log.access_file = ""
log.error_file = ""
log.screen = False

# RotatingFileHandler pour les access : 10*10Mo maximum
accessLogFileName = os.path.join(loteliRootServerPath, 'logs/access.log')
accessLogHandler = logging.handlers.RotatingFileHandler(accessLogFileName, 'a', 10000000, 10)
accessLogHandler.setLevel(logging.DEBUG)
accessLogHandler.setFormatter(cherrypy._cplogging.logfmt)
log.access_log.addHandler(accessLogHandler)

# RotatingFileHandler pour les erreurs : 10*10Mo maximum
errorLogFileName = os.path.join(loteliRootServerPath, 'logs/error.log')
errorLogHandler = logging.handlers.RotatingFileHandler(errorLogFileName, 'a', 10000000, 10)
errorLogHandler.setLevel(logging.DEBUG)
errorLogHandler.setFormatter(cherrypy._cplogging.logfmt)
log.error_log.addHandler(errorLogHandler)

# Lancement de l'application
cherrypy.engine.start()
