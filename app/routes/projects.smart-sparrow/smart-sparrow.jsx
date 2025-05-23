import { useEffect, useState } from 'react';

import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { useTheme } from '~/components/theme-provider';
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

import backgroundSpr from '~/assets/spr-background.jpg';
import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';

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

  useEffect(() => {
    const preloadImg = new window.Image();
    preloadImg.src = backgroundSpr;
    preloadImg.onload = () => setBgLoaded(true);
  }, []);

  

  return (
    <>
      <ProjectContainer>
        {bgLoaded && (
          <ProjectBackground
            opacity={isDark ? 0.75 : 0.8}
            src={backgroundSpr}
            srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
            placeholder={backgroundSprPlaceholder}
          />
        )}

        <ProjectHeader
          title={title}
          description={description}
          url="https://furniture-app.pages.dev/"
          roles={roles}
        />

        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              
              className="image-trim-fix"
              srcSet={
                isDark
                  ? `${imageSprComponentsDark} 1280w, ${imageSprComponentsDarkLarge} 2560w`
                  : `${imageSprComponentsLight} 1280w, ${imageSprComponentsLightLarge} 2560w`
              }
              width={1280}
              height={800}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
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

        <ProjectSection light={isDark}>
          <ProjectSectionContent>
          <div
  id="final-image"
  style={{
    width: '85vw',
    height: '90vh',
    margin: '0 auto',
    padding: 0,
    overflow: 'hidden',
    backgroundImage: `url(${
      isDark ? imageSprLessonBuilderDarkLarge : imageSprLessonBuilderLightLarge
    })`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: '#e0e0e0',
    transition: 'opacity 0.5s ease-in-out',
  }}
/>


            <div className={`${styles.projectTextRow} ${styles.accountTextBlock}`}>
              <ProjectSectionHeading className={styles.projectHeading}>
                Form & State: Account
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                Implemented user authentication, registration, and profile editing features using React and TypeScript.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Utilized <code>react-hook-form</code> for streamlined form validation, error handling, and default value management.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Global authentication state was managed via Context API, enabling conditional UI rendering and route protection.
              </ProjectSectionText>
              <ProjectSectionText className={styles.projectText}>
                Enabled real-time editing of payment and shipping information with a flexible and responsive form UI.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <div
        id="final-image"
        style={{
          width: '85vw',
          height: '90vh',
          margin: '0 auto',

          padding: 0,
          overflow: 'hidden',
          backgroundImage: `url(${imageSprDesignSystemDark})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Footer />
    </>
  );
};
