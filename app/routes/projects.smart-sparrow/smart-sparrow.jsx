// SmartSparrow.jsx — Project detail page for a furniture e-commerce app
// Enhanced with responsive expandable content sections for mobile users

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
} from '~/layouts/project';

import { baseMeta } from '~/utils/meta';
import { media } from '~/utils/style';
import styles from './smart-sparrow.module.css';

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
const description = 'Built the flow from product list to purchase and history display using React and TypeScript';
const roles = ['React / TypeScript', 'Remix / API Integration', 'Responsive UI / UX'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return isMobile;
}

export const SmartSparrow = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const isMobile = useIsMobile();
  const [isExpandedSection1, setIsExpandedSection1] = useState(false);
  const [isExpandedSection2, setIsExpandedSection2] = useState(false);
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
          />
        )}

        <ProjectHeader
          title={title}
          description={description}
          url="https://furniture-app.pages.dev/"
          roles={roles}
        />

        {/* Section 1 */}
        <ProjectSection padding="none">
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

            <div className={`${styles.projectTextRow} ${styles.accountTextBlock}`}>
              <ProjectSectionHeading className={styles.projectHeading}>
                Seamless Purchase Flow from Product to Confirmation
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                {isMobile ? (
                  <>
                    <p>
                      {isExpandedSection1 ? (
                        <>
                          The UI allows you to select products, add them to your cart, and check your purchase history. It is a stress-free website that is easy to use, easy to view, and works on any device. It has a lightweight and fast mechanism, and is performance-conscious. Developed as a fully functional e-commerce system operations in mind, both in terms of design and functionality.
                        </>
                      ) : (
                        <>The UI allows you to select products, add them to your cart...</>
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
                  <p>
                    The UI allows you to select products, add them to your cart, and check your purchase history. It is a stress-free website that is easy to use, easy to view, and works on any device. It has a lightweight and fast mechanism, and is performance-conscious. Developed as a fully functional e-commerce system operations in mind, both in terms of design and functionality.
                  </p>
                )}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Section 2 */}
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
              placeholder={isDark ? imageSprComponentsDark : imageSprComponentsLight}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Account form interface"
            />

            <div className={`${styles.projectTextRow} ${styles.accountTextBlock}`}>
              <ProjectSectionHeading className={styles.projectHeading}>
                UI list that creates a smooth purchasing flow
              </ProjectSectionHeading>
              <ProjectSectionText className={styles.projectText}>
                {isMobile ? (
                  <>
                    <p>
                      {isExpandedSection2 ? (
                        <>
                          The process from purchase to history confirmation is designed to be smooth, and in addition to input processing and status management, APIs and data storage are also built in the Cloudflare environment. A practical configuration with user registration, profile editing, and contact functions.
                        </>
                      ) : (
                        <>The process from purchase to history confirmation is designed to be smooth...</>
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
                      The process from purchase to history confirmation is designed to be smooth, and in addition to input processing and status management, APIs and data storage are also built in the Cloudflare environment.
                    </p>
                    <p>
                      A practical configuration with user registration, profile editing, and contact functions.
                    </p>
                  </>
                )}
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Final Full View */}
        <ProjectSection padding="none">
          <ProjectSectionContent>
            <ProjectImage
              className="image-trim-fix"
              srcSet={`${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDark} 2560w`}
              width={1280}
              height={800}
              alt="A drag and drop storyboard style editor for creating an adaptive lesson."
              sizes={`(max-width: ${media.mobile}px) 100vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>

      <Footer />
    </>
  );
};
