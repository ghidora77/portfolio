import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Humanities',
    Svg: require('@site/static/img/humanities.svg').default,
    description: (
      <>
        Everything from Ancient Greece to World War One.
      </>
    ),
  },
  {
    title: 'Science',
    Svg: require('@site/static/img/science.svg').default,
    description: (
      <>
        Computer and data science, remote sensing and geospatial engineering.
      </>
    ),
  },
  {
    title: 'Musings',
    Svg: require('@site/static/img/musing.svg').default,
    description: (
      <>
        Random essays that have come to mind.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
