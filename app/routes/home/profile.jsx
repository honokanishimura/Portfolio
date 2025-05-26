import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Honoka Nishimura" start={visible} delay={500} />
</Heading>

<Text className={styles.description} data-visible={visible} size="l" as="p">
I’m a full-stack developer based in Japan, with production-level experience in building applications using Laravel, React, and TypeScript. I enjoy designing scalable backend systems and crafting smooth, interactive frontend interfaces.
One of my recent projects involved building an e-commerce platform with Next.js and server-side rendering, which improved mobile load times by approximately 40%.
</Text>

<Text className={styles.description} data-visible={visible} size="l" as="p">
I’m fully comfortable with remote work and collaborating across time zones. I’ve worked with distributed teams using tools such as Slack, Notion, and GitHub.
Writing clean and maintainable code is one of my key priorities. I focus on clarity and consistency to ensure that other developers can easily understand and contribute.
My goal is to build systems that not only perform well today, but are also designed for long-term growth and maintainability.
</Text>

  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>

            <div className={styles.imageWrapper}>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  srcSet={`${profileImg} 480w, ${profileImg} 960w`}
                  width={960}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
              </div>
              <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                <use href={`${katakana}#katakana-profile`} />
              </svg>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
