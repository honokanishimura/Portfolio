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
  The advanced filtering module empowers users to dynamically refine results through multi-criteria selection. Filters include tags, categories, and hierarchical attributes such as department or permission level—each of which can be combined for granular control.
  Built using Laravel’s Eloquent relationships and pivot table logic, the filter engine translates user selections into performant SQL queries that avoid N+1 issues, even with complex many-to-many relationships. Query results are returned asynchronously and injected into the DOM without full reloads, preserving application state and minimizing latency.
  All filter combinations are encoded into shareable URLs such as <code>?id=2|3|5</code>, allowing users to bookmark, share, or reload exact search states. These URLs are parsed and rehydrated on page load, ensuring continuity across sessions and user journeys.
  To improve UX, the results panel auto-scrolls into view upon each filter interaction, reducing cognitive load and ensuring immediate feedback. Transition animations are used to reinforce change perception while keeping the interface smooth and intuitive.
  The design prioritizes both performance and accessibility, with keyboard navigable tags, ARIA attributes, and responsiveness across breakpoints. The filtering experience scales seamlessly whether handling 30 options or 3,000 records.
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
  A streamlined single-condition filtering system was implemented using industry-specific tab buttons, allowing users to instantly narrow down content by selecting a single business category such as Finance, Healthcare, or Education. This setup offers simplicity and clarity over multi-select filters by reducing user decision fatigue.
  Each tab acts as a client-side controller that dynamically injects the corresponding content block below the fold using state-based rendering, completely avoiding full page reloads. This creates a smooth browsing experience that maintains application context while ensuring high responsiveness.
  To ensure shareability and session continuity, the active filter state is encoded directly into the URL (e.g., <code>?id=2</code>), which can be bookmarked, shared, or revisited later. The application detects these query parameters on load and reconstructs the filtered view automatically, providing a seamless entry point for returning users.
  The interface is optimized for both desktop and mobile users, using larger hit areas for tabs, visual feedback for the selected state, and accessible keyboard navigation. Each tab button includes ARIA roles and semantic labels to ensure compatibility with screen readers.
  From a development standpoint, the logic was built using React state hooks and conditionally rendered JSX components. This approach ensures modularity, simplifies maintenance, and supports future scalability should multi-condition filtering be introduced later.
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
