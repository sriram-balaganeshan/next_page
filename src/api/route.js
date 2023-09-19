
export async function getMeta(slug) {
  const res = await fetch(`https://kb.safelearners.co.in/api/kbworld/viewPostDetails/650415db9c200728ecb5794f`, { cache: 'no-store' })

  if (!res.ok) throw new Error('Failed to fetch Data');
  return res.json();
}