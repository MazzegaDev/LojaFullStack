import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
    </div>
  );
}
