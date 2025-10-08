import React, { useCallback, useMemo, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import projectData from "../../data/labs/World.json";
import styles from "../codigoMundos/CodigoMundos.module.css";

const typeLabel = (t) =>
  t === "Frontend" ? "Frontend" : t === "Backend" ? "Backend" : "Fullstack";

export default function CodigoMundo() {
  const items = useMemo(() => {
    const front = projectData.filter((p) => p.type === "Frontend");
    const back = projectData.filter((p) => p.type === "Backend");
    const full = projectData.filter((p) => p.type === "Fullstack");
    return [...front, ...back, ...full];
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className={styles.section} aria-labelledby="codigo-title">
      <div className={styles.container}></div>
      <div className={styles.embla} ref={emblaRef}>
        <div className={styles.emblaContainer}>
          {items.map((p) => (
            <div className={styles.emblaSlide} key={p.id}>
              <article className={styles.card}>
                <div className={styles.cardTop}>
                  <span
                    className={`${styles.badge} ${
                      p.type === "Frontend"
                        ? styles.badgeFront
                        : p.type === "Backend"
                        ? styles.badgeBack
                        : styles.badgeFull
                    }`}
                  >
                    {typeLabel(p.type)}
                  </span>
                </div>

                <h4 className={styles.cardTitle}>{p.title}</h4>
                <p className={styles.cardDesc}>{p.card?.pitch ?? ""}</p>

                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Ver en GitHub
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.navBtns}>
        <button
          className={styles.navBtn}
          onClick={() => emblaApi && emblaApi.scrollPrev()}
          disabled={!canPrev}
          aria-label="Anterior"
        >
          ‹
        </button>
        <button
          className={styles.navBtn}
          onClick={() => emblaApi && emblaApi.scrollNext()}
          disabled={!canNext}
          aria-label="Siguiente"
        >
          ›
        </button>
      </div>
    </section>
  );
}
