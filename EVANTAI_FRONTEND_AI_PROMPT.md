# EVANTAI FRONTEND — COMPLETE AI CODE GENERATOR PROMPT
# Project: Evantai (The Industry OS)
# Target: v0.dev / Cursor Composer / Lovable
# Version: 1.0

---

## BRAND SYSTEM (STRICTLY ENFORCED)

Colors:
- Background: #001B3D (Deep Navy) — used for body, sidebar, panels
- Surface/Cards: #012A5E at 60% opacity with backdrop-blur-xl
- Primary Buttons/Active States: #0056D2 (Electric Blue)
- Accents/Glows/Highlights: #00E5FF (Bright Cyan)
- Text Primary: #FFFFFF  |  Text Secondary: #94A3B8  |  Text Muted: #64748B
- Borders: rgba(0,229,255,0.2) default → rgba(0,229,255,1.0) on hover with box-shadow: 0 0 15px rgba(0,229,255,0.4)

⛔ STRICT PROHIBITION: Do NOT use any Purple, Violet, Indigo, or Magenta shades ANYWHERE in the entire application. No #7C3AED, no #A855F7, no purple-* Tailwind classes. This is a Blue-Cyan ONLY palette.

Font: Inter (sans-serif). Monospace: JetBrains Mono.

CSS Custom Properties (add to globals.css):
```css
:root {
  --bg-deep: #001B3D;
  --bg-surface: #012A5E;
  --primary: #0056D2;
  --accent: #00E5FF;
  --text-primary: #FFFFFF;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
  --border-subtle: rgba(0, 229, 255, 0.2);
  --border-active: rgba(0, 229, 255, 1.0);
  --glow-cyan: 0 0 15px rgba(0, 229, 255, 0.5);
  --glow-cyan-strong: 0 0 25px rgba(0, 229, 255, 0.7);
}
```

---

## ARCHITECTURE & STACK

| Layer        | Technology                     | Notes                                |
|-------------|-------------------------------|--------------------------------------|
| Framework   | Next.js 14+ (App Router)       | All routes in /app directory         |
| Language    | TypeScript                     | Strict mode, all files .tsx          |
| Styling     | Tailwind CSS 4                 | Custom properties in globals.css     |
| Components  | shadcn/ui + Radix primitives   | Import from @/components/ui/         |
| Icons       | Lucide React                   | Styled with Cyan duotone effect      |
| Animations  | Framer Motion                  | Page transitions, hover, shimmer     |
| State       | React Context + useState       | Auth role context, sidebar state     |

### File Structure

```
app/
├── layout.tsx              // Root layout: fonts, providers, sidebar + agent panel
├── page.tsx                // Redirect to /login
├── globals.css             // Tailwind + Evantai design tokens + animations
├── login/
│   └── page.tsx            // Login page
├── creator/
│   └── page.tsx            // Content Creator Hub
├── sales/
│   └── page.tsx            // Sales & Outreach Hub
├── logistics/
│   └── page.tsx            // Supply Chain Hub
├── career/
│   └── page.tsx            // Career & Job Seeker Hub
components/
├── sidebar.tsx             // Industry Rail (left)
├── agent-panel.tsx         // Agent Pulse Assistant (right slide-out)
├── glassmorphic-card.tsx   // Reusable glass card
├── shimmer-loader.tsx      // AI thinking state
├── evantai-logo.tsx        // Logo component
└── ui/                     // shadcn/ui components (pre-installed)
```

---

## COMPONENT LIBRARY

### A. GlassmorphicCard (reusable component)

```tsx
// components/glassmorphic-card.tsx
import { cn } from "@/lib/utils";

export function GlassmorphicCard({ 
  children, 
  className 
}: { 
  children: React.ReactNode; 
  className?: string 
}) {
  return (
    <div className={cn(
      "bg-[#012A5E]/60 backdrop-blur-xl border border-[#00E5FF]/20 rounded-2xl p-6",
      "transition-all duration-300 ease-out",
      "hover:border-[#00E5FF] hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]",
      className
    )}>
      {children}
    </div>
  );
}
```

