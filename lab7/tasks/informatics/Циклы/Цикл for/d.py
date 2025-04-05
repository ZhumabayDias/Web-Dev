x = str(input())
d = str(input())
count = 0
for i in range(0,len(x)):
    if(x[i]==d):
        count+=1
print(count)