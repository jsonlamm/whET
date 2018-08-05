ans = input("Why do cats meow?:").strip().lower()

while ans != "just because!":
  ans = input("but why").strip().lower()

print ("okay")

#

def recursive_fact(num):
  if num == 1:
    return 1
  else:
    return num * recursive_fact(num - 1)

