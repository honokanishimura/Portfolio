// Slice.jsx — Project detail page for a CMS with advanced filtering features
// Structure fully unified with VolkiharKnight.jsx, More/Less only on mobile

import { Fragment, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import sliceApp from '~/assets/1-1_Project-1_landing-dm.png';
import sliceAppLarge from '~/assets/1-1_Project-1_landing-dm.png';
import sliceBackground from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundLarge from '~/assets/1-1-0_Project-1_background.jpg';
import sliceSidebarAnnotations from '~/assets/1-2_Project-1_filter-m.png';
import sliceSidebarAnnotationsLarge from '~/assets/1-2_Project-1_filter-m.png';
import sliceSlides from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesLarge from '~/assets/1-3_Project-1_pagetype-m.png';

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

import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './slice.module.css';

const title = 'Advanced Search Filter for Business Dashboard';
const description = 'Implemented a search filtering system in a CMS to help SMEs quickly access relevant support content';
const roles = ['PHP(Laravel)', 'SQLite'];

function useIsMobile(breakpoint = 768) {
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

export function Slice() {
  const [isExpandedSection1, setIsExpandedSection1] = useState(false);
  const [isExpandedSection2, setIsExpandedSection2] = useState(false);
  const isMobile = useIsMobile();

  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          opacity={0.4}
        />

        <ProjectHeader
          title={title}
          description={description}
          url="https://biz.service.ntt-east.co.jp/"
          roles={roles}
        />

        {/* Section 1 */}
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
                Advanced Filter Logic
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                {isMobile ? (
                  <>
                    {isExpandedSection1 ? (
                      <>
                        <p>
                          Tab-based filters allow to surface the most relevant content by selecting one industry at a time, finance, healthcare, or education. Clicking a tab instantly updates the content without having to reload the page.
                        </p>
                        <p>
                          The selected tab is reflected in the URL (e.g. ?id=2), making the view easy to share and access. The layout is optimized for all devices, improving accessibility in terms of both ease of operation and visibility.
                        </p>
                      </>
                    ) : (
                      <p>Tab-based filters allow to surface the most relevant content by selecting one industry at a time...</p>
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
                      Tab-based filters allow to surface the most relevant content by selecting one industry at a time, finance, healthcare, or education. Clicking a tab instantly updates the content without having to reload the page.
                    </p>
                    <p>
                      The selected tab is reflected in the URL (e.g. ?id=2), making the view easy to share and access. The layout is optimized for all devices, improving accessibility in terms of both ease of operation and visibility.
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
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section 2 */}
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
                Single-Condition Filtering
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                {isMobile ? (
                  <>
                    {isExpandedSection2 ? (
                      <>
                        <p>
                          This section allows filtering by a single condition such as category or tag. Users can quickly update the displayed items by selecting one option from the list. The system reflects the selected state in the URL (e.g. ?tag=design), enabling shareable views.
                        </p>
                        <p>
                          Designed with mobile-first in mind, the layout ensures easy tap targets and fluid reading experience. It minimizes the need for repeated gestures or zooming.
                        </p>
                      </>
                    ) : (
                      <p>This section allows filtering by a single condition such as category or tag...</p>
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
                      This section allows filtering by a single condition such as category or tag. Users can quickly update the displayed items by selecting one option from the list. The system reflects the selected state in the URL (e.g. ?tag=design), enabling shareable views.
                    </p>
                    <p>
                      Designed with mobile-first in mind, the layout ensures easy tap targets and fluid reading experience. It minimizes the need for repeated gestures or zooming.
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
              srcSet={`${sliceSlides} 1200w, ${sliceSlidesLarge} 1920w`}
              width={1200}
              height={800}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes="100vw"
              className={styles.fullscreenImage}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
