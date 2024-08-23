import './App.css';
import { AboutMe } from './components/about-me/AboutMe';
import { CanvasOfMe } from './components/animations/CanvasOfMe';

function App() {
  return (
    <div>
      <CanvasOfMe />
      <main>
        <AboutMe />
      </main>
    </div>
  );
}

export default App
