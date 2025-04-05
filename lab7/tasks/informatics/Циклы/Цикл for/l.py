a = input()
count=0
for i in range(len(a)-1,-1,-1):
    if(a[i]=='1'):
        count=count+(pow(2, len(a)-1-i))

print(count)