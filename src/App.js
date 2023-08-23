import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center text-white gap-8">
      <div className="grid grid-cols-4 gap-4">
        <div className="row-span-2">
          <Card />
        </div>
        <Card bgTop="bg-orange" />
        <Card bgTop="bg-play" />
        <Card bgTop="bg-study" />
        <Card bgTop="bg-exercise" />
        <Card bgTop="bg-social" />
        <Card bgTop="bg-self" />
      </div>
    </div>
  );
}

export default App;
