require "set"

# Returns true if a pair of numbers
# within an array gives a given sum
def check_sum_pair(array, sum)
  my_set = Set.new
  len = array.length
  i = 0
  until i > len
    if my_set.include?(array[i])
      p true
      break
    end
    my_set.add(sum - array[i])
    i += 1
  end
end

check_sum_pair([6,4,3,2,1,7], 10)
