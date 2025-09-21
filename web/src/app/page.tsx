import styles from "./page.module.scss";
import { PageHeading } from "@/components/PageHeading/PageHeading";

export default function Home() {
  return (
    <div className={styles.page}>
      <PageHeading
        title="Vamos começar, escolha as opções do seu curso"
        subtitle="Use os filtros para saber o preço do seu curso e fazer sua inscrição. "
      />
      <main className={styles.main}></main>
    </div>
  );
}
