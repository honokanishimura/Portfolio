// Slice.jsx — Project detail page for a CMS with advanced filtering features
// This showcases multi- and single-condition filters using Laravel + SQLite + FTS5 backend

import { Fragment } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Layout components used throughout project detail pages
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

import styles from './slice.module.css';

// Static assets
import sliceApp from '~/assets/1-1_Project-1_landing-dm.png';
import sliceAppLarge from '~/assets/1-1_Project-1_landing-dm.png';

import sliceBackground from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundLarge from '~/assets/1-1-0_Project-1_background.jpg';

import sliceSidebarAnnotations from '~/assets/1-2_Project-1_filter-m.png';
import sliceSidebarAnnotationsLarge from '~/assets/1-2_Project-1_filter-m.png';

import sliceSlides from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesLarge from '~/assets/1-3_Project-1_pagetype-m.png';


// More 
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };
    handleResize(); // 初期判定
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);

  return isMobile;
}


const title = 'Advanced Search Filter for Business Dashboard';
const description =
  'Implemented a search filtering system in a CMS to help SMEs quickly access relevant support content';
const roles = ['PHP(Laravel)', 'SQLite'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Slice = () => {

  const [isExpandedSection1, setIsExpandedSection1] = useState(false);
const [isExpandedSection2, setIsExpandedSection2] = useState(false);



  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        {/* Background hero image with opacity */}
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          opacity={0.4}
        />

        {/* Project header with title, description, and tech stack */}
        <ProjectHeader
          title={title}
          description={description}
          url="https://biz.service.ntt-east.co.jp/"
          roles={roles}
        />

        {/* Hero image of app dashboard UI */}
        <ProjectSection>
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

        {/* Section: 1 */}
        <ProjectSection padding="none">
          <ProjectSectionColumns className={styles.columns}>
            <motion.div
              className={styles.projectTextRow}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <ProjectSectionHeading>Advanced Filter Logic</ProjectSectionHeading>


              <ProjectSectionText>
  {isMobile ? (
    <>
      <p>
        {isExpandedSection1 ? (
          <>
            Tab-based filters allow to surface the most relevant content by selecting one industry at a time, finance, healthcare, or education. Clicking a tab instantly updates the content without having to reload the page. The selected tab is reflected in the URL (e.g. ?id=2), making the view easy to share and access.
            <br />
            The layout is optimized for all devices, improving accessibility in terms of both ease of operation and visibility. The click area is also wide, reducing user fatigue.
          </>
        ) : (
          <>Tab-based filters allow to surface the most relevant content by selecting one industry at a time...</>
        )}
      </p>
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
        Tab-based filters allow to surface the most relevant content by selecting one industry at a time, finance, healthcare, or education. Clicking a tab instantly updates the content without having to reload the page. The selected tab is reflected in the URL (e.g. ?id=2), making the view easy to share and access.
      </p>
      <p>
        The layout is optimized for all devices, improving accessibility in terms of both ease of operation and visibility. The click area is also wide, reducing user fatigue.
      </p>
    </>
  )}
</ProjectSectionText>





            </motion.div>

            {/* Corresponding filter sidebar image */}
            <motion.div
              className={styles.mockFrameWrapper}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                className={styles.mockFrameImage}
                srcSet={`${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`}
                width={350}
                height={750}
                alt="Multiple user annotations on a shared layer."
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Section: 2 */}
        <ProjectSection light>
          <ProjectSectionContent>
            <motion.div
              className={styles.projectTextRow}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
            <ProjectSectionHeading>Single-Condition Filtering</ProjectSectionHeading>

            <ProjectSectionText>
  {isMobile ? (
    <>
      <p>
        {isExpandedSection2 ? (
          <>
            This section allows filtering by a single condition such as category or tag. Users can quickly update the displayed items by selecting one option from the list. The system reflects the selected state in the URL (e.g. ?tag=design), enabling shareable views.
            <br />
            Designed with mobile-first in mind, the layout ensures easy tap targets and fluid reading experience. It minimizes the need for repeated gestures or zooming.
          </>
        ) : (
          <>This section allows filtering by a single condition such as category or tag...</>
        )}
      </p>
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

            {/* Final */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                srcSet={`${sliceSlides} 1200w, ${sliceSlidesLarge} 1920w`}
                width={1200}
                height={800}
                alt="The new My Slides tab in slice, showing annotated and favorited slides."
                sizes="100vw"
                className={styles.fullscreenImage}
              />
            </motion.div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      {/* Footer section */}
      <Footer />
    </Fragment>
  );
};
