def createStrip(chars):
	def stripFunc(string):
		return string.strip(chars)
	return stripFunc

myStrip = createStrip('!?.,:;')
print(myStrip(';!?First Second Third;:.')) # First Second Third