// SmartSparrow.jsx — Project detail page for a furniture e-commerce app
// This page showcases UI/UX improvements, form state handling, and user features using React/TypeScript

import { useEffect, useState } from 'react';

// Reusable components
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';

// Layout components for structured project presentation
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';

import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';

import styles from './smart-sparrow.module.css';

// Background and section image assets
import backgroundSpr from '~/assets/spr-background.jpg';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';

import imageSprLessonBuilderDark from '~/assets/Hyo-desktop.png';
import imageSprLessonBuilderDarkLarge from '~/assets/Hyo-desktop.png';
import imageSprLessonBuilderLight from '~/assets/Hyo-desktop-light.png';
import imageSprLessonBuilderLightLarge from '~/assets/Hyo-desktop-light.png';

import imageSprComponentsDark from '~/assets/Hyo-ramdom-mobo.png';
import imageSprComponentsDarkLarge from '~/assets/Hyo-ramdom-mobo.png';
import imageSprComponentsLight from '~/assets/Hyo-ramdom-mobo.png';
import imageSprComponentsLightLarge from '~/assets/Hyo-ramdom-mobo.png';
import imageSprDesignSystemDark from '~/assets/Hyo-all.png';

const title = 'React-Based Furniture E-Commerce Platform';

const description =
  'Developed a complete shopping experience using React and TypeScript—covering product display, cart, checkout, and order history—with centralized state management and mock API integration.';

const roles = [
  'React / TypeScript',
  'Remix / Node.js / Vite',
  'Mock API / DB',
  'UI / UX Design'
];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const SmartSparrow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [bgLoaded, setBgLoaded] = useState(false);

  // Preload the background image to reduce layout shift
  useEffect(() => {
    const preloadImg = new window.Image();
    preloadImg.src = backgroundSpr;
    preloadImg.onload = () => setBgLoaded(true);
  }, []);

  return (
    <>
      <ProjectContainer>
        {/* Background image for the project header */}
        {bgLoaded && (
          <ProjectBackground
            opacity={isDark ? 0.75 : 0.8}
            src={backgroundSpr}
            srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          />
        )}

        {/* Header with project title, description, and roles */}
        <ProjectHeader
          title={title}
          description={description}
          url="https://furniture-app.pages.dev/"
          roles={roles}
        />

        {/* Section: Hero UI image (product listing) */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix"
              srcSet={
                isDark

                ? `${imageSprLessonBuilderDark} 1280w, ${imageSprLessonBuilderDarkLarge} 2560w`
                : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`
              }
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Furniture product UI"
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section: 1 */}
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <div className={styles.projectTextRow}>
              <ProjectSectionHeading className={styles.projectHeading}>
                Purchase UX Improvements
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Many traditional furniture e-commerce platforms suffer from fragmented navigation and inconsistent UI patterns, leading to user drop-off despite high purchase intent.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                This project redesigned the end-to-end purchase flow—from product detail pages to the final checkout—using React and TypeScript to ensure a modular, maintainable architecture.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Emphasis was placed on improving UX clarity, implementing robust state management, and delivering a seamless, frustration-free shopping experience.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section: 2 */}
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix-wide"
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1280w, ${imageSprComponentsDarkLarge} 2560w`
                  : `${imageSprComponentsLight} 1280w, ${imageSprComponentsLightLarge} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? imageSprComponentsDark
                  : imageSprComponentsLight
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Account form interface"
            />

            <div className={`${styles.projectTextRow} ${styles.accountTextBlock}`}>
              <ProjectSectionHeading className={styles.projectHeading}>
                Form & State: Account
              </ProjectSectionHeading>


              <ProjectSectionText className={styles.projectText}>
                Implemented user authentication, registration, and profile editing features using React and TypeScript.
                Utilized <code>react-hook-form</code> for streamlined form validation, error handling, and default value management.
                Global authentication state was managed via Context API, enabling conditional UI rendering and route protection.
                Enabled real-time editing of payment and shipping information with a flexible and responsive form UI.
              </ProjectSectionText>
            </div>
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
          ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDark} 2560w`
          : `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDark} 2560w`
      }
      width={1280}
      height={800}
      alt="A drag and drop storyboard style editor for creating an adaptive lesson."
      sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
    />
  </ProjectSectionContent>
</ProjectSection>


      {/* Footer */}
      <Footer />
    </>
  );
};