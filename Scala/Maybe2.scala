package maybe

import scala.language.higherKinds

object FunctorSyntax {
  //Implicit Functor operations class
  implicit class FunctorOps[F[_], A](val obj: F[A]) extends AnyVal {
    def fmap[B](f: A => B)(implicit functor: Functor[F]): F[B] =
      functor.fmap(obj)(f)
  }
}

object Maybe2 extends App {
  import Maybe._
  import FunctorSyntax._

  print(just("2").fmap(_.toDouble).fmap(a => a + 3))
  //prints Just(5.0)
}
