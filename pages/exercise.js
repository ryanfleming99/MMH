import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import CategoryHero from "../components/CategoryHero.jsx";

function exercise() {
  const content = [
    {
      title: "Exercise",
      content1: `When we break a sweat and push our bodies to their limits, we release endorphins that naturally lift our mood and reduce feelings of stress and anxiety. But the benefits of exercise go far beyond just a temporary adrenaline rush. Regular physical activity has been shown to improve overall cognitive function, increase self-esteem, and even reduce the symptoms of depression and other mental health disorders.`
    }
  ];

  return (
    <>
      <Head>
        <title>MMH | Excercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CategoryHero title={content[0].title} content1={content[0].content1} />
    </>
  );
}

export default exercise;
