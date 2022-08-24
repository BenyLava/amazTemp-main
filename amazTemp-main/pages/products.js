import Head from 'next/head';
import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';



const Products = () => {
    return (
    <Layout pageTitle="KG Catalog">
      
      <Header/>
      <Service/>
      
      <Footer />
    </Layout>

    )

}

export default Products;