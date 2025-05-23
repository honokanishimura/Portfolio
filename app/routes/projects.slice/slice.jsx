// Slice.jsx — Project detail page for a CMS with advanced filtering features
// This showcases multi- and single-condition filters using Laravel + SQLite + FTS5 backend

import { Fragment } from 'react';
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
import sliceAppPlaceholder from '~/assets/1-1_Project-1_landing-dm.png';

import sliceBackground from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundLarge from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundPlaceholder from '~/assets/1-1-0_Project-1_background.jpg';

import sliceSidebarAnnotations from '~/assets/1-2_Project-1_filter-m.png';
import sliceSidebarAnnotationsLarge from '~/assets/1-2_Project-1_filter-m.png';
import sliceSidebarAnnotationsPlaceholder from '~/assets/1-2_Project-1_filter-m.png';

import sliceSlides from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesLarge from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesPlaceholder from '~/assets/1-3_Project-1_pagetype-m.png';

// Meta information for SEO and social media
const title = 'Business Challenge Visualization System';
const description =
  'Built a CMS to help SMEs find and solve challenges through structured support content. Focused on clarity, speed, and ease of use.';
const roles = ['PHP(Laravel)', 'SQLite', 'Full-Text Search Integration'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        {/* Background hero image with opacity */}
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
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
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section: 1 */}
        <ProjectSection>
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
                Multi-condition filtering allows users to select and combine multiple tags or categories with real-time results.
              </ProjectSectionText>
              <ProjectSectionText>
                Filtering is powered by pivot-table based logic, ensuring zero reload UX with optimized query performance.
              </ProjectSectionText>
              <ProjectSectionText>
                All filter states are synced via clean, sharable URLs like <code>?id=2|3|5</code>.
              </ProjectSectionText>
              <ProjectSectionText>
                Results auto-scroll into view for seamless exploration and reduced cognitive friction.
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
                placeholder={sliceSidebarAnnotationsPlaceholder}
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
                Implemented a single-condition filter using industry-specific tab buttons to streamline access to categorized content.
              </ProjectSectionText>
              <ProjectSectionText>
                When a tab is clicked, the corresponding data is dynamically displayed below the fold without triggering a page reload.
              </ProjectSectionText>
              <ProjectSectionText>
                Unlike multi-select filters, only one category can be selected at a time.
              </ProjectSectionText>
              <ProjectSectionText>
                The selected state is reflected in a clean URL format like <code>id=2</code>, enabling users to revisit or share specific filtered views.
              </ProjectSectionText>
              <ProjectSectionText>
                This user-friendly interface enhances navigation, helping users quickly locate relevant resources based on their business sector.
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
                placeholder={sliceSlidesPlaceholder}
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
