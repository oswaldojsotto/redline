/* eslint-disable no-unused-vars */
import './styles/index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import { ReactLenis, useLenis } from 'lenis/react';

function App() {
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root>
      <Header />
      <Hero />
    </ReactLenis>
  );
}

export default App;
