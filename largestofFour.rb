# Sort an array of arrays
# Separate the biggest number in each
# array to a new array
def largestofFour(arr)
  arr.map { |e| e.sort.last }.sort
end

def largestofFour2(arr)
  output = []
  arr.each do |array|
    output << array.sort.last
  end
  output.sort
end


p largestofFour2([[4, 5, 1, 3, 8, 50], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])
