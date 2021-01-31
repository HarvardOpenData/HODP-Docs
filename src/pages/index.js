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
          <h1 className="title">Bootcamp S21 Schedule</h1>
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
              <td>1</td>
              <td>2/2</td>
              <td>Introduction</td>
              <td>To be released</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>1</td>
              <td>2/4</td>
              <td>Journalism</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/good-practices">Good Practices</Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2/9</td>
              <td>Best Practices and Installation</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/installation">Installation</Link>{`, `}
                <Link to="/docs/good-practices">Good Practices</Link>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>2/11</td>
              <td>Python</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/python">Python</Link>{`, `}
                <Link to="/docs/python-intermediate">Python Intermediate</Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2/16</td>
              <td>Stats</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/inference">Inference</Link>{`, `}
                <Link to="/docs/regression">Regression</Link>{`, `}
                <Link to="/docs/hypothesis-testing">Hypothesis Testing</Link>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>2/18</td>
              <td>NumPy + Pandas</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/numpy-pandas">Numpy + Pandas</Link>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>2/23</td>
              <td>Graphs in Python</td>
              <td>To be released</td>
              <td>To be released</td>
            </tr>
            <tr>
              <td>4</td>
              <td>2/25</td>
              <td>R</td>
              <td>To be released</td>
              <td>
                <Link to="/docs/r">R</Link>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>3/2</td>
              <td>Ggplot: Data Viz in R</td>
              <td>
                To be released
              </td>
              <td>
                To be released
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>3/4</td>
              <td>Web Dev</td>
              <td>
                To be released
              </td>
              <td>
                To be released
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3/9</td>
              <td>Scraping</td>
              <td>
                To be released
              </td>
              <td>
                <Link to="/docs/scraping">Scraping</Link>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>3/11</td>
              <td>Data Justice</td>
              <td>To be released</td>
              <td>
                To be released
              </td>
            </tr>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
