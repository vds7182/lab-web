import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src="/logo.jpg" width="250" height="200" alt="Logo" />

      <header className="App-header">
            <nav>
                <li><a href="v.html">Вакансії</a></li>
                <li><a href="profile.html">Мій профіль</a></li>
                <li><a href="vacan.html">Пошук роботи</a></li>
            </nav>
            <h2 >Ласкаво просимо</h2>
            <p className="word">
              Наш сайт – це сучасна платформа для пошуку роботи та підбору персоналу в Україні. Ми допомагаємо кандидатам знайти ідеальну вакансію, а роботодавцям – кваліфікованих спеціалістів.<br></br>

                <strong>🔹 Для шукачів роботи:</strong><br></br>
                ✔️ Велика база вакансій у різних галузях.<br></br>
                ✔️ Зручний пошук за містом, зарплатою та графіком.<br></br>
                ✔️ Можливість створити резюме та відгукнутися на вакансію в один клік.<br></br>
                
                <strong>🔹 Для роботодавців:</strong><br></br>
                ✔️ Швидке розміщення вакансій.<br></br>
                ✔️ Доступ до резюме найкращих кандидатів.<br></br>
                ✔️ Зручні інструменти для управління відгуками.<br></br>

            </p>

         </header>
         
        
    </div>
  );
}

export default App;
