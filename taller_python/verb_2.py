# -*- coding: utf-8 -*-

# Util: Using verbs

verb = raw_input("Escriba el verbo:")

pronom = ["Yo", "Tú", "Él", "Nosotros", "Vosotros", "Ellos"]

endverb = {
	"Yo": "o",
	"Tú": "as",
	"Él": "a",
	"Nosotros": "amos",
	"Vosotros": "áis",
	"Ellos": "an",
}

for i in pronom:
	print "%s %s%s" % (i, verb[0:-2], endverb[i])

