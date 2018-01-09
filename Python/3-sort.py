class Functor(object):

    def __init__(self):
        pass
    
    def __call__(self, x) :
        x_first = x[0]
        if type(x_first) is int:
            return self. __mergeSort(x)
        if type(x_first) is float:
            return self. __heapSort(x)
        else:
            return self.__noSort(x) 
 
    def __mergeSort(self, lst):
        print("Data is Merge sorted")
        result = []
        if len(lst) < 20:
            return sorted(lst)
        mid = int(len(lst) / 2)
        y = self.__mergeSort(lst[:mid])
        z = self.__mergeSort(lst[mid:])
        i = 0
        j = 0
        while i < len(y) and j < len(z):
            if y[i] > z[j]:
                result.append(z[j])
                j += 1
            else:
                result.append(y[i])
                i += 1
        result += y[i:]
        result += z[j:]
        return result
    
    def __heapSort(self, x):
               
        def swap(lst,i, j):                    
            lst[i], lst[j] = lst[j], lst[i] 
        
        def heapify(lst, end, pos):   
            l = 2 * pos + 1  
            r = 2 * (pos + 1)   
            max = pos   
            if l < end and lst[pos] < lst[l]:   
                max = l   
            if r < end and lst[max] < lst[r]:   
                max = r   
            if max != pos:   
                swap(lst, pos, max)   
                heapify(lst, end, max)   

        def heap_sort(lst):     
            end = len(lst)   
            start = end // 2 - 1
            for i in range(start, -1, -1):   
                heapify(lst, end, i)   
            for i in range(end-1, 0, -1):   
                swap(lst, i, 0)   
                heapify(lst, i, 0)
        
        print("Data is Heap sorted")
        heap_sort(x)
        
        return x

    def __noSort(self, lst):
        print("Data isn't sorted")
        return lst

class Run(object):
    def __init__(self):
        self.sort = Functor()
     
    def mainMeth(self, x):
        return self.sort(x)
 
start = Run()

print(start.mainMeth([5, 4, 6, 0, -6, 8])) # Mergesort 
print(start.mainMeth([4.256, 2.23, 3.45, 5.65])) # heapsort
print(start.mainMeth(['a','m', 'r', 's','b','q'])) # without sort