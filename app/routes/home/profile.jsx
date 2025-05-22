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
  I’m a full-stack developer based in Japan with hands-on experience in <strong>PHP(Laravel)</strong>, <strong>React</strong>, and <strong>TypeScript</strong>.
</Text>

<Text className={styles.description} data-visible={visible} size="l" as="p">
  My focus lies in building highly interactive user experiences and scalable backend systems, with recent projects involving <strong>Next.js</strong> and server-side rendering.
</Text>

<Text className={styles.description} data-visible={visible} size="l" as="p">
  <strong>Open to fully remote roles and flexible with time zones. I can match U.S., European, or overnight working hours.</strong>
</Text>


<Text className={styles.description} data-visible={visible} size="l" as="p">
  My core values are writing clean, maintainable code and delivering long-term quality over short-term speed.
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

            {/* ✅ 画像とカタカナSVGを縦に並べる */}
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
