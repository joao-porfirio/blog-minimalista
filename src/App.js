import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Card from './components/Card/Card'

function App() {
  return (
    <div className="App">
      <Header />
      <Card data="14/09/2021" 
      titulo="Agora é Oficial: Windows 11" 
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus eget eros venenatis imperdiet. Ut quis maximus ex, eu iaculis mi. Pellentesque nunc arcu, eleifend in augue non, efficitur elementum nulla." />
      <Card data="14/09/2021" 
      titulo="Confira as últimas novidades!" 
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus eget eros venenatis imperdiet. Ut quis maximus ex, eu iaculis mi. Pellentesque nunc arcu, eleifend in augue non, efficitur elementum nulla." />
      <Card data="14/09/2021" 
      titulo="Saiba mais sobre as novidades do Firefox" 
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus eget eros venenatis imperdiet. Ut quis maximus ex, eu iaculis mi. Pellentesque nunc arcu, eleifend in augue non, efficitur elementum nulla." />
      <Card data="14/09/2021" 
      titulo="John McAfee, o criador do antivírus McAfee" 
      texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu risus eget eros venenatis imperdiet. Ut quis maximus ex, eu iaculis mi. Pellentesque nunc arcu, eleifend in augue non, efficitur elementum nulla." />
    </div>
  );
}

export default App;
