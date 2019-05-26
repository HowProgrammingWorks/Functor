class Strip:

	def __init__(self, chars):
		self.chars = chars

	def __call__(self, string):
		return string.strip(self.chars)

item = Strip('!?.,:;')
print(item.__call__(';!?First Second Third;:.'))