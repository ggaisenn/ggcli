import fs from 'fs/promises';
import path from 'path';

// Standard macOS app directories
const APP_DIRS = [
  '/Applications',
  '/System/Applications',
  '/Applications/Utilities',
  path.join(process.env.HOME, 'Applications'),
];

/**
 * Find .app bundle by display name (case-insensitive)
 * @param {string} appName - e.g., "Slack", "Chrome", "Visual Studio Code"
 * @returns {string|null} Full path to .app bundle or null
 */
export async function findMacApp(appName) {
  const searchName = appName.toLowerCase();

  for (const dir of APP_DIRS) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory() && entry.name.endsWith('.app')) {
          const displayName = entry.name.replace(/\.app$/, '');
          if (displayName.toLowerCase() === searchName) {
            return path.join(dir, entry.name);
          }
        }
      }
    } catch {
      // Directory doesn't exist, skip
    }
  }

  // Fallback: try mdfind (Spotlight) for apps not in standard locations
  // Requires child_process import
  try {
    const { execSync } = await import('child_process');
    const result = execSync(
      `mdfind "kMDItemContentType == 'com.apple.application-bundle' && kMDItemDisplayName == '${appName}'"`,
      { encoding: 'utf-8', timeout: 5000 }
    ).trim();
    if (result) return result.split('\n')[0];
  } catch {
    // mdfind failed or no results
  }

  return null;
}