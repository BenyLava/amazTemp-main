import Head from 'next/head';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import Cardcustom from '../components/Card';
import { getSortedPostsData } from '../lib/posts';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Index({ allPostsData }) {
  return (
    <Layout pageTitle="Kitchen Gadget Shop">
      
      <Header/>
      
      <section >
        <h2 className="text-light">Blog</h2>
        
        <ul className="text-light">
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
        
      </section>
      
      <Footer />
    </Layout>
  )
}


