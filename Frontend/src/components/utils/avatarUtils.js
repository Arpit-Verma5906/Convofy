const avatarColors = [
  "#8B5CF6", 
  "#7C3AED",
  "#6D28D9",
  "#A855F7",

  "#6366F1", 
  "#4F46E5",
  "#4338CA",

  "#3B82F6",
  "#2563EB",
  "#1D4ED8",

  "#06B6D4",
  "#0891B2",

  "#14B8A6",
  "#0D9488",
  "#bbe6e1",

  "#10B981",
  "#059669",

  "#84CC16",
  "#65A30D",

  "#F59E0B",
  "#D97706",

  "#F97316",
  "#EA580C",

  "#EF4444",
  "#DC2626",

  "#EC4899",
  "#DB2777",

  "#64748B",
  "#475569",

  "#78716C",
  "#57534E"
];

export function getAvatarColours(username) {
    let hash = 0;

    for(let i = 0; i < username.length; ++i) {
        hash = username.charCodeAt(i) + ((hash << 5) - hash)
    }

    return avatarColors[Math.abs(hash) % avatarColors.length]
}