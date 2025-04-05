x = input()
count = ""
for i in range(len(x)-1,-1,-1):
    count = count+x[i]
    
print(int(count))