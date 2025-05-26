// Home.jsx — Main landing page component
// This page dynamically reveals sections (Intro, Projects, Profile) on scroll using IntersectionObserver

import { useEffect, useRef, useState } from 'react';
import { Footer } from '~/components/footer';

// Intro: Top introduction section of the site
import { Intro } from './intro';

// Profile: Developer profile and personal summary section
import { Profile } from './profile';

// ProjectSummary: Reusable component to show featured projects with animations and image models
import { ProjectSummary } from './project-summary';

import { baseMeta } from '~/utils/meta';
import config from '~/config.json';
import styles from './home.module.css';

// Image assets
import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import Nniomakase1 from '~/assets/Nniomakase1.png';
import Waha from '~/assets/Waha.png';
import Waha1 from '~/assets/Waha-build.png';
import Hyo from '~/assets/Hyo-home.png';

// Prefetch resources for performance
export const links = () => [
  {
    rel: 'prefetch',
    href: '/draco/draco_wasm_wrapper.js',
    as: 'script',
    type: 'text/javascript',
    importance: 'low',
  },
  {
    rel: 'prefetch',
    href: '/draco/draco_decoder.wasm',
    as: 'fetch',
    type: 'application/wasm',
    importance: 'low',
  },
];

export const meta = () => baseMeta({ title: 'Honoka' });

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);

  // Refs to observe each section
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  // IntersectionObserver setup to track when each section is visible in viewport
  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section = entry.target;
          observer.unobserve(section);
          if (visibleSections.includes(section)) return;
          setVisibleSections(prev => [...prev, section]);
        }
      });
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.1,
    });

    const indicatorObserver = new IntersectionObserver(([entry]) => {
      setScrollIndicatorHidden(!entry.isIntersecting);
    }, {
      rootMargin: '-100% 0px 0px 0px',
    });

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });
    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      {/* Intro section with scroll indicator logic */}
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      {/* Project 1 */}
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Built a modular shopping UI using React and TypeScript."
        description="Designed for flexibility, the interface delivers a fast and adaptive e-commerce experience."

        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${Hyo} 640w, ${Hyo} 960w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      {/* Project 2 */}
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="No-Code ETL Integration Platform"
        description="Reliable and consistent data integration across multiple sources, powered by Laravel’s validation and transaction handling."
        buttonText="View website"
        buttonLink="/projects/volkihar-knight"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${Waha} 375w, ${Waha} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${Waha1} 240w, ${Waha1} 480w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />

      {/* Project 3 */}
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Supporting Small Business Solutions"
        description="Helped solve real business challenges with efficient tools and clear interfaces"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${Nniomakase1} 800w, ${Nniomakase1} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

      {/* Developer profile and contact section */}
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />

      {/* Footer component */}
      <Footer />
    </div>
  );
};
