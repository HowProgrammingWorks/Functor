package functor

import scala.language.higherKinds

object FunctorSyntax {
  //Implicit Functor operations class
  implicit class FunctorOps[F[_], A](val obj: F[A]) extends AnyVal {
    def fmap[B](f: A => B)(implicit functor: Functor[F]): F[B] =
      functor.fmap(obj)(f)
  }
}

object Main2 extends App {
  import Option._
  import FunctorSyntax._

  /*
   * Option is created using factory method and there is reason for this.
   * For instance such example wont compile:
   *
   * Some(2).fmap(_ + 1)
   *
   * The reason is that it will search for Functor[Some]
   * and would not take into account Functor[Option]
   * that could be fixed by making Functor typeclass Invariant like it is fixed in Cats
   * but it is a little bit complicated for our simple example
   */
  println(some("2").fmap(_.toDouble).fmap(a => a + 3))
  //prints Some(5.0)
}
