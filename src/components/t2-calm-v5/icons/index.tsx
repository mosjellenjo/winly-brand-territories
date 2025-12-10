// Custom SVG icons for T2 Calm - Warm, soft, minimalist Scandinavian style
// All icons use currentColor for flexibility with parent styling

interface IconProps {
  className?: string
  size?: number
}

// Overview icon - Layered cards representing unified view
export function OverviewIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Back card */}
      <rect
        x="6"
        y="3"
        width="14"
        height="10"
        rx="2"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Middle card */}
      <rect
        x="4"
        y="6"
        width="14"
        height="10"
        rx="2"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Front card */}
      <rect
        x="2"
        y="9"
        width="14"
        height="10"
        rx="2"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Lines on front card */}
      <path
        d="M5 13H13M5 16H10"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Transparency icon - Eye with checkmark representing trust
export function TransparencyIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Inner circle */}
      <circle
        cx="12"
        cy="12"
        r="5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      {/* Checkmark */}
      <path
        d="M9 12L11 14L15 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Collaboration icon - Connected nodes representing teamwork
export function CollaborationIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection lines */}
      <path
        d="M12 8V12M12 12L8 16M12 12L16 16"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Top node */}
      <circle cx="12" cy="6" r="3" fill="currentColor" fillOpacity="0.9" />
      {/* Bottom left node */}
      <circle cx="7" cy="17" r="3" fill="currentColor" fillOpacity="0.6" />
      {/* Bottom right node */}
      <circle cx="17" cy="17" r="3" fill="currentColor" fillOpacity="0.6" />
    </svg>
  )
}

// Organization icon - Building/structure
export function OrganizationIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main building */}
      <rect
        x="4"
        y="6"
        width="10"
        height="14"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Windows */}
      <rect x="6" y="9" width="2" height="2" rx="0.5" fill="white" />
      <rect x="10" y="9" width="2" height="2" rx="0.5" fill="white" />
      <rect x="6" y="13" width="2" height="2" rx="0.5" fill="white" />
      <rect x="10" y="13" width="2" height="2" rx="0.5" fill="white" />
      {/* Side building */}
      <rect
        x="14"
        y="10"
        width="6"
        height="10"
        rx="1.5"
        fill="currentColor"
        fillOpacity="0.5"
      />
      <rect x="16" y="13" width="2" height="2" rx="0.5" fill="white" fillOpacity="0.8" />
    </svg>
  )
}

// Contact/Role icon - Person with badge
export function ContactIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body/shoulders */}
      <path
        d="M4 20C4 17 7 15 12 15C17 15 20 17 20 20"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Head */}
      <circle cx="12" cy="9" r="5" fill="currentColor" fillOpacity="0.9" />
      {/* Badge */}
      <circle cx="17" cy="7" r="3" fill="currentColor" fillOpacity="0.6" />
      <path
        d="M16 7H18M17 6V8"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

// Ownership icon - Hierarchical structure
export function OwnershipIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection lines */}
      <path
        d="M12 7V11M12 11L7 15M12 11L17 15"
        stroke="currentColor"
        strokeOpacity="0.4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Top box - parent */}
      <rect x="8" y="3" width="8" height="5" rx="1.5" fill="currentColor" fillOpacity="0.9" />
      {/* Bottom left box - child */}
      <rect x="3" y="14" width="6" height="5" rx="1.5" fill="currentColor" fillOpacity="0.5" />
      {/* Bottom right box - child */}
      <rect x="15" y="14" width="6" height="5" rx="1.5" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

// Tender/Anbud icon - Document with checkmark
export function TenderIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Document */}
      <rect
        x="5"
        y="2"
        width="14"
        height="18"
        rx="2"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M5 6C5 4.89543 5.89543 4 7 4H14L19 9V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V6Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Fold */}
      <path
        d="M14 4V9H19"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Checkmark */}
      <path
        d="M9 13L11 15L15 11"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Search icon - Magnifying glass with filter
export function SearchIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background */}
      <circle
        cx="11"
        cy="11"
        r="8"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Magnifying glass circle */}
      <circle
        cx="11"
        cy="11"
        r="5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeOpacity="0.9"
      />
      {/* Handle */}
      <path
        d="M15 15L19 19"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeOpacity="0.9"
      />
      {/* Filter lines inside */}
      <path
        d="M9 10H13M9 12H12"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeOpacity="0.5"
      />
    </svg>
  )
}

// Export icon - Arrow leaving box
export function ExportIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Box/container */}
      <path
        d="M4 8C4 6.89543 4.89543 6 6 6H10V10H6V18H18V10H14V6H18C19.1046 6 20 6.89543 20 8V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V8Z"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Arrow */}
      <path
        d="M12 3V14M12 3L8 7M12 3L16 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.9"
      />
    </svg>
  )
}

// Sales icon - Target with arrow
export function SalesIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="currentColor"
        fillOpacity="0.15"
      />
      {/* Middle ring */}
      <circle
        cx="12"
        cy="12"
        r="6"
        fill="currentColor"
        fillOpacity="0.3"
      />
      {/* Center */}
      <circle
        cx="12"
        cy="12"
        r="3"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Arrow hitting target */}
      <path
        d="M18 6L13 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M16 6H18V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Marketing icon - Megaphone/broadcast
export function MarketingIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sound waves */}
      <path
        d="M18 9C19.5 10 19.5 14 18 15"
        stroke="currentColor"
        strokeOpacity="0.3"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 7C22.5 9 22.5 15 20 17"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Megaphone body */}
      <path
        d="M4 9H7L15 5V19L7 15H4C3.44772 15 3 14.5523 3 14V10C3 9.44772 3.44772 9 4 9Z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Handle */}
      <rect x="6" y="15" width="3" height="4" rx="1" fill="currentColor" fillOpacity="0.5" />
    </svg>
  )
}

// Consultant icon - Briefcase with person
export function ConsultantIcon({ className = '', size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Briefcase */}
      <rect
        x="3"
        y="9"
        width="18"
        height="11"
        rx="2"
        fill="currentColor"
        fillOpacity="0.9"
      />
      {/* Handle */}
      <path
        d="M8 9V7C8 5.89543 8.89543 5 10 5H14C15.1046 5 16 5.89543 16 7V9"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="2"
      />
      {/* Clasp */}
      <rect x="10" y="12" width="4" height="3" rx="1" fill="white" fillOpacity="0.8" />
      {/* Person silhouette in briefcase */}
      <circle cx="12" cy="14" r="1.5" fill="white" fillOpacity="0.5" />
    </svg>
  )
}
