import {
  MARK_BOLD,
  MARK_CODE,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
} from '@humandx/plate-basic-marks';
import { ELEMENT_BLOCKQUOTE } from '@humandx/plate-block-quote';
import {
  ELEMENT_CODE_BLOCK,
  ELEMENT_CODE_LINE,
} from '@humandx/plate-code-block';
import { KEY_EMOJI } from '@humandx/plate-emoji';
import { MARK_SEARCH_HIGHLIGHT } from '@humandx/plate-find-replace';
import {
  ELEMENT_H1,
  ELEMENT_H2,
  ELEMENT_H3,
  ELEMENT_H4,
  ELEMENT_H5,
  ELEMENT_H6,
} from '@humandx/plate-heading';
import { MARK_HIGHLIGHT } from '@humandx/plate-highlight';
import { MARK_KBD } from '@humandx/plate-kbd';
import { ELEMENT_LINK } from '@humandx/plate-link';
import {
  ELEMENT_LI,
  ELEMENT_OL,
  ELEMENT_TODO_LI,
  ELEMENT_UL,
} from '@humandx/plate-list';
import { ELEMENT_IMAGE, ELEMENT_MEDIA_EMBED } from '@humandx/plate-media';
import { ELEMENT_MENTION, ELEMENT_MENTION_INPUT } from '@humandx/plate-mention';
import { ELEMENT_PARAGRAPH } from '@humandx/plate-paragraph';
import {
  ELEMENT_TABLE,
  ELEMENT_TD,
  ELEMENT_TH,
  ELEMENT_TR,
} from '@humandx/plate-table';

export type DefaultPlatePluginKey =
  | typeof ELEMENT_BLOCKQUOTE
  | typeof ELEMENT_CODE_BLOCK
  | typeof ELEMENT_CODE_LINE
  | typeof KEY_EMOJI
  | typeof ELEMENT_H1
  | typeof ELEMENT_H2
  | typeof ELEMENT_H3
  | typeof ELEMENT_H4
  | typeof ELEMENT_H5
  | typeof ELEMENT_H6
  | typeof ELEMENT_IMAGE
  | typeof ELEMENT_LI
  | typeof ELEMENT_LINK
  | typeof ELEMENT_MEDIA_EMBED
  | typeof ELEMENT_MENTION
  | typeof ELEMENT_MENTION_INPUT
  | typeof ELEMENT_OL
  | typeof ELEMENT_PARAGRAPH
  | typeof ELEMENT_TABLE
  | typeof ELEMENT_TD
  | typeof ELEMENT_TH
  | typeof ELEMENT_TODO_LI
  | typeof ELEMENT_TR
  | typeof ELEMENT_UL
  | typeof MARK_BOLD
  | typeof MARK_CODE
  | typeof MARK_HIGHLIGHT
  | typeof MARK_ITALIC
  | typeof MARK_KBD
  | typeof MARK_SEARCH_HIGHLIGHT
  | typeof MARK_STRIKETHROUGH
  | typeof MARK_SUBSCRIPT
  | typeof MARK_SUPERSCRIPT
  | typeof MARK_UNDERLINE;
