import Prelude hiding (Maybe(..), Functor, fmap, (<$>))

data Maybe a = Just a | Nothing
  deriving (Show)

class Functor f where
  fmap  :: (a -> b) -> f a -> f b

(<$>) :: Functor f => (a -> b) -> f a -> f b
(<$>) = fmap
infixl 4 <$>

instance Functor Maybe where
  fmap f (Just x) = Just $ f x
  fmap _ Nothing  = Nothing

main = do
 print $ (* 2) <$> Just 5
 print $ (* 2) <$> Nothing
