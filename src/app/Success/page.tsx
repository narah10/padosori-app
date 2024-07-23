import Navigation from "../components/nav";
import Image from "next/image";
import Link from "next/link";
import Head from "../components/head";
import Footer from "../components/footer";

export default function Success(){
    return(
        <main>
        <Navigation/>
        <Head
              imageSrc="/hero-img.svg"
              h1="Application Submitted"
              text="Thank you for submitting your application. It will take about 5 business days for us to review your application and reach out to you. We appreciate your patience."
              alt="Kyungdong Global Campus next to the ocean"/>
        <Footer/>
        </main>

    )
}