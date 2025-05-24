// Slice.jsx — Simplified project layout with two clean sections

import { Fragment } from 'react';
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

import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

import styles from './slice.module.css';

// Assets
import sliceApp from '~/assets/1-1_Project-1_landing-dm.png';
import sliceAppLarge from '~/assets/1-1_Project-1_landing-dm.png';
import sliceAppPlaceholder from '~/assets/1-1_Project-1_landing-dm.png';

import sliceBackground from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundLarge from '~/assets/1-1-0_Project-1_background.jpg';
import sliceBackgroundPlaceholder from '~/assets/1-1-0_Project-1_background.jpg';

import sliceSlides from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesLarge from '~/assets/1-3_Project-1_pagetype-m.png';
import sliceSlidesPlaceholder from '~/assets/1-3_Project-1_pagetype-m.png';

const title = 'Business Challenge Visualization System';
const description =
  'Built a CMS to help SMEs find and solve challenges through structured support content. Focused on clarity, speed, and ease of use.';
const roles = ['PHP (Laravel)', 'SQLite', 'Full-Text Search Integration'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Slice = () => {
  return (
    <Fragment>
      <ProjectContainer>
        {/* Hero Section */}
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          width={1280}
          height={800}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.5}
        />

        <ProjectHeader
          title={title}
          description="A structured CMS for SMEs to visualize and solve business challenges."
          url="https://biz.service.ntt-east.co.jp/"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              width={800}
              height={500}
              placeholder={sliceAppPlaceholder}
              alt="Main dashboard UI for CMS"
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              className="image-trim-fix"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Feature Section */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>
              Designed for Guided Exploration
            </ProjectSectionHeading>

            <ProjectSectionText>
              This platform enables users to explore solutions tailored to their industry challenges. Advanced filters allow precise targeting, while simplified navigation helps surface relevant content with minimal effort. The interface prioritizes speed and clarity, reducing barriers for small business users.
            </ProjectSectionText>

            <ProjectImage
              srcSet={`${sliceSlides} 1280w, ${sliceSlidesLarge} 2560w`}
              width={1280}
              height={800}
              placeholder={sliceSlidesPlaceholder}
              alt="Highlighted UI views including filters and categorized pages"
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
              className="image-trim-fix"
            />
          </ProjectSectionContent>
        </ProjectSection>

        <Footer />
      </ProjectContainer>
    </Fragment>
  );
};
