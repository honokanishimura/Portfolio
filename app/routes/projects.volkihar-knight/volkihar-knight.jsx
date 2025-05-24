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

              Central dashboard for managing all users, with live data showing session activity, current status, and access levels across departments.
Designed to handle growth smoothly, using Eloquent ORM for real-time updates. Large datasets stay responsive without needing a full page reload.
Supports bulk onboarding through CSV import. Columns are auto-mapped and checked to avoid duplicate entries or format issues.
Includes activity history and role filters to help track permission changes and internal actions clearly.
Each panel displays only the most relevant information, adjusting based on user role, location, and task to keep the interface clean and easy to use.
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
              Easy-to-use dropdowns make it simple to fill in user details like industry, department, and company structure. This keeps the process quick and accurate.
CSV files can be uploaded in bulk, with column names matched automatically, even when formats don’t fully align.
Onboarding mistakes dropped by over 90%, saving time and improving data quality across the system.
Changes were based on real feedback from users and testing, which helped identify confusing steps and areas where people often stopped.
Time needed to register each user went down from six minutes to less than two, helping teams work faster during busy periods.
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
