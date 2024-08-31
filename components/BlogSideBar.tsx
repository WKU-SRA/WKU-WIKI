'use client'
import { cn } from 'lib/utils'
import React, { useState } from 'react'
import { Sidebar, SidebarBody, SidebarLink } from 'components/ui/sidebar'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { SideBarButton } from 'components/ui/sidebar'
import getRandom from 'lib/utils/random-utils'

import {
  IconSchool,
  IconAlignBoxBottomLeftFilled,
  IconArticle,
  IconNotebook,
  IconRocket,
  IconAlignBoxLeftBottomFilled,
} from '@tabler/icons-react'
import { list } from 'postcss'

type SidebarProps = {
  lists: {
    value: string
    url: string
    depth: number
  }[]
}

export default function BlogSidebar({ lists }: SidebarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})
  const [collapsed, setCollapsed] = useState(false)
  const [open, setOpen] = useState(false)

  const handleCollapse = (key: string) => {
    setExpanded((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const links = [
    {
      label: '问问 Kimi',
      href: 'https://kimi.moonshot.cn/',
      icon: (
        <IconAlignBoxLeftBottomFilled className="h-5 w-5 flex-shrink-0 text-primary-400 dark:text-neutral-200" />
      ),
    },
    {
      label: '问问 ChatGPT',
      href: 'https://chat.openai.com/',
      icon: (
        <IconAlignBoxBottomLeftFilled className="h-5 w-5 flex-shrink-0 text-primary-400 dark:text-neutral-200" />
      ),
    },
    {
      label: '其他文章',
      href: '/blog',
      icon: (
        <IconNotebook className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-neutral-200" />
      ),
    },
    {
      label: '本页导航',
      href: '#',
      icon: (
        <IconArticle className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-neutral-200" />
      ),
    },
  ]
  return (
    <div
      className={cn(
        'fixed left-1 top-24 mx-auto max-h-[90vh] w-auto max-w-7xl flex-1 flex-col overflow-auto rounded-md border border-neutral-200 bg-gray-100 opacity-30 hover:opacity-100 dark:border-neutral-700 dark:bg-neutral-800 md:min-h-[300px] md:flex-row md:opacity-60 lg:opacity-100',
        'h-auto'
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-auto ">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) =>
                link.label !== '本页导航' ? (
                  <SidebarLink expanded key={idx} link={link} />
                ) : (
                  <>
                    <SideBarButton
                      expanded
                      action={() => {
                        setCollapsed(!collapsed)
                      }}
                      key={idx}
                      link={link}
                    />
                    {lists.map(
                      (list, idx) =>
                        collapsed && (
                          <SidebarLink
                            style={{ paddingLeft: `${32 * (list.depth - 1)}px` }}
                            action={() => handleCollapse(list.url)}
                            key={idx}
                            link={{
                              label: list.value,
                              href: list.url,
                              icon: (
                                <IconSchool className="h-5 w-5 flex-shrink-0 text-primary-500 dark:text-neutral-200" />
                              ),
                            }}
                            className={cn(
                              `pl-${list.depth * 4}`,
                              open ? 'flex justify-start' : 'hidden'
                            )}
                          />
                        )
                    )}
                  </>
                )
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
    </div>
  )
}
export const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <IconRocket className="h-8 w-8 flex-shrink-0 text-blue-400 dark:text-blue-300" />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre font-medium text-blue-300 dark:text-white"
      >
        科协维基百科
      </motion.span>
    </Link>
  )
}
export const LogoIcon = () => {
  return (
    <Link
      href="blog"
      className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal text-black"
    >
      <IconRocket className="h-8 w-8 flex-shrink-0 text-blue-400 dark:text-blue-300" />
    </Link>
  )
}
