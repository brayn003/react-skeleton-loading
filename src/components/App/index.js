import { useState } from 'react';
import InstaCard from '../example-components/InstaCard';

import './style.css';

function App() {
  const [loading, setLoading] = useState(false);

  const handleClickOnLoading = () => {
    setLoading(l => !l)
  }

  return (
    <div className="App-container">
      <div className="App-action-container">
        <button onClick={handleClickOnLoading}>
          {loading ? 'Loading ... (Click to cancel)' : 'Click to Load'}
        </button>
      </div>
      <div className="App-example-container">
        <div className="App-section">
          <InstaCard loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default App;
