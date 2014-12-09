# -*- coding: utf8 -*-

# Util > Print secondos in differents values 

# request number of seconds.
seconds = raw_input("Dígite los segundos:")

try:
	seconds = long(seconds)

	if seconds <= 1000000:
		minutes = seconds / 60
		hours = minutes / 60
		days = hours / 24
	
		print "Minutos: %d" % minutes
		print "Horas: %d" % hours
		print "Días: %d" % days
	else:
		print "El número es mayor a 1000000"


except: 
	print "Número no válido"
	

