# Solving FizzBuzz

# Take number input from user and print from 1 to the entered number
print "Enter a number: "
number = gets.chomp.to_i

#print "Fizz" for no/3, "Buzz" for no/5 & "FizzBuzz" for no/5&3
count = 1
while count <= number
  if count % 5 == 0 && count % 3 == 0
    puts "FizzBuzz"
  elsif count % 3 == 0
    puts "Fizz"
  elsif count % 5 == 0
    puts "Buzz"
  else
    puts count
  end
  count += 1
end
