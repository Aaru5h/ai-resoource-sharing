"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import BlurText from "@/components/BlurText";
import SpotlightCard from "@/components/SpotlightCard";
import styles from "./page.module.css";

const FEATURED_RESOURCES = [
  {
    id: 1,
    title: "Understanding Attention Mechanisms in Transformers",
    type: "Article",
    date: "Oct 12, 2023",
  },
  {
    id: 2,
    title: "Deploying Local LLMs with standard consumer hardware",
    type: "Tutorial",
    date: "Nov 05, 2023",
  },
  {
    id: 3,
    title: "Building a RAG pipeline from scratch with Python",
    type: "Project",
    date: "Jan 15, 2024",
  },
];

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={`${styles.hero} animate-fade-up`}>
        <div className={styles.badge}>
          <Terminal size={16} />
          <span>Latest: v1.0.4 Released</span>
        </div>
        <BlurText
          text="Master AI Engineering & Machine Learning"
          delay={50}
          className={styles.title}
        />
        <p className={styles.subtitle}>
          A curated space for high-quality tutorials, open-source projects, and
          in-depth theoretical breakdowns. Designed for practitioners.
        </p>
        <div className={styles.actions}>
          <Link href="/blog" className={styles.primaryButton}>
            Start Reading
          </Link>
          <Link href="/projects" className={styles.secondaryButton}>
            View Projects <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className={`${styles.section} animate-fade-up stagger-2`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Resources</h2>
          <Link href="/blog" className={styles.viewAll}>
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.grid}>
          {FEATURED_RESOURCES.map((resource) => (
            <SpotlightCard key={resource.id}>
              <Link
                href={`/blog/${resource.id}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "1.5rem",
                  cursor: "pointer",
                  height: "100%"
                }}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.cardType}>{resource.type}</span>
                  <span className={styles.cardDate}>{resource.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{resource.title}</h3>
                <div className={styles.cardFooter}>
                  Read More <ArrowRight size={16} style={{ marginLeft: "4px" }} />
                </div>
              </Link>
            </SpotlightCard>
          ))}
        </div>
      </section>
    </div>
  );
}
