import math
x = int(input())
count = 0
for i in range (1,int(math.isqrt(x+1))+1):
    if(x%i==0):
        if i == x // i:
            count += 1
        else:
            count += 2 
print(count)