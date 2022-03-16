import React from "react";
import Header from "../../Components/header/Header";
import styles from "../../styles/box.module.css";

export default function ServicesPage() {
  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.textHolder}>
          <div className={styles.insideBoxText}>
            Предлагаме индивидуални почасови занимания по предварителна
            уговорка. Родителите, други членове на семействата или грижещи се за
            детето присъстват на заниманията с детето, за да имат възможност да
            наблюдават прилаганите подходи и техники и да ги прилагат по-късно у
            дома. Ние вярваме в силата и потенциала на семейството и считаме за
            най-ефективна работата в партньорство и възможността родителите да
            продължат стимулацията вкъщи за постигане на по-бързи и успешни
            резултати.
          </div>
          <div className={styles.insideBoxText}>
            За деца над 4 годишна възраст предлагаме индивидуални и групови
            занимания, като родителите имат възможност да присъстват или не,
            като впоследствие получават обратна връзка под формата на снимков
            и/или видео материал, както и демонстрация на препоръките за работа
            вкъщи. Присъствието на родители на заниманията се определя за всеки
            индивидуален случай спрямо желанието и възможностите на детето и
            семейството.
          </div>
        </div>
        <p className={styles.outsideBoxText}>
          Сертифицирани сме за извършване на оценка на детското развитие по
          Рейтинг скала за оценка на детското развитие DP-3. Developmental
          Profile 3 e рейтингова скала за оценка на развитието на деца от 0 г.
          до 12 г. и 11 м. Тя може да се администрира под формата на
          структурирано интервю с родител или като въпросник, който се попълва
          от родителя. Скриниг методиката позволява да се идентифицират силните
          страни на детето, както и неусвоените умения, изоставане в развитието
          и потребности от насочване към допълнителни специалисти. Developmental
          Profile 3 дава възможност за създаване на цялостен профил на
          развитието на детето, тъй като изследва всички развитийни области:
          <div className={styles.outsideBoxText}>
            <ul>
              <li>Физическо развитие</li>
              <li>Адаптивно поведение</li>
              <li>Социално и емоционално развитие</li>
              <li>Когнитивно развитие</li>
              <li>Комуникация</li>
            </ul>
          </div>
          {/* <br />– Физическо развитие <br />– Адаптивно поведение <br />– Социално и
          емоционално развитие <br />– Когнитивно развитие <br />– Комуникация */}
        </p>
      </div>
    </div>
  );
}
