import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import Divider from '@/components/ui/divider'

import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Quiz from 'components/Quiz'
import CodeBlock from 'components/Code'
import VideoPlayer from 'components/Player'
import { TimeStampPlayer } from 'components/Player'
import ImageWrapper from 'components/ImageWrapper'
import Modal from 'components/ui/modal'
import Quote from 'components/QuoteWrapper'
import FrameModal from 'components/IframeWrapper'
import Player from 'components/Player'

export const components: MDXComponents = {
  Frame: FrameModal,
  Quote,
  Modal,
  Quiz,
  CodeBlock,
  TSplayer: TimeStampPlayer,
  Player,
  Divider,
  ImageWrapper,
  VideoPlayer,
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
