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
      <div className='footer'>
        <p><strong>Copywright 2021</strong> website.com</p>
      </div>
    </div>
  );
}

export default App;
