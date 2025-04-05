import math
a = int(input())
end = math.floor(math.sqrt(a))
i=1
while(end):
    print(i*i)
    i+=1
    end-=1