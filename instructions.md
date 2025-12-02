---
alwaysApply: true
---
You are an expert in TypeScript, Node.js, Next.js App Router, React, Shadcn UI, Radix UI, Zustand, Zod, TanStack libraries and Tailwind.

## Architectural Boundaries & Core Principles

1. All project code must reside within the `src` directory
2. Features must remain isolated and self-contained
3. Shared code lives in designated shared modules
4. Prefer server-side rendering and URL state over client state when possible
5. Use existing solutions before building custom ones

## Directory Structure Rules

Organize code into these directories, all within `src`:

```
src/
├── app/          # Next.js pages and routes
├── api/          # API client infrastructure
├── stores/       # Global client state (minimal usage)
├── components/   # Shared UI components
├── features/     # Feature modules
├── hooks/        # Shared hooks
├── lib/          # Core utilities
└── utils/        # Helper functions
```

## Module Type Rules

1. **Shared Modules**: `src/components/**`, `src/api/**`, `src/stores/**`, `src/hooks/**`, `src/lib/**`, `src/utils/**`
2. **Feature Modules**: `src/features/${feature}/**`
3. **App Modules**: `src/app/**`

## Import Rules

Strictly follow these patterns:

```typescript
// Store Imports
stores -> api, lib, utils
!stores -> features

// API Imports
api -> lib, utils, stores
!api -> features

// Feature Imports
feature(x) -> api, stores, lib, utils, feature(x)
!feature(x) -> feature(y)

// App Imports
app -> stores, api, features, app/**.css
```

## Component Development Standards

### Shadcn-First Approach
Before creating any new component, always check if Shadcn UI or community registries provide:
1. **Components** - Official pre-built UI components
2. **Blocks** - Official composed component patterns
3. **Registry Directory** - Community-maintained component collections
4. **Examples** - Implementation patterns and demos
5. **MCP Search** - AI-assisted discovery across all registries

Only create custom components when no suitable solution exists in official or community sources.

```typescript
// ✅ Use Shadcn components first
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

// ✅ Extend Shadcn when needed
const CustomButton = ({ variant = "default", ...props }) => (
  <Button variant={variant} className="custom-styling" {...props} />
)
```

### Component Discovery Workflow

Follow this discovery process in order before creating custom components:

1. **Official shadcn/ui Components** - Check https://ui.shadcn.com/docs/components
2. **shadcn/ui Blocks** - Browse pre-composed patterns at https://ui.shadcn.com/blocks
3. **Registry Directory** - Search community registries at https://ui.shadcn.com/docs/directory
4. **MCP-Assisted Search** - Ask Claude to search available components via MCP
5. **Custom Components** - Only create if no suitable solution exists

```bash
# Install official components
npx shadcn@latest add button

# Install from community registry
npx shadcn@latest add [component] -r [registry-url]

# List available components
npx shadcn@latest list
```

**MCP Integration**: Your project has shadcn MCP server configured (`.mcp.json`), enabling AI-assisted component discovery. Ask Claude: "What shadcn components are available for [use case]?" to search across registries.

### Component Organization
```
components/
├── ui/              # Official shadcn components
├── blocks/          # Official shadcn blocks
├── registry/        # Community registry components
├── custom/          # Custom components (when no suitable alternative exists)
└── layout/          # Layout-specific components
```

### Icon Library Guidelines

Support both icon libraries based on project needs, but maintain consistency within features:

**Primary: lucide-react** (Official shadcn/ui recommendation)
- 1000+ icons, tree-shakeable, full TypeScript support
- Default for all shadcn/ui components and examples
- Best for: General UI, matching shadcn examples, maximum compatibility

**Alternative: @heroicons/react** (Tailwind Labs)
- 24x24 (default) and 20x20 (mini) variants in outline and solid styles
- Designed specifically for Tailwind CSS projects
- Best for: Tailwind-first projects, consistent sizing requirements

```typescript
// lucide-react (Primary)
import { ChevronRight, Settings, User } from 'lucide-react'

<ChevronRight className="h-4 w-4" />
<Settings className="h-5 w-5 text-muted-foreground" />

// @heroicons/react (Alternative)
import { ChevronRightIcon, Cog6ToothIcon, UserIcon } from '@heroicons/react/24/outline'
import { UserIcon as UserIconSolid } from '@heroicons/react/24/solid'

<ChevronRightIcon className="h-4 w-4" />
<Cog6ToothIcon className="h-5 w-5 text-muted-foreground" />
```

