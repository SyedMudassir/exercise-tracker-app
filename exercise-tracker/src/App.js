import ActivityCard from "./components/ActivityCard";
import ActivityForm from "./components/ActivityForm";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="App py-5">
      <BrowserRouter>
      <nav class="navbar navbar-expand-lg px-5 bg-white justify-content-between m-auto">
    <NavLink to='/' class="navbar-brand"> <svg data-v-fde0c5aa="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" class="iconLeft"><defs data-v-fde0c5aa=""></defs><rect data-v-fde0c5aa="" fill="transparent" x="0" y="0" width="300px" height="300px" class="logo-background-square"></rect><defs data-v-fde0c5aa=""></defs><g data-v-fde0c5aa="" id="af2595c4-9709-4002-ae64-882657d88935" fill="#000000" transform="matrix(2.493856651787206,0,0,2.493856651787206,100.0190942122091,131.18385137199937)"><path d="M5.41 12.67L5.41 12.67Q3.23 12.67 1.76 11.20L1.76 11.20L1.76 11.20Q0.29 9.73 0.29 7.53L0.29 7.53L0.29 7.53Q0.29 5.37 1.76 3.89L1.76 3.89L1.76 3.89Q3.23 2.42 5.41 2.42L5.41 2.42L5.41 2.42Q7.60 2.42 9.17 3.79L9.17 3.79L7.81 5.28L7.81 5.28Q6.76 4.46 5.41 4.46L5.41 4.46L5.41 4.46Q4.03 4.47 3.18 5.33L3.18 5.33L3.18 5.33Q2.34 6.18 2.34 7.51L2.34 7.51L2.34 7.51Q2.34 8.94 3.19 9.78L3.19 9.78L3.19 9.78Q4.04 10.62 5.42 10.62L5.42 10.62L5.42 10.62Q6.53 10.62 7.12 10.19L7.12 10.19L7.12 8.43L5.76 8.44L5.76 6.52L9.17 6.52L9.17 11.31L9.17 11.31Q7.61 12.67 5.41 12.67L5.41 12.67ZM10.72 9.26L10.72 9.26L10.72 9.26Q10.72 7.75 11.68 6.79L11.68 6.79L11.68 6.79Q12.63 5.84 14.14 5.84L14.14 5.84L14.14 5.84Q15.64 5.84 16.53 6.79L16.53 6.79L16.53 6.79Q17.42 7.75 17.42 9.26L17.42 9.26L17.42 9.94L12.70 9.94L12.70 9.94Q12.77 10.49 13.18 10.79L13.18 10.79L13.18 10.79Q13.59 11.10 14.14 11.10L14.14 11.10L14.14 11.10Q15.09 11.10 15.85 10.55L15.85 10.55L16.94 11.65L16.94 11.65Q16.19 12.67 14.14 12.67L14.14 12.67L14.14 12.67Q12.63 12.67 11.68 11.72L11.68 11.72L11.68 11.72Q10.72 10.76 10.72 9.26ZM15.50 8.57L15.50 8.57Q15.50 8.03 15.09 7.72L15.09 7.72L15.09 7.72Q14.68 7.41 14.14 7.41L14.14 7.41L14.14 7.41Q13.59 7.41 13.18 7.72L13.18 7.72L13.18 7.72Q12.77 8.03 12.77 8.57L12.77 8.57L15.50 8.57ZM23.14 12.35L23.14 12.35Q22.65 12.67 22.01 12.67L22.01 12.67L22.01 12.67Q20.85 12.67 20.17 12.02L20.17 12.02L20.17 12.02Q19.48 11.38 19.48 10.35L19.48 10.35L19.48 7.39L18.46 7.39L18.46 5.84L19.48 5.84L19.48 3.99L21.40 3.79L21.40 5.84L22.43 5.84L22.43 7.39L21.40 7.39L21.40 10.08L21.40 10.08Q21.40 10.62 21.63 10.85L21.63 10.85L21.63 10.85Q21.86 11.07 22.22 11.07L22.22 11.07L22.22 11.07Q22.33 11.07 22.74 10.98L22.74 10.98L23.14 12.35ZM31.29 12.67L29.24 12.67L29.24 2.42L36.45 2.42L36.45 4.33L31.29 4.33L31.29 6.52L35.10 6.52L35.10 8.43L31.29 8.43L31.29 12.67ZM39.70 12.67L37.78 12.67L37.78 5.83L39.70 5.83L39.70 12.67ZM37.71 4.20L37.71 4.20L37.71 4.20Q37.71 4.61 37.99 4.88L37.99 4.88L37.99 4.88Q38.26 5.15 38.74 5.15L38.74 5.15L38.74 5.15Q39.22 5.15 39.49 4.88L39.49 4.88L39.49 4.88Q39.76 4.61 39.76 4.20L39.76 4.20L39.76 4.20Q39.76 3.79 39.49 3.51L39.49 3.51L39.49 3.51Q39.22 3.23 38.73 3.23L38.73 3.23L38.73 3.23Q38.26 3.23 37.99 3.51L37.99 3.51L37.99 3.51Q37.71 3.79 37.71 4.20ZM45.58 12.35L45.58 12.35Q45.09 12.67 44.45 12.67L44.45 12.67L44.45 12.67Q43.29 12.67 42.61 12.02L42.61 12.02L42.61 12.02Q41.92 11.38 41.92 10.35L41.92 10.35L41.92 7.39L40.90 7.39L40.90 5.84L41.92 5.84L41.92 3.99L43.85 3.79L43.85 5.84L44.87 5.84L44.87 7.39L43.85 7.39L43.85 10.08L43.85 10.08Q43.85 10.62 44.07 10.85L44.07 10.85L44.07 10.85Q44.30 11.07 44.67 11.07L44.67 11.07L44.67 11.07Q44.78 11.07 45.18 10.98L45.18 10.98L45.58 12.35ZM50.96 12.35L50.96 12.35Q50.47 12.67 49.83 12.67L49.83 12.67L49.83 12.67Q48.67 12.67 47.99 12.02L47.99 12.02L47.99 12.02Q47.30 11.38 47.30 10.35L47.30 10.35L47.30 7.39L46.28 7.39L46.28 5.84L47.30 5.84L47.30 3.99L49.23 3.79L49.23 5.84L50.25 5.84L50.25 7.39L49.23 7.39L49.23 10.08L49.23 10.08Q49.23 10.62 49.45 10.85L49.45 10.85L49.45 10.85Q49.68 11.07 50.05 11.07L50.05 11.07L50.05 11.07Q50.16 11.07 50.56 10.98L50.56 10.98L50.96 12.35ZM51.76 9.26L51.76 9.26L51.76 9.26Q51.76 7.75 52.72 6.79L52.72 6.79L52.72 6.79Q53.68 5.84 55.18 5.84L55.18 5.84L55.18 5.84Q56.68 5.84 57.57 6.79L57.57 6.79L57.57 6.79Q58.46 7.75 58.46 9.26L58.46 9.26L58.46 9.94L53.74 9.94L53.74 9.94Q53.81 10.49 54.22 10.79L54.22 10.79L54.22 10.79Q54.63 11.10 55.18 11.10L55.18 11.10L55.18 11.10Q56.14 11.10 56.89 10.55L56.89 10.55L57.98 11.65L57.98 11.65Q57.23 12.67 55.18 12.67L55.18 12.67L55.18 12.67Q53.68 12.67 52.72 11.72L52.72 11.72L52.72 11.72Q51.76 10.76 51.76 9.26ZM56.55 8.57L56.55 8.57Q56.55 8.03 56.14 7.72L56.14 7.72L56.14 7.72Q55.73 7.41 55.18 7.41L55.18 7.41L55.18 7.41Q54.63 7.41 54.22 7.72L54.22 7.72L54.22 7.72Q53.81 8.03 53.81 8.57L53.81 8.57L56.55 8.57ZM61.73 5.83L61.73 6.59L61.73 6.59Q62.46 5.84 63.51 5.84L63.51 5.84L63.51 5.84Q63.85 5.84 64.15 5.89L64.15 5.89L63.85 7.78L63.85 7.78Q63.51 7.48 62.89 7.46L62.89 7.46L62.89 7.46Q62.19 7.51 61.73 8.47L61.73 8.47L61.73 12.67L59.81 12.67L59.81 6.04L61.73 5.83Z"></path></g><defs data-v-fde0c5aa=""><linearGradient data-v-fde0c5aa="" gradientTransform="rotate(25)" id="26932ecb-c511-4485-b7dc-b70c7c60a51a" x1="0%" y1="0%" x2="100%" y2="0%"><stop data-v-fde0c5aa="" offset="0%" stop-color="#E90DCA" stop-opacity="1"></stop><stop data-v-fde0c5aa="" offset="100%" stop-color="#1536F1" stop-opacity="1"></stop></linearGradient></defs><g data-v-fde0c5aa="" id="8c77ada4-957c-4759-9c84-a1c599015c72" stroke="none" fill="url(#26932ecb-c511-4485-b7dc-b70c7c60a51a)" transform="matrix(1.491947271710617,0,0,1.491947271710617,40,126.12884294121423)"><path d="M19.88 8.935L23.796 16l-3.915 7.065H12.12L8.204 16l3.915-7.065h7.761m.59-1h-8.94L7.061 16l4.47 8.065h8.939L24.939 16 20.47 7.935zM4.356 4.15v23.7H1V4.15h3.356m1-1H0v25.7h5.356V3.15zM31 4.15v23.7h-3.356V4.15H31m1-1h-5.356v25.7H32V3.15z"></path></g></svg> </NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
  <ul className="navbar-nav ">
          <li className="nav-item">
          <NavLink to='/' className="nav-link text-uppercase fw-bold">Home</NavLink>
          </li>
          <li className="nav-item">
          <NavLink to='/activities' className="nav-link text-uppercase fw-bold">Activities</NavLink>
          </li>
        </ul>
        </div>
</nav>
        <Routes>
          <Route path="/" element={<ActivityForm />}></Route>
          <Route path="/activities" element={<ActivityCard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
