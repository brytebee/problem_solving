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

chunk_array(["a", "b", "c", "d"], 3); # [ [ 'a', 'b', 'c' ], [ 'd' ] ]
chunk_array(["a", "b", "c", "d"], 2); # [ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunk_array([0, 1, 2, 3, 4, 5], 2) # [[0, 1], [2, 3], [4, 5]]
chunk_array([0, 1, 2, 3, 4, 5], 4) # [[0, 1, 2, 3], [4, 5]]

chunk_array2(["a", "b", "c", "d"], 3); # [ [ 'a', 'b', 'c' ], [ 'd' ] ]
chunk_array2(["a", "b", "c", "d"], 2); # [ [ 'a', 'b' ], [ 'c', 'd' ] ]
chunk_array2([0, 1, 2, 3, 4, 5], 2) # [[0, 1], [2, 3], [4, 5]]
chunk_array2([0, 1, 2, 3, 4, 5], 4) # [[0, 1, 2, 3], [4, 5]]
