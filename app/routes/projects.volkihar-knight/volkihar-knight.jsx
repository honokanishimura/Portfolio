// VolkiharKnight.jsx — Professional enterprise ETL system showcase

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

const title = 'Enterprise ETL Platform for Unified Data Operations';
const description = 'Built with Laravel and MySQL, this platform enables centralized member control, efficient onboarding, and adaptive UX for enterprise users.';
const roles = [
  'Laravel-powered Backend Architecture',
  'Relational Database Schema Design (MySQL)',
  'Enterprise UX Optimization',
];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export function VolkiharKnight() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

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

        {/* Member Management Section */}
        <ProjectSection>
          <ProjectSectionContent>
            <motion.div
              className={styles.projectTextRow}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectSectionHeading className={styles.projectHeading}>
                Member Management at Scale
              </ProjectSectionHeading>


              <ProjectSectionText className={styles.projectText}>
              This administrator dashboard serves as the control hub for all user management operations, offering real-time insights into active sessions, user statuses, and access roles across different departments.
              Designed with scalability in mind, the interface supports dynamic data rendering through Eloquent ORM, ensuring that even large-scale datasets remain responsive and up-to-date without page reloads.
              A key feature includes the CSV import pipeline with automatic schema mapping and validation, streamlining bulk onboarding while preventing duplicate entries and structural conflicts.
              Administrators benefit from detailed activity logs and role-based filtering options, allowing precise tracking of permission changes and workflow transitions within the organization.
  From a UX standpoint, the dashboard prioritizes clarity—each widget and data panel adapts contextually, showing only the relevant fields based on user role, region, and operational scope.
</ProjectSectionText>





              <ProjectSectionText className={styles.projectText}>
                <strong>Key features:</strong>
                <ul style={{ paddingLeft: '1.5em', listStyleType: 'disc' }}>
                  <li>Real-time status dashboard</li>
                  <li>Role-based access controls</li>
                  <li>Editable user profiles with audit logging</li>
                  <li>CSV upload for rapid onboarding</li>
                </ul>
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Admin Dashboard Image */}
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix"
              srcSet={`${WahaHero} 800w, ${WahaHero} 1100w`}
              width={800}
              height={436}
              alt="Admin dashboard view showing real-time member status."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Onboarding Optimization */}
        <ProjectSection>
          <ProjectSectionContent>
            <motion.div
              className={styles.projectTextRow}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectSectionHeading className={styles.projectHeading}>
                Streamlined Onboarding Workflow
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Introduced dropdown-driven form fields for smoother user entry and organization categorization. CSV imports now auto-map fields to reduce manual errors by over 90%.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                UX refinements were based on stakeholder interviews and funnel analysis, reducing onboarding time per user from 6 mins to under 2.
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Full View Image */}
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix"
              srcSet={`${WahaAll} 1280w, ${WahaAll} 2560w`}
              width={1280}
              height={800}
              alt="Overview of all major UI states across the platform."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
}
