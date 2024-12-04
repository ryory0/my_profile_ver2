"use client";

import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { ReactNode } from 'react';
import { StaticImageData } from 'next/image';

// GridItemProps: 外部リンク専用
type GridItemProps = {
  children: ReactNode;
  href: string;
  title: string;
  thumbnail: StaticImageData | string; // String URLも許可する場合
};

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
      <LinkOverlay href={href} target="_blank" rel="noopener noreferrer">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

// WorkGridItemProps: 内部リンクと外部リンクをサポート
type WorkGridItemProps = {
  children: ReactNode;
  id?: string; // 内部リンク用
  url?: string; // 外部リンク用
  title: string;
  thumbnail: StaticImageData | string;
};

export const WorkGridItem = ({ children, id, url, title, thumbnail }: WorkGridItemProps) => {
  const linkHref = url || `/work/${id}`; // 外部リンクがあれば優先
  const isExternal = !!url; // 外部リンクかどうかを判定

  return (
    <Box w="100%" textAlign="center">
      {isExternal ? (
        // 外部リンクの場合
        <LinkBox as="a" href={linkHref} target="_blank" rel="noopener noreferrer" cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
            loading="lazy"
          />
          <LinkOverlay href={linkHref}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      ) : (
        // 内部リンクの場合
        <NextLink href={linkHref} passHref legacyBehavior>
          <LinkBox cursor="pointer">
            <Image
              src={thumbnail}
              alt={title}
              className="grid-item-thumbnail"
              placeholder="blur"
              loading="lazy"
            />
            <LinkOverlay href={linkHref}>
              <Text mt={2} fontSize={20}>
                {title}
              </Text>
            </LinkOverlay>
            <Text fontSize={14}>{children}</Text>
          </LinkBox>
        </NextLink>
      )}
    </Box>
  );
};

// グローバルスタイル
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
