import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Button from '@mui/material/Button';
import logo from '../public/logo.png';
import { Stack } from '@mui/material';
import { getProviders, signIn, signOut, useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import LogoutIcon from '@mui/icons-material/Logout';

export default function App() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Čajový deník</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Stack className="main" spacing={2}>
        <h1>Čajový deník</h1>

        <Image src={logo} width={200} height={200} alt=""></Image>

        <p>
          Aplikace Čajový deník je dobrou přítelkyní každému, koho těší cesta
          čaje a rád by si své kroky zaznamenával. Na jednom místě si můžete
          ukládat oblíbené čaje a do budoucna přibudou degustační zápisy a mnoho
          dalšího. Nepřeberné čajové horizonty čekají na objevení.
        </p>

        <Link href="/login" passHref>
          <Button variant="outlined">
            <a>Přihlášení</a>
          </Button>
        </Link>

        {/*<Link href="/signin" passHref>
          <Button variant="outlined">
            <a>Vytvořit účet</a>
          </Button>
        </Link>

        <p>Máte již svůj účet? Přihlaste se!</p>



        <Link href="/blog" passHref>
          <Button variant="outlined">
            <a>Blog</a>
          </Button>
        </Link>

        <Button
          variant="outlined"
          onClick={() => signOut({ callbackUrl: '/' })}
          startIcon={<LogoutIcon />}
        >
          Odhlásit
        </Button>*/}
      </Stack>
    </>
  );
}
