"use client";

import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react';

const variants = {
    hidden: { opacity: 0, x: 0, y: 20 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 20 }
}

type LayoutProps = {
    children: ReactNode
    title: string
}

const Layout = ({ children, title }: LayoutProps) => (
    <motion.article
    initial="hidden" animate="enter" exit="exit" variants={variants} transition={{duration: 0.4, type: 'easeInOut'}} style={{ position: 'relative'}}>
        <>
        {title && (
            <Head>
                <title>{title} - Ryohei Yoshine</title>
            </Head>
        )}
        {children}
        </>
    </motion.article>
)

export default Layout