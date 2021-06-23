def title_case(str)
  output = ''
  str.split.each do |word|
    word.capitalize!
    output << "#{word} "
  end
  output[-1] = ''
  output
end

p title_case("I'm a little tea pot")
p title_case("HERE IS MY HANDLE HERE IS MY SPOUT")
