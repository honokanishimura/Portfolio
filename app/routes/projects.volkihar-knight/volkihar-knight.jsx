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
  'Laravel',
  'MySQL',
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
  The central dashboard allows administrators to manage all users, with real-time visibility into session activity, user status, and department-specific access levels.
  By leveraging Eloquent ORM, the system ensures smooth real-time updates and maintains responsiveness for large datasets without requiring full page reloads.

  CSV-based bulk onboarding is supported, with automated column mapping and validation to detect duplicates and formatting errors.
  Activity logs and role-based filters provide clear visibility into permission changes and internal operations.

  Each panel dynamically adapts to display only the most relevant information based on the user’s role, location, and current tasks, offering a streamlined and user-friendly experience.
</ProjectSectionText>






<ProjectSectionText className={styles.projectText}>
  <strong>Key Features:</strong>
  <div className={styles.featureGrid}>
    <ul>
      <li>Real-time status dashboard</li>
      <li>Role-based access controls</li>
    </ul>
    <ul>
      <li>Editable user profiles with audit logging</li>
      <li>CSV upload for rapid onboarding</li>
    </ul>
  </div>
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
  User information such as industry, department, and company structure can be quickly and accurately entered via intuitive dropdown menus.
  The system supports bulk CSV uploads, automatically matching column names even when file formats do not fully align.
  These improvements have reduced onboarding errors by over 90%, saving time and enhancing data accuracy throughout the system.

  They were implemented based on direct user feedback and testing, which helped uncover unclear processes and common drop-off points.
  As a result, user registration time has been reduced from six minutes to under two minutes, improving operational efficiency during peak periods.
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
              height={1000}
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
