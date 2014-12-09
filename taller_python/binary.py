# -*- coding: utf-8 -*-

# Util > Binary (4 digit) to dec

data = raw_input("Número binario (Example:1101): ")

sum = 0
exponent = len(data)-1;
for i in data:

	try:
		digit = int(i)
	except:
		print "Número no válido"

	sum += (digit * (2**exponent))
	exponent -= 1 


print "Número en base 10: %d" % sum
