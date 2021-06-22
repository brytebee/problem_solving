def library_fine(d1, m1, y1, d2, m2, y2)
  0 if y1 < y2
  y1 > y2 ? 10000 : m1 > m2 ? 500 * (m1 - m2) : d1 > d2 ? 15 * (d1 -d2) : 0
end

p library_fine(1, 1, 2018, 31, 12, 2017) # 10,000
p library_fine(9, 6, 2015, 6, 6, 2015) # 45
p library_fine(14, 7, 2018, 5, 7, 2018) # 135
