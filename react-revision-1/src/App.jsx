import "./App.css";
import Card from "./Card";
import CustomCard from "./CardDynamic";

function App() {
  return (
    <>
      <Card></Card>
      <CustomCard
        title="Název"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, qui."
        link="ssps.cz"
        linkName="škola"
      />
      <CustomCard
        title="Bůh tě miluje"
        description="Bůh tě miluje a chce ti pomoci"
        link="buh.cz"
        linkName="Boží pomoc"
      />
      <CustomCard
        title="Zdravá výživa"
        description="Sunárky jsou zdravé"
        link=" zdravavyziva.cz"
        linkName="Nabíhej"
      />
      <CustomCard
        title="Ahoj"
        description="Obsah lmao lorem ipsum"
        link="youtube.com"
        linkName="prokrastinace"
      />
    </>
  );
}
export default App;
