import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: <>Powered by React</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <br />
      <div className="container">
        <div>
          <h1 className="title">Bootcamp F20 Schedule</h1>
          <p>We'll post the slides after each bootcamp. Recordings are available for those who use their excused absence.</p>
          <table>
            <tr>
              <th>Week</th>
              <th>Date</th>
              <th>Topic</th>
              <th>Slides</th>
              <th>Guide</th>
            </tr>
            <tr>
              <td>0</td>
              <td>9/8</td>
              <td>Introduction</td>
              <td><a href="https://docs.google.com/presentation/d/1n4XkIKyNw3QmVShGCYHuZvbdFUwmSGfSy6_tr4WpBzk/edit#slide=id.g938e0431bd_3_5">Presentation</a></td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>1</td>
              <td>9/15</td>
              <td>Installation + Good Practices</td>
              <td><a href="https://docs.google.com/presentation/d/1Q-t2OgBpamRbWykHbQbSN7YtUYhS2hk4ltR22vzNPdo/edit#slide=id.g531f85d629_0_269">Presentation</a></td>
              <td>
                <Link to="/docs/installation">Installation</Link>{`, `}
                <Link to="/docs/good-practices">Good Practices</Link>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>9/17</td>
              <td>Python</td>
              <td>
                <a href="https://docs.google.com/presentation/d/1UbzihWBD3NqFN77Nf-qJDE7mxua-Y7eUCGMpcjkYATs/edit">Beginner</a>{`, `}
                <a href="https://docs.google.com/presentation/d/1bU4W6FU_bT1WRFzcwNYSm4saAdKjTKz5eCD7XqmMUMg/edit">Intermediate</a>
              </td>
              <td>
                <Link to="/docs/python">Python</Link>{`, `}
                <Link to="/docs/python-intermediate">Python Intermediate</Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>9/22</td>
              <td>Journalism</td>
              <td>
                <a href="https://docs.google.com/presentation/d/1XE6RhWkX6P2GFuK0w9lVYaWG0QiI55cU-hZZ04Ky73Y/edit">Presentation</a>
              </td>
              <td>
                <Link to="/docs/article-guide">Article Guide</Link>{`, `}
                <Link to="/docs/style-guide">Style Guide</Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>9/24</td>
              <td>Statistics</td>
              <td>
                <a href="https://docs.google.com/presentation/d/1f4nXcchBB9fwNPtdnWjBgCdi6A0LdftG21agqvVO4e8/edit">Presentation</a>
              </td>
              <td>
                <Link to="/docs/inference">Inference</Link>{`, `}
                <Link to="/docs/regression">Regression</Link>{`, `}
                <Link to="/docs/hypothesis-testing">Hypothesis Testing</Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>9/29</td>
              <td>Numpy + Pandas</td>
              <td>
                <a href="https://docs.google.com/presentation/d/1rfB3YxzSqvQX8mNT-blikea9C_J9NJWv8JUT5moTREs/edit">Presentation</a>
              </td>
              <td>
                <Link to="/docs/numpy-pandas">Numpy + Pandas</Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>10/1</td>
              <td>R</td>
              <td>
                <a href="https://docs.google.com/presentation/d/15ZFDU-EnrfDUOJzFusemg4GKBSeOTFUvWSXMNI-SxyY/edit#slide=id.p">Presentation</a>
              </td>
              <td>
                <Link to="/docs/r">R</Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>10/10</td>
              <td>Web Development</td>
              <td>
                To be released
              </td>
              <td>
                <Link to="/docs/webdev">Web Dev</Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>10/10</td>
              <td>ggplot</td>
              <td>
                To be released
              </td>
              <td>
                <Link to="/docs/ggplot">ggplot</Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>10/10</td>
              <td>React</td>
              <td>
                To be released
              </td>
              <td>
                <Link to="/docs/react-1">React I</Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>10/10</td>
              <td>Scraping</td>
              <td>
                To be released
              </td>
              <td>
                <Link to="/docs/scraping">Scraping</Link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
