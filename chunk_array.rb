def chunk_array(arr, sized)
  output = []
  i = 0
  while i < arr.count
    output << arr[i, i + sized]
    i += sized
  end
  p output
end

def chunk_array2(array, num)
  result = []
  while array.size > 0
    result << array.slice!(0, num)
  end
  p result
end

chunk_array(["a", "b", "c", "d"], 3)
chunk_array2(["a", "b", "c", "d"], 2)
