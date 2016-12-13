import Prelude hiding (Applicative(..))

class Functor f => Applicative f where
  pure  :: a -> f a
  (<*>) :: f (a -> b) -> f a -> f b
  (*>)  :: f a -> f b -> f b
  (<*)  :: f a -> f b -> f a

  a *> b = fmap const b <*> a
  (<*)   = flip (*>)
  {-# MINIMAL pure, (<*>) #-}

instance Applicative Maybe where
  pure           = Just
  (Just f) <*> v = fmap f v
  Nothing  <*> _ = Nothing

main = do
  let a = Just 5
      b = Just $ (* 2) . (+ 5) . (^ 2)
      c = b <*> a
  print c
