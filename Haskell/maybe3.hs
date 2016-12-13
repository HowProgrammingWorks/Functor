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
  print $ (*) <$> Nothing <*> Nothing
  print $ (*) <$> Nothing <*> Just 2
  print $ (*) <$> Just 3  <*> Nothing
  print $ (*) <$> Just 3  <*> Just 2
