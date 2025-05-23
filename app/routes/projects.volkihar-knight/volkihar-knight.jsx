import volkiharBackgroundLarge from '~/assets/Waha-background.png';
import volkiharBackgroundPlaceholder from '~/assets/Waha-background.png';
import volkiharBackground from '~/assets/Waha-background.png';

import volkiharBannerLarge from '~/assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from '~/assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from '~/assets/volkihar-banner.jpg';

import WahaBuild from '~/assets/Waha-admin-dashboard.png';
import WahaHero from '~/assets/Waha-dashboard.png';
import WahaAll from '~/assets/Waha-all.png';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';

import { Fragment, useEffect } from 'react';
import { motion } from 'framer-motion';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';

const title = 'No-Code ETL Platform for Enterprise Data Automation';

const description =
  'A modular, GUI-first platform for building scalable and maintainable ETL pipelines.';

const roles = [
  'Backend Development with Laravel (PHP)',
  'MySQL Schema Design',
  'ETL Workflow Engineering'
];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export function VolkiharKnight() {
  

  return (
    <Fragment>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />

        <ProjectHeader
          title={title}
          description={description}
          url="https://waha-transformer.com/"
          roles={roles}
        />

        {/* Hero Image */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${WahaHero} 800w, ${WahaHero} 1100w`}
              width={800}
              height={436}
              placeholder={volkiharBannerPlaceholder}
              alt="Waha Dashboard Hero Image"
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Laravel Section */}
        <ProjectSection>
          <div className={styles.projectSectionRow}>
            <motion.div
              className={styles.projectTextRow}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectSectionHeading className={styles.projectHeading}>
                Laravel Member Management
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Designed and implemented a scalable member management module for an enterprise-grade ETL platform, using Laravel and MySQL to ensure maintainable architecture and high reliability.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Core features include:
                <ul style={{ paddingLeft: '1.2em', listStyleType: 'disc' }}>
                  <li>CSV-based bulk registration</li>
                  <li>Status-based filtering</li>
                  <li>Profile editing and login history tracking</li>
                </ul>
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                These functionalities support efficient data handling and streamline administrative workflows.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                <strong>Tech Stack:</strong> Laravel / Blade / MySQL
              </ProjectSectionText>
            </motion.div>

            <motion.div
  initial={{ y: 80, scale: 0.98, opacity: 0 }}
  whileInView={{ y: 0, scale: 1, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
>

              <img
                src={WahaBuild}
                alt="Waha Laravel Build"
                className={styles.mockFrameImage}
              />
            </motion.div>
          </div>
        </ProjectSection>

        {/* Registration UX Section */}
        <ProjectSection>
          <ProjectSectionContent>
            <motion.div
              className={styles.projectTextRow}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectSectionHeading className={styles.projectHeading}>
                Signup Form Optimization
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                As the entry point for an enterprise-grade ETL tool, the signup form was designed to prioritize both usability and data integrity.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Developed using Laravel and Blade templates, the form UI includes dropdown fields for industry, location, and company size—ensuring data completeness and a smooth user experience.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                To support large-scale onboarding, a CSV bulk import feature was implemented, allowing administrators to register 100+ users simultaneously with minimal effort.
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      {/* Fullscreen Image */}
      <div
        id="final-image"
        style={{
          width: '100vw',
          height: '90vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          backgroundImage: `url(${WahaAll})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      <Footer />
    </Fragment>
  );
}