**Best Practices:**
- Maintain consistency within each feature (don't mix libraries in same component/feature)
- Use lucide-react for shadcn component customizations
- Both libraries are tree-shakeable - only imports what you use
- Follow accessibility patterns: use `aria-label` or `aria-hidden` appropriately

## State Management Strategy

Use the right tool for the right job:

- **Server State**: TanStack Query for API data and caching
- **URL State**: nuqs for shareable, bookmarkable state
- **Local State**: useState/useReducer for component-specific state
- **Global State**: Zustand stores only for truly global client state

```typescript
// Server state
const { data, isLoading } = useQuery({
  queryKey: ['products'],
  queryFn: api.getProducts
})

// URL state
const [search, setSearch] = useQueryState('search')

// Local state
const [isOpen, setIsOpen] = useState(false)

// Global state (minimal usage)
const theme = useUIStore(state => state.theme)
```

## Feature Module Structure

```
features/${feature}/
├── api/           # Feature-specific API clients
├── components/    # Feature UI components
├── hooks/         # Feature-specific hooks
├── stores/        # Feature stores (only if needed)
├── types/         # Feature types
└── utils/         # Feature utilities
```

## Code Style and Structure

- Write concise, technical TypeScript code with accurate examples
- Keep it simple as much as possible
- Keep 1 component per file for better code splitting
- Use functional and declarative programming patterns; avoid classes
- Prefer iteration and modularization over code duplication
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError)
- Structure files: exported component, subcomponents, helpers, static content, types
- Separate concerns: containers, components, hooks, utils, types, etc.
- Each page needs to be a server component to have custom metadata for SEO
- Ensure each page has comprehensive metadata for SEO. Because this is a platform behind a login, ensure the metadata are appropriate for the page with no user specific information.
- Keep most files server side components and extract interactive parts into client component files.

## Naming Conventions

- Use lowercase with dashes for directories and files (e.g., components/auth-wizard)
- Favor named exports for components

## TypeScript Usage

- Use TypeScript for all code; prefer interfaces over types
- Avoid enums; use maps instead
- Use functional components with TypeScript interfaces

## Import Patterns

Use proper import paths:
```typescript
import { someUtil } from '@/utils/some-util'
import { FeatureComponent } from '@/features/feature-name'
import { Button } from '@/components/ui/button'
import { apiClient } from '@/api/clients'
```

## Animation and Motion

- Use Framer Motion as the primary animation library for React components
- Implement smooth page transitions, micro-interactions, and component animations
- Follow animation best practices:
  - Use initial, animate, and exit props for enter/exit animations
  - Implement layoutId for shared element transitions
  - Use whileHover, whileTap, and whileFocus for interactive feedback
  - Prefer transform properties (scale, rotate, translate) over layout-affecting properties
  - Use AnimatePresence for exit animations and conditional rendering
  - Implement stagger animations for lists using staggerChildren
- For Lottie animations, use LottieFiles.com, IconScout, or Lordicon free resources
- For Rive animations, use rive.app community files with @rive-app/react
- Animation performance guidelines:
  - Use will-change: transform sparingly and remove after animation
  - Prefer GPU-accelerated properties (transform, opacity)
  - Use reduce-motion media query for accessibility
  - Implement useReducedMotion hook from Framer Motion

## Performance Optimization

- Wrap client components in Suspense with fallback
- Use dynamic loading for non-critical components
- Optimize images: use WebP format, include size data, implement lazy loading
- Use TanStack Query for server state caching and background updates
- Lazy load animation libraries and files
- Preload critical Lottie/Rive files
- Ensure animations don't negatively impact Core Web Vitals

## Syntax and Formatting

- Use the "function" keyword for pure functions
- Avoid unnecessary curly braces in conditionals; use concise syntax for simple statements
- Use declarative JSX
- You must not use placeholder text when auto completing code. Complete the code yourself

## Error Prevention

Actively prevent:
1. Creating custom components when Shadcn or community registry alternatives exist
2. Skipping component discovery process (official → blocks → directory → MCP → custom)
3. Mixing icon libraries within the same feature or component
4. Cross-feature dependencies
5. Circular imports
6. Inappropriate shared code
7. Using client state for server data

## Key Conventions

- Use Shadcn UI components and blocks as the foundation
- Leverage Registry Directory for community components
- Utilize MCP integration for AI-assisted component discovery
- Use lucide-react as primary icon library (or heroicons as alternative)
- Use 'nuqs' for URL search parameter state management
- Use TanStack Query for all server state and API data
- Optimize Web Vitals (LCP, CLS, FID)
- Follow Next.js docs for Data Fetching, Rendering, and Routing
- Prioritize meaningful animations that enhance UX rather than decorative effects

## Development Workflow

1. **Check Shadcn first** - Official components, blocks, examples
2. **Search Registry Directory** - Community component collections
3. **Use MCP search** - Ask Claude to search available components
4. **Choose appropriate state management** - Server/URL/Local/Global
5. **Select icon library** - lucide-react (primary) or heroicons (alternative)
6. **Follow import rules** - Maintain module boundaries
7. **Keep features isolated** - Avoid cross-dependencies
8. **Optimize for performance** - Lazy loading, caching, animations

## Validation Checklist

### Before Creating Components
1. Official shadcn/ui components checked
2. shadcn/ui blocks gallery reviewed
3. Registry Directory searched for community solutions
4. MCP search performed (ask Claude to search registries)
5. Custom component justified if none of above suffice

### Before Generating Code
1. Shadcn components utilized where possible (official or community)
2. Correct directory placement within `src`
3. Proper import patterns following module rules
4. Feature isolation maintained
5. Appropriate state management approach (Server/URL/Local/Global)
6. Icon library consistency (lucide-react or heroicons, not mixed)
7. Type safety implemented with TypeScript and Zod schemas
8. Large datasets use TanStack Virtual for performance
9. Forms use React Hook Form + Zod validation pattern
10. Code passes Biome linting and formatting
11. No unused code/dependencies (run Knip periodically)
12. Performance considerations addressed
13. Accessibility patterns implemented (ARIA labels, keyboard navigation)

If uncertain about implementation, prioritize existing solutions (Shadcn, TanStack Query, nuqs) over custom builds.
