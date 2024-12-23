import { memo, ReactNode } from "react";
import styles from "./MainLayout.module.css";
interface MainLayoutProps {
  header: ReactNode;
  content: ReactNode;
}

const MainLayout = memo(({ header, content }: MainLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className="">{header}</div>
      <div className={styles.content}>{content}</div>
    </div>
  );
});

export default MainLayout;
