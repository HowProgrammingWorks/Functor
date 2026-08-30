class Accumulator(object):
    '''
    __call__() allows the class instance to be called as a function
    '''
    def __init__(self, number=0):
        self.number = number
    def __call__(self, x):
        self.number += x
        return self.number


item = Accumulator(1)

#remember and add
print(item(5)) # 6

print(item(7)) # 13

print(item(6)) # 19

# a bit more complex. 
# 19 + 4 = 23, 23 + 23 = 46 
print(item(item(4))) # 46