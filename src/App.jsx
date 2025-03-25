import './App.css';
import DefaultLayout from './components/layout/DefaultLayout';
import HomePage from './pages/Home';

function App() {
    return (
        <div>
            <DefaultLayout>
                <HomePage />
            </DefaultLayout>
        </div>
    );
}

export default App;
