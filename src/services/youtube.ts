
/**
 * Represents a YouTube video.
 */
export interface YouTubeVideo {
  /**
   * The ID of the YouTube video.
   */
  videoId: string;
  /**
   * The title of the YouTube video.
   */
  title: string;
  /**
   * The description of the YouTube video.
   */
  description: string;
  /**
   * The URL of the YouTube video thumbnail.
   */
  thumbnailUrl: string;
}

/**
 * Asynchronously retrieves the latest YouTube video from a channel.
 *
 * @param channelId The ID of the YouTube channel.
 * @returns A promise that resolves to a YouTubeVideo object containing video details.
 */
export async function getLatestYouTubeVideo(channelId: string): Promise<YouTubeVideo> {
  // TODO: Implement this by calling the YouTube API.

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  // Placeholder data - Replace with actual API call logic
  const randomId = Math.random().toString(36).substring(7); // Generate a somewhat unique ID for placeholder
  const placeholderVideo: YouTubeVideo = {
    videoId: randomId,
    title: `Sunday Service - ${new Date().toLocaleDateString()}`,
    description: 'Watch our latest Sunday service live from the Solution Centre! Join us for worship and the Word.',
    // Use picsum photos for placeholder thumbnail
    thumbnailUrl: `https://picsum.photos/480/270?random=${randomId}`,
  };

  return placeholderVideo;
}
