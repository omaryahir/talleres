# -*- coding: utf8 -*-

# Util > Media of 3 numbers, max and sum

maxahora = 0
suma = 0
for i in [1,2,3]:
	number = raw_input("Escribe el número:")

	try:
		num = float(number)
	except:
		print "Número no válido"
		
	if maxahora < num:
		maxahora = num

	suma = suma + num

prom = suma / 3

print "Número máximo: %s | Promedio: %s | Suma: %s" % (maxahora,prom,suma)
