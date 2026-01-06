import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";




const Home = () => <h1>Welcome to Oratrics</h1>;
const AboutUs = () => <h1>About Us Page</h1>;
const Blog = () => <h1>Blog & Stories</h1>;
const Careers = () => <h1>Careers</h1>;
const Login = () => <h1>Login Page</h1>;



const Math = () => <h1>Math Page</h1>;
const PersonalityEnrichment = () => <h1>Personality Enrichment</h1>;
const PublicSpeaking = () => <h1>Public Speaking</h1>;
const CreativeWriting = () => <h1>Creative Writing</h1>;
const ConfidenceBuilding = () => <h1>Confidence Building Social Skill</h1>;
const LeadershipProgram = () => <h1>Leadership Program</h1>;
const MoneySkills = () => <h1>Money Skills</h1>;
const OratricsExecutive = () => <h1>Oratrics Executive</h1>;

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path={'https://oratrics.in/login'} element={<Login />} />
          <Route path="/math" element={<Math />} />
          <Route path="/personality_enrichment" element={<PersonalityEnrichment />} />
          <Route path="/public_speaking" element={<PublicSpeaking />} />
          <Route path="/creative_writing" element={<CreativeWriting />} />
          <Route path="/confidence_building_social_skill_enhancement_program" element={<ConfidenceBuilding />} />
          <Route path="/leadership_program" element={<LeadershipProgram />} />
          <Route path="/money_skills" element={<MoneySkills />} />
          <Route path="/oratrics_executive" element={<OratricsExecutive />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
