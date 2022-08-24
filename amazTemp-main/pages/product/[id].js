import Layout from '../../components/layout';
import { getAllProductIds, getProductData } from '../../lib/product';
import Date from '../../components/date';
import Head from 'next/head';
import utilStyles from '../../styles/utils.module.css';
import Header from '../../components/Header';
import { Container, Row, Col } from "reactstrap";
import Button from 'react-bootstrap/Button';
import React from 'react';
import Related from '../../components/Related';
import Footer from '../../components/Footer'



export async function getStaticProps({ params }) {
    const productData = await getProductData(params.id);
    return {
      props: {
        productData,
      },
    };
  }

  
export async function getStaticPaths() {
  const paths = getAllProductIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Product({ productData }) {
    return (
      <section>
        <container>
      <Layout>
        
        <Header/>

        <Head><title>{productData.title}</title></Head>

      <Row>
        <Col className=" d-flex justify-content-end text-align-center" sm={12} lg={6} md={6}>

        <img height={360} className="border cardcust ms-5 mt-5" src={productData.image}/>
        </Col>

        <Col width={360} className=" d-flex justify-content-start text-align-center" sm={12} lg={6} md={6}>


      <div className="div500">
        <article className="me-5 ms-3 mt-5">
        <h1 className={utilStyles.headingXl}>{productData.title}</h1>
        <div className={utilStyles.lightText}>
          
        </div>
        <br/>

        <div className={utilStyles.lightText} dangerouslySetInnerHTML={{ __html: productData.contentHtml }} />
        <Row>
        
          <Button  href={productData.link} target="_blank" className="mt-5  d-flex justify-content-center text-align-center card-btm">Buy now on Amazon</Button>
           
          <h3 className="tiny text-light mt-5">{productData.price}</h3>
        </Row>
        </article>
      </div>
        </Col>
        </Row>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>


        <Related/>
      

      <Footer/>
      </Layout>
      </container>
      </section>
    );
  }