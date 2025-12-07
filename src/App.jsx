import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Navbar, Welcome, Home} from "#components";
import { Resume, Safari, Terminal, Finder, Text, Image, Contact, Photos } from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
  return (
  <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
    <Photos />

    <Home />
  </main>
  );
};

export default App;