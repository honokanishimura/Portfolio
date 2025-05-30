// VolkiharKnight.jsx — Project detail page for an enterprise ETL platform

import { Fragment, useEffect, useState } from 'react';
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

const title = 'A CMS-type ETL management tool that supports Unirita internal operations';
const description = 'Created a practical CMS for administrators using Laravel and MySQL';
const roles = ['Laravel', 'MySQL', 'Enterprise UX Optimization'];

function useIsMobile(breakpoint = 900) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export function VolkiharKnight() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isMobile = useIsMobile();
  const [isExpandedSection1, setIsExpandedSection1] = useState(false);
  const [isExpandedSection2, setIsExpandedSection2] = useState(false);

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

        {/* Section 1: Member Management */}
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
                {isMobile ? (
                  <>
                    {isExpandedSection1 ? (
                      <>
                        <p>
                          Administrators can manage all users through a dashboard, with real-time visibility into session activity, user status, and department-specific access.
                        </p>
                        <p>
                          By leveraging Eloquent ORM, the system ensures smooth real-time updates, staying responsive for large data sets without full page reloads.
                          CSV-based bulk onboarding is supported, with automated column mapping and validation.
                          Activity logs and role-based filters provide clear visibility into permission changes.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>Administrators can manage all users through a dashboard, with real-time visibility into session activity...</p>
                      </>
                    )}
                    <button
                      onClick={() => setIsExpandedSection1(!isExpandedSection1)}
                      style={{
                        marginTop: '8px',
                        background: 'none',
                        border: 'none',
                        color: '#007bff',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '1rem',
                      }}
                    >
                      {isExpandedSection1 ? 'Less' : 'More'}
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      Administrators can manage all users through a dashboard, with real-time visibility into session activity, user status, and department-specific access.
                    </p>
                    <p>
                      By leveraging Eloquent ORM, the system ensures smooth real-time updates, staying responsive for large data sets without full page reloads.
                      CSV-based bulk onboarding is supported, with automated column mapping and validation.
                      Activity logs and role-based filters provide clear visibility into permission changes.
                    </p>
                  </>
                )}
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>

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

        {/* Section 2: Onboarding */}
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
                Onboarding Workflow
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                {isMobile ? (
                  <>
                    {isExpandedSection2 ? (
                      <>
                        <p>
                          User information such as industry, department, and company structure can be quickly and accurately entered via intuitive dropdown menus.
                          The system supports bulk CSV uploads, automatically matching file columns.
                        </p>
                        <p>
                          Implemented based on direct feedback, it helped uncover friction points.
                          As a result, registration time was reduced from 6 to under 2 minutes.
                        </p>
                      </>
                    ) : (
                      <>
                        <p>User information such as industry, department, and company structure can be quickly and accurately entered via intuitive dropdown menus...</p>
                      </>
                    )}
                    <button
                      onClick={() => setIsExpandedSection2(!isExpandedSection2)}
                      style={{
                        marginTop: '8px',
                        background: 'none',
                        border: 'none',
                        color: '#007bff',
                        cursor: 'pointer',
                        padding: 0,
                        fontSize: '1rem',
                      }}
                    >
                      {isExpandedSection2 ? 'Less' : 'More'}
                    </button>
                  </>
                ) : (
                  <>
                    <p>
                      User information such as industry, department, and company structure can be quickly and accurately entered via intuitive dropdown menus.
                      The system supports bulk CSV uploads, automatically matching file columns.
                    </p>
                    <p>
                      Implemented based on direct feedback, it helped uncover friction points.
                      As a result, registration time was reduced from 6 to under 2 minutes.
                    </p>
                  </>
                )}
              </ProjectSectionText>
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection padding="none">
          <ProjectSectionContent>
          {isMobile ? (
  <ProjectImage
    className="image-trim-fix"
    srcSet={`${WahaAll} 1280w, ${WahaAll} 2560w`}
    width={1280}
    height={1000}
    alt="Overview of all major UI states across the platform."
    sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
  />
) : (
  <motion.div
    initial={{ y: 60, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, ease: 'easeOut' }}
    viewport={{ once: true }}
  >
    <ProjectImage
      className="image-trim-fix"
      srcSet={`${WahaAll} 1280w, ${WahaAll} 2560w`}
      width={1280}
      height={1000}
      alt="Overview of all major UI states across the platform."
      sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
    />
  </motion.div>
)}

          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </Fragment>
  );
}
