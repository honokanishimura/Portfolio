// VolkiharKnight.jsx — Project detail page for an enterprise ETL platform built with Laravel
// Highlights include member management, bulk registration, and UX design for onboarding

import { Fragment } from 'react';
import { motion } from 'framer-motion';

import volkiharBackgroundLarge from '~/assets/Waha-background.png';
import volkiharBackgroundPlaceholder from '~/assets/Waha-background.png';
import volkiharBackground from '~/assets/Waha-background.png';

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

import { useTheme } from '~/components/theme-provider';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './volkihar-knight.module.css';

const title = 'No-Code ETL Platform for Enterprise Data Automation';
const description =
  'A modular, GUI-first platform for building scalable and maintainable ETL pipelines.';
const roles = [
  'Backend Development with Laravel (PHP)',
  'MySQL Schema Design',
  'ETL Workflow Engineering',
];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export function VolkiharKnight() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Fragment>
      <ProjectContainer>
        {/* Hero Background */}
        <ProjectBackground
          srcSet={`${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`}
          width={1280}
          height={720}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />

        {/* Header */}
        <ProjectHeader
          title={title}
          description={description}
          url="https://waha-transformer.com/"
          roles={roles}
        />

        {/* Section: Member Management */}
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
                Centralized Member Administration
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Developed a robust member management system to support enterprise-level user operations. Built with Laravel and MySQL, the module supports stable, scalable team management workflows.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Key functions:
                <ul style={{ paddingLeft: '1.2em', listStyleType: 'disc' }}>
                  <li>Bulk CSV imports for mass onboarding</li>
                  <li>Smart filtering by user status</li>
                  <li>Editable profiles with access history</li>
                </ul>
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                <strong>Tech Stack:</strong> Laravel / Blade / MySQL
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section: Main Admin Dashboard */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix"
              srcSet={`${WahaHero} 800w, ${WahaHero} 1100w`}
              width={800}
              height={436}
              alt="Main Admin Dashboard"
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        

        {/* Section: Signup Optimization + All Views */}
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
                Streamlined Signup & User Onboarding
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Simplified the registration process by implementing dropdown-based forms for industry, location, and organization type.
                Administrators can register over 100 users instantly via CSV upload, enabling efficient onboarding without compromising input quality.
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

            {/* Final */}
  <ProjectSection padding="none">
  <ProjectSectionContent>
    <ProjectImage
      className="image-trim-fix"
      srcSet={
        isDark
          ? `${WahaAll} 1280w, ${WahaAll} 2560w`
          : `${WahaAll} 1280w, ${WahaAll} 2560w`
      }
      width={1280}
      height={800}
      alt="A drag and drop storyboard style editor for creating an adaptive lesson."
      sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
    />
  </ProjectSectionContent>
</ProjectSection>


      <Footer />
    </Fragment>
  );
}