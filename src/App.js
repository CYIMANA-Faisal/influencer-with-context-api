import Influencers from './components/Influencers';
import NavBar from './components/Navbar';
import Search from './components/Search';
import influencer from './data';
function App() {
  return (
    <div className="text-sm">
      <NavBar />
      <Search />
      <Influencers users={influencer} />
    </div>
  );
}

export default App;
