
def sayHi(salutation):
  def temp(person):
    return print(salutation + person)
  return temp

print(sayHi('yo')('Matt')) ;