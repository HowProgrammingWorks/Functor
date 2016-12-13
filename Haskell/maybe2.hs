main = do
  print $ (* 2) . (+ 5) . (^ 2) <$> Just 5
  print $ (* 2) . (+ 5) . (^ 2) <$> Nothing
