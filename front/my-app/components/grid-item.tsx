"use client";

import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { ReactNode } from 'react'
import { StaticImageData } from 'next/image'

type GridItemProps = {
  children: ReactNode
  href: string
  title: string
  thumbnail: StaticImageData | string // String URLも許可する場合
}

export const GridItem = ({ children, href, title, thumbnail }: GridItemProps) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

type WorkGridItemProps = {
  children: ReactNode
  id: string
  title: string
  thumbnail: StaticImageData | string
}

export const WorkGridItem = ({ children, id, title, thumbnail }: WorkGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/work/${id}`} passHref legacyBehavior>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/work/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
