
import { Button, Card } from 'animal-island-ui';
import { HomeIcon } from 'naive-icons';
import 'animal-island-ui/style';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card title="Animal Island UI">
          <Button type="primary">Get Started</Button>
        </Card>
      </header>
      <HomeIcon size={48} />
    </div>
  )
}

export default App
