export default function formatImageUrl(
  id: string,
  width: string,
  height: string
) {
  return `https://static.ui.com/fingerprint/ui/icons/${id}_${width}x${height}.png`;
}
