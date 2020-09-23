import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import { View } from 'react-native';

interface IMovie {
  id: string;
  title: string;
  image: string;
  quantity: number;
}

interface ICartContext {
  movies: IMovie[];
  addToCart(item: Omit<IMovie, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  const addToCart = useCallback(
    async movie => {
      const movieAlreadyInCart = Boolean(movies.find(cartMovie => cartMovie.id === movie.id));

      if (movieAlreadyInCart) {
        increment(movie.id);
      } else {
        setMovies(oldMovies => [...oldMovies, { ...movie, quantity: 1 }])
      }

    }, [movies]
  )

  const increment = useCallback(async id => {
    const updatedMovie = movies.map(movie => movie.id === id ? { ...movie, quantity: movie.quantity + 1 } : movie)

    setMovies(updatedMovie)
  }, [movies])

  const decrement = useCallback(async id => {
    const movieIndex = movies.findIndex(movie => movie.id === id);

    if (movies[movieIndex].quantity === 1) {
      const moviesUpdated = movies.filter(movie => movie.id !== id);
      setMovies(moviesUpdated);

    } else {
      const moviesUpdated = movies.map(movie => movie.id === id ? { ...movie, quantity: movie.quantity - 1 } : movie)
      setMovies(moviesUpdated)
    }
  }, [movies])

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, movies }), [movies, addToCart, increment, decrement]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) throw new Error(`useCart must be used within a CartProvider`)

  return context;
}

export { CartProvider, useCart };
