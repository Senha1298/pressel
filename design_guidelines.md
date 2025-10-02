# Design Guidelines - Delivery Driver Recruitment Landing Page

## Core Design Approach
**Exact Replication Mandate**: This design is pre-defined with complete specifications. All visual and functional elements must match the provided code precisely without any modifications or enhancements.

## Color Palette

**Primary Colors:**
- Orange Primary: #F54E1C / #f94f1c
- White: #FFFFFF
- Dark Text: #222222 / #333333

**Accent Colors:**
- Orange Accent: #ff7a1a (requirements card)
- Green Gradient: Linear gradient from #34d058 to #228c3a (CTA button)
- Green Shadow: #17692a

**UI Colors:**
- Gray 300: Border colors
- Gray 400/700: Modal close button states
- Black 40% opacity: Modal overlay

## Typography

**Font Family:**
- Primary: 'Roboto', Arial, sans-serif (via Google Fonts)
- Weights: 400 (Regular), 700 (Bold)

**Font Sizes:**
- Header Title: 22px desktop, 18px mobile
- Main Banner Text: 26px desktop, 20px tablet, 17px mobile
- CTA Button: 20px desktop, 18px tablet, 16px mobile
- Requirements Text: 15px desktop, 14px mobile
- Requirements List Items: 14px desktop/mobile
- Modal Title: 20px (text-xl)
- Modal Input: 18px (text-lg)

## Layout System

**Spacing Units:**
- Tailwind spacing: Use p-4, p-6, mx-4, mt-6, etc. as defined in code
- Custom spacing: 10px, 16px, 20px, 24px, 32px, 48px for specific sections

**Container Widths:**
- Max-width: 900px for main content
- Video container: 700px max-width, 600px for video element
- Modal: max-w-md (28rem)

**Section Padding:**
- Header: 0 0 0 10px, height 70px (sticky)
- Main banner: 20px bottom on orange background
- Requirements card: 28px 22px 32px 22px desktop, 16px 4px 18px 4px mobile
- Footer: 20px all sides

## Component Library

**Header (Sticky):**
- White background, 70px height
- Orange back arrow (24px) + title + orange share icon (24px)
- Box shadow: 0 2px 4px rgba(0,0,0,0.04)

**Video Banner Section:**
- Orange background (#f94f1c)
- White centered heading
- Embedded SmartPlayer video (vturb) - no border radius, black background
- Box shadow on video: 0 2px 16px rgba(0,0,0,0.10)

**CTA Button:**
- Green gradient background (180deg, #34d058 to #228c3a)
- White text, 700 weight
- Padding: 18px 48px desktop, 14px 32px tablet, 12px 18px mobile
- Border-radius: 8px
- Active state: translateY(2px) with adjusted shadow
- Box shadow: 0 2px 0 #17692a, 0 1px 6px rgba(0,0,0,0.10)

**Requirements Card:**
- Orange background (#ff7a1a), border-radius 18px
- White text, custom checkmark icons (Font Awesome \f00c)
- List items with 22px left padding, 14px bottom margin
- Icons positioned absolutely at left

**Modal:**
- Fixed overlay with black 40% opacity background
- White card, 6px border-radius
- CEP input with auto-formatting (00000-000)
- Orange CTA button (same orange as primary)
- Close button (X) top-right

**Scroll-to-Top Button:**
- Fixed bottom-right: 32px bottom, 24px right (48px size on mobile)
- White circular background, 64px diameter
- Orange arrow icon (32px, 22px on mobile)
- Box shadow: 0 2px 8px rgba(0,0,0,0.12)

**Footer:**
- Orange background (#F54E1C)
- White centered text, 20px padding

## Visual Specifications

**Shadows:**
- Header: 0 2px 4px rgba(0,0,0,0.04)
- Video: 0 2px 16px rgba(0,0,0,0.10)
- Button: 0 2px 0 #17692a, 0 1px 6px rgba(0,0,0,0.10)
- Scroll button: 0 2px 8px rgba(0,0,0,0.12)
- Modal: Default shadow-lg

**Border Radius:**
- CTA Button: 8px
- Requirements Card: 18px
- Modal: 6px
- Scroll-to-Top: 50% (circular)
- Video: 0px (square corners)

**Icons:**
- Font Awesome 5.15.3 (CDN)
- Back arrow: fa-arrow-left
- Share: fa-share
- Checkmarks: fa-check (\f00c)
- Scroll up: fa-arrow-up
- Modal close: fa-times

## Responsive Breakpoints

**Desktop (>900px):** Default sizes as specified
**Tablet (≤900px):** Reduced font sizes, adjusted padding, flex-direction column for app section
**Mobile (≤600px):** Further reduced fonts, minimal padding, smaller buttons and icons

## Images
This design does not include any hero images. The hero section uses a solid orange background with an embedded video player as the primary visual element.

## Functional Specifications
- Sticky header at top
- CEP input auto-formatting with validation (enables button when valid)
- Modal opens on CTA click, closes on X or outside click
- Smooth scroll-to-top on button click
- Video auto-loads via SmartPlayer script injection