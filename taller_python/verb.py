# -*- coding: utf-8 -*-

# Util > Using verbs

verb = raw_input("Escriba el verbo:")

pronom = {
	"yo": "o",
	"tu": "as",
	"el": "a",
	"nosotros": "amos",
	"vosotros": "áis",
	"ellos": "an",
}

print "Yo %s%s" % (verb[0:-2],pronom["yo"])
print "Tú %s%s" % (verb[0:-2],pronom["tu"])
print "Él %s%s" % (verb[0:-2],pronom["el"])
print "Nosotros %s%s" % (verb[0:-2],pronom["nosotros"])
print "Vosotros %s%s" % (verb[0:-2],pronom["vosotros"])
print "Ellos %s%s" % (verb[0:-2],pronom["ellos"])

