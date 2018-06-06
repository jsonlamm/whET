def square(n):
  """Returns the square of a number."""
  squared = n ** 2
  print "%d squared is %d." % (n, squared)
  return squared

def power(base, exponent):
  result = base ** exponent
  print "%d to the powers of %d is %d." % (base, exponent, result)