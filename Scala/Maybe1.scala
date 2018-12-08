package maybe

import scala.language.higherKinds

//Functor typeclass with existential F type
trait Functor[F[_]] {
  def fmap[A, B](fa: F[A])(f: A => B): F[B]
}

object Functor {
  //Summons functor instance if it is in scope
  def apply[F[_]](implicit f: Functor[F]): Functor[F] = f
}

//Maybe typeclass that represents optional value. Value type is covariant
sealed trait Maybe[+T]
//Maybe child that holds value. Value type is covariant
case class Just[+T](value: T) extends Maybe[T]
//Maybe child that represents nothing
case object None extends Maybe[Nothing]

object Maybe {
  //Just factory method
  def just[T](value: T): Maybe[T] = Just(value)

  //None factory method
  def none[T]: Maybe[T] = None

  //Functor implementation for Maybe
  implicit val maybeFunctor: Functor[Maybe] = new Functor[Maybe] {
    override def fmap[A, B](fa: Maybe[A])(f: A => B): Maybe[B] = fa match {
      case Just(v) => Just(f(v))
      case None    => None
    }
  }
}

object Main extends App {
  println(Functor[Maybe].fmap(None)((a: Int) => a + 2))
  //prints None
  println(Functor[Maybe].fmap(Just("2"))(_.toInt))
  //prints Just(2)
}