Specs:
- Background: bg-[#012A5E]/60
- Backdrop: backdrop-blur-xl
- Border: border border-[#00E5FF]/20
- Radius: rounded-2xl
- Padding: p-6
- Hover → Border: hover:border-[#00E5FF]/100
- Hover → Glow: hover:shadow-[0_0_15px_rgba(0,229,255,0.4)]
- Transition: transition-all duration-300 ease-out

### B. Agent Pulse Panel (Right Slide-Out)

Position: Fixed right, full height. Collapsed = 56px icon strip. Expanded = 380px panel.
Trigger: Click the Evantai logo icon or a floating ✨ button.
Header: Evantai logo with pulse-cyan animation (soft glowing ring radiating outward).
Tabs: Three text tabs: Agent | Copilot | Chat.
Active Tab: 2px Cyan underline bar (border-b-2 border-[#00E5FF]).
Background: bg-[#001B3D] with left border: border-l border-[#00E5FF]/20.
Slide Animation: Framer Motion x: "100%" → x: 0, spring transition.

Pulse-Cyan Keyframe:
```css
@keyframes pulse-cyan {
  0% { box-shadow: 0 0 0 0 rgba(0, 229, 255, 0.5); }
  70% { box-shadow: 0 0 0 20px rgba(0, 229, 255, 0); }
  100% { box-shadow: 0 0 0 0 rgba(0, 229, 255, 0); }
}
.animate-pulse-cyan {
  animation: pulse-cyan 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### C. Industry Rail Sidebar (Left)

- Width: w-[72px] (narrow icon rail)
- Background: bg-[#001B3D] with border-r border-[#00E5FF]/10
- Icon Size: w-10 h-10 centered in w-12 h-12 container
- Active State: bg-gradient-to-br from-[#00E5FF]/20 to-[#0056D2]/20 + left 3px Cyan bar
- Hover State: hover:bg-[#012A5E]/60
- Tooltip: On hover, show module name tooltip to the right

Navigation Items:
| Icon (Lucide) | Label      | Route        |
|--------------|------------|--------------|
| Video        | Creator    | /creator     |
| Target       | Sales      | /sales       |
| Truck        | Logistics  | /logistics   |
| Briefcase    | Career     | /career      |
| Settings     | Settings   | /settings    |

---

## ANIMATION SYSTEM

### A. Page Transitions (Framer Motion)

Wrap each page's content in:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  {/* page content */}
</motion.div>
```

### B. AI "Shimmer" Thinking State

When an agent is processing, overlay a gradient shimmer across the card surface:
```css
@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.shimmer-overlay {
  position: absolute;
  inset: 0;
  overflow: hidden;
  border-radius: inherit;
}
.shimmer-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(0, 229, 255, 0.08) 40%,
    rgba(0, 229, 255, 0.15) 50%,
    rgba(0, 229, 255, 0.08) 60%,
    transparent 100%
  );
  animation: shimmer 2s infinite ease-in-out;
}
```

### C. Button Hover Effects

```css
.evantai-btn {
  @apply transition-all duration-200 ease-out;
}
.evantai-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 20px rgba(0, 229, 255, 0.3);
}
.evantai-btn:active {
  transform: translateY(0);
}
```

### D. Staggered Card Entrance

```tsx
{cards.map((card, i) => (
  <motion.div
    key={card.id}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1, duration: 0.4 }}
  >
    <GlassmorphicCard>...</GlassmorphicCard>
  </motion.div>
))}
```

### E. Waveform Animation (Career Page)

30 vertical bars, 3px wide each, colored #00E5FF, with varying heights:
```css
@keyframes wave {
  0%, 100% { height: 10px; }
  50% { height: 40px; }
}
.wave-bar {
  width: 3px;
  background: #00E5FF;
  border-radius: 2px;
  animation: wave 1.2s ease-in-out infinite;
}
/* Apply animation-delay: index * 0.05s to each bar for flowing effect */
```

---

## PAGE SPECIFICATIONS

### /login — Login & Authentication

- Full screen. No sidebar. No agent panel. Background: bg-[#001B3D].
- Center: Large Evantai logo image with pulsing glow:
  - box-shadow: 0 0 60px rgba(0,229,255,0.3), animated.
  - Logo image URL: https://codewords-uploads.s3.amazonaws.com/runtime_v2/a5c15bc6baf54cae9966a78e1d6422c051628c9bfe9f479485b436a43254b8d3/ChatGPT_Image_Feb_16__2026__10_18_38_PM.png
- Below logo: max-w-sm mx-auto form with:
  - Email input field
  - Password input field
  - "Sign In" button
- Input styling: bg-[#012A5E]/40 border border-[#00E5FF]/20 text-white placeholder:text-slate-500 rounded-xl px-4 py-3
  - Focus: border-[#00E5FF] ring-1 ring-[#00E5FF]/30
- Sign In button: w-full bg-[#0056D2] hover:bg-[#0066FF] text-white rounded-xl py-3 font-semibold with hover lift.
- Optional: "Or continue with Google" social button with subtle border style.
- Post-login logic: Detect user_role from auth response → redirect to /creator, /sales, /logistics, or /career.

### /creator — Content Creator Hub

- Header greeting: "Good Morning, Creator. Your hooks are ready." (dynamic time-of-day: morning/afternoon/evening). text-3xl font-bold text-white.
- Main Widget — Video Slicer Canvas:
  - Large drag-and-drop zone: border-2 border-dashed border-[#00E5FF]/30 rounded-2xl min-h-[300px]
  - Centered: Upload icon (48px, #00E5FF) + text "Drop your MP4 here or click to browse."
  - On drag-over: border becomes solid border-[#00E5FF] with glow.
- Feature Card Grid (3 columns, gap-6):
  Each card is a GlassmorphicCard with:
  - An icon from Lucide (Scissors, Maximize, Sparkles respectively)
  - Title: "Auto-Clip", "Reframing", "Hook Generator"
  - "Agent" badge: absolute top-3 right-3 text-[10px] bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 px-2 py-0.5 rounded-full
  - One-line description below:
    1. "AI splits your video into viral-ready segments."
    2. "Auto-crop to 9:16, 1:1, or 16:9 for any platform."
    3. "Generate scroll-stopping hooks from your transcript."

### /sales — Sales & Outreach Hub

- Header: "Sales Command Center" — text-3xl font-bold text-white.
- Main Widget — Lead Pipeline Kanban Board:
  - Three columns: "Cold" (5 leads), "Warm" (3 leads), "Closing" (2 leads).
  - Column header: Glassmorphic style header with column name + count badge (rounded-full bg-[#00E5FF]/20 text-[#00E5FF] text-xs px-2).
  - Each lead card: GlassmorphicCard with:
    - Name (white, font-medium)
    - Company (text-sm, text-slate-400)
    - Role
    - Colored status dot (blue = cold, cyan = warm, green = closing)
  - Populate with realistic sample data:
    - "Sarah Chen — VP Engineering — Stripe"
    - "Marcus Rivera — Head of Growth — Notion"
    - "Aisha Patel — CTO — Linear"
    - "James Wu — Director of Sales — Figma"
    - "Elena Volkov — Product Lead — Vercel"
    - etc.
- Below Kanban — Email Drafter:
  - Split panel. Left: textarea for email draft (glassmorphic border).
  - Right: "Tone Analysis" meter — horizontal bar with label "Formal ← → Casual".
  - Bar: bg-gradient-to-r from-[#0056D2] to-[#00E5FF], filled at ~65%, height 8px, rounded-full, animated width transition.

### /logistics — Supply Chain & Logistics Hub

- Header: "Global Supply Chain Control" — text-3xl font-bold text-white.
- Main Widget — Global Control Map (stylized placeholder):
  - Container: bg-[#010F1E] rounded-2xl border border-[#00E5FF]/15 min-h-[400px] relative overflow-hidden.
  - Inside: SVG simplified world map outline in stroke-[#00E5FF]/20 fill-none.
  - 4-5 pulsing dots at locations (NYC, London, Shanghai, Mumbai, São Paulo) using animate-pulse-cyan.
  - Animated dashed Cyan lines connecting some dots (stroke-dasharray with animated stroke-dashoffset).
  - Top-left overlay text: "Real-time Global Routes" in text-sm text-[#00E5FF]/60.
- Below map — Inventory Alerts:
  - List of 6 items in a Glassmorphic container.
  - Each row: Priority dot + item name + warehouse location + quantity + alert text.
  - Priority dots:
    - High: w-2 h-2 rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]
    - Medium: w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]
    - Low: w-2 h-2 rounded-full bg-slate-500
  - Rows separated by border-b border-[#00E5FF]/10.
  - Sample data:
    - HIGH: "Lithium Battery Cells — Shanghai Warehouse — 120 units — Below safety threshold"
    - HIGH: "Microchip Module X7 — Mumbai Hub — 45 units — Supplier delay reported"
    - MEDIUM: "Packaging Materials — London Depot — 800 units — Reorder recommended"
    - etc.

### /career — Career & Job Seeker Hub

- Header: "Career Intelligence Hub" — text-3xl font-bold text-white.
- Main Widget — Resume-JD Matcher (Split Screen):
  - Left pane: GlassmorphicCard titled "Your Resume" with tall textarea (min-h-[250px]).
  - Right pane: GlassmorphicCard titled "Job Description" with same textarea.
  - Between them: Vertical divider (1px, #00E5FF/20) with centered "Match" button (bg-[#0056D2], rounded-full, w-12 h-12, Sparkles icon).
  - After clicking Match: Show animated circular progress ring (SVG circle, stroke #00E5FF, stroke-dasharray animating from 0 to 85%) with "85% Match" text centered inside.
- Below — Interview Simulator:
  - GlassmorphicCard.
  - Header: Mic icon + "Interview Simulator" text.
  - Waveform visualizer: Row of 30 vertical divs, 3px wide, bg-[#00E5FF], with wave animation (varying heights 10-40px, staggered animation-delay: index * 0.05s).
  - Below waveform: "Start Interview" button (bg-[#0056D2] rounded-xl px-6 py-3 text-white font-semibold with hover lift).

---

## SHARED LAYOUT SHELL

Every page except /login uses this layout:

```tsx
<div className="flex h-screen bg-[#001B3D] text-white overflow-hidden">
  {/* LEFT: Industry Rail Sidebar — w-[72px] */}
  <Sidebar />
  
  {/* CENTER: Main Content — flex-1 overflow-y-auto */}
  <main className="flex-1 overflow-y-auto p-8">
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      {/* Page Content */}
    </motion.div>
  </main>
  
  {/* RIGHT: Agent Pulse Panel — conditional slide-out */}
  <AgentPanel />
</div>
```

---

## ICON STYLING GUIDE

All Lucide icons should follow "Cyan Duotone" treatment:

```tsx
// Standard icon — Cyan stroke
<Video className="w-5 h-5 text-[#00E5FF]" />

// Active/featured icon — with glow via filter
<Video className="w-5 h-5 text-[#00E5FF] drop-shadow-[0_0_6px_rgba(0,229,255,0.6)]" />

// Muted/inactive icon
<Video className="w-5 h-5 text-[#64748B]" />
```

---

## TYPOGRAPHY SCALE

| Element          | Class                  | Weight        | Color    |
|-----------------|------------------------|---------------|----------|
| Page Heading     | text-3xl              | font-bold     | #FFFFFF  |
| Section Heading  | text-xl               | font-semibold | #FFFFFF  |
| Card Title       | text-lg               | font-medium   | #FFFFFF  |
| Body Text        | text-sm               | font-normal   | #94A3B8  |
| Caption / Badge  | text-xs               | font-medium   | #00E5FF  |
| Code / Mono      | font-mono text-sm     | font-normal   | #00E5FF  |

---

## RESPONSIVE DESIGN

- Desktop (>1024px): Full sidebar + main + collapsible agent panel.
- Tablet (768-1024px): Sidebar stays as icon rail. Agent panel as overlay.
- Mobile (<768px): Sidebar becomes bottom tab bar. Agent panel is full-screen sheet.

---

## SAMPLE DATA REQUIREMENTS

Populate ALL views with realistic, professional-looking mock data:
- At least 10 leads in the Sales Kanban
- At least 6 inventory items in Logistics
- Realistic company names, person names, roles, locations
- All data should feel like a live enterprise application

---

## FINAL INSTRUCTIONS

Build ALL pages, ALL components, ALL animations. This is a complete application with:
1. Working navigation between all routes using Next.js App Router Link components
2. A mock auth context that stores user_role and redirects from /login accordingly
3. Every animation specified (shimmer, pulse, wave, stagger, page transitions, hover effects)
4. The Evantai logo displayed using the provided image URL
5. Fully responsive at all three breakpoints
6. Zero purple/violet colors anywhere — only the Blue-Cyan palette specified above
