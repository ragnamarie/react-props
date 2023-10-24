import "./styles.css";

export default function App() {
  return <Greeting name="GURL" />;
}

export function Greeting({ name }) {
  return <div>Hello {name}!</div>;
}
