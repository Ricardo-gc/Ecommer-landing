import './App.css';

import Hero from './Components/Hero/Hero';
import Discover from './Components/Discover/Discover';
import Experience from './Components/Experience/Experience';
import Functionality from './Components/Functionality/Functionality';
import Download from './Components/Download/Download';
import Socials from './Components/Socials/Socials';

function App() {
  return (
    <div className="App">
      <Hero></Hero>
      <Discover></Discover>
      <Experience></Experience>
      <Functionality></Functionality>
      <Download></Download>
      <Socials></Socials>
    </div>
  );
}

export default App;
